
$(function() {

var x = document.getElementById("studentData").getAttribute("value");


        $.ajax({
            type: 'GET'
            , url: 'http://localhost/ease_itp_final/studentProfile/' +x +'/fff'
            , dataType: 'json'
            , success: function (data) {
                console.log(data['a']);
//prediction

                    var totaleq = [];
                    var gwac = [];  

                    var eqeq = data['b'].reduce(function(result, current) {
                        result[current.student_id] = result[current.student_id] || [];
                        result[current.student_id].push(current);
                        return result;
                    }, {});
                    // console.log(Object.keys(properEQ).length);//length of (data)
                    var dataLeneq =Object.keys(eqeq).length;
                 

                   
                    //get the individual eq and gwa
                    var student_totaleq = [];
                    var student_gwac = [];
                    $.each(eqeq, function(keys, values){
                        var gwaTotalc = 0;

                        student_totaleq.push({
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
                        $.each(student_totaleq, function(keys, values){
                            totaleq.push(values['totaleq']);                            
                        });

                        $.each(student_gwac, function(keys, values){
                            gwac.push(values['studentGWA']);
                        });

                        var gwaCopyC = gwac.slice(); 
                        var totalEqC = totaleq.slice(); 


//mean
var xbar = getAverage(totalEqC);

var ybar = getAverage(gwaCopyC);

//excel c
var xxbar = getdoublebar(totalEqC,xbar);

//excel d
var yybar = getdoublebar(gwaCopyC,ybar);

//excel f
var xxraise = getraise2(xxbar).map(Number);
//excel g
var yyraise = getraise2(yybar).map(Number);
//excel i6
var sumxxbarraise = xxraise.reduce(function (a, b) {return parseFloat(a) + parseFloat(b);}, 0);
//sumyybarraise I7
var sumOfyyraise = yyraise.reduce(function (a, b) {return parseFloat(a) + parseFloat(b);}, 0);

var standardX = standardDeviation(xxraise);
var standardY = standardDeviation(yyraise);


var totaleqGwa   = assignXY(totalEqC,gwaCopyC);

var totaleqR = pearsonResults(totaleqGwa);

var slope = totaleqR * (standardY/standardX);


var yintercept = ybar - (slope*xbar);

var eqtotal = data['a'][0].total_eq;

getPrediction(eqtotal,yintercept,slope);


// //*********************next next year prediction*********************
// var predictedGwa =getPast(totalEqC,yintercept,slope);
// console.log(predictedGwa);
// var predictedGwaC = predictedGwa.slice(); 
// //*********************next next year prediction*********************

// //mean
// var xbarNew = getAverage(totalEqC);

// var ybarNew = getAverage(predictedGwaC);

// //excel c
// var xxbarNew = getdoublebar(totalEqC,xbarNew);

// //excel d
// var yybarNew = getdoublebar(predictedGwaC,ybarNew);

// //excel f
// var xxraiseNew = getraise2(xxbarNew).map(Number);
// //excel g
// var yyraiseNew = getraise2(yybarNew).map(Number);
// //excel i6
// var sumxxbarraiseNew = xxraiseNew.reduce(function (a, b) {return parseFloat(a) + parseFloat(b);}, 0);
// //sumyybarraise I7
// var sumOfyyraiseNew = yyraiseNew.reduce(function (a, b) {return parseFloat(a) + parseFloat(b);}, 0);

// var standardXNew = standardDeviation(xxraiseNew);
// var standardYNew = standardDeviation(yyraiseNew);


// var totaleqGwaNew   = assignXY(totalEqC,predictedGwaC);

// var totaleqRNew = pearsonResults(totaleqGwaNew);

// var slopeNew = totaleqRNew * (standardYNew/standardXNew);


// var yinterceptNew = ybarNew- (slopeNew*xbarNew);


// var nextNextYear = getPredictionNew(eqtotal,yinterceptNew,slopeNew);
// console.log(nextNextYear);
// $("#predictInterpret").append("Next next year predicted GWA: <br><b>" + nextNextYear);


//GRAPH

  var intrapersonal = data['a'][0].intrapersonal;
  var interpersonal = data['a'][0].interpersonal;
  var stress = data['a'][0].stress;
  var adapt = data['a'][0].adapt;
  var mood = data['a'][0].mood;

var options = {
    responsive: true,
    maintainAspectRatio: true,
    scale: {
        ticks: {
            beginAtZero: true,
            max: 180,
            maxTicksLimit: 3,
            display: false
        },
        pointLabels :{
           fontStyle: "bold",
        },

    }
};

var studentData = {
    labels: [
        "Intrapersonal", "Interpersonal", "Stress Management", "Adaptability", "General Mood"
    ],
    datasets: [{
        label: "Emotional Quotient",
        backgroundColor: "rgba(193, 0, 0,0.7)",
        borderColor: "rgba(193, 0, 0,1)",
        borderWidth: "3",
        pointBackgroundColor: "rgba(255, 255, 255,1)",
        pointRadius: "1.5",
        pointBorderColor: "rgba(193, 0, 0,1)",
        pointHoverBackgroundColor: "rgba(193, 0, 0,1)",
        pointHoverRadius: "1.5",
        pointHoverBorderColor: "rgba(193, 0, 0,1)",
        pointBorderWidth:4,
        
        data: [
            data['a'][0].intrapersonal, data['a'][0].interpersonal, data['a'][0].stress, data['a'][0].adapt,
            data['a'][0].mood,
        ]
    }]
};

$("#interpretEQ").empty();
$("#interpretEQ").append('<b>Emotional Quotient Test Results: </b><br> Interpersonal: <b>'+interpersonal + '</b><br> Intrapersonal: <b>'+ intrapersonal + '</b><br> Stress Management: <b>'+ stress + '</b><br> Adaptability:<b> '+ adapt + '</b><br> General Mood: <b>'+ mood +'</b>' );
var ctx = document.getElementsByClassName("studentRadar")[0];
var studentRadar = new Chart(ctx, {
    type: 'radar',
    data: studentData,
    options: options

});
              

        

           
                

         

            }

            
            
        });


});


function getPast(eq,y,s){
  var a = [];
     for(let i=0;i<eq.length;i++){
         var obj = y+(s*eq[i]);
         a.push(obj);
     }
  return a;

}

function getPredictionNew(eq,y,s){
    var predict = y+(s*eq);

    return predict;
  
}

function getPrediction(eq,y,s){
    var predict = y+(s*eq);
    var value = parseFloat(predict).toFixed(3);
    console.log(value);
    return $("#predictInterpret").append('<p> Using Linear Regression, the prediction model:  <br> <b>GWA</b> = '+y+ '+(' +s+ ' * <b>Total EQ</b>) <br><br> His/Her current GWA and Total EQ, his/her predicted GWA for next school year is: <b>'+ value+'</b></p>');
}

function pearsonResults(values) {
var n = values.length;
if (n == 0) return 0;

let meanX = 0;
let meanY = 0;
for (var i = 0; i < n; i++) {
meanX += values[i].x / n
meanY += values[i].y / n
}console.log(meanX,meanY);

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


//functions for c
function getAverage(data){
  var sum = 0;
    for( var i = 0; i < data.length; i++ ){
        sum += parseFloat( data[i], 10 ); //don't forget to add the base
    }

    var avg = (sum/data.length).toFixed(4);

    return avg;


}

function getdoublebar(orig,mean){

    var gg = [];
    for (var i=0; i < orig.length; i++){
      var temp = (parseFloat(orig[i])-mean).toFixed(4);
      gg.push(temp);

    }

  return gg;

}

function getraise2(data){
    var raise = [];
    for(var i=0; i< data.length; i++) {
      var temp =  (Math.pow(parseFloat(data[i]),2).toFixed(4));
      raise.push(temp);
    }

  return raise;  


}

function standardDeviation(numbersArr) {
    //--CALCULATE AVAREGE--
    var lint = (numbersArr.length-1);
    var total = 0;
    for(var key in numbersArr) 
       total += numbersArr[key];
 
    //--CALCULATE AVAREGE--
  
    //--CALCULATE STANDARD DEVIATION--
   
    var SDresult = Math.sqrt(total/lint); 
    //--CALCULATE STANDARD DEVIATION--
    return SDresult;
    
}

