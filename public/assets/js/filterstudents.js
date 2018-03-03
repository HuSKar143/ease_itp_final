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
		
			
			$.ajax({
				url: 'http://localhost/ease_itp_final/getFilterGraph/'+ to + '/' + from,
				method: 'get',
				dataType: 'json',
				success: function(data){
					console.log(data);

				}
			});
		});

	});