<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RouterController extends Controller
{
    public function signupLawyer(){

        return Inertia::render("signuplawyer");
    }

    public function signupClient(){

        return Inertia::render("signupclient");
    }

    public function clientPage(){

        return Inertia::render("clientPage");
    }

    public function lawyerPage()
    {
        return Inertia::render("lawyerPage");
    }

    public function aboutUsPage()
    {
        return Inertia::render("aboutUsPage");
    }
    public function index()
    {
        return Inertia::render("home");
    }

    public function signUp()
    {
        return Inertia::render("signupContinue");
    }

    public function signIn(){

        return Inertia::render("signIn");
    }

}
