
@extends('layouts.app') 
@section('content')



<div class="row">
<p>BASIC INFORMATION</p>
</div>
<div class="row">

 @foreach ($profile as $val)
                                        
   <p> {{$val->firstname}}</p>
   <p> {{$val->lastname}}</p>
                                     
@endforeach

</div>


@endsection 



