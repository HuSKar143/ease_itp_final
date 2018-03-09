
@extends('layouts.app')
@section('content')

<!-- 
<div class="row">


<div class="column">
<select class="form-control" id="exampleFormControlSelect1">

@foreach ($filter as $val)
	  <option selected hidden>FROM</option>
      <option value="{{ $val->id }}"> {{$val->year}} {{$val->semester}}</option>
   
    @endforeach
</select>
</div>
<div class="column">
<select class="form-control" id="exampleFormControlSelect2">
<option selected hidden>TO</option>
</select>
</div>

<div class="column">
<button class="btn btn-primary btn-filter" >Submit</button>
</div>
</div> -->
<div class="card-body" >
<div class="row">


<div class="column">
<select class="form-control" id="exampleFormControlSelect1">

@foreach ($filter as $val)
	  <option selected hidden>FROM</option>
      <option value="{{ $val->id }}"> {{$val->year}} {{$val->semester}}</option>
   
    @endforeach
</select>
</div>
<div class="column">
<select class="form-control" id="exampleFormControlSelect2">
<option selected hidden>TO</option>
</select>
</div>

<div class="column">
<button class="btn btn-primary btn-filter" >Submit</button>
</div>
</div>
</div>

<div class="row">

 <div class="col-md-12">

<!-- Example Pie Chart Card-->
       <div class="card card-inverse card-primary mb-3">
            <div class="card-header"  style="background-color: #002663; color: white; ">
           
            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Results</strong></center></div>
 <div class="card-body" style="" >

 <select class="form-control" id="results">


	  <option selected hidden>Results</option>
      <option value="">Spearman Rank Correlation</option>
      <option value="">Significance Test</option>
      <option value="">Summary of Emotional Quotient</option>

</select>

<div class="row" style="margin-top:2%;">

 <div class="tabbable full-width-tabs">
  <ul class="nav nav-tabs" style="background-color: #e6e6e6; border-top-left-radius: 4px; border-top-right-radius: 4px;">
    <li><a data-toggle="tab" href="#home">Intrapersonal</a></li>
    <li><a data-toggle="tab" href="#menu1">Interpersonal </a></li>
    <li><a data-toggle="tab" href="#menu2">Stress Management</a></li>
    <li><a data-toggle="tab" href="#menu3">Adaptability</a></li>
    <li><a data-toggle="tab" href="#menu4">General Mood</a></li>
  </ul>
 </div>
 </div>
 
  <div class="tab-content" style="margin-top: 2%;">
    <div id="home" class="tab-pane active">
    
       <canvas id="intraChart"></canvas>
    </div>
    <div id="menu1" class="tab-pane fade">
      <canvas id="interChart"></canvas>
    </div>
    <div id="menu2" class="tab-pane fade">
      <canvas id="stressChart"></canvas>
    </div>
    <div id="menu3" class="tab-pane fade">
      <canvas id="adaptChart"></canvas>
    </div>
    <div id="menu4" class="tab-pane fade">
      <canvas id="moodChart"></canvas>
    </div>
  </div>

</div>
</div>
@stop 
@section('script')


	 <script type="text/javascript" src="{{asset('public/assets/js/scatterChart	.js')}}"></script>	
     <script type="text/javascript" src="{{asset('public/assets/js/filterstudents.js')}}"></script>

@endsection