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
           return view('content.studentProfile',[
                            'profile' => $studentProfile
                        ]);
    }

    public function endYear($start){

        $schoolYear = DB::table('schoolyear')
                ->groupBy('year')
                ->where('year', '>', $start)
                ->get();

            return json_encode($schoolYear);
    }

    public function endYear2($start){

        $schoolYear = DB::table('schoolyear')
                ->groupBy('year')
                ->where('year', '>', $start)
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

    public function getCurrentGraph($year, $comparedYear = null){
    $betweenYears = array();
    $betweenComparedYears = array();
    $betweenYearsPredict = array();

    $years =  DB::table('schoolyear')
             ->where('year', '=', $year)
             ->get();

    $currentYear = DB::table('schoolyear')
                ->orderBy('id','desc')
                ->take(3)
                ->get();



    $flagFirst = 0;
    foreach($years as $year){
        if($flagFirst == 0 || $flagFirst != count($years) - 1){
            $betweenYears[] = $year->id;
        }
        $flagFirst++;
    }


    if($comparedYear != null){         
        $comparedYear =  DB::table('schoolyear')
                         ->where('year', '=', $comparedYear)
                         ->get();

        $flagFirst = 0;
        foreach($comparedYear as $year){
            if($flagFirst == 0 || $flagFirst != count($years) - 1){
                $betweenComparedYears[] = $year->id;
            }
            $flagFirst++;
        }
    }

    $schoolYear = DB::table('grades')
        ->leftJoin('eq', 'eq.student_id', '=', 'grades.student_id')
        ->leftJoin('schoolyear', 'grades.schoolyear', '=', 'schoolyear.id')
        ->whereBetween('grades.schoolyear', $betweenYears)
        ->get();


    if($comparedYear != null){
        $schoolYear2 = DB::table('grades')
            ->leftJoin('eq', 'eq.student_id', '=', 'grades.student_id')
            ->leftJoin('schoolyear', 'grades.schoolyear', '=', 'schoolyear.id')
            ->whereBetween('grades.schoolyear', $betweenComparedYears)
            ->get();
    $pussy['b'] = $schoolYear2 ;
    
    }

    $pussy['a'] = $schoolYear;
    $latestYear = DB::table('grades')
            ->leftJoin('eq', 'eq.student_id', '=', 'grades.student_id')
            ->leftJoin('schoolyear', 'grades.schoolyear', '=', 'schoolyear.id')
            ->whereBetween('grades.schoolyear', [10,11])
            ->get();

   
    $pussy['c'] = $latestYear;

        
         return json_encode($pussy);
    }

  public function getSummaryGraph() {
    $betweenYears = [1,12];

    $schoolYear = DB::table('grades')
        ->leftJoin('students', 'students.id', '=', 'grades.student_id')
        ->leftJoin('eq', 'eq.student_id', '=', 'grades.student_id')
        ->leftJoin('schoolyear', 'grades.schoolyear', '=', 'schoolyear.id')
        ->whereBetween('grades.schoolyear', $betweenYears)
        ->get();

    return json_encode($schoolYear);

  }



  public function filterStudent() {
             $filterStudents = DB::table('schoolyear')
                ->groupBy('year')
                ->get();

                $gender = DB::table('students')
                ->select('id','gender')
                ->orderBy('id','asc')
                ->get();
            // return jason_encode($filter);
         return view('content.filterStudents',
            [
                'filter'=>$filterStudents,
                'gender'=>$gender
            ]);
}}