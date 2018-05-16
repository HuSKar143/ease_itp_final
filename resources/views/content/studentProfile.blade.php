
@extends('layouts.app')
@section('content')




<section class="content">


           
<div class="col-lg-12 fontProductSans">

<!-- Example Pie Chart Card-->
       <div class="card card-inverse card-primary mb-3">

            <div class="card-header"  style="background-color: #002663; color: white; ">
            <a class="nav-link back-button" href="{{ url('/listOfStudents') }}">
            <i class="fa fa-fw fa-mail-reply"></i></a>


            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Student Information</div></strong></center>
            <div class="card-body">



<div class="row">
<div class="col-md-6">
 <div class="card card-inverse card-primary mb-3">
            <div class="card-header"  style="background-color: #002663; color: white; ">
             <strong><i class="fa fa-drivers-license-o" style=" margin-top:1%;"></i> Profile</div></strong>
             <div class="pull-right">
            
             </div>
 <div class="card-body">            
<div class="printProfile" >
 @foreach ($profile as $val)
               <a href = "{{ url('/print/information/'.$val->id) }}"  style="background-color: blue; padding: 7px 11px 7px 11px; border: none; color:white; border-radius: 5px;  cursor: pointer;">Print</a>
             @endforeach
</div>

<div class="row">  
<div class="col-lg-12">
<div class="studentinfo info fontProductSans" style="font-size: 9pt;" > 
<table  border="0" align="left" cellpadding="5" width="100%">

  @foreach ($profile as $val)

     <tr>

    <th width="35%" rowspan="7"><img class="profpic" src= <?php 
               if($val->gender=="m") {
                     echo  asset('public/assets/profile_pics/boy.png');
                                     }     
               else if($val->gender=="f") {
                     echo  asset('public/assets/profile_pics/girl.png');
                                           }?>></th>
    
      </tr>
  @endforeach




  @foreach ($profile as $val)
  <tr>
    
    <td width="20%"><div align="left">Name:</td>
    <td > <b>{{$val->lastname}}</b>, {{$val->firstname}}  </td>
  </tr>
<tr>
    <td valign="center"><div align="left">Course:</div></td>
    <td valign="center"> <?php 
   
    if ($val->coursename=="BSIT") {
      
      echo "Information Technology"; 
    }
    
    else if($val->coursename=="BSCS"){
      
      echo "Computer Science";
  }

?>
    </td>
  <tr>
    <td valign="center"><div align="left">Gender:</div></td>
    <td valign="center"> <?php 
   
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

</div>
</div>


@endforeach
</div>
</div>

</div>
</div>

      <div class="col-lg-6"><!-- Example Pie Chart Card-->
          <div class="card mb-3">
            <div class="card-header" style="background-color: #c10000; color:white;">
             <strong> <i class="fa fa-pie-chart"></i> Prediction Result</div> </strong>
            <div class="card-body">
             <b><i>Interpretation: </i></b><div id="predictInterpret"></div> </i>
            
            </div>
            
          </div>
          </div>
          </div>
  <!--<div class="studentinfo"> 
  <h1 class="info"> Name: </h1> <br>
  <h1 class="info"> Address: </h1><br>
  <h1 class="info">  Course: </h1><br>
  <h1 class="info">  Year & Section: </h1></div>
 
</div> -->


<div class="row" style="margin-top: 4%;">
          <div class="col-lg-6"><!-- Example Pie Chart Card-->
          <div class="card mb-3">
            <div class="card-header" style="background-color: #c10000; color:white;">
             <strong> <i class="fa fa-pie-chart"></i> Emotional Quotient</div> </strong>
            <div class="card-body">
             @foreach ($profile as $val)
              <canvas id="studentData" value="<?php echo $val->id ?>" class="studentRadar"  > </canvas>
              @endforeach 
            </div>

            <div class="card-footer bg-transparent">
            <p id="interpretEQ"></p>
            </div>
            
          </div>
          </div>
        <div class="col-lg-6">

         <div class="card mb-3">
        <div class="card-header" style="background-color:#c10000 ; color: white;">
          <strong><i class="fa fa-area-chart"></i> Academic Performance</div></strong>
        <div class="card-body" >
          @foreach ($profile as $val)      
                  <canvas id="myChart"  class="lineChart" value=" <?php echo $val->id ?>" ></canvas>
                @endforeach 
        </div>

         <div class="card-footer bg-transparent">

        <p id="interpretGWA"></p>
        </div>
        
      </div>
</div>
</div>





</div>
    </section>







@endsection 

@section('script')
    <script type="text/javascript" src="{{asset('public/assets/js/sample.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/chart.js/chart.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/js/lineChart.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/js/radardata.js')}}"></script>


@endsection




