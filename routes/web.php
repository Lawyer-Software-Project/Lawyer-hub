<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\RouterController;


Route::get('/', [RouterController::class, 'index']);  
Route::get('/signin', [RouterController::class,'signIn'])->name('login');
Route::get('/signup', [RouterController::class,'signUp']);
Route::post('/store', [UsersController::class, 'store']);
Route::get('/signuplawyer', [RouterController::class,'signupLawyer']);
Route::get('/signupclient', [RouterController::class,'signupClient']);

Route::middleware('auth')->group(function () {
    Route::get("/cases", function () {
        return Inertia::render("cases");
     });
     Route::get("/formcases", function () {
        return Inertia::render("formCases");
     });
});















