<?php
require_once ('jpGraph/src/jpgraph.php');
require_once ('jpGraph/src/jpgraph_scatter.php');
require_once ('jpGraph/src/jpgraph_bar.php');
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

	public function printData(){
		$schoolyear = "select id from schoolyear where year = '$_GET[q1]'";
		$schoolyearData = $this->connect()->query($schoolyear);
		$arrayData = array();

		foreach ($schoolyearData as $value) {
			$arrayData[] = $value['id'];
		}

		$studentData = "select grades.student_id, avg(grades.gwa) as totalGWA, 
						schoolyear.*, eq.* 
						from grades
						left join schoolyear on schoolyear.id = grades.schoolyear
						left join eq on eq.student_id = grades.student_id
						where grades.schoolyear between '$arrayData[0]' and '$arrayData[1]' 
						group by grades.student_id";

		$data = $this->connect()->query($studentData);
		
		$eq = array('intrapersonal', 'interpersonal', 'stress', 'adapt', 'mood');

		$xxAverage = $this->pearsonEquation($data, 'totalGWA');
		$yyAverage = array();
		$xxAverage_yyAverage = array();
		$yyAverageSquared = array();

		for($x = 0; $x < count($eq); $x++){
			$yyAverage[] = $this->pearsonEquation($data, $eq[$x]);
		}

		for($x = 0; $x< count($eq); $x++){
			$xxAverage_yyAverage[$eq[$x]] = $this->pearsonEquation2($xxAverage['totalGWA'], 
											$yyAverage[$x][$eq[$x]]);
		}

		$xxAverageSquared = $this->pearsonEquation3($xxAverage['totalGWA']);

		for($x = 0; $x< count($eq); $x++){
			$yyAverageSquared[$eq[$x]] = $this->pearsonEquation3($yyAverage[$x][$eq[$x]]);
		}


		for($x = 0; $x<count($eq); $x++){
			$this->scatterPlotGraph($data, $eq[$x]);
			$this->barPlotGraph($data, $eq[$x]);
		}
		
		$interpretationArray = array();

		for($x = 0 ; $x < count($eq); $x++){
			$interpretationArray[$eq[$x]] = $this->getPearsonResult(
				$xxAverage_yyAverage[$eq[$x]],
				array(
					'x' => $xxAverageSquared,
					'y' => $yyAverageSquared[$eq[$x]]
				)
			);
		}
	
		$this->getPDF($eq, $interpretationArray, $data->num_rows);

	}

	public function compareData(){
		$eq = array('intrapersonal', 'interpersonal', 'stress', 'adapt', 'mood');
		$comparedSY = array($_GET['q1'], $_GET['q2']);
		$data = array();
		$xxAverage = array();
		$yyAverage = array();
		$xxAverage_yyAverage = array();
		$xxAverageSquared = array();
		$yyAverageSquared = array();


		for($x = 0; $x < count($comparedSY); $x++){
			$schoolyear = "select id from schoolyear where year = '$comparedSY[$x]'";
			$schoolyearData = $this->connect()->query($schoolyear);
			$arrayData = array();

			foreach ($schoolyearData as $value) {
				$arrayData[] = $value['id'];
			}

			$studentData = "select grades.student_id, avg(grades.gwa) as totalGWA, 
							schoolyear.*, eq.* 
							from grades
							left join schoolyear on schoolyear.id = grades.schoolyear
							left join eq on eq.student_id = grades.student_id
							where grades.schoolyear between '$arrayData[0]' and '$arrayData[1]' 
							group by grades.student_id";

			$data[] = $this->connect()->query($studentData);
		}

		foreach($data as $schoolyear){
			$xxAverage[] = $this->pearsonEquation($schoolyear, 'totalGWA');
		}

		
		foreach($data as $schoolyear){
			$average = array();
			for($x = 0; $x < count($eq); $x++){
				$average[] = $this->pearsonEquation($schoolyear, $eq[$x]);
			}
			$yyAverage[] = $average;
		}

		for($x = 0; $x < count($data); $x++){
			$student = $xxAverage[$x]['totalGWA'];
			$eqs = $yyAverage[$x];
			$temp_xxAverage_yyAverage = array();
				for($y = 0; $y < count($eqs); $y++){
					$studentEQ = $eqs[$y][$eq[$y]];
					$temp_xxAverage_yyAverage[$eq[$y]] = $this->pearsonEquation2($student, 
											$studentEQ);
				}

			$xxAverage_yyAverage[] = $temp_xxAverage_yyAverage;
	
		}

		foreach($xxAverage as $student){
			$xxAverageSquared[] = $this->pearsonEquation3($student['totalGWA']);
		}

		foreach($yyAverage as $eqs){
			$temp_yyAverageSquared = array();
			for($x = 0; $x < count($eqs); $x++){
				$studentEQ = $eqs[$x][$eq[$x]];
				$temp_yyAverageSquared[$eq[$x]] = $this->pearsonEquation3($studentEQ);
			}
			$yyAverageSquared[] = $temp_yyAverageSquared;
		}

		$interpretationArray = array();

		for($x = 0; $x < count($data); $x++){
			$temp_interpretionArray = array();
			for($x1 = 0 ; $x1 < count($eq); $x1++){
				$temp_interpretationArray[$eq[$x1]] = $this->getPearsonResult(
					$xxAverage_yyAverage[$x][$eq[$x1]],
					array(
						'x' => $xxAverageSquared[$x],
						'y' => $yyAverageSquared[$x][$eq[$x1]]
					)
				);
			}
			$interpretationArray[] = $temp_interpretationArray;
		}
		


		for($x = 0; $x<count($eq); $x++){
			$this->scatterPlotGraph2($data, $eq[$x]);
			// $this->barPlotGraph2($data, $eq[$x]);
		}

		$this->getPDF($eq, $interpretationArray);

		
	}

	public function pearsonEquation($data, $index){

		$resultData = array();
		$totalEq = 0;

		foreach ($data as $value) {
			$resultData[] = $value[$index];
			$totalEq += $value[$index];
		}

		$totalEq = $totalEq/count($resultData);

		for($x = 0; $x < count($resultData); $x++){
			$resultData[$x] = $resultData[$x] - $totalEq;
		}


		return array( $index => $resultData);
	}

	public function pearsonEquation2($xxAverage, $yyAverage){
		$xyAverage = array();

		for($x = 0; $x < count($xxAverage); $x++){
			$xyAverage[] = $xxAverage[$x] * $yyAverage[$x];
		}

		return $xyAverage;
	}

	public function pearsonEquation3($data){

		$resultData = array();
		
		for($x = 0; $x < count($data); $x++){
			$resultData[] = pow($data[$x], 2);
		}

		return $resultData;

	}

	public function getPearsonResult($numerator, $denominator){
		$getNumerator = 0;
		$getXforDenominator = 0;
		$getYforDenominatory = 0;
		$correlation = 0;
		for($x = 0; $x < count($numerator); $x++){
			$getNumerator += $numerator[$x];
		}

		for($x = 0 ; $x < count($denominator['x']); $x++){
			$xValues = $denominator['x'];
			$getXforDenominator += $xValues[$x];
		}

		for($y = 0 ; $y < count($denominator['y']); $y++){
			$yValues = $denominator['y'];
			$getYforDenominatory += $yValues[$y];
		}
		$finalDenominator = sqrt($getXforDenominator*$getYforDenominatory);
		$correlation = $getNumerator/$finalDenominator;

		return $correlation;

	}

	public function scatterPlotGraph($data, $index){
	
		$arrayGWA = array();
		$arrayEQ = array();

		foreach ($data as  $value) {
			$arrayGWA[] = $value['totalGWA'];
			$arrayEQ[] = $value[$index];
		}

		$titleGraph = "";

		switch($index){
			case 'intrapersonal' :
				$titleGraph = 'Intrapersonal and GWA ScatterPlot';
				break;
			case 'interpersonal' :
				$titleGraph = 'Interpersonal and GWA ScatterPlot';
				break;
			case 'stress' :
				$titleGraph = 'Stress Management and GWA ScatterPlot';
				break;
			case 'adapt' :
				$titleGraph = 'Adaptability and GWA ScatterPlot';
				break;
			case 'mood' :
				$titleGraph = 'General Mood and GWA ScatterPlot'; 
				break;
			default :

				break;

		}


		$graph = new Graph(760,300);
		$graph->SetScale("intlin", 0, 0);
		$graph->xaxis->scale->SetAutoMin(0);
		$graph->yaxis->scale->SetAutoMin(0);
		$graph->yaxis->scale->SetAutoMax(5);

		 
		$graph->img->SetMargin(40,40,40,40);        
		$graph->SetShadow();
		 
		$graph->title->Set($titleGraph);
		$graph->title->SetFont(FF_FONT1,FS_BOLD);
		 
		$sp1 = new ScatterPlot($arrayGWA,$arrayEQ);
		$sp1->mark->SetType(MARK_FILLEDCIRCLE);
		 $sp1->mark->SetFillColor("red");
		$graph->Add($sp1);	

		@unlink($index.".png");

		$graph->Stroke($index.'.png');

	}

	public function scatterPlotGraph2($data, $index){



		$arrayGWA = array();
		$arrayEQ = array();

		foreach($data as $schoolyear){
			$temp_arrayGWA = array();
			$temp_arrayEQ = array();
			foreach($schoolyear as $student){
				$temp_arrayGWA[] = $student['totalGWA'];
				$temp_arrayEQ[] = $student[$index];
			}

			$arrayGWA[] = $temp_arrayGWA;
			$arrayEQ[] = $temp_arrayEQ;
		}

		$titleGraph = "";

		switch($index){
			case 'intrapersonal' :
				$titleGraph = 'Intrapersonal and GWA ScatterPlot';
				break;
			case 'interpersonal' :
				$titleGraph = 'Interpersonal and GWA ScatterPlot';
				break;
			case 'stress' :
				$titleGraph = 'Stress Management and GWA ScatterPlot';
				break;
			case 'adapt' :
				$titleGraph = 'Adaptability and GWA ScatterPlot';
				break;
			case 'mood' :
				$titleGraph = 'General Mood and GWA ScatterPlot'; 
				break;
			default :

				break;

		}


		$graph = new Graph(760,300);
		$graph->SetScale("intlin", 0, 0);
		$graph->xaxis->scale->SetAutoMin(0);
		$graph->yaxis->scale->SetAutoMin(0);
		$graph->yaxis->scale->SetAutoMax(5);

		 
		$graph->img->SetMargin(40,40,40,40);        
		$graph->SetShadow();
		 
		$graph->title->Set($titleGraph);
		$graph->title->SetFont(FF_FONT1,FS_BOLD);
		 
		$sp1 = new ScatterPlot($arrayGWA[0],$arrayEQ[0]);
		$sp1->mark->SetType(MARK_FILLEDCIRCLE);
		$sp1->mark->SetFillColor("red");
		$graph->Add($sp1);	

		$sp2 = new ScatterPlot($arrayGWA[1],$arrayEQ[1]);
		$sp2->mark->SetType(MARK_FILLEDCIRCLE);
		$sp2->mark->SetFillColor("pink");
		$graph->Add($sp2);	

		@unlink($index.".png");

		$graph->Stroke($index.'.png');




	}

	public function barPlotGraph($data, $index){
		$barPlot = array();
		$bar = array();
		foreach ($data as $value) {
			if($value[$index] >= 50 && $value[$index] <= 84){
				$barPlot['low'][]= $value[$index];
			}elseif($value[$index] >= 85 && $value[$index] <= 114){
				$barPlot['average'][] = $value[$index];				
			}elseif($value[$index] >= 115 && $value[$index] <= 170){	
				$barPlot['high'][] = $value[$index];
			}	
		}

		$titleGraph = "";

		switch($index){
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
		 
		// Create the graph. These two calls are always required
		$graph = new Graph(760,300);    
		$graph->SetScale("textlin");
		 
		$graph->SetShadow();
		$graph->img->SetMargin(40,30,20,40);
		$graph->xaxis->SetTickLabels(array('Low', 'Average', 'High')); 
		

		// Create the bar plots
		$arrayPlot = array();
		foreach($barPlot as $value){
			$plotData = 0;
			foreach ($value as $points) {
				$plotData += 1;
			}
			$arrayPlot[] = $plotData;						
		}
		// $b1plot->SetFillColor("orange");
		// $b2plot = new BarPlot($data2y);
		// $b2plot->SetFillColor("blue");
		 
		// Create the grouped bar plot
		$plot = new BarPlot($arrayPlot);

		 // $gbplot = new GroupBarPlot($plot);
		 
		// ...and add it to the graPH
		$graph->Add($plot);
		 
		$graph->title->Set("Summarized ".$titleGraph);
		$graph->xaxis->title->Set('School Year '. $_GET['q1']);
		$graph->yaxis->title->Set("Total Emotional Quotient");
		// $graph->yaxis->scale->SetAutoMax(210);
		 
		 
		// Display the graph
		@unlink($index."Bar".".png");		
		$graph->Stroke($index.'Bar'.".png");
	}



	public function getPDF($data, $correlation, $counting = null){

	
		
		$pdf = new FPDF();
		$pdf->AddPage();
		$pdf->SetFont('Arial','B',16);
		if(count($correlation) == 2){
			$counter = 0;
			foreach($correlation as $correlatedData){
				if($counter == 0){
				for($x = 0; $x < count($data); $x++){
				$relationship = "";
				$strength = "";

				$eq = "";
				$pdf->Cell(40,10, $pdf->Image($data[$x].'.png', 5, null));
				$pdf->Ln(5);

				for($x1 = 0; $x1 < count($correlation); $x1++){
					switch($data[$x]){
						case "interpersonal" :
							$eq = "Interpersonal";

							break;

						case "intrapersonal" :
							$eq = "Intrapersonal";

							break;

						case "stress" :
							$eq = "Stress Management";

							break;

						case "adapt" :
							$eq = "Adaptability";

							break;

						case "mood" :
							$eq = "General Mood";

							break;

						default :

							break;

					}

					if($correlatedData[$data[$x1]] > 0){
						$relationship = "Negative (GWA is decreasing while ".$eq." is also increasing or Vice Versa)";
					}else{
						$relationship = "Positive (GWA is increasing while ".$eq." is also increasing)";	
					}
					$correlationValue = abs($correlatedData[$data[$x1]]);
					if($correlationValue >= 0.00 && $correlationValue <= 0.19){
						$strength = "Very Weak";
					}elseif($correlationValue >= 0.20 && $correlationValue <= 0.39){
						$strength = "Weak";
					}elseif($correlationValue >= 0.40 && $correlationValue <= 0.59){
						$strength = "Moderate";
					}elseif($correlationValue >= 0.60 && $correlationValue <= 0.79){
						$strength = "Strong";
					}elseif($correlationValue >= 0.80 && $correlationValue <= 1){
						$strength = "Very Strong";
					}



					
					
					$pdf->SetFont('Arial','',10);
					$pdf->Write(5,' Interpretation:

									School year : '. $_GET['q1'] .'
									Correlation Coefficient: '.$correlatedData[$data[$x1]].'
									Relationship: '. $relationship .' 
									Strength of Relationship: '. $strength);
					$pdf->Ln(30);
				 }
				}



				$counter++;	
			}
		}

		}else{

			$flag = 0;

			while($flag < count($data)){
				$relationship = "";
				$strength = "";

				$eq = "";

				switch($data[$flag]){
					case "interpersonal" :
						$eq = "Interpersonal";

						break;

					case "intrapersonal" :
						$eq = "Intrapersonal";

						break;

					case "stress" :
						$eq = "Stress Management";

						break;

					case "adapt" :
						$eq = "Adaptability";

						break;

					case "mood" :
						$eq = "General Mood";

						break;

					default :

						break;

				}

				if($correlation[$data[$flag]] > 0){
					$relationship = "Negative (GWA is decreasing while ".$eq." is also increasing or Vice Versa)";
				}else{
					$relationship = "Positive (GWA is increasing while ".$eq." is also increasing)";	
				}
				$correlationValue = abs($correlation[$data[$flag]]);
				if($correlationValue >= 0.00 && $correlationValue <= 0.19){
					$strength = "Very Weak";
				}elseif($correlationValue >= 0.20 && $correlationValue <= 0.39){
					$strength = "Weak";
				}elseif($correlationValue >= 0.40 && $correlationValue <= 0.59){
					$strength = "Moderate";
				}elseif($correlationValue >= 0.60 && $correlationValue <= 0.79){
					$strength = "Strong";
				}elseif($correlationValue >= 0.80 && $correlationValue <= 1){
					$strength = "Very Strong";
				}



				
				$pdf->Cell(40,10, $pdf->Image($data[$flag].'.png', 5, null));
				$pdf->Ln(5);
				$pdf->SetFont('Arial','',10);
				$pdf->Write(5,' Interpretation:

								School year : '. $_GET['q1'] .'
								Correlation Coefficient: '.$correlation[$data[$flag++]].'
								Relationship: '. $relationship .' 
								Strength of Relationship: '. $strength);
				$pdf->Ln(30);

			}

			$bar = 0;	

			do{

				$pdf->Cell(40,10, $pdf->Image($data[$bar++].'Bar.png', 5, null));
				$pdf->Ln(5);
				$pdf->SetFont('Arial','',10);
				$pdf->Write(5,' Interpretation:

								School Year '. $_GET['q1'] .':'. $counting . '
								Legend:
								
								Low: 50-84 
								Average: 85-114 
								High: 115-170');
				$pdf->Ln(30);
				$flag--;
			}while($flag != 0);
		}
		
		 $pdf->Output('D', $_GET['q1']." S.Y Student Information.pdf");
	}


}

$print = new PrintInformation();
if(isset($_GET['q2'])){
	$print->compareData();
}else{
	$print->printData();
}

?>

