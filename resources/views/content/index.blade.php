
@extends('layouts.app') 
@section('content')





<div class="content">
<div class="row">
<div class="col-sm-12 col-lg-12 fontProductSans">
                <div class="card text-white boxshadow bg-primary";">
                    <div class="card-body pb-0">
                        <h4 class="mb-0">
                            <span id="currentSY" style="font-size: 30pt;"><i class="fa fa-line-chart" style="color:white; margin-right: 1%;"></i>School year 2016-2017 <br><span id="currentSY" style="font-size: 20pt;">Current year result: </span><br></span>
                        </h4>
                    

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">
                        <p class="text-light" id="currentInterpret"></p>
                        </div>

                    </div>

                </div>
            </div>
            </div>

<div class="row" style="margin-top:3%;">

            <div class="col-sm-6 col-lg-4 fontProductSans">
                <div class="card text-white boxshadow" style="background-color:white;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0" style="font-size: 30pt;">
                            <i class="fa fa-user" style="color: #259b24;"></i><span style="margin-left: 2%;" class="text-dark" id="currentStudents"></span>
                        </h4>
                        <p class="text-dark">Currently Enrolled Students</p>

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">

                          <div class="progress m-t-20">
                                    <div id="maleCount" class="progress-bar-striped bg-danger" style="text-align: center;" role="progressbar"></div>
                              

                         
                                     <div id="femaleCount" class="progress-bar-striped bg-primary" style="text-align: center;" role="progressbar"></div> </div>
                                     </div>


                    </div>

                </div>
            </div>


            <div class="col-lg-4 fontProductSans">
                <div class="card text-white boxshadow" style="background-color: white;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0" style="font-size: 30pt;">
                           <i class="fa fa-users" style="color:#3232f6;"></i><span style="margin-left: 2%;" class="text-dark" id="lowInter"></span>
                        </h4>
                        <p class="text-dark">Students with low Interpersonal</p>

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">
                        <div class="progress m-t-20">
                                    <div id="lowInterBar" class="progress-bar-striped bg-danger" style="text-align: center;" role="progressbar"></div>
                                </div>

                                <div class="progress m-t-20" style="margin-top: 2%;">
                                     <div id="aveInterBar" class="progress-bar-striped bg-primary" style="text-align: center;" role="progressbar"></div> </div>


                                             <div class="progress m-t-20" style="margin-top: 2%;">
                                      <div id="highInterBar" class="progress-bar-striped bg-success" style="text-align: center;" role="progressbar"></div></div>
                          {{--   <canvas id="widgetChart4"></canvas> --}}
                        </div>

                    </div>

                </div>
            </div>

               <div class="col-sm-6 col-lg-4 fontProductSans">
                <div class="card text-white boxshadow" style="background-color:white;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0" style="font-size: 30pt;">
                            <i class="fa fa-universal-access" style="color:#3f51b5;"></i><span style="margin-left: 2%;" class="text-dark" id="lowIntra"></span>
                        </h4>
                        <p class="text-dark">Students with low Intrapersonal</p>

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">
                        <div class="progress m-t-20">
                                    <div id="lowIntraBar" class="progress-bar-striped bg-danger" style="text-align: center;" role="progressbar"></div> </div>

                                           <div class="progress m-t-20" style="margin-top: 2%;">
                                     <div id="aveIntraBar" class="progress-bar-striped bg-primary" style="text-align: center;" role="progressbar"></div> </div>


                                             <div class="progress m-t-20" style="margin-top: 2%;">
                                      <div id="highIntraBar" class="progress-bar-striped bg-success" style="text-align: center;" role="progressbar"></div></div>
                                </div>
                          {{--   <canvas id="widgetChart3"></canvas> --}}
                        </div>

                    </div>

                </div>
            </div>
            <!--/.col-->

</div>

<div class="row" style="margin-top:2%; padding-bottom: 5%;">

        <div class="col-sm-6 col-lg-4 fontProductSans">
                <div class="card text-white boxshadow" style="background-color:white;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0" style="font-size: 30pt;">
                            <i class="fa fa-heartbeat" style="color:#E51C23;"></i><span style="margin-left: 2%;" class="text-dark" id="lowStress"></span>
                        </h4>
                        <p class="text-dark">Students with low Stress Management</p>


                        <div class="chart-wrapper px-0" style="height:80px;" height="70">
                         <div class="progress m-t-20">
                                    <div id="lowStressBar" class="progress-bar-striped bg-danger" style="text-align: center;" role="progressbar"></div>
                                </div>


                                <div class="progress m-t-20" style="margin-top: 2%;">
                                     <div id="aveStressBar" class="progress-bar-striped bg-primary" style="text-align: center;" role="progressbar"></div> </div>


                                             <div class="progress m-t-20" style="margin-top: 2%;">
                                      <div id="highStressBar" class="progress-bar-striped bg-success" style="text-align: center;" role="progressbar"></div></div>
                           {{--  <canvas id="widgetChart3"></canvas> --}}
                        </div>

                    </div>

                </div>
            </div>

            <div class="col-sm-6 col-lg-4 fontProductSans">
                <div class="card text-white boxshadow" style="background-color:white;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0" style="font-size: 30pt;">
                            <i class="fa fa-link" style="color:#FFC107;"></i><span style="margin-left: 2%;" class="text-dark" id="lowAdapt"></span>
                        </h4>
                        <p class="text-dark">Students with low Adaptability</p>

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">
                        <div class="progress m-t-20">
                                    <div id="lowAdaptBar" class="progress-bar-striped bg-danger" style="text-align: center;" role="progressbar"></div>
                                </div>

                                 <div class="progress m-t-20" style="margin-top: 2%;">
                                     <div id="aveAdaptBar" class="progress-bar-striped bg-primary" style="text-align: center;" role="progressbar"></div> </div>


                                             <div class="progress m-t-20" style="margin-top: 2%;">
                                      <div id="highAdaptBar" class="progress-bar-striped bg-success" style="text-align: center;" role="progressbar"></div></div>
                          {{--   <canvas id="widgetChart4"></canvas> --}}
                        </div>

                    </div>

                </div>
            </div>

               <div class="col-sm-6 col-lg-4 fontProductSans">
                <div class="card text-white boxshadow" style="background-color:white;">
                    <div class="card-body pb-0">
                        <h4 class="mb-0" style="font-size: 30pt;">
                            <i class="fa fa-child" style="color:#FF5722;"></i><span style="margin-left: 2%;" class="text-dark" id="lowMood"></span>
                        </h4>
                        <p class="text-dark">Students with low General Mood</p>

                        <div class="chart-wrapper px-0" style="height:70px;" height="70">
                        <div class="progress m-t-20">
                                    <div id="lowMoodBar" class="progress-bar-striped bg-danger" style="text-align: center;" role="progressbar"></div>
                                </div>

                                    <div class="progress m-t-20" style="margin-top: 2%;">
                                     <div id="aveMoodBar" class="progress-bar-striped bg-primary" style="text-align: center;" role="progressbar"></div> </div>


                                             <div class="progress m-t-20" style="margin-top: 2%;">
                                      <div id="highMoodBar" class="progress-bar-striped bg-success" style="text-align: center;" role="progressbar"></div></div>
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

	
     <script type="text/javascript" src="{{asset('public/assets/js/dashboard.js')}}"></script>
          <script type="text/javascript" src="{{asset('public/assets/js/widget.js')}}"></script>
          <script type="text/javascript" src="{{asset('public/assets/js/summary.js')}}"></script>


@endsection
