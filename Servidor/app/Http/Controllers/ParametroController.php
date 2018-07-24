<?php

namespace App\Http\Controllers;

use App\Parametro;
use Illuminate\Http\Request;

class ParametroController extends Controller
{
    public function index()
    {
    return response()->json(Parametro::orderBy('idparametro', 'asc')->get(),200);
    }

    public function store(Request $request)
    {
        $Parametro = Parametro::create($request->all());
        return response()->json($Parametro, 201);
    }

    public function show($id)
    {
        return response()->json(Parametro::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $Parametro = Parametro::find($id);
        $Parametro->update($request->all());
        return response()->json($Parametro, 200);
    }

    public function destroy($id)
    {
        $Parametro = Parametro::find($id);
        $Parametro->delete();
        return response()->json([
            'eliminado' => 'Parametro ' . $Parametro->idparametro
                            . ' eliminado exitosamente'
        ], 200);
    }
}
