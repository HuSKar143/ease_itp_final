

$(function(){

		$("#exampleFormControlSelect1").change(function(event){
			var start = this.value;
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

				}
			});


		});

		

		$(".btn-filter").click(function(event){


			var arr = [79, 5, 18, 5, 32, 1, 16, 1, 82, 13];
			var sorted = arr.slice().sort(function(a,b){return b-a});
			var ranks = arr.slice().map(function(v){ return sorted.indexOf(v)+1 });


			var from = $("#exampleFormControlSelect1").val();
			var to = $("#exampleFormControlSelect2").val();
			var filteredStudents = $('#filteredStudents'),
            StudentListFilter = $('#StudentListFilter'),
            filteredStudentsDataTable = filteredStudents.DataTable();
			
			
			$.ajax({
				url: 'http://localhost/ease_itp_final/getFilterGraph/'+ to + '/' + from,
				method: 'get',
				dataType: 'json',
				success: function(data){
					var interpersonal = [];
					var intrapersonal = [];
					var stress = [];
					var adaptability = [];
					var mood = [];
					var gwa = [];

					var properEQ = data.reduce(function(result, current) {
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
					// console.log(student_gwa);
						
				 //    var searchId = 61;

					// for(x =0 ; x<student_eq.length; x++){
					// 	if(student_eq[x]==searchId){
					// 		console.log(student_eq[x]['stress']);
					// 	}	
					// } stress = [50,20,25,40]

					

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
							  return a - b;
							});
							var stresssorted = stress.sort(function(a, b) {
							  return a - b;
							});
							var adaptsorted = adaptability.sort(function(a, b) {
							  return a - b;
							});
							var moodsorted = mood.sort(function(a, b) {
							  return a - b;
							});
							var gwasorted = gwa.sort(function(a, b){
								return a - b;
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


//variable for correlation
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
		  intragwa.push(Math.pow(intrad[i] - gwad[i],2));
		}
		sumOfD2 = intragwa.reduce(function(a, b) { return a + b; }, 0);
		numerator = sumOfD2*6;
		n = dataLen;
		ncubed = Math.pow(n,3);

		denominator = ncubed-n;
		correlation = 1-(numerator/denominator);
		
		// console.log(sumOfD2,numerator,n,ncubed,denominator,correlation);

				} //success
		}); //ajax


}); //button filter
				
	}); //function ending tag


function drawGraph(array){
	
}