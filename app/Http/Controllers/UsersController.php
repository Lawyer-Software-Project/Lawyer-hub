<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\UserModel;

class UsersController extends Controller
{
    public function index()
    {
        return Inertia::render("home");
    }

    public function create(){
        return Inertia::render("signup");
    }

    public function store(Request $request)
    {
        UserModel::create($request->validate([
            'email' => ['required', 'max:50', 'email'],
            'password' => ['required', 'max:50'],
        ]));

        $User = new UserModel();
        $User->email = $request->email;
        $User->password = $request->password;

        $User->save();

        return redirect('signin');
    }
}
