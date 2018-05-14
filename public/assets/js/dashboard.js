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
var average = []; 
var high = [];
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=84 &&  data[i]>=50)
            low.push(obj);
    }
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=114 &&  data[i]>=85)
            average.push(obj);
    }
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=170 &&  data[i]>=115)
            high.push(obj);
    }
var newData = low.length;
var newData2 = average.length;
var newData3 = high.length;

var percent = (newData/data.length)*100;
var percent2 = (newData2/data.length)*100;
var percent3 = (newData3/data.length)*100;

$("#highInterBar").empty();
$("#highInterBar").css('width', percent3 + '%'  );
$("#highInterBar").append(percent3.toFixed(2) +'%');

$("#aveInterBar").empty();
$("#aveInterBar").css('width', percent2 + '%'  );
$("#aveInterBar").append(percent2.toFixed(2) +'%');


$("#lowInterBar").empty();
$("#lowInterBar").css('width', percent + '%'  );
$("#lowInterBar").append(percent.toFixed(2) +'%');
$("#lowInter").empty();
$("#lowInter").append(newData);


}

function intraCount(data){

var low = [];
var average = []; 
var high = [];
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=84 &&  data[i]>=50)
            low.push(obj);
    }
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=114 &&  data[i]>=85)
            average.push(obj);
    }
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=170 &&  data[i]>=115)
            high.push(obj);
    }
var newData = low.length;
var newData2 = average.length;
var newData3 = high.length;

var percent = (newData/data.length)*100;
var percent2 = (newData2/data.length)*100;
var percent3 = (newData3/data.length)*100;

$("#highIntraBar").empty();
$("#highIntraBar").css('width', percent3 + '%'  );
$("#highIntraBar").append(percent3.toFixed(2) +'%');

$("#aveIntraBar").empty();
$("#aveIntraBar").css('width', percent2 + '%'  );
$("#aveIntraBar").append(percent2.toFixed(2) +'%');

$("#lowIntraBar").empty();
$("#lowIntraBar").css('width', percent + '%'  );
$("#lowIntraBar").append(percent.toFixed(2) +'%');
$("#lowIntra").empty();
$("#lowIntra").append(newData);
}

function stressCount(data){

var low = [];
var average = []; 
var high = [];
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=84 &&  data[i]>=50)
            low.push(obj);
    }
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=114 &&  data[i]>=85)
            average.push(obj);
    }
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=170 &&  data[i]>=115)
            high.push(obj);
    }
var newData = low.length;
var newData2 = average.length;
var newData3 = high.length;

var percent = (newData/data.length)*100;
var percent2 = (newData2/data.length)*100;
var percent3 = (newData3/data.length)*100;

$("#highStressBar").empty();
$("#highStressBar").css('width', percent3 + '%'  );
$("#highStressBar").append(percent3.toFixed(2) +'%');

$("#aveStressBar").empty();
$("#aveStressBar").css('width', percent2 + '%'  );
$("#aveStressBar").append(percent2.toFixed(2) +'%');

$("#lowStressBar").empty();
$("#lowStressBar").css('width', percent + '%'  );
$("#lowStressBar").append(percent.toFixed(2) +'%');
$("#lowStress").empty();
$("#lowStress").append(newData);
}

function adaptCount(data){
var low = [];
var average = []; 
var high = [];
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=84 &&  data[i]>=50)
            low.push(obj);
    }
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=114 &&  data[i]>=85)
            average.push(obj);
    }
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=170 &&  data[i]>=115)
            high.push(obj);
    }
var newData = low.length;
var newData2 = average.length;
var newData3 = high.length;

var percent = (newData/data.length)*100;
var percent2 = (newData2/data.length)*100;
var percent3 = (newData3/data.length)*100;

$("#highAdaptBar").empty();
$("#highAdaptBar").css('width', percent3 + '%'  );
$("#highAdaptBar").append(percent3.toFixed(2) +'%');

$("#aveAdaptBar").empty();
$("#aveAdaptBar").css('width', percent2 + '%'  );
$("#aveAdaptBar").append(percent2.toFixed(2) +'%');

$("#lowAdaptBar").empty();
$("#lowAdaptBar").css('width', percent + '%'  );
$("#lowAdaptBar").append(percent.toFixed(2) +'%');
$("#lowAdapt").empty();
$("#lowAdapt").append(newData);
}

function moodCount(data){

var low = [];
var average = []; 
var high = [];
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=84 &&  data[i]>=50)
            low.push(obj);
    }
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=114 &&  data[i]>=85)
            average.push(obj);
    }
    for(let i=0;i<data.length;i++){
        var obj;
        if(data[i]<=170 &&  data[i]>=115)
            high.push(obj);
    }
var newData = low.length;
var newData2 = average.length;
var newData3 = high.length;

var percent = (newData/data.length)*100;
var percent2 = (newData2/data.length)*100;
var percent3 = (newData3/data.length)*100;

$("#highMoodBar").empty();
$("#highMoodBar").css('width', percent3 + '%'  );
$("#highMoodBar").append(percent3.toFixed(2) +'%');

$("#aveMoodBar").empty();
$("#aveMoodBar").css('width', percent2 + '%'  );
$("#aveMoodBar").append(percent2.toFixed(2) +'%');



$("#lowMoodBar").empty();
$("#lowMoodBar").css('width', percent + '%'  );
$("#lowMoodBar").append(percent.toFixed(2) +'%');
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
        $("#currentInterpret").append('The relationship between the Total Emotional Quotient and Academic performance of the students is <u><i><b>Very Weak</b></u></i>' + ' and has a <u><i><b>Negative</b></u></i> relationship.');   
    }else if(data>=0.20 && data<=0.39){
        $("#currentInterpret").append('The relationship between the Total Emotional Quotient and Academic performance of the students is <u><i><b>Weak</b></u></i>' + ' and has a <u><i><b>Negative</b></u></i> relationship.');    
    }else if(data>=0.40 && data<=0.59){
        $("#currentInterpret").append('The relationship between the Total Emotional Quotient and Academic performance of the students is <u><i><b>Moderate</b></u></i>' + ' and has a <u><i><b>Negative</b></u></i> relationship.');    
    }else if(data>=0.60 && data<=0.79){
        $("#currentInterpret").append('The relationship between the Total Emotional Quotient and Academic performance of the students is <u><i><b>Strong</b></u></i>' + ' and has a <u><i><b>Negative</b></u></i> relationship.');  
    }else if(data>=0.80 && data<=1.0){
        $("#currentInterpret").append('The relationship between the Total Emotional Quotient and Academic performance of the students is <u><i><b>Very Strong</b></u></i>' + ' and has a <u><i><b>Negative</b></u></i> relationship.'); 
    }


    if(data<=-0 && data>=-0.19){
        $("#currentInterpret").append('The relationship between the Total Emotional Quotient and Academic performance of the students is <u><i><b>Very Weak</b></u></i>' + ' and has a <u><i><b>Positive</b></u></i> relationship.');   
    }else if(data<=-0.20 && data>=-0.39){
        $("#currentInterpret").append('The relationship between the Total Emotional Quotient and Academic performance of the students is <u><i><b>Weak</b></u></i>' + ' and has a <u><i><b>Positive</b></u></i> relationship.');    
    }else if(data<=-0.40 && data>=-0.59){
        $("#currentInterpret").append('The relationship between the Total Emotional Quotient and Academic performance of the students is <u><i><b>Moderate</b></u></i>' + ' and has a <u><i><b>Positive</b></u></i> relationship.');    
    }else if(data<=-0.60 && data>=-0.79){
        $("#currentInterpret").append('The relationship between the Total Emotional Quotient and Academic performance of the students is <u><i><b>Strong</b></u></i>' + ' and has a <u><i><b>Positive</b></u></i> relationship.');  
    }else if(data<=-0.80 && data>=-1.0){
        $("#currentInterpret").append('The relationship between the Total Emotional Quotient and Academic performance of the students is <u><i><b>Very Strong</b></u></i>' + ' and has a <u><i><b>Positive</b></u></i> relationship.'); 
    }
}







