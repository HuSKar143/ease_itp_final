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
                ->where('student_id','=', $x)
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

    public function endYear($start){

        $schoolYear = DB::table('schoolyear')
                ->select('id', 'year', 'semester')
                ->where('id', '>', $start)
                ->orderBy('id', 'asc')
                ->get();

            return json_encode($schoolYear);
    }

    public function endYear2($start){

        $schoolYear = DB::table('schoolyear')
                ->select('id', 'year', 'semester')
                ->where('id', '>', $start)
                ->orderBy('id', 'asc')
                ->get();

            return json_encode($schoolYear);
    }

    public function endYear3($start){

        $schoolYear = DB::table('schoolyear')
                ->select('id', 'year', 'semester')
                ->where('id', '>', $start)
                ->orderBy('id', 'asc')
                ->get();

            return json_encode($schoolYear);
    }

    public function getCurrentGraph($to, $from, $qwe, $ewq){
    $schoolYear = DB::table('grades')
        ->select('*')
        ->leftJoin('eq', 'eq.student_id', '=', 'grades.student_id')
        ->leftJoin('schoolyear', 'grades.schoolyear', '=', 'schoolyear.id')
        ->whereBetween('grades.schoolyear', array($from, $to))
        ->get();

    $schoolYear2 = DB::table('grades')
        ->select('*')
        ->leftJoin('eq', 'eq.student_id', '=', 'grades.student_id')
        ->leftJoin('schoolyear', 'grades.schoolyear', '=', 'schoolyear.id')
        ->whereBetween('grades.schoolyear', array($qwe, $ewq))
        ->get();
    $pussy['a']=$schoolYear;
    $pussy['b']=$schoolYear2;
    
    //     ->whereBetween('grades.schoolyear', array($from, $to))
    //     ->get();
    //     var_dump($otherdata);
        
        return json_encode($pussy);
    }



  public function filterStudent() {
             $filterStudents = DB::table('schoolyear')
                ->select('id','year','semester')
                ->orderBy('id','asc')
                ->get();

                $gender = DB::table('students')
                ->select('id','gender')
                ->orderBy('id','asc')
                ->get();
            // return jason_encode($filter);
         return view('content.filterStudents',['filter'=>$filterStudents,'gender'=>$gender]);
}}