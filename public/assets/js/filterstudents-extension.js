
function compareGraph(){
	var year = $("#exampleFormControlSelect1").val();
	var yearToCompared = $("#exampleFormControlSelect2").val();

	var getDataForGraph = $.ajax({
		url: 'http://localhost/ease_itp_final/getFilterGraph/'+ year + '/'+ yearToCompared,
		method: 'get',
		dataType: 'json'
	});

		getDataForGraph.done(function(data){
			var firstYear = getStudentInfo(data['a']);
			var secondYear = getStudentInfo(data['b']);

			var rankFirstGWA = setDataToRank(firstYear, 'gwa');
			var rankSecondGWA = setDataToRank(secondYear, 'gwa');

			var rankFirstInterpersonal = setDataToRank(firstYear, 'interpersonal');
			var rankSecondInterpersonal = setDataToRank(secondYear, 'interpersonal');

			var rankFirstIntrapersonal = setDataToRank(firstYear, 'intrapersonal');
			var rankSecondIntrapersonal = setDataToRank(secondYear, 'intrapersonal');

			var rankFirstStress = setDataToRank(firstYear, 'stress');
			var rankSecondStress = setDataToRank(secondYear, 'stress');

			var rankFirstAdapt = setDataToRank(firstYear, 'adapt');
			var rankSecondAdapt = setDataToRank(secondYear, 'adapt');

			var rankFirstMood = setDataToRank(firstYear, 'mood');
			var rankSecondMood = setDataToRank(secondYear, 'mood');

			var correlatedInterpersonal = {
					first: getCorrelationResult(rankFirstGWA, rankFirstInterpersonal),
					second: getCorrelationResult(rankSecondGWA, rankSecondInterpersonal)
				};
			var correlatedIntrapersonal = {
					first: getCorrelationResult(rankFirstGWA, rankFirstIntrapersonal),
					second: getCorrelationResult(rankSecondGWA, rankSecondIntrapersonal)
				};
			var correlatedStress = {
					first: getCorrelationResult(rankFirstGWA, rankFirstStress),
					second: getCorrelationResult(rankSecondGWA, rankSecondStress),
				};
			var correlatedAdapt = {
					first: getCorrelationResult(rankFirstGWA, rankFirstAdapt),
					second: getCorrelationResult(rankSecondGWA, rankSecondAdapt)
				};
			var correlatedMood = {
					first: getCorrelationResult(rankFirstGWA, rankFirstMood),
					second: getCorrelationResult(rankSecondGWA, rankSecondAdapt)
				};

			var graphIntraPersonal = drawGraphScatter('intrapersonal', firstYear, secondYear);
			var graphInterPersonal = drawGraphScatter('interpersonal', firstYear, secondYear);
			var graphStress = drawGraphScatter('stress', firstYear, secondYear);
			var graphAdapt = drawGraphScatter('adaptability', firstYear, secondYear);
			var graphMood = drawGraphScatter('mood', firstYear, secondYear);

			var graphIntraPersonalBar = drawGraphBar('intrapersonal', firstYear, secondYear);
			var graphInterPersonalBar = drawGraphBar('interpersonal', firstYear, secondYear);
			var graphStressBar = drawGraphBar('stress', firstYear, secondYear);
			var graphAdaptabilityBar = drawGraphBar('adaptability', firstYear, secondYear);
			var graphMoodBar = drawGraphBar('mood', firstYear, secondYear);
			
		});

		getDataForGraph.fail(function(data){

		});
}

function getStudentInfo(info){
	var studentInfo = [];
	for(x=0; x<info.length; x++){
		var gwaAverage = 0;
		if(info[x+1] != null &&info[x]['student_id'] == info[x+1]['student_id']){
			gwaAverage += (info[x]['gwa'] + info[x+1]['gwa']) / 2;
			studentInfo.push({
				studentId : info[x]['student_id'],
				interpersonal : info[x]['interpersonal'],
				intrapersonal : info[x]['intrapersonal'],
				stress : info[x]['stress'],
				adaptability : info[x]['adapt'],
				mood : info[x]['mood'],
				gwa : gwaAverage
			});
			x += 1;
		}
	}	
	return studentInfo;
}

function setDataToRank(studentData, keyData){
	var dataSet = [];
	$.each(studentData, function(key, values){
		dataSet.push(values[keyData]);
	});

	var copyDataSet = dataSet.slice();
	var sortedData = preSorted(dataSet);

	return getRanking(sortedData, copyDataSet);
}	

function preSorted(dataSet){
	
	 dataSet.sort(function(a, b){return b-a});
	 return dataSet;
}

function getRanking(orig,copy){
    var d, i, n;
        n = orig.length;

        d = new Array(n);
        for (i = 0; i < n; i++) {
            var rank, first, last;
            first = orig.indexOf(orig[i]);
            last = orig.lastIndexOf(orig[i]);
            if (first === last) {
                rank = first;
            } else {
                rank = (first + last) / 2;
            }
            d[i] = rank + 1;
        }

        for(x = 0 ;x<orig.length; x++){
            for(y = 0 ; y<copy.length; y++){
                if(copy[y]== orig[x]){
                    copy[y] = d[x];
                }
            }
        }
        return copy;
}


function getCorrelationResult(gwa, eq){
	var result = [];
	for(x=0; x<gwa.length; x++){
		result[x] = Math.pow(gwa[x] - eq[x], 2);
	}

	var sumOfD2 = result.reduce(function(a, b) { return a + b; }, 0);
	var numerator = sumOfD2*6;
	var nCubed = Math.pow(gwa.length, 3);
	var denominator = nCubed-gwa.length;
	var correlation = 1 - (numerator/denominator);
	
	return correlation;
}

function drawGraphScatter(key, firstYear, secondYear){

	
	var xFirstData = [];
	var xSecondData = [];


	for(x=0; x<firstYear.length; x++){
		xFirstData.push({
			x: firstYear[x]['gwa'],
			y: firstYear[x][key]
		});
	}

	for(x=0; x<secondYear.length; x++){
		xSecondData.push({
			x: secondYear[x]['gwa'],
			y: secondYear[x][key]
		});
	}

	var options = {
       title: {
            display: true,
            text: 'Intrapersonal and GWA Scatterplot',
            fontSize: 20,
        },
        scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true
              },
                scaleLabel: {
                  display: true,
                  labelString: 'General Weighted Average'
                            },
                scaleBeginAtZero : true,
                gridLines:{
               display:false, 
                lineWidth:0,
                color: "rgba(0,0,0,0.3)" 
              },
                type: 'linear',
                position: 'bottom',
            }],
            yAxes: [{
                ticks: {
                max: 200,
                beginAtZero: true
              },
                scaleLabel: {
                  display: true,
                  labelString: 'Intrapersonal'
                            },
                 gridLines:{display:false, lineWidth:0,color: "rgba(0,0,0,0.3)" }
            }]
        }
    }

var intraData = { 
      labels:["GWA","EQ"],

        datasets: [{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(0,0,0,1)',
            borderColor:'rgba(0,0,0,1)',
            BackgroundColor:'rgba(0,0,0,1)',

            label: $("#exampleFormControlSelect1").val(),
            data: xFirstData
        },{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(255,255,255,1)',
            borderColor:'rgba(0,0,0,1)',
            BackgroundColor:'rgba(0,0,0,1)',

            label: $("#exampleFormControlSelect2").val(),
            data: xSecondData
        }]
    };

$("#"+key+"Container").empty();
$("#"+key+"Container").append('<canvas id="'+key+'-Chart"></canvas>');
var ctx = document.getElementById(key+"-Chart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: intraData,
    options: options

});

}

function drawGraphBar(key, firstyear, secondyear){

	var xFirstData = [];
	var xSecondData = [];

	var x = [],sum=0,sum2=0,sum3=0;
    for(let i=0;i<firstyear.length;i++){
        if(firstyear[i]['adaptability']>=50 && firstyear[i]['adaptability']<=84){
            sum =sum +1;
        }else if(firstyear[i]['adaptability']>=85 && firstyear[i]['adaptability']<=114){
            sum2 =sum2 +1;
        }else if(firstyear[i]['adaptability']>=115 && firstyear[i]['adaptability']<=170){
            sum3 =sum3 +1;
        }
    }
    x.push(sum);
    x.push(sum2);
    x.push(sum3);



    var y = [],sum=0,sum2=0,sum3=0;
    for(let i=0;i<firstyear.length;i++){
        if(secondyear[i][key]>=50 && secondyear[i][key]<=84){
            sum =sum +1;
        }else if(secondyear[i][key]>=85 && secondyear[i][key]<=114){
            sum2 =sum2 +1;
        }else if(secondyear[i][key]>=115 && secondyear[i][key]<=170){
            sum3 =sum3 +1;
        }
    }
    y.push(sum);
    y.push(sum2);
    y.push(sum3);

var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: firstyear.length
                }
            }],
            xAxes: [{
            gridLines: {
                offsetGridLines: false
            }
        }]
        }
    }

var interData = { 
      labels:["LOW","AVERAGE","HIGH"],
        datasets: [{
            label: 'Summarized Interpersonal',
            data: x,
             backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Summarized Interpersonal',
            data: y,
             backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    };
$("#"+key+"BarContainer").empty();
$("#"+key+"BarContainer").append('<canvas id="'+key+'-BarChart"></canvas>');
var ctx = document.getElementById(key+"-BarChart").getContext("2d");
var barChart = new Chart(ctx, {
    type: 'bar',
    data: interData,
    options: options

});



}