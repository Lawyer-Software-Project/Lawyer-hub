<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;
use App\Models\User;
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
            $user = new User();
            $user->name = $validatedData['usu_nome'];
            $user->email = $validatedData['usu_email'];
            $user->password = Hash::make($validatedData['usu_password']); // Hash da senha
            $user->save();

            $userModel = new UserModel();
            $userModel->fk_user_id = $user->id;
            $userModel->usu_admin = $validatedData['usu_admin'] ?? false;
            $userModel->usu_lawyer = $validatedData['usu_lawyer'] ?? false;
            $userModel->usu_oab = $validatedData['usu_oab'];
            $userModel->usu_cpf = $validatedData['usu_cpf'];
            $userModel->usu_phone = $validatedData['usu_phone'];
            $userModel->save();

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
        
        $credentials = array(
            'email' => $validatedData["usu_email"],
            'password' => $validatedData["usu_password"]
        );
        
        if (Auth::attempt($credentials)) {                 
            $request->session()->regenerate();
            // Obtém o usuário autenticado
            $userId = Auth::id();
            $user = UserModel::where('fk_user_id', $userId)->first();
            // Verifica o valor de 'usu_lawyer' e redireciona de acordo
            if ($user->usu_lawyer) {
                return redirect('/lawyerpage');
            } else {
                return redirect('/clientpage');
            }  

           // echo response()->json(['message' => 'Login realizado com sucesso!'], 200);        
        } else {
            echo response()->json(['message' => 'Email ou senha inválidos!'], 401);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logout realizado com sucesso!']);
    }

    public function getCurrentUser()
    {
        $user = Auth::user();
        $userModel = UserModel::where('fk_user_id', $user->id)->first();
        if($user->email_verifed_at == null){
            $verifed = false;
        }else{
            $verifed = true;
        }
        $userData = array(
            'id' => $user->id,
            'name' => $user->name,
            'isVerified' => $verifed,
            'email' => $user->email,
            'usu_lawyer' => $userModel->usu_lawyer,
            'usu_oab' => $userModel->usu_oab,
            'usu_cpf' => $userModel->usu_cpf,
            'usu_phone' => $userModel->usu_phone
        );
        return response()->json($userData);
    }
}
