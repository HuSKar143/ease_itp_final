<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="csrf_token" content="{{ csrf_token() }}" />
  <title>EASE System</title>
  <!-- Bootstrap core CSS-->
  
  <!-- Custom fonts for this template-->
  <link href="{{asset('public/assets/font-awesome/css/font-awesome.min.css')}}" rel="stylesheet" type="text/css">
  <!-- Page level plugin CSS-->
  <link href="{{asset('public/assets/datatables/dataTables.bootstrap4.css')}}" rel="stylesheet">
  <link href="{{asset('public/assets/css/material-icons.css')}}" rel="stylesheet">
  <link href="{{asset('public/assets/datatables/buttons.dataTables.min.css')}}" rel="stylesheet">
  <link href="{{asset('public/assets/bootstrap/js/bootstrap.min.js')}}" rel="stylesheet">
  <link href="{{asset('public/assets/jquery/jquery.min.js')}}" rel="stylesheet">

  <!-- Custom styles for this template-->
    <link href="{{asset('public/assets/css/sb-admin.css')}}" rel="stylesheet">
    <link href="{{asset('public/assets/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
   <link href="{{asset('public/assets/bootstrap/css/bootstrap.css')}}" rel="stylesheet">
 @yield('css')
</head>

<body class="fixed-nav sticky-footer" id="page-top" style="background-color:  #e2e2e2; " >


 

  

<main>
<div>


<div class="col-lg-6" style="margin: 0 auto;">
<!-- Example Pie Chart Card-->
       <div class="card mb-5 text-center">
            <div class="card-header " style="background-color: #002663; color: white;">
            <img src="{{asset('public/assets/profile_pics/logo.png')}}" width=150></img></div>
            <div class="card-body boxshadow">
@yield('content')
 
</div>



 </div>
 </div>
</main>




    <!-- Bootstrap core JavaScript-->
    <script type="text/javascript" src="{{asset('public/assets/js/jquery.min.js')}}"></script>

    <script type="text/javascript" src="{{asset('public/assets/jquery/jquery.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/jquery/nav-tabs.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <!-- Core plugin JavaScript-->
    <script type="text/javascript" src="{{asset('public/assets/jquery-easing/jquery.easing.min.js')}}"></script>
    <!-- Page level plugin JavaScript-->
    <script type="text/javascript" src="{{asset('public/assets/chart.js/Chart.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/datatables/jquery.dataTables.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/datatables/dataTables.bootstrap4.js')}}"></script>
    <!-- Custom scripts for all pages-->
    <script type="text/javascript" src="{{asset('public/assets/js/sb-admin.min.js')}}"></script>
    <!-- Custom scripts for this page-->
       <script type="text/javascript" src="{{asset('public/assets/js/selectedNav.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/bootstrap/js/bootstrap-navtabs.min.js')}}" ></script>
 @yield('script')
</body>


 
</html>
