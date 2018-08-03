<?php

namespace App\Http\Controllers;

use App\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
        return response()->json(Usuario::with('tipoUsuario')
                         ->orderBy('iduser', 'desc')->paginate(10), 200);
    }

    public function store(Request $request)
    {
        //Hash::make($request->input('pass'));
            $Usuario = Usuario::create($request->all());
            return response()->json($Usuario, 201);
    }

    public function show($id)
    {
        return response()->json(Usuario::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $Usuario = Usuario::find($id);
        $Usuario->update($request->all());
        return response()->json($Usuario, 200);
    }

    public function destroy($id)
    {
        $Usuario = Usuario::find($id);
        $Usuario->delete();
        return response()->json([
            'eliminado' => 'Usuario ' . $Usuario->nombre
                        . ' eliminado exitosamente'
        ], 200);
    }
   

}
