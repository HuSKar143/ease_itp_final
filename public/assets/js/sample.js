$(function() {


    if($('#StudentList')[0]){
        
        var StudentList = $('#StudentList'),
            StudentListFilter = $('#StudentListFilter'),
            StudentListDataTable = StudentList.DataTable();
        


        $.ajax({
            type: 'GET'
            , url: 'studentLists'
            , dataType: 'json'
            , success: function (data) {

              
                StudentListDataTable.clear();

                var row = [];
            

                for (var i = 0; i < data.length; i++) {

                    var j = data[i];

                   

                        row.push([
                             j.id
                            , j.firstname
                            , j.lastname
                            , j.coursename
                            , j.gender
                            , j.age
                            , j.yearlevel
                            , j.section
                          
                        ]);     
                }

                for(var i = 0; i < row.length; i++) {
                    

                    StudentListDataTable.row.add([
                        
                        row[i][1],
                        row[i][2],
                        row[i][3],
                        row[i][4],
                        row[i][5],
                        row[i][6],
                        row[i][7],
                        '<center><button value="'+row[i][0]+'"class="btn btn-primary btn-sm mdi mdi-remove-red-eye viewProfile"></button></center>' 

                      
                    ]);

                 }

               StudentListDataTable.draw();
                
                //  $('.viewProfile').click(function(e){
                    
                //     var holderID = $(this).attr('value');
                //      console.log(holderID);
                //     // window.location.href='studentProfile/'+holderID;
                       
                // });
                $("#StudentList").on("click", " .viewProfile", function(e){
                    var holderID = $(this).attr('value');
                     console.log(holderID);
                    window.location.href='studentProfile/'+holderID;

                });
         

            }

            
            
        });

    }


});