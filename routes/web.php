<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", function () {
    return Inertia::render("home");
});

Route::get("/signin", function () {
    return Inertia::render("signIn");
});
