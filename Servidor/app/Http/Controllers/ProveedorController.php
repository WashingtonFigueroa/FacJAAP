<?php

namespace App\Http\Controllers;

use App\Proveedor;
use Illuminate\Http\Request;

class ProveedorController extends Controller
{
    public function index()
    {
    return response()->json(Proveedor::orderBy('nombre', 'asc')->get(),
                                200);
    }

    public function store(Request $request)
    {
        $proveedor = Proveedor::create($request->all());
        return response()->json($proveedor, 201);
    }

    public function show($id)
    {
        return response()->json(Proveedor::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $proveedor = Proveedor::find($id);
        $proveedor->update($request->all());
        return response()->json($proveedor, 200);
    }

    public function destroy($id)
    {
        $proveedor = Proveedor::find($id);
        $proveedor->delete();
        return response()->json([
            'eliminado' => 'Proveedor ' . $proveedor->nombre
                            . ' eliminado exitosamente'
        ], 200);
    }
}
