<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UsersController;


Route::get('/', [UsersController::class, 'index']);  
Route::get('/signin', [UsersController::class,'signIn']);
Route::get('/signup', [UsersController::class,'signUp']);
Route::post('/store', [UsersController::class, 'store']);
Route::get('/signinlawer', [UsersController::class,'signInLawer']);
Route::get('/signinclient', [UsersController::class,'signInClient']);
Route::get('/clientpage', [UsersController::class,'clientPage']);
Route::get("/signin2", function () {return Inertia::render("signin-2");});
Route::get("/formCases", function () {return Inertia::render("formcases");});
Route::get("/cases", function () {return Inertia::render("cases");});
Route::get("/lawyerPage", function () {return Inertia::render("lawyerPage");});
Route::get("/aboutUs", function () {return Inertia::render("aboutUs");});













