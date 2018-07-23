<?php

namespace App\Http\Controllers;

use App\PagoMedidor;
use Illuminate\Http\Request; 

class PagoMedidorController extends Controller
{
    public function index()
    {
        return response()->json(PagoMedidor::orderBy('idservicio', 'asc')->get(),
            200);
    }

    public function store(Request $request)
    {
        $PagoMedidor = PagoMedidor::create($request->all());
        return response()->json($PagoMedidor, 201);
    }

    public function show($id)
    {
        return response()->json(PagoMedidor::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $PagoMedidor = PagoMedidor::find($id);
        $PagoMedidor->update($request->all());
        return response()->json($PagoMedidor, 200);
    }

    public function destroy($id)
    {
        $PagoMedidor = PagoMedidor::find($id);
        $PagoMedidor->delete();
        return response()->json([
            'eliminado' => 'PagoMedidor ' . $PagoMedidor->idservicio
                . ' eliminado exitosamente'
        ], 200);
    }
}
