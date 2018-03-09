$(function() {

var x = document.getElementById("studentData").getAttribute("value");


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