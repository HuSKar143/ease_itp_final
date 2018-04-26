function getPrediction(data){
	var yintercept = 1.98800;
	var slope = 0.00308;
	var predict = yintercept+(slope*data);
alert(predict);
	return $("#predictInterpret").append('hELLO');
}