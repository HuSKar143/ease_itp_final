
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

           
<div class="col-md-12">
<div class="row">
          <div class="col-md-8"><!-- Example Pie Chart Card-->
          <div class="card mb-3">


<div id="exTab2" class="container">	
<ul class="nav nav-tabs">
			<li class="active">
        <a  href="#1" data-toggle="tab">Overview</a>
			</li>
			<li><a href="#2" data-toggle="tab">Without clearfix</a>
			</li>
			<li><a href="#3" data-toggle="tab">Solution</a>
			</li>
</ul>

			<div class="tab-content ">
			  <div class="tab-pane active" id="1">

			  </div>
				
			  <div class="tab-pane" id="2">
    
			  </div>

       		  <div class="tab-pane" id="3">

			  </div>
			</div>
</div>

            
          </div>
          </div>
        <div class="col-md-4">
         <div class="card mb-3">
        <div class="card-header" style="background-color:#c10000 ; color: white;">
          <strong><i class="fa fa-area-chart"></i> Academic Performance</div></strong>
        <div class="card-body">
              
                  <canvas id="myChart"  class="lineChart" value=" asd>" ></canvas>
           
        </div>
        
      </div>
</div>

</div>




@stop 
@section('script')
    <script type="text/javascript" src="{{asset('public/assets/js/filterstudents.js')}}"></script>

@endsection