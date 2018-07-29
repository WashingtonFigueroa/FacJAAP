<?php

namespace App\Http\Controllers;

use App\Multa;
use Illuminate\Http\Request;

class MultaController extends Controller
{
    public function index()
    {
        return response()->json(Multa::with('servicio')
            ->orderBy('idlectura', 'asc')
            ->paginate(7), 200);
   }

    public function store(Request $request)
    {
        $Multa = Multa::create($request->all());
        return response()->json($Multa, 201);
    }

    public function show($id)
    {
        return response()->json(Multa::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $Multa = Multa::find($id);
        $Multa->update($request->all());
        return response()->json($Multa, 200);
    }

    public function destroy($id)
    {
        $Multa = Multa::find($id);
        $Multa->delete();
        return response()->json([
            'eliminado' => 'Multa ' . $Multa->idservicio
                . ' eliminado exitosamente'
        ], 200);
    }
}
