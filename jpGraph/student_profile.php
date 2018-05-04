<?php
require_once ('jpGraph/src/jpgraph.php');
require_once ('jpGraph/src/jpgraph_scatter.php');
require_once ('jpGraph/src/jpgraph_bar.php');
require_once ('jpGraph/src/jpgraph_radar.php');
require_once ('jpgraph/src/jpgraph_line.php');
require('fpdf/fpdf.php');

$command = isset($_GET['year']) ? $_GET['year'] : null;


class PrintInformation{

	private $hostname, $username, $password, $dbname;

	function __construct(){

		$this->hostname = 'localhost';
		$this->username = 'root';
		$this->password = '';
		$this->dbname = 'ease';

	}

	public function connect(){

		$mysqli = new mysqli($this->hostname, $this->username, $this->password, $this->dbname);

		if($mysqli->connect_errno){
			echo "Connection not established";
			return;
		}

		return $mysqli;
	}

	public function getStudentInformation(){
		$student = "select * from students where id= '$_GET[id]'";
		$eq = "select * from eq where student_id = '$_GET[id]'";
		$grades = "select grades.*, schoolyear.year, schoolyear.semester from grades left join schoolyear on schoolyear.id = grades.schoolyear 
				   where student_id = '$_GET[id]' && schoolyear.semester != 'Summer'";

		$studentInfo = $this->connect()->query($student);
		$eqInfo = $this->connect()->query($eq);
		$gradesInfo = $this->connect()->query($grades);

		$eqData = array('intrapersonal', 'interpersonal', 'stress', 'adapt', 'mood');
		$arrayEQ = array();
		$arraySY = array();
		$arrayGWA = array();



		foreach($eqInfo as $eqs){
			for($x = 0 ; $x < 5; $x++ ){
				$arrayEQ[] = $eqs[$eqData[count($arrayEQ)]];	
			}
		}

		foreach ($gradesInfo as $sy) {
			$arraySY[] = $sy['year'].' '.$sy['semester'];
			$arrayGWA[] =  $sy['gwa'];
		}
		foreach($studentInfo as $info){
			$studentInfo = $info;
		}

		
	 	 $this->radioGraph($arrayEQ);
		 $this->areaGraph($arraySY, $arrayGWA);
		 $prediction = $this->getPearsonResult();
	
		 $this->studentPDF($eqData, $arrayEQ, $arraySY, $arrayGWA, $studentInfo, $prediction);
	}

	public function radioGraph($eqData){

		$titles=array('Intrapersonal','Interpersonal','Stress Management','Adaptability','General Mood');
		$data=$eqData;
		 
		$graph = new RadarGraph (760,300);
		 
		$graph->title->Set('Emotional Quotient');
		$graph->title->SetFont(FF_VERDANA,FS_NORMAL,12);
		 
		$graph->SetTitles($titles);
		$graph->SetCenter(0.5,0.55);
		$graph->HideTickMarks();
		// $graph->SetColor('lightgreen@0.7');
		$graph->axis->SetColor('darkgray');
		$graph->grid->SetColor('darkgray');
		$graph->grid->Show();
		 
		$graph->axis->title->SetFont(FF_ARIAL,FS_NORMAL,12);
		$graph->axis->title->SetMargin(5);
		// $graph->SetGridDepth(DEPTH_BACK);
		$graph->SetSize(0.6);
		 
		$plot = new RadarPlot($data);
		$plot->SetColor('red@0.2');
		// $plot->SetLineWeight(1);
		$plot->SetFillColor('red@0.7');
		 
		$plot->mark->SetType(MARK_IMG_SBALL,'red');
		 
		@unlink("student_eqs.png");


		$graph->Add($plot);
		$graph->Stroke("student_eqs.png");

	}

	public function areaGraph($xLabels, $yData){
		$datay = $yData;
		$graph = new Graph(760,300);
		$graph->SetScale('textlin');
		 
		$graph->img->SetMargin(100,100,40,40);
		$graph->yaxis->scale->SetAutoMax(5);
		$graph->xaxis->SetTickLabels($xLabels); 


		$graph->SetShadow();
		 
		$graph->title->Set("General Weighted Average");
		$graph->title->SetFont(FF_FONT1,FS_BOLD);
		 
		$p1 = new LinePlot($datay);
		$p1->SetFillColor("orange");
		$p1->mark->SetType(MARK_FILLEDCIRCLE);
		$p1->mark->SetFillColor("red");
		
		$graph->Add($p1);
		 
		@unlink("student_gwa.png");

		$graph->Stroke("student_gwa.png");
	}


	public function getPearsonResult(){

		$summationGWA = 0;
		$summationTQ = 0;

		$currentEQ = "select total_eq from eq where student_id='$_GET[id]'";
		$currentEQ = $this->connect()->query($currentEQ)->fetch_object()->total_eq;


		$studentsEqs = "select total_eq from eq";

		$studentResults = $this->connect()->query($studentsEqs);

		$arrayStudentsTQ = array();
		$arrayTQAverage = 0;
		
		foreach($studentResults as $value)
		{
			$arrayStudentsTQ[] = $value['total_eq'];
			$arrayTQAverage += $value['total_eq'];
		}

		$summationTQ = 0;
		$arrayTQAverage = $arrayTQAverage / count($arrayStudentsTQ);


		$studentsGWAs = "select grades.*, schoolyear.* from grades left join schoolyear on schoolyear.id = grades.schoolyear where schoolyear.semester != 'Summer' order by grades.schoolyear asc";

		$studentResultsGWAs = $this->connect()->query($studentsGWAs);
		$arrayGWAs = array();
		$arrayGWAsAvg = array();
		$arrayGWAsAverage = 0;
		$arrayEQGWA = array();
			


		foreach ($studentResultsGWAs as  $value) {
			$arrayGWAs[($value['student_id'] - 1)][] = $value['gwa'];
		}
		

		for($x = 0; $x < count($arrayGWAs); $x++){
			$arrayGWAsAvg[] = (($arrayGWAs[$x][(count($arrayGWAs[$x]) - 2)]) + ($arrayGWAs[$x][(count($arrayGWAs[$x]) - 1)]) )/2; 
			$arrayGWAsAverage += $arrayGWAsAvg[$x];
		}

		
		$arrayGWAsAverage = $arrayGWAsAverage / count($arrayGWAsAvg);

		$numerator = 0;
		$denomenator = 0;
		$pearsonTQGWA = 0;
	

		for($x = 0; $x < count($arrayStudentsTQ); $x++){
			$arrayEQGWA[] = ($arrayStudentsTQ[$x] - $arrayTQAverage) * ($arrayGWAsAvg[$x] - $arrayGWAsAverage);
			$numerator += $arrayEQGWA[$x];
		}


		for($x = 0; $x < count($arrayStudentsTQ); $x++){
			$arrayStudentsTQ[$x] = pow(($arrayStudentsTQ[$x] - $arrayTQAverage), 2);
			$summationTQ += $arrayStudentsTQ[$x];
		}

		for($x = 0; $x < count($arrayGWAsAvg); $x++){
			$arrayGWAsAvg[$x] = pow(($arrayGWAsAvg[$x] - $arrayGWAsAverage), 2);
			$summationGWA += $arrayGWAsAvg[$x];
		}

		$denomenator = sqrt($summationTQ * $summationGWA);
		$pearsonTQGWA = $numerator / $denomenator;
		// var_dump($denomenator, $numerator, $pearsonTQGWA);

		//PASS PEARSON RESULT FOR PREDICTION

		$sy = 0; 
		$sx = 0;
		$bValue = 0;
		$aValue = 0;
		$predict = 0;
		$sx = sqrt($summationTQ / (count($arrayGWAsAvg)-1));
		$sy = sqrt($summationGWA / (count($arrayGWAsAvg)-1));
	
		// var_dump($sx, $sy);
		$bValue = $pearsonTQGWA * ($sy / $sx);
		$aValue = $arrayGWAsAverage - ($bValue*$arrayTQAverage);

		$predict = $aValue + ($bValue* $currentEQ);
	
		return array($bValue, $aValue, $predict);


	}

	public function studentPDF($eqsInfo, $eqsData, $gwaInfo, $gwaData, $studentInfo, $prediction){
		$pdf = new FPDF();
		$pdf->AddPage();
		$pdf->SetFont('Arial','',10);
		$pdf->Cell(40,10,
		$pdf->Write(5,'Name : '. $studentInfo['firstname'].' '.$studentInfo['lastname'].'                                  Course: '.$studentInfo['coursename']));
		$pdf->Ln(15);

		$pdf->Cell(40,10, $pdf->Image('student_eqs.png', 5, null));
		$pdf->Ln(5);
		

		$pdf->SetFont('Arial','B',12);
		$pdf->Write(5,'Emotional Quotient Test Result:');
		$pdf->Ln(10);

		for($x = 0; $x < count($eqsInfo); $x++){
			switch($eqsInfo[$x]){
				case 'intrapersonal' :
					$titleGraph = 'Intrapersonal';
					break;
				case 'interpersonal' :
					$titleGraph = 'Interpersonal';
					break;
				case 'stress' :
					$titleGraph = 'Stress Management';
					break;
				case 'adapt' :
					$titleGraph = 'Adaptability';
					break;
				case 'mood' :
					$titleGraph = 'General Mood'; 
					break;
				default :

					break;

			}


			$pdf->SetFont('Arial','',10);
					$pdf->Write(5, $titleGraph.' : '.$eqsData[$x]);
					$pdf->Ln(5);
		}

		$pdf->Ln(15);


		$pdf->Cell(40,10, $pdf->Image('student_gwa.png', 5, null));
		$pdf->Ln(5);
		
		$pdf->SetFont('Arial','B',12);

		$pdf->Write(5,'GWA Per Semester:');
		$pdf->Ln(10);

		for($x = 0; $x < count($gwaInfo); $x++){
	
			$pdf->SetFont('Arial','',10);
					$pdf->Write(5, $gwaInfo[$x].' : '.$gwaData[$x]);
					$pdf->Ln(5);
		}

		$pdf->SetFont('Arial', 'B', 12);
		$pdf->Write(5,'Prediction Result');
		$pdf->Ln(5);

		$pdf->SetFont('Arial', '', 10);
		$pdf->Write(5,'Interpretation:
					   Using Linear Regression, we came up with a predictive model 
					   GWA = '. number_format($prediction[1], 5) .'+('. number_format($prediction[0], 5) .' * Total EQ) 

					   Based on his/her current GWA and Total EQ, his/her predicted GWA for next school year is:'.number_format($prediction[2], 5));

		 $pdf->Output('D', " Student Information.pdf");

	}


}

$print = new PrintInformation();
$print->getStudentInformation();

?>

