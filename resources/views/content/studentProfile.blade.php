
@extends('layouts.app') 
@section('content')






<div class="row">
  <div class="studentid">
  @foreach ($profile as $val)

  	 <img class="profpic" src= <?php 

  	 if($val->gender=="m") {

  	 	 echo  asset('public/assets/profile_pics/boy.png');

  	 	 }
  	 	 
  	 else if($val->gender=="f") {

  	 	 echo  asset('public/assets/profile_pics/girl.png');

  	 	 }

  	 	 ?>>

  @endforeach
  </div>


  <!--<div class="studentinfo"> 
  <h1 class="info"> Name: </h1> <br>
  <h1 class="info"> Address: </h1><br>
  <h1 class="info">  Course: </h1><br>
  <h1 class="info">  Year & Section: </h1></div>
 
</div> -->
<div class="studentinfo info" > 
<table  border="0" align="left" cellpadding="5">
  @foreach ($profile as $val)
  <tr>
    
    <td><div align="left">Name:</td>
    <td> <b>{{$val->lastname}}</b>, {{$val->firstname}}  </td>
  </tr>
<tr>
    <td valign="top"><div align="left">Course:</div></td>
    <td valign="top"> <?php 
   
    if ($val->coursename=="BSIT") {
    	
    	echo "Information Technology"; 
    }
    
    else if($val->coursename=="BSCS"){
    	
    	echo "Computer Science";
	}

?>
    </td>
  <tr>
    <td valign="top"><div align="left">Gender:</div></td>
    <td valign="top"> <?php 
   
    if ($val->gender=="m") {

    	echo "Male";
    }


	else if ($val->gender=="f") {

    	echo "Female";
    }

    	?>  </td>
  </tr>
  
  </tr>
  <tr>
    <td valign="top"><div align="left"> Age: </div></td>
    <td valign="top"> {{$val->age}} </td>
  </tr>
   <tr>
    <td valign="top"><div align="left">Year level: </div></td>
    <td valign="top"> <?php 
   
    if ($val->yearlevel=="2") {

    	echo "2nd Year";
    }


	else if ($val->yearlevel=="3") {

    	echo "3rd Year";
    }

    else if ($val->yearlevel=="4") {

    	echo "4th Year";
    }

  

    	





    	?> 


    	</td>
  </tr>
   <tr>
    <td valign="top"><div align="left">Section: </div></td>
    <td valign="top">  {{$val->section}} </td>

  </tr>
</table>
<p align="center"><a href="index.php"></a></p>
</div>
</td>
</tr>
@endforeach
</table>

</div>





<div class="row">
	
	<div class="column"> 
		Radar graph
	</div>

	<div class="column">

	GWA
	</div>





</div>
</body>


@stop 

@section('script')
    <script type="text/javascript" src="{{asset('public/assets/js/sample.js')}}"></script>
@endsection




