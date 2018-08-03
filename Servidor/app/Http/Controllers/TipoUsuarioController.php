<?php

namespace App\Http\Controllers;

use App\TipoUsuario;
use Illuminate\Http\Request;
use Validator;

class TipoUsuarioController extends Controller
{
    public function index()
    {
        return response()->json(TipoUsuario::orderBy('idtipo', 'desc')->paginate(10), 200);
    }

    public function listaCargos() {
        return response()->json(TipoUsuario::orderBy('idtipo', 'asc')->get(), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|unique:tipo_usuarios'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'mensaje' => 'El cargo esta registrado'
            ], 500);
        } else {
            $TipoUsuario = TipoUsuario::create($request->all());
            return response()->json($TipoUsuario, 201);
        }          
    }

    public function show($id)
    {
        return response()->json(TipoUsuario::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $TipoUsuario = TipoUsuario::find($id);
        $TipoUsuario->update($request->all());
        return response()->json($TipoUsuario, 200);
    }

    public function destroy($id)
    {
        $TipoUsuario = TipoUsuario::find($id);
        $TipoUsuario->delete();
        return response()->json([
            'eliminado' => 'Cargo ' . $TipoUsuario->nombre
                        . ' eliminado exitosamente'
        ], 200);
    }
   

}
