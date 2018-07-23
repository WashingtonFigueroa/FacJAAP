<?php

namespace App\Http\Controllers;

use App\Movimiento;
use Illuminate\Http\Request;

class MovimientoController extends Controller
{
    public function index()
    {
    return response()->json(Movimiento::orderBy('idmovimiento', 'asc')->get(),200);
    }

    public function store(Request $request)
    {
        $Movimiento = Movimiento::create($request->all());
        return response()->json($Movimiento, 201);
    }

    public function show($id)
    {
        return response()->json(Movimiento::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $Movimiento = Movimiento::find($id);
        $Movimiento->update($request->all());
        return response()->json($Movimiento, 200);
    }

    public function destroy($id)
    {
        $Movimiento = Movimiento::find($id);
        $Movimiento->delete();
        return response()->json([
            'eliminado' => 'Movimiento ' . $Movimiento->idmovimiento
                            . ' eliminado exitosamente'
        ], 200);
    }
}
