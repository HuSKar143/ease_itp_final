<?php
namespace App\Http\Controllers;

use Session;
use Response;
use View;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Hash;


class MasterController extends Controller
{

	public function index(){
		
		return view('content.index');
	}

	public function generateStudentsList() {
		
            $StudentList = DB::table('students')
 				->select('id','course_id','student_name','gender','age','year_level','section')
                ->orderBy('id','asc')
                ->get();
        return json_encode($StudentList);      
    }
<<<<<<< HEAD
     
     public function studentProfile(){
		
		return view('content.Profile');
	}  
=======
       
    public function listOfStudents(){

    	return view('content.listOfStudents');
    }
>>>>>>> 80bfaa35b4ec30030528f15c4d818d37e2bea81b

    public function studentProfile($holderID){
    	// $details = array(
    	// 		'name' => 'Jusin',
    	// 		'age' => '15',
    	// 		'characteristics' => 'pretty'
    	// 	);
    	// return view('content.studentProfile', ['details' => $details]);
    	    $studentProfile = DB::table('students')
 			->select('id','course_id','student_name','gender','age','year_level','section')
            ->where('id','=', $holderID)
            ->get();
           return view('content.studentProfile',['profile' => $studentProfile]);
    }



}