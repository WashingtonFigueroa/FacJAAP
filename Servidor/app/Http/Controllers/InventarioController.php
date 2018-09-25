<?php

namespace App\Http\Controllers;

use App\inventario;
use Illuminate\Http\Request;
use App\material;

class InventarioController extends Controller
{
    public function index()
    {
    return response()->json(inventario::with('material')
                            ->orderBy('idinventario', 'desc')->paginate(10),200);
    }

    public function store(Request $request)
    {
        $idmaterial = $request->input('idmaterial');
        $material = material::where('idmaterial', $idmaterial)->first();
        $stock = $material->stock;
        $cantidad = $request->input('cantidad');
        $estado = $request->input('estado');
            if ($estado === 'Ingreso' ) {
                $material->stock = $stock + $cantidad;
                $material->save();
                $inventario = inventario::create($request->all());
            }
            if ($estado == 'Salida' && $stock >= $cantidad ) {
                $material->stock = $stock - $cantidad;
                $material->save();
                $inventario = inventario::create($request->all());
            }
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
