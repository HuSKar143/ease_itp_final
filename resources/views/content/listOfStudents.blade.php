
@extends('layouts.app') 
@section('content')


<table id="StudentList">
    <thead class="nosort">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Course Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Year Level</th>
            <th>Section</th>
            <th>Action</th>
        </tr>
    </thead>
</table>



@stop()

@section('script')
    <script type="text/javascript" src="{{asset('public/assets/js/sample.js')}}"></script>
@endsection

