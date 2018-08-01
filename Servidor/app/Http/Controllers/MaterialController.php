<?php

namespace App\Http\Controllers;

use App\Material;
use Illuminate\Http\Request;

class MaterialController extends Controller
{    
    public function index()
    {
        return response()->json(Material::with('proveedor')
            ->orderBy('nombre', 'asc')
            ->paginate(10),
            200);
    }

    public function store(Request $request)
    {
        $material = Material::create($request->all());
        return response()->json($material, 201);
    }

    public function show($id)
    {
        return response()->json(Material::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $material = Material::find($id);
        $material->update($request->all());
        return response()->json($material, 200);
    }

    public function destroy($id)
    {
        $material = Material::find($id);
        $material->delete();
        return response()->json([
            'eliminado' => 'Material ' . $material->nombre
                . ' eliminado exitosamente'
        ], 200);
    }
}
