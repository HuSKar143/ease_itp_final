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
 				->select('id','firstname','lastname','coursename','gender','age','yearlevel','section')
                ->orderBy('id','asc')
                ->get();
        return json_encode($StudentList);      
    }

    public function gendata($x) {
    
            $studentradarData = DB::table('eq')
                ->select('intrapersonal','interpersonal','stress','adapt','mood')
                ->where('id','=', $x)
                ->get();

          
        return json_encode($studentradarData);
    }

     public function gendata2($x) {
    
            $studentGwaData = DB::table('grades')
                ->select('*')
                ->leftJoin('schoolyear', 'grades.schoolyear', '=', 'schoolyear.id')
                ->where('grades.student_id','=', $x)
                ->get();    
          
        return json_encode($studentGwaData);
    }

 
       
    public function listOfStudents(){

    	return view('content.listOfStudents');
    }


    public function studentProfile($holderID){
    	// $details = array(
    	// 		'name' => 'Jusin',
    	// 		'age' => '15',
    	// 		'characteristics' => 'pretty'
    	// 	);
    	// return view('content.studentProfile', ['details' => $details]);
    	    $studentProfile = DB::table('students')
 			->select('id','firstname','lastname','coursename','gender','age','yearlevel','section')
            ->where('id','=', $holderID)
            ->get();
            //hack
            // $studentRadarData = DB::table('eq')
            //    ->select('intrapersonal','interpersonal','stress','adapt','mood')
            //    ->where('student_id','=', $holderID)
            //    ->get();
           return view('content.studentProfile',['profile' => $studentProfile]);
    }



}