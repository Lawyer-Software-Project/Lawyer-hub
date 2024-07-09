<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UsersController;


Route::get('/', [UsersController::class, '']);  

/* Route::get("/", function () {
    return Inertia::render("home");
}); */

/* Route::get("/signup", function () {
    return Inertia::render("signup");
});
Route::get("/signin", function () {
    return Inertia::render("signIn");

});
 */














