
@extends('layouts.app')
@section('content')


<div class="row">


<div class="column">
<select class="form-control" id="exampleFormControlSelect1">

@foreach ($filter as $val)
	  <option selected hidden>Start Semester</option>
      <option value="{{ $val->id }}"> {{$val->year}} {{$val->semester}}</option>
   
    @endforeach
</select>
</div>
<div class="column">
<select class="form-control" id="exampleFormControlSelect2">

</select>
</div>

<div class="column">
<button class="btn btn-primary btn-filter" >Submit</button>
</div>
</div>

@section('script')
<script type="text/javascript">
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
</script>
@endsection





























@stop 
@section('script')
    <script type="text/javascript" src="{{asset('public/assets/js/sample.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/chart.js/chart.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/js/lineChart.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/js/radardata.js')}}"></script>
@endsection