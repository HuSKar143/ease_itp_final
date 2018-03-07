$(function(){

		$("#exampleFormControlSelect1").change(function(event){
			var start = this.value;
			$.ajax({
				url: 'http://localhost/ease_itp_final/filterStudents/'+start,
				method: 'get',
				dataType: 'json',
				success: function(data){
					var option = "";
					$("#exampleFormControlSelect2").html("");

						$.each(data, function(key, event){
							option += "<option value='"+event['id']+"'>"+event['year']+" "+event['semester']+"</option>";
						});

					$("#exampleFormControlSelect2").append(option);

				}
			});


		});

		$(".btn-filter").click(function(event){
			
			var from = $("#exampleFormControlSelect1").val();
			var to = $("#exampleFormControlSelect2").val();
			var filteredStudents = $('#filteredStudents'),
            StudentListFilter = $('#StudentListFilter'),
            filteredStudentsDataTable = filteredStudents.DataTable();
			
			
			$.ajax({
				url: 'http://localhost/ease_itp_final/getFilterGraph/'+ to + '/' + from,
				method: 'get',
				dataType: 'json',
				success: function(data){
					// console.log(data);
		var x = [2,1,3,4,5,5,7,2];
		var sorted, d, i, n;
		var sort;
        n = x.length;
        sorted = [1,2,2,3,4,5,5,7];
        d = new Array(n);
        for (i = 0; i < n; i++) {
            var rank, first, last;
         // Handle tied ranks.
            first = sorted.indexOf(x[i]);
            last = sorted.lastIndexOf(x[i]);
            if (first === last) {
                rank = first;
            } else {
                rank = (first + last) / 2;
            }
         // Add 1 because ranks start with 1.
            d[i] = rank + 1;
        }
        

console.log(d); 

				}
			});


});
				
	});

