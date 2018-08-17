<?php

namespace App\Http\Controllers;

use App\material;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    public function index()
    {
    return response()->json(material::orderBy('idmaterial', 'desc')->paginate(10),200);
    }

    public function listaMateriales() {
        return response()->json(material::orderBy('idmaterial', 'desc')->get(), 200);
    }

    public function store(Request $request)
    {
        $material = material::create($request->all());
        return response()->json($material, 201);
    }

    public function show($id)
    {
        return response()->json(material::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $material = material::find($id);
        $material->update($request->all());
        return response()->json($material, 200);
    }

    public function destroy($id)
    {
        $material = material::find($id);
        $material->delete();
        return response()->json([
            'eliminado' => 'Material ' . $material->idmovimiento
                            . ' eliminado exitosamente'
        ], 200);
    }
}
