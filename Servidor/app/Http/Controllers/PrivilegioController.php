<?php

namespace App\Http\Controllers;

use App\Privilegio;
use Illuminate\Http\Request;

class PrivilegioController extends Controller
{
    public function index()
    {
        return response()->json(Privilegio::orderBy('idprivilegio', 'asc')->get(),
            200);
    }

    public function store(Request $request)
    {
        $Privilegio = Privilegio::create($request->all());
        return response()->json($Privilegio, 201);
    }

    public function show($id)
    {
        return response()->json(Privilegio::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $Privilegio = Privilegio::find($id);
        $Privilegio->update($request->all());
        return response()->json($Privilegio, 200);
    }

    public function destroy($id)
    {
        $Privilegio = Privilegio::find($id);
        $Privilegio->delete();
        return response()->json([
            'eliminado' => 'Privilegio ' . $Privilegio->idprivilegio
                . ' eliminado exitosamente'
        ], 200);
    }
}
