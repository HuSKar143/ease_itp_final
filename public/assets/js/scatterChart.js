$(function() {


//graph INTRA
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
      labels:["eq","gwa"],

        datasets: [{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(0,0,0,1)',
            borderColor:'rgba(0,0,0,1)',
            BackgroundColor:'rgba(0,0,0,1)',

            label: 'EQ and GWA',
            data: [{
                x: 23,
                y: 3
            }, {
                x: 5,
                y: 15
            }, {
                x: 10,
                y: 5
            },
            {
                x: 22,
                y: 12
            },
            {
                x: 12,
                y: 11
            },
            {
                x: 25,
                y: 9
            },
            {
                x: 19,
                y: 17
            }]
        }]
    };


var ctx = document.getElementById("intraChart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: intraData,
    options: options

});


Chart.defaults.global.defaultFontStyle = 'Bold'
// var ctx = document.getElementById("interChart").getContext("2d");
// var scatterChart = new Chart(ctx, {
//     type: 'scatter',
//     data: {
//         datasets: [{
//            display: true,
//            label: 'Correlation Interpersonal GWA',
//             pointBorderWidth:1,
//             pointBorderColor: 'rgba(0,0,0,1)',
//             pointBackgroundColor: 'rgba(0,0,0,1)',
//             borderColor:'rgba(255,255,255,1)',

           
//             data: [{
//                 x: 10,
//                 y: 4
//             }, {
//                 x:13,
//                 y: 8
//             }, {
//                 x: 12,
//                 y: 4
//             },
//             {
//                 x: 18,
//                 y: 6
//             },
//             {
//                 x:19,
//                 y: 10
//             },
//             {
//                 x:13,
//                 y: 3
//             },
//             {
//                 x: 21,
//                 y: 15
//             }]
//         }]
//     },
//     options: {

//         scales: {
           
//             xAxes: [{
//                ticks: {
//     beginAtZero: true
//   },
//                 scaleLabel: {
//                   display: true,
//                   labelString: 'General Weighted Average'
//                             },

//                 scaleBeginAtZero : true,
//                 gridLines:{
//                display:false,
                
                


//               },
//                 type: 'linear',
//                 position: 'bottom',
                
//             }],
//             yAxes: [{
//               ticks: {
//     beginAtZero: true
//   },
//                 scaleLabel: {
//                   display: true,
//                   labelString: 'Interpersonal'
//                             },

//                  gridLines:{display:false }



//             }]
//         }
//     }
// });
// Chart.defaults.global.defaultFontStyle = 'Bold'
// var ctx = document.getElementById("stressChart").getContext("2d");
// var scatterChart = new Chart(ctx, {
//     type: 'scatter',
//     data: {
//         datasets: [{
//             pointBorderWidth:1,
//             pointBorderColor: 'rgba(0,0,0,1)',
//             pointBackgroundColor: 'rgba(0,0,0,1)',
//             borderColor:'rgba(255,255,255,1)',

//             label: 'Scatter Dataset',
//             data: [{
//                 x: 10,
//                 y: 4
//             }, {
//                 x:13,
//                 y: 8
//             }, {
//                 x: 12,
//                 y: 4
//             },
//             {
//                 x: 18,
//                 y: 6
//             },
//             {
//                 x:19,
//                 y: 10
//             },
//             {
//                 x:13,
//                 y: 3
//             },
//             {
//                 x: 21,
//                 y: 15
//             }]
//         }]
//     },
//     options: {

//         scales: {

//             xAxes: [{
//               ticks: {
//     beginAtZero: true
//   },
//                 scaleLabel: {
//                   display: true,
//                   labelString: 'General Weighted Average'
//                             },

//                 scaleBeginAtZero : true,
//                 gridLines:{
               
//                 display:false 


//               },
//                 type: 'linear',
//                 position: 'bottom',
                
//             }],
//             yAxes: [{
//               ticks: {
//     beginAtZero: true
//   },
//                 scaleLabel: {
//                   display: true,
//                   labelString: 'Stress Management'
//                             },

//                  gridLines:{display: false }



//             }]
//         }
//     }
// });

Chart.defaults.global.defaultFontStyle = 'Bold'
var ctx = document.getElementById("adaptChart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(0,0,0,1)',
            borderColor:'rgba(255,255,255,1)',

            label: 'Scatter Dataset',
            data: [{
                x: 10,
                y: 4
            }, {
                x:13,
                y: 8
            }, {
                x: 12,
                y: 4
            },
            {
                x: 18,
                y: 6
            },
            {
                x:19,
                y: 10
            },
            {
                x:13,
                y: 3
            },
            {
                x: 21,
                y: 15
            }]
        }]
    },
    options: {

        scales: {

            xAxes: [{
              label: 'eq',
              ticks: {
    beginAtZero: true
  },
                scaleLabel: {
                  display: true,
                  labelString: 'General Weighted Average'
                            },

                scaleBeginAtZero : true,
                gridLines:{
               
                display: false 


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

                 gridLines:{display: false  }



            }]
        }
    }
});

Chart.defaults.global.defaultFontStyle = 'Bold'
var ctx = document.getElementById("moodChart").getContext("2d");
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            pointBorderWidth:1,
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(0,0,0,1)',
            borderColor:'rgba(255,255,255,1)',

            label: 'Scatter Dataset',
            data: [{
                x: 10,
                y: 4
            }, {
                x:13,
                y: 8
            }, {
                x: 12,
                y: 4
            },
            {
                x: 18,
                y: 6
            },
            {
                x:19,
                y: 10
            },
            {
                x:13,
                y: 3
            },
            {
                x: 21,
                y: 15
            }]
        }]
    },
    options: {

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
               
                display: false 


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
                  labelString: 'General Mood'
                            },

                 gridLines:{display: false  }



            }]
        }
    }
});





});