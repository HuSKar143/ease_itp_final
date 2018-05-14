@extends('layouts.app') 


@section('content')

<center>
<div class="col-md-5 fontProductSans" style="margin-top: 8%;">
      <div class="card card-inverse card-primary mb-3 boxshadow">
            <div class="card-header"  style="background-color: orange; color: white; font-size: 12pt; ">
           
            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Import Data </strong></center></div>
 <div class="card-body">
<h5> Choose file to import </h5>
<a href="{{ asset('public/assets/TestSample.xlsx') }}" download="Sample">Sample.xlsx</a>

<br>
<br>
<form role="form" method="post" enctype="multipart/form-data" action="http://localhost/ease_itp_final/import/excel">
  {{ csrf_field() }}
  <input class="form-contol-file" type="file" name="importedFile">  <br>
  <button class="btn btn-danger"  type="submit" style="margin-top: 5%; float: right; background-color: orange; border-color: orange;">Import</button>
</form>

@if (session('success'))
    <div class="alert alert-success">
        {{ session('success') }}
    </div>
@endif

</div>
</div>
</div>
</center>

@stop 

@section('script')
    <script type="text/javascript" src="{{asset('public/assets/js/sample.js')}}"></script>
@endsection