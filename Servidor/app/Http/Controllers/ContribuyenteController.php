<?php

namespace App\Http\Controllers;

use App\Contribuyente;
use Illuminate\Http\Request;

class ContribuyenteController extends Controller
{

    public function index()
    {
    return response()->json(Contribuyente::orderBy('nombres', 'asc')->get(), 200);
    }

    public function store(Request $request)
    {
        $Contribuyente = Contribuyente::create($request->all());
        return response()->json($Contribuyente, 201);
    }

    public function show($id)
    {
        return response()->json(Contribuyente::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $Contribuyente = Contribuyente::find($id);
        $Contribuyente->update($request->all());
        return response()->json($Contribuyente, 200);
    }

    public function destroy($id)
    {
        $Contribuyente = Contribuyente::find($id);
        $Contribuyente->delete();
        return response()->json([
            'eliminado' => 'Contribuyente ' . $Contribuyente->nombres
                        . ' eliminado exitosamente'
        ], 200);
    }
}
