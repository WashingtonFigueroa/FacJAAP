<?php

namespace App\Http\Controllers;

use App\TipoUsuaario;
use Illuminate\Http\Request;

class TipoUsuaarioController extends Controller
{
    public function index()
    {
    return response()->json(TipoUsuaario::orderBy('nombre', 'asc')->get(),
                                200);
    }

    public function store(Request $request)
    {
        $TipoUsuaario = TipoUsuaario::create($request->all());
        return response()->json($TipoUsuaario, 201);
    }

    public function show($id)
    {
        return response()->json(TipoUsuaario::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $TipoUsuaario = TipoUsuaario::find($id);
        $TipoUsuaario->update($request->all());
        return response()->json($TipoUsuaario, 200);
    }

    public function destroy($id)
    {
        $TipoUsuaario = TipoUsuaario::find($id);
        $TipoUsuaario->delete();
        return response()->json([
            'eliminado' => 'TipoUsuaario ' . $TipoUsuaario->nombre
                            . ' eliminado exitosamente'
        ], 200);
    }
}
