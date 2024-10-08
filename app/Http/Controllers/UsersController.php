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
        return Inertia::render("signupContinue");
    }

    public function signIn(){

        return Inertia::render("signIn");
    }

    public function store(Request $request)
    {
      $validatedData = $request->validate([
        'usu_email' => 'required|email|unique:cad_users,usu_email',
        'usu_password' => 'required|min:8',
        'usu_admin' => 'boolean',
        'usu_lawyer' => 'boolean',
        'usu_oab' => 'nullable|string',
        'usu_cpf' => 'required|string|max:12|unique:cad_users,usu_cpf',
        'usu_phone' => 'required|string|max:12',
    ]);

    $user = new User();
    $user->usu_email = $validatedData['usu_email'];
    $user->usu_password = Hash::make($validatedData['usu_password']); // Hash da senha
    $user->usu_admin = $validatedData['usu_admin'] ?? false;
    $user->usu_lawyer = $validatedData['usu_lawyer'] ?? false;
    $user->usu_oab = $validatedData['usu_oab'];
    $user->usu_cpf = $validatedData['usu_cpf'];
    $user->usu_phone = $validatedData['usu_phone'];
    $user->save(); 

   
    return response()->json(['message' => 'Usuário cadastrado com sucesso!'], 201);
    }

    public function signupLawyer(){

        return Inertia::render("signuplawyer");
    }

    public function signupClient(){

        return Inertia::render("signupclient");
    }
}

