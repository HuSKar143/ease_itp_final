$(function() {
	
var x = document.getElementById("myChart").getAttribute("value");

$.ajax({
            type: 'GET'
            , url: 'http://localhost/ease_itp_final/studentProfile/' +x +'/ffff'
            , dataType: 'json'
            , success: function (data) {

    var school_year = [];
    var gwa = [];

    $.each(data, function(keys, values){
    	school_year.push(values['year'] + " " + values['semester']);
    	gwa.push(values['gwa']);
    });



 var studentdata =  { title:{text: "Hello"} ,labels: 
 		school_year,
        datasets: [{
        	lineTension:0,
            borderWidth: 1,
            pointBorderWidth:2,
            label: 'General Weighted Average',
            data: gwa,
            backgroundColor: ['rgba(0, 138, 230, .5)'],
            borderColor: [
                
                'rgba(0, 138, 230, 1)'
                
            ],
            
            pointBackgroundColor: [

            'rgba(255,255,255,1)', 	
            'rgba(255,255,255,1)', 
            'rgba(255,255,255,1)', 
            'rgba(255,255,255,1)', 
            'rgba(255,255,255,1)', 
            'rgba(255,255,255,1)', 

   			

            ],

            pointBorderColor: [

          
			'rgba(0, 138, 230, 1)', 
            'rgba(0, 138, 230, 1)', 
            'rgba(0, 138, 230, 1)', 
            'rgba(0, 138, 230, 1)', 
            'rgba(0, 138, 230, 1)', 
            'rgba(0, 138, 230, 1)'


            ],

            pointHoverBorderColor: [
            'rgba(0, 138, 230, 1)',  
            'rgba(0, 138, 230, 1)', 
            'rgba(0, 138, 230, 1)', 
            'rgba(0, 138, 230, 1)', 
            'rgba(0, 138, 230, 1)', 
            'rgba(0, 138, 230, 1)'
            ],   
        }]
    };

    
 var options = {
 			bezierCurve: true,
 	        scales: {
            yAxes: [{
            	  legend: {
            	  title: "Number of Sales",
 				  titleFontColor: 'rgba(0,0,0,1)',	
      			  display: true,
                  position: 'bottom',
                  labels: {
                fontColor: 'rgb(0,0,0,1)'
            }
                           },	

            	ticks:
            	{
                    beginAtZero:true,
                    reverse: true,
                    stepSize: 3,
                    max: 5,
                    min: 1
                }
            }],
       			 

          


       			 }


    };



var ctx = $("#myChart");
var myChart = new Chart(ctx, {
	
    type: 'line',
    data: studentdata,
    options: options,
    title:{
      text: "Employee Performance"      
    }
});

}})
}); 