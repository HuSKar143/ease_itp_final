
@extends('layouts.app') 
@section('content')


<table id="StudentList">
    <thead class="nosort">
        <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Course ID</th>
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

