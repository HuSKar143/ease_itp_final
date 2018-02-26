<?php
use App\Post;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



//Auth::routes();

 Route::get('/','MasterController@index');
 Route::get('/studentLists', 'MasterController@generateStudentsList');
 Route::get('/profile', 'MasterController@studentProfile');

