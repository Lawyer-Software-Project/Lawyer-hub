<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\UserModel;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function index()
    {
        return Inertia::render("home");
    }

    public function signUp()
    {
        return Inertia::render("signup");
    }

    public function signIn(){

        return Inertia::render("signin");
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:user_models,email',
            'password' => 'required|min:8',
        ]);

        $User = new UserModel();
        $User->email = $request->email;
        $User->password = Hash::make($request->password);

        $User->save();

        return redirect('signin');
    }

    public function signInLawer(){

        return Inertia::render("signinlawer");
    }

    public function signInClient(){

        return Inertia::render("signinclient");
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
}

