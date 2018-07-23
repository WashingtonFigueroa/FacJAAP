<?php

namespace App\Http\Controllers;

use App\Medidor;
use Illuminate\Http\Request;

class MedidorController extends Controller
{
    public function index()
    {
    return response()->json(Medidor::orderBy('idmedidor', 'asc')->get(), 200);
    }

    public function store(Request $request)
    {
        $Medidor = Medidor::create($request->all());
        return response()->json($Medidor, 201);
    }

    public function show($id)
    {
        return response()->json(Medidor::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $Medidor = Medidor::find($id);
        $Medidor->update($request->all());
        return response()->json($Medidor, 200);
    }

    public function destroy($id)
    {
        $Medidor = Medidor::find($id);
        $Medidor->delete();
        return response()->json([
            'eliminado' => 'Medidor ' . $Medidor->idmedidor. ' eliminado exitosamente'
        ], 200);
    }
}
