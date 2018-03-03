
@extends('layouts.app')
@section('content')


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

@stop 
@section('script')
    <script type="text/javascript" src="{{asset('public/assets/js/filterstudents.js')}}"></script>

@endsection