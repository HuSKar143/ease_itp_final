
@extends('layouts.app') 
@section('content')



<div class="row">
<p>BASIC INFORMATION</p>
</div>
<div class="row">

 @foreach ($profile as $val)
                                        
   <p> {{$val->student_name}}</p>
                                     
@endforeach

</div>


@endsection 



