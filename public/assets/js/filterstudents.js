var correlationResult = null;

$(function(){

		$(".btn-compare-graph").click(function(event){
			compareGraph();
		});		

		$("#exampleFormControlSelect1").change(function(event){
			// var arr = [79, 5, 18, 5, 32, 1, 16, 1, 82, 13];
			// var sorted = arr.slice().sort(function(a,b){return b-a});
			// var ranks = arr.slice().map(function(v){ return sorted.indexOf(v)+1 });	
			$(".hidden-compared-year").removeClass('hide');
			var selectedYear = this.value;
			var options = "";

			$("#exampleFormControlSelect1").map(function(index, element){
				$.each(element, function(key, values){
					if(selectedYear != values.value && values.value != 0){
						options += "<option value='"+values.value+"'>"+"School Year "+values.value+"</option>";
					}
				});
			});
			$("#exampleFormControlSelect2").empty();
			$("#exampleFormControlSelect2").append(options);

			var filteredStudents = $('#filteredStudents'),
            StudentListFilter = $('#StudentListFilter'),
            filteredStudentsDataTable = filteredStudents.DataTable();
			
			$.ajax({
				url: 'http://localhost/ease_itp_final/getFilterGraph/'+ this.value,
				method: 'get',
				dataType: 'json',
				success: function(data){
                    console.log(data);

					var interpersonal = [];
					var intrapersonal = [];
					var stress = [];
					var adaptability = [];
					var mood = [];
					var gwa = [];



					var properEQ = data['a'].reduce(function(result, current) {
				        result[current.student_id] = result[current.student_id] || [];
				        result[current.student_id].push(current);
				        return result;
				    }, {});
                    // console.log(Object.keys(properEQ).length);//length of (data)
				    var dataLen =Object.keys(properEQ).length;
				    console.log("total stud"+dataLen);


                    //get the individual eq and gwa
				    var student_eq = [];
				    var student_gwa = [];
				    $.each(properEQ, function(keys, values){
				    	var gwaTotal = 0;

				  		student_eq.push({
				  			studentId : values[0]['student_id'],
				  			interpersonal : values[0]['interpersonal'],
				  			intrapersonal : values[0]['intrapersonal'],
				  			stress : values[0]['stress'],
				  			adaptability : values[0]['adapt'],
				  			mood : values[0]['mood'],
				  			});

				  		$.each(values, function(key, value){
				  			gwaTotal += value['gwa'];
				  		});

				  		gwaTotal = (gwaTotal/values.length).toFixed(3);

				  		student_gwa.push({
				  			studentId : values[0]['student_id'],
				  			studentGWA : gwaTotal
						});
					});

					
						
				 //    var searchId = 61;

					// for(x =0 ; x<student_eq.length; x++){
					// 	if(student_eq[x]==searchId){
					// 		console.log("stress: "+ student_eq[x]['stress']);
					// 	}	
					// }// stress = [50,20,25,40]

					

//     				var gwa = [];


                        //pushing the individual EQ and GWA
    					$.each(student_eq, function(keys, values){
    						interpersonal.push(values['interpersonal']);
    						intrapersonal.push(values['intrapersonal']);
    						stress.push(values['stress']);
    						adaptability.push(values['adaptability']);
    						mood.push(values['mood']);    						
   						});


   						$.each(student_gwa, function(keys, values){
    						gwa.push(values['studentGWA']);
   						});

                  


// *****************variables to be used on ranking*****************
   						var gwaCopy = gwa.slice(); 
   						var interpersonalCopy = interpersonal.slice();
   						var intrapersonalCopy = intrapersonal.slice();
						var stressCopy = stress.slice();
						var adaptabilityCopy = adaptability.slice();
						var moodCopy = mood.slice();
                      

// *****************variables to be used on graphs*****************
                        var gwaPerfectCopy = gwa.slice(); 
                        var interpersonalPerfectCopy = interpersonal.slice();
                        var intrapersonalPerfectCopy = intrapersonal.slice();
                        var stressPerfectCopy = stress.slice();
                        var adaptabilityPerfectCopy = adaptability.slice();
                        var moodPerfectCopy = mood.slice();

						
// *****************sorted eq and gwa*****************
   						var intersorted = interpersonal.sort(sortData);
						var intrasorted = intrapersonal.sort(sortData);
					 	var stresssorted = stress.sort(sortData);
						var adaptsorted = adaptability.sort(sortData);
                        var moodsorted = mood.sort(sortData)
                        var gwasorted = gwa.sort(sortData);


//Getting the RANK  
//interpersonal Rank
getRanking(interpersonal,interpersonalCopy,intersorted);

//intrapersonal Rank
getRanking(intrapersonal,intrapersonalCopy,intrasorted); 

//stress Rank
getRanking(stress,stressCopy,stresssorted); 

//adapt Rank
getRanking(adaptability,adaptabilityCopy,adaptsorted); 

//mood Rank
getRanking(mood,moodCopy,moodsorted); 

//gwa Rank
getRanking(gwa,gwaCopy,gwasorted); 

//CORRELATION RESULT

correlationResult ={
intrapersonalinterpret: getCorrelationResult(gwaCopy, intrapersonalCopy),
interpersonalinterpret: getCorrelationResult(gwaCopy, interpersonalCopy),
adaptinterpret: getCorrelationResult(gwaCopy, stressCopy),
stressinterpret: getCorrelationResult(gwaCopy, adaptabilityCopy),
moodinterpret: getCorrelationResult(gwaCopy, moodCopy)

}
console.log(correlationResult);




//INTERPRETATION
// $("#spearmanInterpret").empty();
//  if (correlationResult<0){
// 	$("#spearmanInterpret").append('<p>' + correlationResult + ': Negative Relationship' + '  </p> ');	
// }



//********************GRAPHS************************
//********************GRAPHS************************
//********************GRAPHS************************

//*********SCATTER PLOT*********
//INTERPERSONAL~GWA_SCATTERPLOT
    var interGwaData = [];
        for(let i=0;i<interpersonalPerfectCopy.length;i++){
            var obj = {x:interpersonalPerfectCopy[i],y:gwaPerfectCopy[i]};
                interGwaData.push(obj);
        }
    graphInterpersonalScatter(interGwaData);

//INTRAPERSONAL~GWA_SCATTERPLOT
    var intraGwaData = [];
        for(let i=0;i<intrapersonalPerfectCopy.length;i++){
            var obj = {x:intrapersonalPerfectCopy[i],y:gwaPerfectCopy[i]};
             intraGwaData.push(obj);
        }
    graphIntrapersonalScatter(intraGwaData);
   
//STRESS~GWA_SCATTERPLOT
    var stressGwaData = [];
        for(let i=0;i<stressPerfectCopy.length;i++){
            var obj = {x:stressPerfectCopy[i],y:gwaPerfectCopy[i]};
                stressGwaData.push(obj);
        }
    graphStressScatter(stressGwaData);
 
//MOOD~GWA_SCATTERPLOT
    var moodGwaData = [];
        for(let i=0;i<moodPerfectCopy.length;i++){
            var obj = {x:moodPerfectCopy[i],y:gwaPerfectCopy[i]};
             moodGwaData.push(obj);
        }
    graphMoodScatter(moodGwaData);

//ADAPT~GWA_SCATTERPLOT
    var adaptGwaData = [];
        for(let i=0;i<adaptabilityPerfectCopy.length;i++){
            var obj = {x:adaptabilityPerfectCopy[i],y:gwaPerfectCopy[i]};
                adaptGwaData.push(obj);
        }
    graphAdaptabilityScatter(adaptGwaData);

//**********BAR GRAPHS***********

// Interpersonal BarGraph
graphInterpersonalBar(interpersonalPerfectCopy);
//Intrapersonal BarGraph
graphIntrapersonalBar(intrapersonalPerfectCopy);

//Stress BarGraph
graphStressBar(stressPerfectCopy);

//Mood BarGraph
graphMoodBar(moodPerfectCopy);

//Adapt BarGraph
graphAdaptabilityBar(adaptabilityPerfectCopy);
			 } //success
	    }); //ajax
}); //button filter
				
	}); //function ending tag

//***list of functions***

function scatterInterpret(key){
	$("#spearmanInterpret").empty();
	if (correlationResult[key]<0){
		$("#spearmanInterpret").append('<p>' + correlationResult[key] + ': Negative Relationship' + '  </p> ');	
	}else if(correlationResult[key]>=0 && correlationResult[key]<=0.19){
		$("#spearmanInterpret").append('<p>' + correlationResult[key] + ': Very Weak' + '  </p> ');	
	}else if(correlationResult[key]>=0.20 && correlationResult[key]<=0.39){
		$("#spearmanInterpret").append('<p>' + correlationResult[key] + ': Weak' + '  </p> ');	
	}else if(correlationResult[key]>=0.40 && correlationResult[key]<=0.59){
		$("#spearmanInterpret").append('<p>' + correlationResult[key] + ': Moderate' + '  </p> ');	
	}else if(correlationResult[key]>=0.60 && correlationResult[key]<=0.79){
		$("#spearmanInterpret").append('<p>' + correlationResult[key] + ': Strong' + '  </p> ');	
	}else if(correlationResult[key]>=0.80 && correlationResult[key]<=1.0){
		$("#spearmanInterpret").append('<p>' + correlationResult[key] + ': Weak' + '  </p> ');	
	}

	

}

function sortData(a,b){

    return b-a;
                   
}
        
function getRanking(orig,copy,sorted){
    var d, i, n;
        n = orig.length;

        d = new Array(n);
        for (i = 0; i < n; i++) {
            var rank, first, last;
         // Handle tied ranks.
            first = sorted.indexOf(orig[i]);
            last = sorted.lastIndexOf(orig[i]);
            if (first === last) {
                rank = first;
            } else {
                rank = (first + last) / 2;
            }
         // Add 1 because ranks start with 1.
            d[i] = rank + 1;
        }

        for(x = 0 ;x<sorted.length; x++){
            for(y = 0 ; y<copy.length; y++){
                if(copy[y]== sorted[x]){
                    copy[y] = d[x];
                }
            }
        }
        return copy;

}



// function getCorrelationResult(orig,origcopy,gwacopy,datalen){

//         var x = [];
//         for(let i = 0; i < dataLen.length; i++) {
//           x.push(Math.pow(origcopy[i] - gwacopy[i],2));
//         }
//         var sumOfD2 = x.reduce(function(a, b) { return a + b; }, 0);
//         var numerator = sumOfD2*6;
//         var n = datalen;
//         var ncubed = Math.pow(n,3);
//         var denominator = ncubed-n;
//         var correlation = 1-(numerator/denominator);
 
//         return correlation;

// }
      
//*******************below here is all about graphs***********************

//ScatterGraphs
function graphInterpersonalScatter(data){
    var options = {

       title: {
            display: true,
            text: 'Interpersonal and GWA Scatterplot',
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

                beginAtZero: true
              },
                scaleLabel: {
                  display: true,
                  labelString: 'Interpersonal'
                            },

                 gridLines:{display:false, lineWidth:0,color: "rgba(0,0,0,0.3)" }



            }]
        }
    }

var interData = { 
      labels:["INTERPERSONAL","GWA"],

        datasets: [{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(0,0,0,1)',
            borderColor:'rgba(0,0,0,1)',
            BackgroundColor:'rgba(51, 102, 255)',

            label: 'INTERPERSONAL and GWA',
            data: data,
        }
        ]
    };

 $("#interpersonalContainer").empty();
 $("#interpersonalContainer").append('<canvas id="interpersonal-Chart"></canvas>');
var ctx = document.getElementById("interpersonal-Chart").getContext("2d");
	ctx.clearRect(0, 0, ctx.width, ctx.height);
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: interData,
    options: options

});
	
}


function graphIntrapersonalScatter(data){
 

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
      labels:["INTRAPERSONAL","GWA"],

        datasets: [{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(0,0,0,1)',
            borderColor:'rgba(0,0,0,1)',
            BackgroundColor:'rgba(0,0,0,1)',

            label: 'INTRAPERSONAL and GWA',
            data: data,
        }]
    };

 $("#intrapersonalContainer").empty();
 $("#intrapersonalContainer").append('<canvas id="intrapersonal-Chart"></canvas>');
var ctx = document.getElementById("intrapersonal-Chart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: intraData,
    options: options

});
    
}


function graphStressScatter(data){
  
    var options = {

       title: {
            display: true,
            text: 'Stress Management and GWA Scatterplot',
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

                beginAtZero: true
              },
                scaleLabel: {
                  display: true,
                  labelString: 'Stress Management'
                            },

                 gridLines:{display:false, lineWidth:0,color: "rgba(0,0,0,0.3)" }



            }]
        }
    }

var stressData = { 
      labels:["STRESS MANAGEMENT","GWA"],

        datasets: [{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(0,0,0,1)',
            borderColor:'rgba(0,0,0,1)',
            BackgroundColor:'rgba(0,0,0,1)',

            label: 'STRESS MANAGEMENT and GWA',
            data: data,
        },

            ],
        }

  


$("#stressContainer").empty();
$("#stressContainer").append('<canvas id="stress-Chart"></canvas>');
var ctx = document.getElementById("stress-Chart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: stressData,
    options: options

});
    
}


function graphAdaptabilityScatter(data){
    var options = {

       title: {
            display: true,
            text: 'adaptability and GWA Scatterplot',
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

                beginAtZero: true
              },
                scaleLabel: {
                  display: true,
                  labelString: 'Adaptability'
                            },

                 gridLines:{display:false, lineWidth:0,color: "rgba(0,0,0,0.3)" }



            }]
        }
    }

var adaptData = { 
      labels:["ADAPTABILITY","GWA"],

        datasets: [{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(0,0,0,1)',
            borderColor:'rgba(0,0,0,1)',
            BackgroundColor:'rgba(0,0,0,1)',

            label: 'ADAPTABILITY and GWA',
            data: data,
        }]
    };

$("#adaptabilityContainer").empty();
$("#adaptabilityContainer").append('<canvas id="adaptability-Chart"></canvas>');
var ctx = document.getElementById("adaptability-Chart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: adaptData,
    options: options

});     
    
}


function graphMoodScatter(data){

    var options = {

       title: {
            display: true,
            text: 'General Mood and GWA Scatterplot',
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

                beginAtZero: true
              },
                scaleLabel: {
                  display: true,
                  labelString: 'Mood Management'
                            },

                 gridLines:{display:false, lineWidth:0,color: "rgba(0,0,0,0.3)" }



            }]
        }

    }

var moodData = { 
      labels:["GENERAL MOOD","GWA"],

        datasets: [{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(0,0,0,1)',
            borderColor:'rgba(0,0,0,1)',
            BackgroundColor:'rgba(0,0,0,1)',

            label: 'GENERAL MOOD and GWA',
            data: data,
        }]
    };

$("#moodContainer").empty();
$("#moodContainer").append('<canvas id="mood-Chart"></canvas>');
var ctx = document.getElementById("mood-Chart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: moodData,
    options: options

});
    
}

// **********BAR GRAPHS***********
function graphInterpersonalBar(data){

   var x = [],sum=0,sum2=0,sum3=0;
    for(let i=0;i<data.length;i++){
        if(data[i]>=50 && data[i]<=84){
            sum =sum +1;
        }else if(data[i]>=85 && data[i]<=114){
            sum2 =sum2 +1;
        }else if(data[i]>=115 && data[i]<=170){
            sum3 =sum3 +1;
        }
    }x.push(sum);x.push(sum2);x.push(sum3);

var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: data.length
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
        }]
    };
$("#interpersonalBarContainer").empty();
$("#interpersonalBarContainer").append('<canvas id="interpersonal-BarChart"></canvas>');
var ctx = document.getElementById("interpersonal-BarChart").getContext("2d");
var barChart = new Chart(ctx, {
    type: 'bar',
    data: interData,
    options: options

});

}

function graphIntrapersonalBar(data){

var x = [],sum=0,sum2=0,sum3=0;
    for(let i=0;i<data.length;i++){
        if(data[i]>=50 && data[i]<=84){
            sum =sum +1;
        }else if(data[i]>=85 && data[i]<=114){
            sum2 =sum2 +1;
        }else if(data[i]>=115 && data[i]<=170){
            sum3 =sum3 +1;
        }
    }x.push(sum);x.push(sum2);x.push(sum3);

var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: data.length
                }
            }],
            xAxes: [{
            gridLines: {
                offsetGridLines: false
            }
        }]
        }
    }

var intraData = { 
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
        }]
    };

$("#intrapersonalBarContainer").empty();
$("#intrapersonalBarContainer").append('<canvas id="intrapersonal-BarChart"></canvas>');
var ctx = document.getElementById("intrapersonal-BarChart").getContext("2d");
var barChart = new Chart(ctx, {
    type: 'bar',
    data: intraData,
    options: options

}); 

}

function graphStressBar(data){

var x = [],sum=0,sum2=0,sum3=0;
    for(let i=0;i<data.length;i++){
        if(data[i]>=50 && data[i]<=84){
            sum =sum +1;
        }else if(data[i]>=85 && data[i]<=114){
            sum2 =sum2 +1;
        }else if(data[i]>=115 && data[i]<=170){
            sum3 =sum3 +1;
        }
    }x.push(sum);x.push(sum2);x.push(sum3);

var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: data.length
                }
            }],
            xAxes: [{
            gridLines: {
                offsetGridLines: false
            }
        }]
        }
    }

var stressData = { 
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
        }]
    };

$("#stressBarContainer").empty();
$("#stressBarContainer").append('<canvas id="stress-BarChart"></canvas>');

var ctx = document.getElementById("stress-BarChart").getContext("2d");
var barChart = new Chart(ctx, {
    type: 'bar',
    data: stressData,
    options: options

});

}

function graphMoodBar(data){

var x = [],sum=0,sum2=0,sum3=0;
    for(let i=0;i<data.length;i++){
        if(data[i]>=50 && data[i]<=84){
            sum =sum +1;
        }else if(data[i]>=85 && data[i]<=114){
            sum2 =sum2 +1;
        }else if(data[i]>=115 && data[i]<=170){
            sum3 =sum3 +1;
        }
    }x.push(sum);x.push(sum2);x.push(sum3);

var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: data.length
                }
            }],
            xAxes: [{
            gridLines: {
                offsetGridLines: false
            }
        }]
        }
    }

var moodData = { 
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
        }]
    };
$("#moodBarContainer").empty();
$("#moodBarContainer").append('<canvas id="mood-BarChart"></canvas>');
var ctx = document.getElementById("mood-BarChart").getContext("2d");
var barChart = new Chart(ctx, {
    type: 'bar',
    data: moodData,
    options: options

});

}


function graphAdaptabilityBar(data){

var x = [],sum=0,sum2=0,sum3=0;
    for(let i=0;i<data.length;i++){
        if(data[i]>=50 && data[i]<=84){
            sum =sum +1;
        }else if(data[i]>=85 && data[i]<=114){
            sum2 =sum2 +1;
        }else if(data[i]>=115 && data[i]<=170){
            sum3 =sum3 +1;
        }
    }x.push(sum);x.push(sum2);x.push(sum3);

var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: data.length
                }
            }],
            xAxes: [{
            gridLines: {
                offsetGridLines: false
            }
        }]
        }
    }

var adaptData = { 
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
        }]
    };

$("#adaptabilityBarContainer").empty();
$("#adaptabilityBarContainer").append('<canvas id="adaptability-BarChart"></canvas>');
var ctx = document.getElementById("adaptability-BarChart").getContext("2d");
var barChart = new Chart(ctx, {
    type: 'bar',
    data: adaptData,
    options: options

});

}






//example ni sa pag combine sa duha ka dataset
 // datasets: [{
 //            pointBorderWidth:1,
 //            pointBorderColor: 'rgba(0,0,0,1)',
 //            pointBackgroundColor: 'rgba(0,0,0,1)',
 //            borderColor:'rgba(0,0,0,1)',
 //            BackgroundColor:'rgba(51, 102, 255)',

 //            label: 'INTERPERSONAL and GWA',
 //            data: data,},
 //            {
 //            pointBorderWidth:1,
 //            pointBorderColor: 'rgba(51, 102, 255)',
 //            pointBackgroundColor: 'rgba(51, 102, 255)',
 //            borderColor:'rgba(51, 102, 255)',
 //            BackgroundColor:'rgba(51, 102, 255)',

 //            label: 'Scatter Dataset',
 //            data: [{
 //                x: 65,
 //                y: 2
 //            }, {
 //                x:90,
 //                y: 1
 //            }, {
 //                x: 55,
 //                y: 3
 //            },
 //            {
 //                x: 108,
 //                y: 4
 //            },
 //            {
 //                x:120,
 //                y: 2
 //            },
 //            {
 //                x:78,
 //                y: 3
 //            },
 //            {
 //                x: 88,
 //                y: 1
 //            }]
        
 //        }]
 //    };