
@extends('layouts.app')
@section('css')
<style type="text/css">
	.hide{
		display: none;
	}
</style>
@endsection
@section('content')

<div class="row">



 <div class="column col-lg-12" width=100% >

<!-- Example Pie Chart Card-->
       <div class="card card-inverse card-primary mb-3">
            <div class="card-header"  style="background-color: #001d4c; color: white; ">
           
            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Results</strong></center></div>
 <div class="card-body" style="padding: 40px 40px 40px 40px;" >

{{-- Dropdown filter --}}
 <h4>Filter</h4>
<div class="row" >
<div class="column" style="padding: 5px 5px 5px 5px;" >
     <select class="form-control" id="exampleFormControlSelect1">
      @foreach ($filter as $val)
          <option selected hidden value="0">FROM</option>
            <option value="{{ $val->year }}"> School Year {{$val->year}}</option>
      @endforeach
    </select>
  </div>

  <div class="hidden-compared-year hide" style="margin-top: 5px;">
    <div class="column">
      <select class="form-control " style="width:auto;"  id="exampleFormControlSelect2">
            
      </select>
    </div>
  
  </div>
    <div class="column" >
      <button class="btn btn-primary btn-compare-graph" style="margin-top: 5px;">Compare</button>
      <a href="#" class="btn btn-primary print" style="margin-top:5px;"><span class="fa fa-print"></span> Print</a>
    </div>
   
</div>


{{-- Dropdown Result Selection --}}


 <select class="form-control" id="selectResults" style="margin-bottom: 2%;">



      <option value="1">Pearson's Correlation Coefficient</option>
      <option value="2">Summary of Emotional Quotient</option>
      <option value="3">Students' Emotional Quotient and GWA report</option>
   

</select>




<div class="pr-price d1">

   <div class="card card-inverse card-primary mb-3">
            <div class="card-header"  style="background-color: #003c9e; color: white; font-size: 8pt; ">
           
            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Pearson's Correlation Coefficient</strong></center></div>
 

 <div class="card-body" >

 <div class="tabbable full-width-tabs">
  <ul class="nav nav-tabs" style="background-color: #e6e6e6; border-top-left-radius: 4px; border-top-right-radius: 4px;">
    <li onclick ="yearInterpret('intrapersonalinterpret'); comparedInterpret('intrapersonalinterpret')"><a data-toggle="tab" href="#intrapersonalContainer">Intrapersonal</a></li>
    <li onclick ="yearInterpret('interpersonalinterpret'); comparedInterpret('interpersonalinterpret')"><a data-toggle="tab" href="#interpersonalContainer">Interpersonal </a></li>
    <li onclick ="yearInterpret('stressinterpret'); comparedInterpret('stressinterpret')"><a data-toggle="tab" href="#stressContainer">Stress Management</a></li>
    <li onclick ="yearInterpret('adaptinterpret'); comparedInterpret('adaptinterpret')"><a data-toggle="tab" href="#adaptabilityContainer">Adaptability</a></li>
    <li onclick ="yearInterpret('moodinterpret'); comparedInterpret('moodinterpret')"><a data-toggle="tab" href="#moodContainer">General Mood</a></li>
  </ul>
 </div>
 </div>
 
  <div class="tab-content" style="margin-top: -2%; padding: 25px 25px 25px 25px;"" >
    <div id="intrapersonalContainer" class="tab-pane active">
    </div>
    <div id="interpersonalContainer" class="tab-pane fade">
    </div>
    <div id="stressContainer" class="tab-pane fade">
    </div>
    <div id="adaptabilityContainer" class="tab-pane fade">
    </div>
    <div id="moodContainer" class="tab-pane fade">
    </div>
  </div>
  <div class="card-footer bg-transparent"><b>Interpretation: </b><br>
  <p id="pearsonInterpret"></p>
  <p id="pearsonInterpret2"></p>
 
  <i>
  <p id="comparedInterpret"></p>
  <p id="comparedInterpret2"></p>

</i>

{{-- Store prediction values --}}
 <p id="wadap">  </p> 
 <p id="wadap2"> </p> 
 <p id="wadap3"> </p>


<p id="comparedInter"> </p>
<p id="comparedIntra"> </p>
<p id="comparedStress"> </p>
<p id="comparedAdapt"> </p>
<p id="comparedMood"> </p>
  </div>






</div>

</div>

 <div class="pr-price d2">

<!-- Example Pie Chart Card-->
       <div class="card card-inverse card-primary mb-3">
            <div class="card-header"  style="background-color: #003c9e; color: white; font-size: 8pt; ">
           
            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Bar Graph</strong></center></div>
 <div class="card-body">





	 <div class="tabbable full-width-tabs">
		  <ul class="nav nav-tabs" style="background-color: #e6e6e6; border-top-left-radius: 4px; border-top-right-radius: 4px;">
		    <li><a data-toggle="tab" href="#intrapersonalBarContainer">Intrapersonal</a></li>
		    <li><a data-toggle="tab" href="#interpersonalBarContainer">Interpersonal </a></li>
		    <li><a data-toggle="tab" href="#stressBarContainer">Stress Management</a></li>
		    <li><a data-toggle="tab" href="#adaptabilityBarContainer">Adaptability</a></li>
		    <li><a data-toggle="tab" href="#moodBarContainer">General Mood</a></li>
		  </ul>
	 </div>
 
  <div class="tab-content" style="margin-top: 2%;">
    <div id="interpersonalBarContainer" class="tab-pane active"></div>
    <div id="intrapersonalBarContainer" class="tab-pane fade"></div>
    <div id="stressBarContainer" class="tab-pane fade"></div>
    <div id="adaptabilityBarContainer" class="tab-pane fade"></div>
    <div id="moodBarContainer" class="tab-pane fade"></div>
  </div>

</div>
<div class="card-footer bg-transparent"><b>Interpretation: </b><div id="barInterpret"></div></div>
		</div>
</div>
{{-- 
//STUDENTS EQ AND GWA REPORT --}}

<div class="pr-price d3">

<!-- Example Pie Chart Card-->
       <div class="card card-inverse card-primary mb-3">
            <div class="card-header"  style="background-color: #003c9e; color: white; font-size: 8pt; ">
           
            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> 
              Datatable for Students GWA and EQ </strong></center></div>
 <div class="card-body">

<table id="studentReport" class="table table-bordered table-striped table-sm" style="text-align: center;" >
    <thead class="nosort thead-light">
        <tr >
            <th>Last Name</th>
            <th>Interpersonal</th>
            <th>Intrapersonal</th>
            <th>Adaptability</th>
            <th>Stress Management</th>
            <th>General Mood</th>   
        </tr>
    </thead>
</table>

</div>
</div>










</div>
</div>
</div>




</div>


@endsection
@section('script')

	   <script type="text/javascript" src="{{asset('public/assets/datatables/buttons.print.min.js')}}"></script>
     <script type="text/javascript" src="{{asset('public/assets/datatables/dataTables.buttons.min.js')}}"></script>
     <script type="text/javascript" src="{{asset('public/assets/js/filterstudents.js')}}"></script>
     <script type="text/javascript" src="{{asset('public/assets/js/filterstudents-extension.js')}}"></script>
     <script type="text/javascript" src="{{asset('public/assets/js/dropDown.js')}}"></script>
     <!-- <script type="text/javascript">
      $(function(){
        $(".print").click(function(event){
          var oldBody = document.body.innerHTML;
          var newBody = "<html><head><title></title></head><body>" + 
               "test" + "</body>";
          document.body.innerHTML = newBody;
          window.print();
          document.body.innerHTML = oldBody;
        });
      });

     </script> -->
     <script type="text/javascript">
       $('.print').click(function(event){
        var select = $("#exampleFormControlSelect1").val();
        var select1 = $("#exampleFormControlSelect2").val();


           $(this).attr('href', 'http://localhost/ease_itp_final/get/pdf/'+select+'/'+select1);

       });


     </script>
      <script type="text/javascript">
            $(document).ready(function() {
        $('#studentReport ').DataTable( {
            dom: 'Bfrtip',
           buttons: [
               'print'
            ]
        } );
    } );
</script>
@endsection