<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class casesController extends Controller
{
    // Método para cadastrar casos
    public function cadCases(Request $request)
    {
        // Validação dos dados (ajuste conforme necessário)
        $validatedData = $request->validate([
            'case_desc_short' => 'required|string|max:255',
            'case_desc_long' => 'required|string',
            'case_jud' => 'required|integer',
        ]);

        // Inserindo no banco de dados
        DB::table('cases')->insert([
            'case_desc_short' => $validatedData['case_desc_short'],
            'case_desc_long' => $validatedData['case_desc_long'],
            'case_jud' => $validatedData['case_jud'],
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect('/cases')->with('success', 'Caso cadastrado com sucesso!');
    }

    // Método para buscar casos
    public function findCases()
    {
        $cases = DB::table('cases')->orderBy('created_at', 'desc')->get();

        // Retorna os dados em JSON para consumo no frontend
        return response()->json($cases);
    }
}
