$(function() {

    $.ajax({
                url: 'http://localhost/ease_itp_final/dashboard/',
                method: 'get',
                dataType: 'json',
                success: function(data){
                
           studentCount(data);


                   

}//success
});//ajax

});//function
function studentCount(data){
var totalstudents = data.length;
console.log(totalstudents);
$("#currentStudents").empty();
$("#currentStudents").append(totalstudents);

}

