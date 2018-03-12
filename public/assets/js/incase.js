function compareDataSet(){
			
			var from = $("#exampleFormControlSelect1").val();
			var to = $("#exampleFormControlSelect2").val();
           	var qwe = $("#exampleFormControlSelect3").val(); 
           	var ewq = $("#exampleFormControlSelect4").val();

			var filteredStudents = $('#filteredStudents'),
            StudentListFilter = $('#StudentListFilter'),
            filteredStudentsDataTable = filteredStudents.DataTable();
			
			$.ajax({
				url: 'http://localhost/ease_itp_final/getFilterGraph/'+ to + '/' + from +'/' + qwe + '/' + ewq,
				method: 'get',
				dataType: 'json',
				success: function(data){
                    console.log(data);

					var interpersonal = [];
					var compareInterpersonal = [];

					var intrapersonal = [];
					var compareIntrapersonal = [];

					var stress = [];
					var compareStress = [];

					var adaptability = [];
					var compareAdaptability = [];

					var mood = [];
					var compareMood = [];

					var gwa = [];
					var compareGwa = [];

					var properEQ = data['a'].reduce(function(result, current) {
				        result[current.student_id] = result[current.student_id] || [];
				        result[current.student_id].push(current);
				        return result;
				    }, {});

					var compareProperEQ =  data['b'].reduce(function(result, current) {
				        result[current.student_id] = result[current.student_id] || [];
				        result[current.student_id].push(current);
				        return result;
				    }, {});

                   // console.log(Object.keys(properEQ).length);//length of (data)
				    var dataLen =Object.keys(properEQ).length;
				    var compareDataLen =Object.keys(compareProperEQ).length;
				    
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

					var compareStudent_eq = [];
				    var compareStudent_gwa = [];
				   
				    $.each(compareProperEQ, function(keys, values){
				    	var gwaTotal = 0;

				  		compareStudent_eq.push({
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

				  		compareStudent_gwa.push({
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

                        //comparepushing the individual EQ and GWA
   						$.each(compareStudent_eq, function(keys, values){
    						compareInterpersonal.push(values['interpersonal']);
    						compareIntrapersonal.push(values['intrapersonal']);
    						compareStress.push(values['stress']);
    						compareAdaptability.push(values['adaptability']);
    						compareMood.push(values['mood']);    						
   						});

   						$.each(compareStudent_gwa, function(keys, values){
    						compareGwa.push(values['studentGWA']);
   						});

                  
   						console.log("stddent_gwa" , gwa);
   						console.log("Cstddent_gwa" , compareGwa);



// *****************variables to be used on ranking*****************
   						var gwaCopy = gwa.slice(); 
   						var interpersonalCopy = interpersonal.slice();
   						var intrapersonalCopy = intrapersonal.slice();
						var stressCopy = stress.slice();
						var adaptabilityCopy = adaptability.slice();
						var moodCopy = mood.slice();
                      	


                      	var compareGwaCopy = compareGwa.slice(); 
   						var compareInterpersonalCopy = compareInterpersonal.slice();
   						var compareIntrapersonalCopy = compareIntrapersonal.slice();
						var compareStressCopy = compareStress.slice();
						var compareAdaptabilityCopy = compareAdaptability.slice();
						var compareMoodCopy = compareMood.slice();

// *****************variables to be used on graphs*****************
                        var gwaPerfectCopy = gwa.slice(); 
                        var interpersonalPerfectCopy = interpersonal.slice();
                        var intrapersonalPerfectCopy = intrapersonal.slice();
                        var stressPerfectCopy = stress.slice();
                        var adaptabilityPerfectCopy = adaptability.slice();
                        var moodPerfectCopy = mood.slice();


                        var compareGwaPerfectCopy = compareGwa.slice(); 
                        var compareInterpersonalPerfectCopy = compareInterpersonal.slice();
                        var compareIntrapersonalPerfectCopy = compareIntrapersonal.slice();
                        var compareStressPerfectCopy = compareStress.slice();
                        var compareAdaptabilityPerfectCopy = compareAdaptability.slice();
                        var compareMoodPerfectCopy = compareMood.slice();
						
// *****************sorted eq and gwa*****************
   						var intersorted = interpersonal.sort(sortData);
						var intrasorted = intrapersonal.sort(sortData);
					 	var stresssorted = stress.sort(sortData);
						var adaptsorted = adaptability.sort(sortData);
                        var moodsorted = mood.sort(sortData)
                        var gwasorted = gwa.sort(sortData);

                        var compareIntersorted = compareInterpersonal.sort(sortData);
						var compareIntrasorted = compareIntrapersonal.sort(sortData);
					 	var compareStresssorted = compareStress.sort(sortData);
						var compareAdaptsorted = compareAdaptability.sort(sortData);
                        var compareMoodsorted = compareMood.sort(sortData)
                        var compareGwasorted = compareGwa.sort(sortData);


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

getRanking(compareInterpersonal,compareInterpersonalCopy,compareIntersorted);


getRanking(compareIntrapersonal,compareIntrapersonalCopy,compareIntrasorted); 

getRanking(compareStress,compareStressCopy,compareStresssorted); 

getRanking(compareAdaptability,compareAdaptabilityCopy,compareAdaptsorted); 

getRanking(compareMood,compareMoodCopy,compareMoodsorted); 

getRanking(compareGwa,compareGwaCopy,compareGwasorted); 




//CORRELATION RESULT
//correlation|| interpersonal~GWA
var correlationResult = getCorrelationResult(interpersonal,interpersonalCopy,gwaCopy,dataLen);
var compareCorrelationResult = getCorrelationResult(compareInterpersonal,compareInterpersonalCopy,compareGwaCopy,compareDataLen);
console.log("correlation (inter+gwa): " +correlationResult);

//correlation|| intrapersonal~GWA
var correlationResult = getCorrelationResult(intrapersonal,intrapersonalCopy,gwaCopy,dataLen);
var compareCorrelationResult = getCorrelationResult(compareIntrapersonal,compareIntrapersonalCopy,compareGwaCopy,compareDataLen);
console.log("correlation (intra+gwa): " +correlationResult);

//correlation|| stress~GWA
var correlationResult = getCorrelationResult(stress,stressCopy,gwaCopy,dataLen);
var compareCorrelationResult = getCorrelationResult(compareStress,compareStressCopy,compareGwaCopy,compareDataLen);
console.log("correlation (stress+gwa): " +correlationResult);

//correlation|| adapt~GWA
var correlationResult = getCorrelationResult(adaptability,adaptabilityCopy,gwaCopy,dataLen);
var compareCorrelationResult = getCorrelationResult(compareAdaptability,compareAdaptabilityCopy,compareGwaCopy,compareDataLen);
console.log("correlation (adapt+gwa): " +correlationResult);

//correlation|| mood~GWA
var correlationResult = getCorrelationResult(mood,moodCopy,gwaCopy,dataLen);
var compareCorrelationResult = getCorrelationResult(compareMood,compareMoodCopy,compareGwaCopy,compareDataLen);
console.log("correlation (mood+gwa): " +correlationResult);


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

     var compareInterGwaData = [];
        for(let i=0;i<compareInterpersonalPerfectCopy.length;i++){
            var obj = {x:compareInterpersonalPerfectCopy[i],y:compareGwaPerfectCopy[i]};
                compareInterGwaData.push(obj);
        }    
        console.log("A", interGwaData, "B", compareInterGwaData);
    graphInterpersonalScatter(interGwaData, compareInterGwaData);

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
    graphStressScatter(stressGwaData, intraGwaData);
 
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

//Interpersonal BarGraph
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
}

$(function(){

		$("#btn-compare").click(function(event){
			compareDataSet();
		});

		$("#exampleFormControlSelect1").change(function(event){

			var start = this.value;
            console.log(start);
			$.ajax({
				url: 'http://localhost/ease_itp_final/filterStudents/'+start,
				method: 'get',
				dataType: 'json',
				success: function(data){
					var option = "";
					$("#exampleFormControlSelect2").html("");
						$.each(data, function(key, event){
							option += "<option value='"+event['year']+"'>"+event['year']+"</option>";
						});

					$("#exampleFormControlSelect2").append(option);
                    var start2 = $("#exampleFormControlSelect2").val();
                    console.log(start2);

                    $.ajax({
                        url: 'http://localhost/ease_itp_final/filterStudents2/'+start2,
                        method: 'get',
                        dataType: 'json',
                        success: function (data) {
                            var option = "<option value='0'>From</option>";
                            $("#exampleFormControlSelect3").html("");
                                $.each(data, function(key, event){
                                option += "<option value='"+event['year']+"'>"+event['year']+"</option>";
                            });
                            $("#exampleFormControlSelect3").append(option);
                            $("#exampleFormControlSelect4").append(option);
                        }
                    });
				}
			});
		});

		$("#exampleFormControlSelect3").change(function(event){
            $("#exampleFormControlSelect4").empty();
            var sec3 = this.value;
			var option = "";
			$("#exampleFormControlSelect3").map(function(index, elem){
				$.each(elem, function(key, value){
					if(sec3 != value.value && value.value != 0)
						option += "<option value='"+value.value+"'>"+value.value+"</option>";
				});
			});
				$("#exampleFormControlSelect4").append(option);
		});

		$(".btn-filter").click(function(event){
			

			$("#filter-container").removeClass('hide');
			

			// var arr = [79, 5, 18, 5, 32, 1, 16, 1, 82, 13];
			// var sorted = arr.slice().sort(function(a,b){return b-a});
			// var ranks = arr.slice().map(function(v){ return sorted.indexOf(v)+1 });

			var from = $("#exampleFormControlSelect1").val();
			var to = $("#exampleFormControlSelect2").val();
            var qwe = 1; var ewq =12;
			var filteredStudents = $('#filteredStudents'),
            StudentListFilter = $('#StudentListFilter'),
            filteredStudentsDataTable = filteredStudents.DataTable();
			
			
			$.ajax({
				url: 'http://localhost/ease_itp_final/getFilterGraph/'+ to + '/' + from +'/' + qwe + '/' + ewq,
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
                    console.log(Object.keys(properEQ).length);//length of (data)
				    var dataLen =Object.keys(properEQ).length;
				    
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
//correlation|| interpersonal~GWA
var correlationResult = getCorrelationResult(interpersonal,interpersonalCopy,gwaCopy,dataLen);
console.log("correlation (inter+gwa): " +correlationResult);

//correlation|| intrapersonal~GWA
var correlationResult = getCorrelationResult(intrapersonal,intrapersonalCopy,gwaCopy,dataLen);
console.log("correlation (intra+gwa): " +correlationResult);

//correlation|| stress~GWA
var correlationResult = getCorrelationResult(stress,stressCopy,gwaCopy,dataLen);
console.log("correlation (stress+gwa): " +correlationResult);

//correlation|| adapt~GWA
var correlationResult = getCorrelationResult(adaptability,adaptabilityCopy,gwaCopy,dataLen);
console.log("correlation (adapt+gwa): " +correlationResult);

//correlation|| mood~GWA
var correlationResult = getCorrelationResult(mood,moodCopy,gwaCopy,dataLen);
console.log("correlation (mood+gwa): " +correlationResult);


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
    graphStressScatter(stressGwaData, intraGwaData);
 
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

//Interpersonal BarGraph
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

function getCorrelationResult(orig,origcopy,gwacopy,datalen){
        var x = [];
        for(let i = 0; i < orig.length; i++) {
          x.push(Math.pow(origcopy[i] - gwacopy[i],2));
        }
        var sumOfD2 = x.reduce(function(a, b) { return a + b; }, 0);
        var numerator = sumOfD2*6;
        var n = datalen;
        var ncubed = Math.pow(n,3);
        var denominator = ncubed-n;
        var correlation = 1-(numerator/denominator);
        return correlation;

}

//*******************below here is all about graphs***********************

//ScatterGraphs
function graphInterpersonalScatter(scatter1, scatter2){
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
            data: scatter1,
        },{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(255,255,255,1)',
            borderColor:'rgba(0,0,0,1)',
            BackgroundColor:'rgba(51, 102, 255)',

            label: 'INTERPERSONAL and GWA',
            data: scatter2,
        }
        ]
    };

 $("#home").empty();
 $("#home").append('<canvas id="intraChart"></canvas>');

var ctx = document.getElementById("interChart").getContext("2d");
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


var ctx = document.getElementById("intraChart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: intraData,
    options: options

});
    
}


function graphStressScatter(data,data1){

	console.log("data", data);
	console.log("data1", data1);
  
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
		{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(1,1,1,1)',
            pointBackgroundColor: 'rgba(255,255,255,1)',
            borderColor:'rgba(0,0,0,1)',
            BackgroundColor:'rgba(1,1,1,1)',

            label: 'STRESS MANAGEMENT and GWA2',
            data: data1
            }

            ],
        }

  



var ctx = document.getElementById("stressChart").getContext("2d");
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


var ctx = document.getElementById("adaptChart").getContext("2d");
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


var ctx = document.getElementById("moodChart").getContext("2d");
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
                    beginAtZero:true
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

var ctx = document.getElementById("interBarChart").getContext("2d");
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
                    beginAtZero:true
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

var ctx = document.getElementById("intraBarChart").getContext("2d");
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
                    beginAtZero:true
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

var ctx = document.getElementById("stressBarChart").getContext("2d");
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
                    beginAtZero:true
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

var ctx = document.getElementById("moodBarChart").getContext("2d");
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
                    beginAtZero:true
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

var ctx = document.getElementById("adaptBarChart").getContext("2d");
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