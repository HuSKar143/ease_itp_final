var year;
var comparedCorrelationResult = {};


function compareGraph(){
    year = $("#exampleFormControlSelect1").val();
    var yearToCompared = $("#exampleFormControlSelect2").val();

    var getDataForGraph = $.ajax({
        url: 'http://localhost/ease_itp_final/getFilterGraph/'+ year + '/'+ yearToCompared,
        method: 'get',
        dataType: 'json'
    });
       
        getDataForGraph.done(function(data){
            var firstYear = getStudentInfo(data['a']);
            var secondYear = getStudentInfo(data['b']);
            var highElem;
            if(firstYear.length < secondYear.length){ highElem = secondYear; }else if(firstYear.length > secondYear.length){ highElem = firstYear;}

            var FirstGWA = setDataSlice(firstYear, 'gwa');
            var SecondGWA = setDataSlice(secondYear, 'gwa');
            var SecondRawData = setRawData(highElem, 'studentName', 'gwa', 'interpersonal','intrapersonal','stress','adaptability','mood');
            $("#barInterpret").empty();
            $("#barInterpret").append("<b>Number of students <br></b> " + "School Year " + year + ": " + "<b><i>" + firstYear.length + "</b></i><br>"
            + "School Year " + yearToCompared + ": " + "<b><i>" + secondYear.length + "</b></i><br>" );

            var firstInterpersonal   = setDataToAssign(firstYear,FirstGWA, 'interpersonal');
            var secondInterpersonal  = setDataToAssign(secondYear,SecondGWA, 'interpersonal');

            var firstIntrapersonal   = setDataToAssign(firstYear,FirstGWA, 'intrapersonal');
            var secondIntrapersonal  = setDataToAssign(secondYear,SecondGWA, 'intrapersonal');

            var firstStress          = setDataToAssign(firstYear,FirstGWA, 'stress');
            var secondStress         = setDataToAssign(secondYear,SecondGWA, 'stress');

            var firstAdapt           = setDataToAssign(firstYear,FirstGWA, 'adaptability');
            var secondAdapt          = setDataToAssign(secondYear,SecondGWA, 'adaptability');

            var firstMood            = setDataToAssign(firstYear,FirstGWA, 'mood');
            var secondMood           = setDataToAssign(secondYear,SecondGWA, 'mood');


             var reportAllEq = [];

            var correlatedInterpersonal = {
                    first: pearsonResults(firstInterpersonal),
                    second: pearsonResults(secondInterpersonal)
                };
            var correlatedIntrapersonal = {
                    first: pearsonResults(firstIntrapersonal),
                    second: pearsonResults(secondIntrapersonal)
                };

                console.log(correlatedIntrapersonal);
            var correlatedStress = {
                    first: pearsonResults(firstStress),
                    second: pearsonResults(secondStress),
                };
            var correlatedAdapt = {
                    first: pearsonResults(firstAdapt),
                    second: pearsonResults(secondAdapt)
                };
                console.log(correlatedAdapt);
            var correlatedMood = {
                    first: pearsonResults(firstMood),
                    second: pearsonResults(secondMood)
                };

            comparedCorrelationResult ={
            intrapersonalinterpret: pearsonResults(secondIntrapersonal),
            interpersonalinterpret: pearsonResults(secondInterpersonal),
            adaptinterpret:         pearsonResults(secondAdapt),
            stressinterpret:        pearsonResults(secondStress),
            moodinterpret:          pearsonResults(secondMood)

            } 


            countBarResult {
             intrapersonal : countBar('intrapersonal', firstYear, secondYear);
             interpersonal : countBar('interpersonal', firstYear, secondYear);
             stress        : countBar('stress', firstYear, secondYear);
             adaptability  : countBar('adaptability', firstYear, secondYear);
             mood          : countBar('mood', firstYear, secondYear);
            
           }


    
 
var comparedPearsonResult = [];
  $.each(comparedCorrelationResult, function(keys, values){
      comparedPearsonResult.push(values);
  });



// $("#comparedIntra").append('Compared Intrapersonal: ' + pearsonResults(secondIntrapersonal));
// $("#comparedStress").append('Compared Stress Management: ' + pearsonResults(secondStress));
// $("#comparedAdapt").append('Compared Adaptability: ' + pearsonResults(secondAdapt));
// $("#comparedMood").append('Compared General Mood: ' + pearsonResults(secondMood));




            

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



   function comparedInterpret(key) {

  // $("#comparedInter").empty();
  //   $("#comparedInter").append("<font color='blue'><b>Compared Year</b></font>");
  // $("#comparedInter").append("<br>School Year: <b>" + $("#exampleFormControlSelect2").val());
  // $("#comparedInter").append('<br>Correlation Coefficient: <b>' + comparedcomparedCorrelationResult[key]);

$("#comparedInter").empty();
$("#comparedIntra").empty();

  if (comparedCorrelationResult[key]<0){
        $("#comparedInter").append('<font color="blue"><b> Results of Compared Year: </font><br>'+'School year: <b>'+ $("#exampleFormControlSelect2").val()+'</b><br>Correlation Coefficient: <b>' + comparedCorrelationResult[key] + '</b><br> Relationship:<font color="blue"> Positive </font> (<b>GWA is increasing and ' +key.charAt(0).toUpperCase() +  key.slice(1,-9)+ ' is also increasing) </b><br>');    
     }


    else if(comparedCorrelationResult[key]>=0 && comparedCorrelationResult[key]<=0.19){
        $("#comparedIntra").append('Strength of Relationship: <b>Very Weak</b>');   
    }else if(comparedCorrelationResult[key]>=0.20 && comparedCorrelationResult[key]<=0.39){
        $("#comparedIntra").append('Strength of Relationship: <b>Weak</b>');    
    }else if(comparedCorrelationResult[key]>=0.40 && comparedCorrelationResult[key]<=0.59){
        $("#comparedIntra").append('Strength of Relationship: <b>Moderate</b>');    
    }else if(comparedCorrelationResult[key]>=0.60 && comparedCorrelationResult[key]<=0.79){
        $("#comparedIntra").append('Strength of Relationship: <b>Strong</b>');  
    }else if(comparedCorrelationResult[key]>=0.80 && comparedCorrelationResult[key]<=1.0){
        $("#comparedIntra").append('Strength of Relationship: <b>Very Strong</b>'); 
    }



  if (comparedCorrelationResult[key]>0){
    $("#comparedInter").append('<font color="blue"><b> Results of Compared Year: </font><br>'+'School year: <b>'+ $("#exampleFormControlSelect2").val()+'</b><br>Correlation Coefficient: <b>' + comparedCorrelationResult[key] + '</b><br> Relationship: <font color="red">Negative</font> (<b>GWA is decreasing while ' +key.charAt(0).toUpperCase() +  key.slice(1,-9)+ ' is also increasing) </b>');
    }
  else if(comparedCorrelationResult[key]>=-0.19 && comparedCorrelationResult[key]<=0){
    $("#comparedIntra").append('Strength of Relationship: <b>Very Weak</b>');  
  }else if(comparedCorrelationResult[key]>=-0.39 && comparedCorrelationResult[key]<=-0.20){
    $("#comparedIntra").append('Strength of Relationship: <b>Weak</b> '); 
  }else if(comparedCorrelationResult[key]>=-0.59 && comparedCorrelationResult[key]<=-0.40){
    $("#comparedIntra").append('Strength of Relationship: <b>Moderate</b> '); 
  }else if(comparedCorrelationResult[key]>=-0.79 && comparedCorrelationResult[key]<=-0.60){
    $("#comparedIntra").append('Strength of Relationship: <b>Strong</b> '); 
  }else if(comparedCorrelationResult[key]>=-1.0 && comparedCorrelationResult[key]<=-0.8){
    $("#comparedIntra").append('Strength of Relationship: <b>Very Strong</b>'); 
  }


}
function getStudentInfo(info){
    var studentInfo = [];
    for(x=0; x<info.length; x++){
        var gwaAverage = 0;
        if(info[x+1] != null &&info[x]['student_id'] == info[x+1]['student_id']){
            gwaAverage += (info[x]['gwa'] + info[x+1]['gwa']) / 2;
            studentInfo.push({
                studentId : info[x]['student_id'],
                 studentName : info[x]['lastname'],
                interpersonal : info[x]['interpersonal'],
                intrapersonal : info[x]['intrapersonal'],
                stress : info[x]['stress'],
                adaptability : info[x]['adapt'],
                mood : info[x]['mood'],
                 totaleq : info[x]['total_eq'],
                gwa : gwaAverage
            });
            x += 1;
        }
    }   
    return studentInfo;
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

function setDataSlice(studentData, keyData){
    var dataSet = [];
    $.each(studentData, function(key, values){
        dataSet.push(values[keyData].toFixed(3));
    });

    var gwaSlice = dataSet.slice();


    return gwaSlice;
}
function setRawData(studentData, student, gwa, inter, intra, stress, adapt, mood){
    var name = [];
    var interpersonal = [];
    var intrapersonal = [];
    var stresss = [];
    var adaptability = [];
    var moodd = [];
    var gwaa = [];
    $.each(studentData, function(key, values){

        name.push(values[student]);
        gwaa.push(values[gwa].toFixed(3));
        interpersonal.push(values[inter]);
        intrapersonal.push(values[intra]);
        adaptability.push(values[adapt]);
        moodd.push(values[mood]);
        stresss.push(values[stress]);
    });
    var nameSlice = name.slice();
    var gwaSlice = gwaa.slice();
    var interSlice = interpersonal.slice();
    var intraSlice = intrapersonal.slice();
    var stressSlice = stresss.slice();
    var moodSlice = moodd.slice();
    var adaptSlice = adaptability.slice();

setSliceToDisplay(nameSlice,gwaSlice,interSlice,intraSlice,adaptSlice,stressSlice,moodSlice);
    
}

function setSliceToDisplay(name, gwa, inter, intra, adapt, stress, mood){
var updatedReportEq = [];
for(let i=0;i<inter.length;i++){
      var obj = {name:name[i],gwa:gwa[i],inter:inter[i],intra:intra[i],adapt:adapt[i],stress:stress[i],mood:mood[i]};
      updatedReportEq.push(obj);
    }
generateReportTable(updatedReportEq);
}

function setDataToAssign(studentData, gwa, keyData){
    var dataSet = [];
    $.each(studentData, function(key, values){
        dataSet.push(values[keyData]);
    });

    var copyDataSet = dataSet.slice();

    return assignXY(copyDataSet, gwa);
}

function assignXY(eq, gwa){
  var a = [];
     for(let i=0;i<eq.length;i++){
         var obj = {x:eq[i],y:parseFloat(gwa[i])};
         a.push(obj);
     }
  return a;
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
            text: key.charAt(0).toUpperCase() +  key.slice(1)  + ' and GWA Scatterplot',
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
            pointBorderColor: 'rgba(0, 82, 204,1)',
            pointBackgroundColor: 'rgba(26, 117, 255,1)',
            borderColor:'rgba(0, 82, 204,1)',
            BackgroundColor:'rgba(26, 117, 255,1)',
            label: "School Year " + $("#exampleFormControlSelect1").val(),
            data: xFirstData
        },{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(204, 0, 0,1)',
            pointBackgroundColor: 'rgba(255, 0, 0,1)',
            borderColor:'rgba(204, 0, 0,1)',
            BackgroundColor:'rgba(255, 0, 0,1)',
            label: "School Year " + $("#exampleFormControlSelect2").val(),
            data: xSecondData


        }]
    };

$("#"+key+"Container").empty();
$("#"+key+"Container").append('<canvas id="'+key+'-Chart"></canvas>');
Chart.defaults.global.defaultFontStyle = 'Bold'
var ctx = document.getElementById(key+"-Chart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: intraData,
    options: options

});

}
function countBar (key, firstyear, secondyear) {
    var kani = [];
    var x = [];
    var low = [];
    var average = [];
    var  high = []; 
    var sum=0,sum2=0,sum3=0;
    for(let i=0;i<firstyear.length;i++){
        if(firstyear[i][key]>=50 && firstyear[i][key]<=84){
            sum =sum +1;
        }else if(firstyear[i][key]>=85 && firstyear[i][key]<=114){
            sum2 =sum2 +1;
        }else if(firstyear[i][key]>=115 && firstyear[i][key]<=170){
            sum3 =sum3 +1;
        }

    }

    x.push(sum);
    x.push(sum2);
    x.push(sum3);



    low.push(sum);
    average.push(sum2);
    high.push(sum3);
       
   

    var y = [], sum=0,sum2=0,sum3=0;
    for(let i=0;i<secondyear.length;i++){
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

    kani.push(x);
    kani.push(y);

    return kani;



}

function drawGraphBar(key, firstyear, secondyear){

    var xFirstData = [];
    var xSecondData = [];

    var x = [];
    var low = [];
    var average = [];
    var  high = []; 
    var sum=0,sum2=0,sum3=0;
    for(let i=0;i<firstyear.length;i++){
        if(firstyear[i][key]>=50 && firstyear[i][key]<=84){
            sum =sum +1;
        }else if(firstyear[i][key]>=85 && firstyear[i][key]<=114){
            sum2 =sum2 +1;
        }else if(firstyear[i][key]>=115 && firstyear[i][key]<=170){
            sum3 =sum3 +1;
        }

    }

    x.push(sum);
    x.push(sum2);
    x.push(sum3);



    low.push(sum);
    average.push(sum2);
    high.push(sum3);
   


    var y = [], sum=0,sum2=0,sum3=0;
    for(let i=0;i<secondyear.length;i++){
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




    var maxi = 0; 

    if (firstyear.length>secondyear.length){

        maxi = firstyear.length;
    }

    else {
        maxi = secondyear.length;
    }
    

var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: maxi
                }
            }],
            xAxes: [{
            gridLines: {
                offsetGridLines: false
            }
        }]
        }
    }



//red

//             borderColor:'rgba(204, 0, 0,1)',
//             BackgroundColor:'rgba(255, 0, 0,1)',

//blue

            // pointBorderColor: 'rgba(0, 82, 204,1)',
   //          pointBackgroundColor: 'rgba(26, 117, 255,1)',



var interData = { 
      labels:["LOW","AVERAGE","HIGH"],
        datasets: [{
            label: "School Year " + $("#exampleFormControlSelect1").val(),
            data: x,
             backgroundColor: [
                'rgba(255, 0, 0,0.7)',
                'rgba(255, 0, 0,0.7)',
                'rgba(255, 0, 0,0.7)'
            ],
            borderColor: [
               'rgba(204, 0, 0,1)',
                'rgba(204, 0, 0,1)',
                'rgba(204, 0, 0,1)'
            ],
            borderWidth: 1
        },
        {
            label: "School Year " + $("#exampleFormControlSelect2").val(),
            data: y,
             backgroundColor: [
                'rgba(26, 117, 255,0.7)',
                'rgba(26, 117, 255,0.7)',
                'rgba(26, 117, 255,0.7)'
            ],
            borderColor: [
                'rgba(0, 82, 204,1)',
                'rgba(0, 82, 204,1)',
                'rgba(0, 82, 204,1)'
            ],
            borderWidth: 1
        }]
    };
$("#"+key+"BarContainer").empty();
$("#"+key+"BarContainer").append('<canvas id="'+key+'-BarChart"></canvas>');



Chart.defaults.global.defaultFontStyle = 'Bold'
var ctx = document.getElementById(key+"-BarChart").getContext("2d");
var barChart = new Chart(ctx, {
    type: 'bar',
    data: interData,
    options: options

});



}