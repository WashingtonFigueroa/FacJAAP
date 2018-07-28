<?php

namespace App\Http\Controllers;

use App\TipoUsuario;
use Illuminate\Http\Request;

class TipoUsuarioController extends Controller
{
    public function index()
    {
        return response()->json(TipoUsuario::orderBy('nombre', 'asc')->get(),
        200);
    }

    public function store(Request $request)
    {
        $tipo_usuario = TipoUsuario::create($request->all());
        return response()->json($tipo_usuario, 201);
    }

    public function show($id)
    {
        return response()->json(TipoUsuario::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $tipo_usuario = TipoUsuario::find($id);
        $tipo_usuario->update($request->all());
        return response()->json($tipo_usuario, 200);
    }

    public function destroy($id)
    {
        $tipo_usuario = TipoUsuario::find($id);
        $tipo_usuario->delete();
        return response()->json([
            'eliminado' => 'TipoUsuario ' . $tipo_usuario->nombre
                            . ' eliminado exitosamente'
        ], 200);
    }
}
