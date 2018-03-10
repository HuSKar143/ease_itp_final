

$(function(){

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
							option += "<option value='"+event['id']+"'>"+event['year']+" "+event['semester']+"</option>";
						});

					$("#exampleFormControlSelect2").append(option);
                    var start2 = $("#exampleFormControlSelect2").val();
                    console.log(start2);


                    $.ajax({
                        url: 'http://localhost/ease_itp_final/filterStudents2/'+start2,
                        method: 'get',
                        dataType: 'json',
                        success: function (data) {
                            var option = "";
                            $("#exampleFormControlSelect3").html("");

                                $.each(data, function(key, event){
                                option += "<option value='"+event['id']+"'>"+event['year']+" "+event['semester']+"</option>";
                            });

                            $("#exampleFormControlSelect3").append(option);

                        }

                    });



				}
			});


		});


		

		$(".btn-filter").click(function(event){


			var arr = [79, 5, 18, 5, 32, 1, 16, 1, 82, 13];
			var sorted = arr.slice().sort(function(a,b){return b-a});
			var ranks = arr.slice().map(function(v){ return sorted.indexOf(v)+1 });


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
				    }, {});console.log(Object.keys(properEQ).length);
				    var dataLen =Object.keys(properEQ).length;
				    

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

drawGraph(student_gwa);

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


   						var gwaCopy = gwa.slice(); 
   						var interpersonalCopy = interpersonal.slice();
   						var intrapersonalCopy = intrapersonal.slice();
						var stressCopy = stress.slice();
						var adaptabilityCopy = adaptability.slice();
						var moodCopy = mood.slice();
						

   						var intersorted = interpersonal.sort(function(a, b) {
							  return b - a;
							});
							var intrasorted = intrapersonal.sort(function(a, b) {
							  return b - a;
							});
							var stresssorted = stress.sort(function(a, b) {
							  return b - a;
							});
							var adaptsorted = adaptability.sort(function(a, b) {
							  return b - a;
							});
							var moodsorted = mood.sort(function(a, b) {
							  return b - a;
							});
							var gwasorted = gwa.sort(function(a, b){
								return b - a;
							});
					
							//  
//interpersonal
		var interd, interi, intern;
        intern = interpersonal.length;

        interd = new Array(intern);
        for (interi = 0; interi < intern; interi++) {
            var interrank, interfirst, interlast;
         // Handle tied ranks.
            interfirst = intersorted.indexOf(interpersonal[interi]);
            interlast = intersorted.lastIndexOf(interpersonal[interi]);
            if (interfirst === interlast) {
                interrank = interfirst;
            } else {
                interrank = (interfirst + interlast) / 2;
            }
         // Add 1 because ranks start with 1.
            interd[interi] = interrank + 1;
        }

        for(x = 0 ;x<intersorted.length; x++){
        	for(y = 0 ; y<interpersonalCopy.length; y++){
        		if(interpersonalCopy[y]== intersorted[x]){
        			interpersonalCopy[y] = interd[x];
        		}
        	}
        } 
// console.log(interpersonalCopy);
 //intrapersonal
		var intrad, intrai, intran;
        intran = intrapersonal.length;

        intrad = new Array(intran);
        for (intrai = 0; intrai < intran; intrai++) {
            var intrarank, intrafirst, intralast;
         // Handle tied ranks.
            intrafirst = intrasorted.indexOf(intrapersonal[intrai]);
            intralast = intrasorted.lastIndexOf(intrapersonal[intrai]);
            if (intrafirst === intralast) {
                intrarank = intrafirst;
            } else {
                intrarank = (intrafirst + intralast) / 2;
            }
         // Add 1 because ranks start with 1.
            intrad[intrai] = intrarank + 1;
        }

        for(x = 0 ;x<intrasorted.length; x++){
        	for(y = 0 ; y<intrapersonalCopy.length; y++){
        		if(intrapersonalCopy[y]== intrasorted[x]){
        			intrapersonalCopy[y] = intrad[x];
        		}
        	}
        }  

  //stress
		var stressd, stressi, stressn;
        stressn = stress.length;

        stressd = new Array(stressn);
        for (stressi = 0; stressi < stressn; stressi++) {
            var stressrank, stressfirst, stresslast;
         // Handle tied ranks.
            stressfirst = stresssorted.indexOf(stress[stressi]);
            stresslast = stresssorted.lastIndexOf(stress[stressi]);
            if (stressfirst === stresslast) {
                stressrank = stressfirst;
            } else {
                stressrank = (stressfirst + stresslast) / 2;
            }
         // Add 1 because ranks start with 1.
            stressd[stressi] = stressrank + 1;
        } 
        for(x = 0 ;x<stresssorted.length; x++){
        	for(y = 0 ; y<stressCopy.length; y++){
        		if(stressCopy[y]== stresssorted[x]){
        			stressCopy[y] = stressd[x];
        		}
        	}
        } 

 //adapt
		var adaptd, adapti, adaptn;
        adaptn = adaptability.length;

        adaptd = new Array(adaptn);
        for (adapti = 0; adapti < adaptn; adapti++) {
            var adaptrank, adaptfirst, adaptlast;
         // Handle tied ranks.
            adaptfirst = adaptsorted.indexOf(adaptability[adapti]);
            adaptlast = adaptsorted.lastIndexOf(adaptability[adapti]);
            if (adaptfirst === adaptlast) {
                adaptrank = adaptfirst;
            } else {
                adaptrank = (adaptfirst + adaptlast) / 2;
            }
         // Add 1 because ranks start with 1.
            adaptd[adapti] = adaptrank + 1;
        } 
        for(x = 0 ;x<adaptsorted.length; x++){
        	for(y = 0 ; y<adaptabilityCopy.length; y++){
        		if(adaptabilityCopy[y]== adaptsorted[x]){
        			adaptabilityCopy[y] = adaptd[x];
        		}
        	}
        } 

 //mood
		var moodd, moodi, moodn;
        moodn = mood.length;

        moodd = new Array(moodn);
        for (moodi = 0; moodi < moodn; moodi++) {
            var moodrank, moodfirst, moodlast;
         // Handle tied ranks.
            moodfirst = moodsorted.indexOf(mood[moodi]);
            moodlast = moodsorted.lastIndexOf(mood[moodi]);
            if (moodfirst === moodlast) {
                moodrank = moodfirst;
            } else {
                moodrank = (moodfirst + moodlast) / 2;
            }
         // Add 1 because ranks start with 1.
            moodd[moodi] = moodrank + 1;
        }  
        for(x = 0 ;x<moodsorted.length; x++){
        	for(y = 0 ; y<moodCopy.length; y++){
        		if(moodCopy[y]== moodsorted[x]){
        			moodCopy[y] = moodd[x];
        		}
        	}
        } 

 //gwa
		var gwad, gwai, gwan;
        gwan = gwa.length;
       

        gwad = new Array(gwan);
        for (gwai = 0; gwai < gwan; gwai++) {
            var gwarank, gwafirst, gwalast;
         // Handle tied ranks.
            gwafirst = gwasorted.indexOf(gwa[gwai]);
            gwalast = gwasorted.lastIndexOf(gwa[gwai]);
            if (gwafirst === gwalast) {
                gwarank = gwafirst;
            } else {
                gwarank = (gwafirst + gwalast) / 2;
            }
         // Add 1 because ranks start with 1.
            gwad[gwai] = gwarank + 1;

        } 

        for(x = 0 ;x<gwasorted.length; x++){
        	for(y = 0 ; y<gwaCopy.length; y++){
        		if(gwaCopy[y]== gwasorted[x]){
        			gwaCopy[y] = gwad[x];
        		}
        	}
        }

          // console.log(student_gwa,gwaCopy);

        // console.log(student_gwa,gwad);


//*****************************************variable for correlation*****************************************
//*****************************************variable for correlation*****************************************
//*****************************************variable for correlation*****************************************
        var intergwa = [],intragwa = [],stressgwa = [],adaptgwa = [],moodgwa = [];

//correlation|| interpersonal~GWA
        for(let i = 0; i < interd.length; i++) {
		  intergwa.push(Math.pow(interpersonalCopy[i] - gwaCopy[i],2));
		}
		console.log(intergwa);
		var sumOfD2 = intergwa.reduce(function(a, b) { return a + b; }, 0);
		var numerator = sumOfD2*6;
		var n = dataLen;
		var ncubed = Math.pow(n,3);
		var denominator = ncubed-n;
		var correlation = 1-(numerator/denominator);
		console.log(sumOfD2,numerator,n,ncubed,denominator,correlation);

//correlation|| intrapersonal~GWA
		for(let i = 0; i < intrad.length; i++) {
		  intragwa.push(Math.pow(intrapersonalCopy[i] - gwaCopy[i],2));
		}
		sumOfD2 = intragwa.reduce(function(a, b) { return a + b; }, 0);
		numerator = sumOfD2*6;
		n = dataLen;
		ncubed = Math.pow(n,3);

		denominator = ncubed-n;
		correlation = 1-(numerator/denominator);
		
		console.log(sumOfD2,numerator,n,ncubed,denominator,correlation);

//correlation|| stress~GWA
        for(let i = 0; i < intrad.length; i++) {
          stressgwa.push(Math.pow(stressCopy[i] - gwaCopy[i],2));
        }
        sumOfD2 = stressgwa.reduce(function(a, b) { return a + b; }, 0);
        numerator = sumOfD2*6;
        n = dataLen;
        ncubed = Math.pow(n,3);

        denominator = ncubed-n;
        correlation = 1-(numerator/denominator);
        
        console.log(sumOfD2,numerator,n,ncubed,denominator,correlation);

//correlation|| adapt~GWA
        for(let i = 0; i < intrad.length; i++) {
          adaptgwa.push(Math.pow(adaptabilityCopy[i] - gwaCopy[i],2));
        }
        sumOfD2 = adaptgwa.reduce(function(a, b) { return a + b; }, 0);
        numerator = sumOfD2*6;
        n = dataLen;
        ncubed = Math.pow(n,3);

        denominator = ncubed-n;
        correlation = 1-(numerator/denominator);
        
        console.log(sumOfD2,numerator,n,ncubed,denominator,correlation);

//correlation|| mood~GWA
        for(let i = 0; i < intrad.length; i++) {
          moodgwa.push(Math.pow(moodCopy[i] - gwaCopy[i],2));
        }
        sumOfD2 = moodgwa.reduce(function(a, b) { return a + b; }, 0);
        numerator = sumOfD2*6;
        n = dataLen;
        ncubed = Math.pow(n,3);

        denominator = ncubed-n;
        correlation = 1-(numerator/denominator);
        
        console.log(sumOfD2,numerator,n,ncubed,denominator,correlation);

//********************GRAPHS************************
//********************GRAPHS************************
//********************GRAPHS************************

//graph INTERPERSONAL~GWA_SCATTERPLOT

    var interGwaData = [];
        for(let i=0;i<interpersonal.length;i++){
            var obj = {x:interpersonal[i],y:gwa[i]};
            interGwaData.push(obj);
        }
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
            BackgroundColor:'rgba(0,0,0,1)',

            label: 'INTERPERSONAL and GWA',
            data: interGwaData,
        }]
    };


var ctx = document.getElementById("interChart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: interData,
    options: options

});


//graph INTRAPERSONAL~GWA_SCATTERPLOT

    var intraGwaData = [];
        for(let i=0;i<intrapersonal.length;i++){
            var obj = {x:intrapersonal[i],y:gwa[i]};
            intraGwaData.push(obj);
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
            data: intraGwaData,
        }]
    };


var ctx = document.getElementById("intraChart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: intraData,
    options: options

});   


//graph STRESS~GWA_SCATTERPLOT

    var stressGwaData = [];
        for(let i=0;i<stress.length;i++){
            var obj = {x:stress[i],y:gwa[i]};
            stressGwaData.push(obj);
        }
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
            data: stressGwaData,
        }]
    };


var ctx = document.getElementById("stressChart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: stressData,
    options: options

}); 


//graph MOOD~GWA_SCATTERPLOT

    var moodGwaData = [];
        for(let i=0;i<mood.length;i++){
            var obj = {x:mood[i],y:gwa[i]};
            moodGwaData.push(obj);
        }
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
            data: moodGwaData,
        }]
    };


var ctx = document.getElementById("moodChart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: moodData,
    options: options

});


//graph ADAPT~GWA_SCATTERPLOT

    var adaptGwaData = [];
        for(let i=0;i<adaptability.length;i++){
            var obj = {x:adaptability[i],y:gwa[i]};
            adaptGwaData.push(obj);
        }
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
            data: adaptGwaData,
        }]
    };


var ctx = document.getElementById("adaptChart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: adaptData,
    options: options

});               



				} //success
		}); //ajax


}); //button filter
				
	}); //function ending tag


function drawGraph(array){
	
}