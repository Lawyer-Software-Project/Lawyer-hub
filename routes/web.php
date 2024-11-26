<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\RouterController;
use Inertia\Inertia;
// use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\CasesController;

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
    Route::get('/profile', 'profilePage');
    Route::get('/chat', 'chatApp');
});

// Rotas para gerenciar cadastro de Usuário
Route::controller(UsersController::class)->group(function () {   
    Route::post('/store', 'store');
    Route::post('/login', 'login');
    Route::post('/logout', 'logout');
    Route::get('/currentuser', 'getCurrentUser');
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

/* Route::middleware(['auth', 'throttle:6,1'])->group(function () {
    Route::post('/testemail', function (Request $request) {
        $request->user()->sendEmailVerificationNotification();

        return response()->json(['message' => 'E-mail de verificação enviado com sucesso!']);
    })->name('verification.send');

}); */

Route::controller(casesController::class)->group(function () {
   Route::get('/findCases','findCases');
   Route::post( '/sendcases', 'cadCases');
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