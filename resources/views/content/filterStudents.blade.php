
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

<div class="row">

 <div class="col-md-8" style="
">

<!-- Example Pie Chart Card-->
       <div class="card card-inverse card-primary mb-3">
            <div class="card-header"  style="background-color: #002663; color: white; ">
           
            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Results</strong></center></div>
 <div class="card-body" >
 
  <ul class="nav nav-tabs">
    <li><a data-toggle="tab" href="#home">Summary</a></li>
    <li><a data-toggle="tab" href="#menu1">Results 1 </a></li>
    <li><a data-toggle="tab" href="#menu2">Results 2</a></li>
    <li><a data-toggle="tab" href="#menu3">Results 3</a></li>
  </ul>
 

  <div class="tab-content">
    <div id="home" class="tab-pane active">
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
  </div>

</div>
</div>
@stop 
@section('script')



     <script type="text/javascript" src="{{asset('public/assets/js/filterstudents.js')}}"></script>

@endsection