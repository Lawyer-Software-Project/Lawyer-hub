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

 Route::get("/signin2", function () {
    return Inertia::render("signin-2");
});

/* Route::get("/signup", function () {
    return Inertia::render("signup");
});s
Route::get("/signin", function () {
    return Inertia::render("signIn");

});  */















