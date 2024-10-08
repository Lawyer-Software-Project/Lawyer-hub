<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UsersController;


Route::get('/', [UsersController::class, 'index']);  
Route::get('/signin', [UsersController::class,'signIn']);
Route::get('/signup', [UsersController::class,'signUp']);
Route::post('/store', [UsersController::class, 'store']);
Route::get('/signuplawyer', [UsersController::class,'signupLawyer']);
Route::get('/signupclient', [UsersController::class,'signupClient']);


 Route::get("/cases", function () {
    return Inertia::render("cases");
});
Route::get("/formcases", function () {
    return Inertia::render("formCases");
});

/* Route::get("/signup", function () {
    return Inertia::render("signup");
});s
Route::get("/signin", function () {
    return Inertia::render("signIn");

});  */















