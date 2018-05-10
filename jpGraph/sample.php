<?php // content="text/plain; charset=utf-8"
require_once ('jpGraph/src/jpgraph.php');
require_once ('jpGraph/src/jpgraph_scatter.php');
require_once ('jpGraph/src/jpgraph_bar.php');
require_once ('jpGraph/src/jpgraph_radar.php');
require_once ('jpgraph/src/jpgraph_line.php');
require('fpdf/fpdf.php');

$datay = array(1.23, 1.9, 1.6, 3.1, 3.4, 2.8, 2.1, 1.9);
$graph = new Graph(300,200);
$graph->SetScale('textlin');
 


 
$graph->title->Set("Example of filled line plot");
$graph->title->SetFont(FF_FONT1,FS_BOLD);
 
$p1 = new LinePlot($datay);
$p1->mark->SetType(MARK_UTRIANGLE);
$p1->mark->SetColor('blue');
$p1->mark->SetFillColor('blue');
$graph->Add($p1);
 
$graph->Stroke();



$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);

$pdf->Cell(40,10, $pdf->Image('test-image.png', 5, null));
$pdf->Ln(12);
$pdf->Cell( 0, 15, "Tests", 0, 0, 'L' );
$pdf->Ln(12);
$pdf->Cell(40,10, $pdf->Image('test-image1.png', 5, null));
$pdf->Ln(12);
$pdf->Cell( 0, 15, "Tests", 0, 0, 'L' );
$pdf->Output('I');

?>