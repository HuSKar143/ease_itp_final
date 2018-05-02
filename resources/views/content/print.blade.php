<!DOCTYPE>
<html>
<head>
	<script type="text/javascript" src="{{asset('public/assets/js/jquery.min.js')}}"></script>
        <style type="text/css">
+   body{
+       overflow: hidden;
+   }
+       .test{
+           visibility: hidden;
+       }
+   </style>
</head>
<body>
<button onclick="test()">Test</button>
+<div class="cc test">
<input type="hidden" value="{{ $x }}" id="value1">
<input type="hidden" value="{{ $y }}" id="value2">

	
<br>
<div class="container" style="width:50%; float:left;">
    <div id="intrapersonalContainer" class="tab-pane active">
    </div><p id="pearsonInterpret"></p>
    <br>

    <div id="interpersonalContainer" class="tab-pane fade">
    </div><p id="pearsonInterpret"></p>
    <br>
    <div id="stressContainer" class="tab-pane fade">
    </div><p id="pearsonInterpret"></p>
    <br>
    <div id="adaptabilityContainer" class="tab-pane fade">
    </div><p id="pearsonInterpret"></p>
    <br>
    <div id="moodContainer" class="tab-pane fade">
    </div><p id="pearsonInterpret"></p>
    <br>


	<div id="interpersonalBarContainer"></div>
    <br><div id="intrapersonalBarContainer" ></div>
    <br><div id="stressBarContainer"></div>
    <br><div id="adaptabilityBarContainer"></div>
    <br><div id="moodBarContainer" ></div>
</div>

</body>

<script type="text/javascript">
	$(function(){

		compareGraph($("#value1").val(), $("#value2").val());


	});


</script>
<script type="text/javascript" src="{{asset('public/assets/chart.js/Chart.min.js')}}"></script>
<script type="text/javascript" src="{{asset('public/assets/js/filterstudents-extension.js')}}"></script>
<script type="text/javascript">
	function test(){
        $(".cc").removeClass("test")
		window.print();
	}
</script>
</html>