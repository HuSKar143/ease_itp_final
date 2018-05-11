@extends('layouts.app') 


@section('content')

<div class="row ">
  <div class="studentid fontProductSans">
  	 <img class="profpic" src= {{ asset('public/assets/images/profpic.jpg') }} > 
  </div>


  <!--<div class="studentinfo"> 
  <h1 class="info"> Name: </h1> <br>
  <h1 class="info"> Address: </h1><br>
  <h1 class="info">  Course: </h1><br>
  <h1 class="info">  Year & Section: </h1></div>
 
</div> --> 
<div class="studentinfo info fontProductSans" > 
<table  border="0" align="left" cellpadding="5">
  
  <tr>
    
    <td><div align="left">Name:</td>
    <td> NAME </td>
  </tr>

  <tr>
    <td valign="top"><div align="left">Gender:</div></td>
    <td valign="top"> GENDER </td>
  </tr>
  <tr>
    <td valign="top"><div align="left">Address:</div></td>
    <td valign="top"> ADDRESS </td>
  </tr>
  <tr>
    <td valign="top"><div align="left">Contact No.: </div></td>
    <td valign="top"> CONTACT NUMBER </td>
  </tr>
   <tr>
    <td valign="top"><div align="left">Course </div></td>
    <td valign="top"> Course </td>
  </tr>
   <tr>
    <td valign="top"><div align="left">Year and Section: </div></td>
    <td valign="top"> Year and Section</td>
  </tr>
</table>
<p align="center"><a href="index.php"></a></p>
</div>
</td>
</tr>
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