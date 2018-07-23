<?php

namespace App\Http\Controllers;

use App\Servicio;
use Illuminate\Http\Request;

class ServicioController extends Controller
{
    public function index()
    {
    return response()->json(Servicio::orderBy('idservicio', 'asc')->get(),
                                200);
    }

    public function store(Request $request)
    {
        $Servicio = Servicio::create($request->all());
        return response()->json($Servicio, 201);
    }

    public function show($id)
    {
        return response()->json(Servicio::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $Servicio = Servicio::find($id);
        $Servicio->update($request->all());
        return response()->json($Servicio, 200);
    }

    public function destroy($id)
    {
        $Servicio = Servicio::find($id);
        $Servicio->delete();
        return response()->json([
            'eliminado' => 'Servicio ' . $Servicio->idservicio
                            . ' eliminado exitosamente'
        ], 200);
    }
}
