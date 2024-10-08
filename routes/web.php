<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
<<<<<<< HEAD

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
=======
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















>>>>>>> ef65a5bcd0d2f26f888a72e1b0b2337ca0d30b80
