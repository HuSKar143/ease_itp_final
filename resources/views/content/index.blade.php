
@extends('layouts.app') 
@section('content')





<div class="content">
<div class="row">
<div class="col-sm-12 col-lg-12 fontProductSans">
                <div class="card text-white" style="background-color: #20a8d8;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0">
                            <span>School year 2016-2017</span>
                        </h4>
                        <p class="text-light">EQ and AP: Very strong</p>

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">
                            <canvas id="widgetChart1"></canvas>
                        </div>

                    </div>

                </div>
            </div>
            </div>

<div class="row" style="margin-top:3%;">

            <div class="col-sm-6 col-lg-4 fontProductSans">
                <div class="card text-white" style="background-color:blue;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0">
                            <span class="count">210</span>
                        </h4>
                        <p class="text-light">Currently Enrolled Students</p>

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">
                       {{--      <canvas id="widgetChart3"></canvas> --}}
                        </div>

                    </div>

                </div>
            </div>


            <div class="col-sm-6 col-lg-4 fontProductSans">
                <div class="card text-white" style="background-color: red;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0">
                            <span><b>75%</b> of 210</span>
                        </h4>
                        <p class="text-light">Students with low Interpersonal</p>

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">
                          {{--   <canvas id="widgetChart4"></canvas> --}}
                        </div>

                    </div>

                </div>
            </div>

               <div class="col-sm-6 col-lg-4 fontProductSans">
                <div class="card text-white" style="background-color:green;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0">
                            <span class="count">210</span>
                        </h4>
                        <p class="text-light">Currently Enrolled Students</p>

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">
                          {{--   <canvas id="widgetChart3"></canvas> --}}
                        </div>

                    </div>

                </div>
            </div>
            <!--/.col-->

</div>

<div class="row" style="margin-top:3%; padding-bottom: 5%;">

            <div class="col-sm-6 col-lg-4 fontProductSans">
                <div class="card text-white" style="background-color:blue;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0">
                            <span id="currentStudents"></span>
                        </h4>
                        <p class="text-light">Currently Enrolled Students</p>

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">
                           {{--  <canvas id="widgetChart3"></canvas> --}}
                        </div>

                    </div>

                </div>
            </div>

            <div class="col-sm-6 col-lg-4 fontProductSans">
                <div class="card text-white" style="background-color:red;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0">
                            <span><b>75%</b> of 210</span>
                        </h4>
                        <p class="text-light">Students with low Interpersonal</p>

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">
                          {{--   <canvas id="widgetChart4"></canvas> --}}
                        </div>

                    </div>

                </div>
            </div>

               <div class="col-sm-6 col-lg-4 fontProductSans">
                <div class="card text-white" style="background-color:green;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0">
                            <span class="count">210</span>
                        </h4>
                        <p class="text-light">Currently Enrolled Students</p>

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">
                    {{--         <canvas id="widgetChart3"></canvas> --}}
                        </div>

                    </div>

                </div>
            </div>
            <!--/.col-->

</div>


{{-- <div class="row"  style="margin-top: 3%;">

<div class="col-md-8 fontProductSans" >

<!-- Example Pie Chart Card-->
       <div class="card card-inverse card-primary mb-3">
            <div class="card-header"  style="background-color: #002663; color: white; ">
           
            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Summary of Emotional Quotient of the students</strong></center></div>
 <div class="card-body" style="" >

       <canvas id="summaryChartEq"></canvas>

  </div>

</div>
</div>









 <div class="col-md-4 fontProductSans">

<!-- Example Pie Chart Card-->
       <div class="card card-inverse card-primary mb-3">
            <div class="card-header"  style="background-color: #002663; color: white; ">
           
            <center><strong><i class="fa fa-drivers-license-o" style="margin-left:-7%; margin-top:1%;"></i> Emotional Quotient Summary by Gender</strong></center></div>
 <div class="card-body" style="" >



<div class="row" style="margin-top:2%;">

 <div class="tabbable full-width-tabs">
  <ul class="nav nav-tabs" style="background-color: #e6e6e6; border-top-left-radius: 4px; border-top-right-radius: 4px;">
    <li><a data-toggle="tab" href="#a">Intrapersonal</a></li>
    <li><a data-toggle="tab" href="#b">Interpersonal </a></li>
    <li><a data-toggle="tab" href="#c">Stress Management</a></li>
    <li><a data-toggle="tab" href="#d">Adaptability</a></li>
    <li><a data-toggle="tab" href="#e">General Mood</a></li>
  </ul>
 </div>
 </div>
 
  <div class="tab-content" style="margin-top: 2%;">
    <div id="a" class="tab-pane active">
    
       <canvas id="intraDoughChart"></canvas>
    </div>
    <div id="b" class="tab-pane fade">
      <canvas id="interDoughChart"></canvas>
    </div>
    <div id="c" class="tab-pane fade">
      <canvas id="stressDoughChart"></canvas>
    </div>
    <div id="d" class="tab-pane fade">
      <canvas id="adaptDoughChart"></canvas>
    </div>
    <div id="e" class="tab-pane fade">
      <canvas id="moodDoughChart"></canvas>
    </div>
  </div>

</div>

</div><!--content --> --}}





@stop()
@section('script')

	
     {{-- <script type="text/javascript" src="{{asset('public/assets/js/summary.js')}}"></script> --}}
     <script type="text/javascript" src="{{asset('public/assets/js/dashboard.js')}}"></script>
          <script type="text/javascript" src="{{asset('public/assets/js/widget.js')}}"></script>


@endsection
