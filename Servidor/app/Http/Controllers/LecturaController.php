<?php

namespace App\Http\Controllers;

use App\Lectura;
use Illuminate\Http\Request;

class LecturaController extends Controller
{
    public function index()
    {
        return response()->json(Lectura::orderBy('idlectura', 'asc')->get(),
            200);
    }

    public function store(Request $request)
    {
        $Lectura = Lectura::create($request->all());
        return response()->json($Lectura, 201);
    }

    public function show($id)
    {
        return response()->json(Lectura::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $Lectura = Lectura::find($id);
        $Lectura->update($request->all());
        return response()->json($Lectura, 200);
    }

    public function destroy($id)
    {
        $Lectura = Lectura::find($id);
        $Lectura->delete();
        return response()->json([
            'eliminado' => 'Lectura ' . $Lectura->idlectura
                . ' eliminado exitosamente'
        ], 200);
    }
}
