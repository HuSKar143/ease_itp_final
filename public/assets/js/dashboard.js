$(function() {

    $.ajax({
                url: 'http://localhost/ease_itp_final/dashboard/',
                method: 'get',
                dataType: 'json',
                success: function(data){
                
					var interpersonal = [];
					var intrapersonal = [];
					var stress = [];
					var adaptability = [];
					var mood = [];
					var totaleq = [];
                    var gwac = []; 

					var properEQ = data.reduce(function(result, current) {
				        result[current.student_id] = result[current.student_id] || [];
				        result[current.student_id].push(current);
				        return result;
				    }, {});
                    // console.log(Object.keys(properEQ).length);//length of (data)
				    var dataLen =Object.keys(properEQ).length;

          

                    //get the individual eq and gwa
				    var student_eq = [];
				    var student_gwac = [];
				    $.each(properEQ, function(keys, values){
				    	 var gwaTotalc = 0;

				  		student_eq.push({
				  			studentId : values[0]['student_id'],
				  			interpersonal : values[0]['interpersonal'],
				  			intrapersonal : values[0]['intrapersonal'],
				  			stress : values[0]['stress'],
				  			adaptability : values[0]['adapt'],
				  			mood : values[0]['mood'],
				  			totaleq : values[0]['total_eq']
				  			});

				  		 $.each(values, function(key, value){
                            gwaTotalc += value['gwa'];
                        });

				  		 gwaTotalc = (gwaTotalc/values.length).toFixed(3);

                        student_gwac.push({
                            studentId : values[0]['student_id'],
                            studentGWA : gwaTotalc
                        });
					});
					


                        //pushing the individual EQ and GWA
    					$.each(student_eq, function(keys, values){
    						interpersonal.push(values['interpersonal']);
    						intrapersonal.push(values['intrapersonal']);
    						stress.push(values['stress']);
    						adaptability.push(values['adaptability']);
    						mood.push(values['mood']);
    						totaleq.push(values['totaleq']);  						
   						});
   						 $.each(student_gwac, function(keys, values){
                            gwac.push(values['studentGWA']);
                        });



                
         

// *****************variables slice*****************
                        var interpersonalPerfectCopy = interpersonal.slice();
                        var intrapersonalPerfectCopy = intrapersonal.slice();
                        var stressPerfectCopy = stress.slice();
                        var adaptabilityPerfectCopy = adaptability.slice();
                        var moodPerfectCopy = mood.slice();
                        var gwaCopyC = gwac.slice(); 
                        var totalEqC = totaleq.slice(); 


var totaleqGwa   = assignXY(totalEqC,gwaCopyC);

var totaleqR = pearsonResults(totaleqGwa);
interpretResult(totaleqR);

 studentCount(student_eq);
 interCount(interpersonalPerfectCopy);
 intraCount(intrapersonalPerfectCopy);
 stressCount(stressPerfectCopy);
 adaptCount(adaptabilityPerfectCopy);
 moodCount(moodPerfectCopy);                  

}//success
});//ajax

});//function
function studentCount(data){

var totalstudents = data.length;

$("#currentStudents").empty();
$("#currentStudents").append(totalstudents);
}

function interCount(data){

var low = [];
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=84 &&  data[i]>=50)
            low.push(obj);
    }
var newData = low.length;
$("#lowInter").empty();
$("#lowInter").append(newData);
}

function intraCount(data){

var low = [];
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=84 &&  data[i]>=50)
            low.push(obj);
    }
var newData = low.length;
$("#lowIntra").empty();
$("#lowIntra").append(newData);
}

function stressCount(data){

var low = [];
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=84 &&  data[i]>=50)
            low.push(obj);
    }
var newData = low.length;
$("#lowStress").empty();
$("#lowStress").append(newData);
}

function adaptCount(data){

var low = [];
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=84 &&  data[i]>=50)
            low.push(obj);
    }
var newData = low.length;
$("#lowAdapt").empty();
$("#lowAdapt").append(newData);
}

function moodCount(data){

var low = [];
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=84 &&  data[i]>=50)
            low.push(obj);
    }
var newData = low.length;
$("#lowMood").empty();
$("#lowMood").append(newData);
}

function pearsonResults(values) {
var n = values.length;
if (n == 0) return 0;

let meanX = 0;
let meanY = 0;
for (var i = 0; i < n; i++) {
meanX += values[i].x / n
meanY += values[i].y / n
}

let num = 0;
let den1 = 0;
let den2 = 0;

for (var i = 0; i < n; i++) {
let dx = (values[i].x - meanX);
let dy = (values[i].y - meanY);
num += dx * dy
den1 += dx * dx
den2 += dy * dy
}

const den = Math.sqrt(den1) * Math.sqrt(den2);

if (den == 0) return 0;

return num / den;
}

function assignXY(eq, gwa){
  var a = [];
     for(let i=0;i<eq.length;i++){
         var obj = {x:eq[i],y:parseFloat(gwa[i])};
         a.push(obj);
     }
  return a;
}

function interpretResult(data){

	$("#currentInterpret").empty();
	 if(data>=0 && data<=0.19){
        $("#currentInterpret").append('Strength of Relationship: <b>Very Weak</b>');   
    }else if(data>=0.20 && cdata<=0.39){
        $("#currentInterpret").append('Strength of Relationship: <b>Weak</b>');    
    }else if(data>=0.40 && data<=0.59){
        $("#currentInterpret").append('Strength of Relationship: <b>Moderate</b>');    
    }else if(data>=0.60 && data<=0.79){
        $("#currentInterpret").append('Strength of Relationship: <b>Strong</b>');  
    }else if(data>=0.80 && data<=1.0){
        $("#currentInterpret").append('Strength of Relationship: <b>Very Strong</b>'); 
    }
}







