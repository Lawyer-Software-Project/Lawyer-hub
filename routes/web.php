<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", function () {
    return Inertia::render("home");
});
Route::get("/signup", function () {
    return Inertia::render("signup");
});
Route::get("/signin", function () {
    return Inertia::render("signIn");

});
Route::get("/cadinfo", function () {
    return Inertia::render("cadinfo");

});
Route::get("/cadform/{advogado?}", function ($advogado = null) {
    $advogado = filter_var($advogado, FILTER_VALIDATE_BOOLEAN);
    return Inertia::render('formCad', [
        'advogado' => $advogado,
    ]);
});















