<?php

namespace App\Http\Controllers;

use App\inventario;
use Illuminate\Http\Request;

class InventarioController extends Controller
{
    public function index()
    {
    return response()->json(inventario::orderBy('idinventario', 'asc')->paginate(10),200);
    }

    public function store(Request $request)
    {
        $inventario = inventario::create($request->all());
        return response()->json($inventario, 201);
    }

    public function show($id)
    {
        return response()->json(inventario::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $inventario = inventario::find($id);
        $inventario->update($request->all());
        return response()->json($inventario, 200);
    }

    public function destroy($id)
    {
        $inventario = inventario::find($id);
        $inventario->delete();
        return response()->json([
            'eliminado' => 'Inventario ' . $inventario->idmovimiento
                            . ' eliminado exitosamente'
        ], 200);
    }
}
