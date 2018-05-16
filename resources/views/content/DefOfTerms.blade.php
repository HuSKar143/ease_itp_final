
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

<p><b> Strength of Relationship: </b></p>
<table class="tg" style="margin:0 auto;">
  <tr>
    <th class="tg-ml2k"><b>Indicator</th>
    <th class="tg-ml2k"><b><i>r</i></th></b>
  </tr>
  <tr>
    <td class="tg-kvf6">Very Weak</td>
    <td class="tg-wn7o">0.00-0.19</td>
  </tr>
  <tr>
    <td class="tg-kvf6">Weak</td>
    <td class="tg-qtrh">0.20-0.39</td>
  </tr>
  <tr>
    <td class="tg-kvf6">Moderate</td>
    <td class="tg-qtrh">0.40-0.59</td>
  </tr>
  <tr>
    <td class="tg-kvf6">Strong</td>
    <td class="tg-qtrh">0.60-0.79</td>
  </tr>
  <tr>
    <td class="tg-kvf6">Very Strong</td>
    <td class="tg-qtrh">0.80-1.0</td>
  </tr>
</table>



<i style="color:red;"> Reminder: </i><br>
<b>General Weighted average: </b><i>The bigger the numerical value the smaller the descriptive value. Which means <b><i>1</i></b> is the highest and <b><i>5</i></b> is the lowest.</i><br>
<br>


<b> <H5> Direction of Relationship: </H5></b>


<b> Negative Relationship: </b> General Weighted average's descriptive value is increasing and Emotional Quotient is also increasing. Here is a sample data of a negative relationship: <br>
<table class="negaTable" style="text-align: center; margin:0 auto;">
  <tr>
    <th class="negaTable-baqh" colspan="4">Sample Data</th>
  </tr>
  <tr>
    <td class="negaTable-amwm">GWA Numerical Value</td>
    <td class="negaTable-amwm">Descriptive Value</td>
    <td class="negaTable-amwm">EQ Score Numerical Value</td>
    <td class="negaTable-amwm">Descriptive Value</td>
  </tr>
  <tr>
    <td class="negaTable-amwm">1.43</td>
    <td class="negaTable-lqud">High</td>
    <td class="negaTable-amwm">120</td>
    <td class="negaTable-lqud">High</td>
  </tr>
  <tr>
    <td class="negaTable-amwm">1.2</td>
    <td class="negaTable-lqud">High</td>
    <td class="negaTable-amwm">130</td>
    <td class="negaTable-lqud">High</td>
  </tr>
  <tr>
    <td class="negaTable-amwm">2.1</td>
    <td class="negaTable-lqud">Average</td>
    <td class="negaTable-amwm">98</td>
    <td class="negaTable-lqud">Average</td>
  </tr>
  <tr>
    <td class="negaTable-amwm">3.16</td>
    <td class="negaTable-lqud">Low</td>
    <td class="negaTable-amwm">76</td>
    <td class="negaTable-lqud">low</td>
  </tr>
  <tr>
    <td class="negaTable-amwm">3.32</td>
    <td class="negaTable-lqud">Low</td>
    <td class="negaTable-amwm">60</td>
    <td class="negaTable-lqud">Low</td>
  </tr>
</table>
<br>
<i><p> Negative relationship because GWA's numerical value is increasing while EQ scores' numberical value is decreasing or Vice versa</b>. They both have an <b>increasing or decreasing descriptive values</b> because the smaller the numerical number of GWA the higher the descriptive value.  </p></i>
<br>
<b> Positive Relationship: </b> General Weighted average is increasing while Emotional Quotient is also decreasing or Vice versa. Here is a sample data of a negative relationship: <br><br>
<table class="posiTable" style="text-align: center; margin:0 auto;">
  <tr>
    <th class="posiTable-baqh" colspan="4">Sample Data</th>
  </tr>
  <tr>
    <td class="posiTable-amwm">GWA Numerical Value</td>
    <td class="posiTable-amwm">Descriptive Value</td>
    <td class="posiTable-amwm">EQ Score Numerical Value</td>
    <td class="posiTable-amwm">Descriptive Value</td>
  </tr>
  <tr>
    <td class="posiTable-amwm">1.43</td>
    <td class="posiTable-vk0p">High</td>
    <td class="posiTable-amwm">60</td>
    <td class="posiTable-lqud">Low</td>
  </tr>
  <tr>
    <td class="posiTable-amwm">1.2</td>
    <td class="posiTable-vk0p">High</td>
    <td class="posiTable-amwm">71</td>
    <td class="posiTable-lqud">Low</td>
  </tr>
  <tr>
    <td class="posiTable-amwm">3.26</td>
    <td class="posiTable-vk0p">Low</td>
    <td class="posiTable-amwm">146</td>
    <td class="posiTable-lqud">High</td>
  </tr>
  <tr>
    <td class="posiTable-amwm">3.12</td>
    <td class="posiTable-vk0p">Low</td>
    <td class="posiTable-amwm">132</td>
    <td class="posiTable-lqud">High</td>
  </tr>
  <tr>
    <td class="posiTable-amwm">3.32</td>
    <td class="posiTable-vk0p">Low</td>
    <td class="posiTable-amwm">157</td>
    <td class="posiTable-lqud">High</td>
  </tr>
</table>
<br>
<i><p> Positive relationship because GWA and EQ scores' <b>numerical values are both increasing</b>. They have <b>opposite descriptive values</b> because the highest value of GWA is 1 and 5 is the lowest.  </p></i>
<hr>

<p><b>Slope of a regression line (b)</b> represents the rate of change in y as x changes. Because y is dependent on x, the slope describes the predicted values of y given x.</p>
</div>











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




