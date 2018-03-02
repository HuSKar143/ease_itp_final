$(function() {

var x = document.getElementById("studentData").getAttribute("value");
// var a = document.getElementById("1st").getAttribute("value");
// var b = document.getElementById("2nd").getAttribute("value");
// var c = document.getElementById("3rd").getAttribute("value");
// var d = document.getElementById("4th").getAttribute("value");
// var e = document.getElementById("5th").getAttribute("value");
// console.log(x,a,b,c,d,e);
// var options = {
//     responsive: false,
//     maintainAspectRatio: true,
//     scale: {
//         ticks: {
//             beginAtZero: true,
//             max: 180,
//             maxTicksLimit: 3,
//             display: false
//         },

//     }
// };

// var studentData = {
//     labels: [
//         "Intrapersonal", "Interpersonal", "Stress Management", "Adaptability", "General Mood"
//     ],
//     datasets: [{
//         label: "Emotional Quotient",
//         backgroundColor: "rgba(255, 153, 255,0.6)",
//         borderColor: "rgba(255, 0, 255,0.7)",
//         borderWidth: "1",
//         pointBackgroundColor: "rgba(255, 153, 204,1)",
//         pointRadius: "1.5",
//         pointBorderColor: "rgba(255, 51, 0,1)",
//         pointHoverBackgroundColor: "rgba(51, 204, 51,1)",
//         pointHoverRadius: "1.5",
//         pointHoverBorderColor: "rgba(51, 204, 51,1)",
//         data: [
//             a, b, c, d, e
//         ]
//     }]
// };


// var ctx = document.getElementsByClassName("studentRadar")[0];
// var studentRadar = new Chart(ctx, {
//     type: 'radar',
//     data: studentData,
//     options: options
// });

        


        $.ajax({
            type: 'GET'
            , url: 'http://localhost/ease_itp_final/studentProfile/' +x +'/fff'
            , dataType: 'json'
            , success: function (data) {
                console.log(data);





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
        borderWidth: "1",
        pointBackgroundColor: "rgba(255, 255, 255,1)",
        pointRadius: "1.5",
        pointBorderColor: "rgba(193, 0, 0,1)",
        pointHoverBackgroundColor: "rgba(51, 204, 51,1)",
        pointHoverRadius: "1.5",
        pointHoverBorderColor: "rgba(51, 204, 51,1)",
        pointBorderWidth:4,
        
        data: [
            data[0].intrapersonal, data[0].interpersonal, data[0].stress, data[0].adapt,
            data[0].mood,
        ]
    }]
};


var ctx = document.getElementsByClassName("studentRadar")[0];
var studentRadar = new Chart(ctx, {
    type: 'radar',
    data: studentData,
    options: options

});
              

        

           
                

         

            }

            
            
        });

    
});