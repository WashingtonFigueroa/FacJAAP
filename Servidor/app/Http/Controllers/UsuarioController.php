<?php

namespace App\Http\Controllers;

use App\Usuario;
use Illuminate\Http\Request;
use Validator;

class UsuarioController extends Controller
{
    public function index()
    {
        return response()->json(Usuario::with('tipoUsuario')
                         ->orderBy('iduser', 'desc')->paginate(10), 200);
    }

    public function listaUsuarios()
    {
        return response()->json(Usuario::with('tipoUsuario')
                         ->orderBy('iduser', 'desc')->get, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|min:6|confirmed'
        ]);
        if ($validator->fails()){
            return response()->json([
                'error' => 'La confirmacion de password no coincide'
            ], 500);
        } else {
            $user = new Usuario();
            $user->idtipo = $request->input('idtipo');
            $user->nombre = $request->input('nombre');
            $user->correo = $request->input('correo');
            $user->password = Hash::make($request->input('password'));
            $user->save();
            return response()->json($user, 201);
        }
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
