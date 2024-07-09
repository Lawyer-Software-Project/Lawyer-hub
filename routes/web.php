<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UsersController;


Route::get('/', [UsersController::class, 'index']);  
Route::get('signup', [UsersController::class,'create']);
Route::post('signup/store', [UsersController::class, 'store']);
/* Route::get("/", function () {
    return Inertia::render("home");
});

Route::get("/signup", function () {
    return Inertia::render("signup");
});s
Route::get("/signin", function () {
    return Inertia::render("signIn");

}); */















