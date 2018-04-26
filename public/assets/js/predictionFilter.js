$(function() {

 $.ajax({
            type: 'GET'
            , url: 'http://localhost/ease_itp_final/studentProfile/eut'
            , dataType: 'json'
            , success: function (data) {
                console.log(data);


                alert("a");

              

        

           
                

         

            }

            
            
        });


});