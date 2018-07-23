<?php

namespace App\Http\Controllers;

use App\DetalleFacturaCompra;
use Illuminate\Http\Request;

class DetalleFacturaCompraController extends Controller
{
    public function index()
    {
        return response()->json(DetalleFacturaCompra::orderBy('iddetallecompra', 'asc')->get(),
            200);
    }

    public function store(Request $request)
    {
        $detalle = DetalleFacturaCompra::create($request->all());
        return response()->json($detalle, 201);
    }

    public function show($id)
    {
        return response()->json(DetalleFacturaCompra::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $detalle = DetalleFacturaCompra::find($id);
        $detalle->update($request->all());
        return response()->json($detalle, 200);
    }

    public function destroy($id)
    {
        $detalle = DetalleFacturaCompra::find($id);
        $detalle->delete();
        return response()->json([
            'eliminado' => 'Detalle ' . $detalle->descripcion
                . ' eliminado exitosamente'
        ], 200);
    }
}
