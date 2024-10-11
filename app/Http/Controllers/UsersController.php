<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'usu_nome' => 'required|string|max:255',
            'usu_email' => 'required|email|unique:cad_users,usu_email',
            'usu_password' => 'required|min:8',
            'usu_admin' => 'boolean',
            'usu_lawyer' => 'boolean',
            'usu_oab' => 'nullable|string',
            'usu_cpf' => 'required|string|max:14|unique:cad_users,usu_cpf',
            'usu_phone' => 'required|string|max:15',
        ]);

        try {
            $user = new UserModel();
            $user->usu_nome = $validatedData['usu_nome'];
            $user->usu_email = $validatedData['usu_email'];
            $user->usu_password = Hash::make($validatedData['usu_password']); // Hash da senha
            $user->usu_admin = $validatedData['usu_admin'] ?? false;
            $user->usu_lawyer = $validatedData['usu_lawyer'] ?? false;
            $user->usu_oab = $validatedData['usu_oab'];
            $user->usu_cpf = $validatedData['usu_cpf'];
            $user->usu_phone = $validatedData['usu_phone'];
            $user->save();

            return redirect('/signin')->with('success', 'Usuário criado com sucesso!');
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'usu_email' => 'required|email',
            'usu_password' => 'required|min:8',
        ]);

        // Verifica se o usuário existe
        $user = UserModel::where('usu_email', $validatedData['usu_email'])->first();

        if ($user && Hash::check($validatedData['usu_password'], $user->usu_password)) {
            Auth::login($user);                      
            if(Auth::check()){
                return response()->json(['message' => 'Login efetuado com sucesso!', 'redirect' => url('/cases')]);                
            }else{
                return response()->json(['message' => 'Não logou']);
            }
        } else {
            return response()->json(['message' => 'Email ou senha inválidos!'], 401);
        }
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logout realizado com sucesso!']);
    }
}
