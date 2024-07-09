<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\UserModel;

class UsersController extends Controller
{
    public function index()
    {
        return Inertia::render('/', [
          'indexs' => UserModel::all(),
        ]);
    }

    public function store(Request $request)
    {
        UserModel::create($request->validate([
            'email' => ['required', 'max:50', 'email'],
            'password' => ['required', 'max:50'],
        ]));

        return to_route('signin');
    }
}
