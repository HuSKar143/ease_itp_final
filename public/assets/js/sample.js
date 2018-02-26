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
                      
                             j.course_id
                            , j.student_name
                            , j.gender
                            , j.age
                            , j.year_level
                            , j.section
                          
                        ]);     
                }

                for(var i = 0; i < row.length; i++) {
                    var temp;
                    if(row[i][0]==1){
                        temp = "Institute of Computing";
                    }else if(row[i][0]==2){
                        temp = "Computer Science";
                    }

                    StudentListDataTable.row.add([
 
                        row[i][1],
                        temp,
                        row[i][2],
                        row[i][3],
                        row[i][4],
                        row[i][5],
<<<<<<< HEAD
                        '<button class="btn btn-primary btn-sm mdi mdi-remove-red-eye"></button>'
=======
                        row[i][6],
                        '<button data-pk="'+row[i][0]+'" class="btn btn-primary btn-sm mdi mdi-remove-red-eye viewProfile"></button>' 
>>>>>>> 80bfaa35b4ec30030528f15c4d818d37e2bea81b
                      
                    ]);

                }

               StudentListDataTable.draw();
                
                 $('.viewProfile').click(function(e){
                    
                    var holderID = $(this).attr('data-pk');
                     console.log(holderID);
                    window.location.href='studentProfile/'+holderID;
                       
                });
         

            }

            
            
        });

    }


});