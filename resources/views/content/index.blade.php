
@extends('layouts.app') 
@section('content')





<div class="content">

<div class="row">

<div class="col-md-8">

<!-- Example Pie Chart Card-->
       <div class="card card-inverse card-primary mb-3">
            <div class="card-header"  style="background-color: #002663; color: white; ">
           
            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Summary of Emotional Quotient of the students</strong></center></div>
 <div class="card-body" style="" >

       <canvas id="summaryChartEq"></canvas>

  </div>

</div>
</div>

<div class="col-md-4">
      <div class="card card-inverse card-primary mb-3">
            <div class="card-header"  style="background-color: #003c9e; color: white; font-size: 8pt; ">
           
            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Import Data </strong></center></div>
 <div class="card-body">
<h5> Choose file to import </h5>
<a href="{{ asset('public/assets/TestSample.xlsx') }}" download="Sample">Sample.xlsx</a>

<br>

<form role="form" method="post" enctype="multipart/form-data" action="http://localhost/ease_itp_final/import/excel">
  {{ csrf_field() }}
  <input class="form-contol-file" type="file" name="importedFile">  
  <button class="btn btn-primary" type="submit" style="margin-top: 2%;">Import</button>
</form>

@if (session('success'))
    <div class="alert alert-success">
        {{ session('success') }}
    </div>
@endif

</div>
</div>
</div>






</div>
<div class="row">
 <div class="col-md-8">

<!-- Example Pie Chart Card-->
       <div class="card card-inverse card-primary mb-3">
            <div class="card-header"  style="background-color: #002663; color: white; ">
           
            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Emotional Quotient Summary by Gender</strong></center></div>
 <div class="card-body" style="" >



<div class="row" style="margin-top:2%;">

 <div class="tabbable full-width-tabs">
  <ul class="nav nav-tabs" style="background-color: #e6e6e6; border-top-left-radius: 4px; border-top-right-radius: 4px;">
    <li><a data-toggle="tab" href="#a">Intrapersonal</a></li>
    <li><a data-toggle="tab" href="#b">Interpersonal </a></li>
    <li><a data-toggle="tab" href="#c">Stress Management</a></li>
    <li><a data-toggle="tab" href="#d">Adaptability</a></li>
    <li><a data-toggle="tab" href="#e">General Mood</a></li>
  </ul>
 </div>
 </div>
 
  <div class="tab-content" style="margin-top: 2%;">
    <div id="a" class="tab-pane active">
    
       <canvas id="intraDoughChart"></canvas>
    </div>
    <div id="b" class="tab-pane fade">
      <canvas id="interDoughChart"></canvas>
    </div>
    <div id="c" class="tab-pane fade">
      <canvas id="stressDoughChart"></canvas>
    </div>
    <div id="d" class="tab-pane fade">
      <canvas id="adaptDoughChart"></canvas>
    </div>
    <div id="e" class="tab-pane fade">
      <canvas id="moodDoughChart"></canvas>
    </div>
  </div>

</div>

</div><!--content -->





@stop()
@section('script')

	
     <script type="text/javascript" src="{{asset('public/assets/js/summary.js')}}"></script>


@endsection
