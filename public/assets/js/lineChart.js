$(function() {
	


 var studentdata =  { labels: 
 		["2nd Year(1)", "2nd year(2)", "3rd year(1)", "3rd year(2)", "4th year(1)", "4th year(2)"],
        datasets: [{
        
            borderWidth: 3,
            pointBorderWidth:2,
            label: 'General Weighted Average',
            data: [1.2, 5, 1.3, 3, 2, 1.3],
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
	title: {
		text: "Number of iPhones Sold in Different Quarters"
	},
    type: 'line',
    data: studentdata,
    options: options,
    title:{
      text: "Employee Performance"      
    }
});


});