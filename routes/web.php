<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\RouterController;
use Inertia\Inertia;

// Rotas para renderização
Route::controller(RouterController::class)->group(function () {
    Route::get('/', 'index');
    Route::get('/signin', 'signIn')->name('login');
    Route::get('/signup', 'signUp');
    Route::get('/signuplawyer', 'signupLawyer');
    Route::get('/signupclient', 'signupClient');
    Route::get('/aboutus', 'aboutUs');
    Route::get('/lawyerpage', 'lawyerPage');
    Route::get('/clientpage', 'clientPage');
});

// Rotas para gerenciar cadastro de Usuário
Route::controller(UsersController::class)->group(function () {   
    Route::post('/store', 'store');
    Route::post('/login', 'login');
    Route::post('/logout', 'logout');
});

// Rotas protegidas por middleware
Route::middleware(['auth'])->group(function () {
    Route::get('/cases', function () {
        return Inertia::render('cases');
    })->name('cases');

    // Adicione outras rotas protegidas aqui
    Route::get('/formcases', function () {
        return Inertia::render('formCases');
    });
});




/* Route::get('/cases', function () {
   return Inertia::render("cases");
})->middleware('auth');
 */
/* Route::middleware('auth')->group(function () {
   Route::get("/cases", function () {
      return Inertia::render("cases");
   });
     Route::get("/formcases", function () {
        return Inertia::render("formCases");
     });
}); */
