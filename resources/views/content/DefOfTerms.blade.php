
@extends('layouts.app')
@section('content')


    <div class="card card-inverse card-primary mb-3">

            <div class="card-header"  style="background-color: #002663; color: white; ">
   


            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Definition of Terms</div></strong></center>
            <div class="card-body">

<div class="row">
<div class="col-6-md" style="padding: 20px 20px 20px 20px;">
<h5> Pearson's Correlation Coefficient</h5>
<p align=justify> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; It is the test statistics that measures the statistical relationship, or association, between two continuous variables.  It is known as the best method of measuring the association between variables of interest because it is based on the method of covariance.  It gives information about the magnitude of the association, or correlation, as well as the direction of the relationship.</p>

<b> <p> Direction of Relationship: <br></b>


<b> Negative Relationship: </b> <i>General Weighted average is increasing and Emotional is also increasing.</i> <br>
<b> Positive Relationship: </b> <i>General Weighted average is increasing while Emotional is also decreasing or Vice versa</i> <br>

<p><b> Pearson's <i>R</i> strength indicator: </b><br></p>
<table  border="0" align="left" cellpadding="0" width="15%" style="text-align:right;">
<tr>
 <th>Very Weak </th>
 <td><b><i>: .00-.19 </i></b>
 </td>
 </tr>
 <tr>
 <th>Weak </th>
 <td><b><i>: .20-.39</i></b>
 </td>
 </tr>
 <tr>
 <th>Moderate: </th>
 <td><b><i>: .40-.59 </i></b>
 </td>
 </tr>
 <tr>
 <th>Strong </th>
 <td><b><i>: .60-.79 </i></b>
 </td>
 </tr>
 <tr>
 <th>Very Strong </th>
 <td><b><i>: .80-1.0 </i></b>
 </td>
 </tr></table>
</p>
</b></div>


 <div style="border: 1px solid rgba(0,0,0,0.5); border-radius: 20px; margin-left: 2%; padding: 15px 15px 15px 15px; height: 18%;">
<i style="color:red;"> Reminder: </i><br>
<b>General Weighted average: </b><i>The bigger the numerical value the smaller the descriptive value. Which means <b><i>1</i></b> is the highest and <b><i>5</i></b> is the lowest</i></br></br>
</p></div>





</div>




</div>
</div>



@endsection 

@section('script')
    <script type="text/javascript" src="{{asset('public/assets/js/sample.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/chart.js/chart.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/js/lineChart.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/js/radardata.js')}}"></script>


@endsection




