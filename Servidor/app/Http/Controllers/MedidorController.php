<?php

namespace App\Http\Controllers;

use App\Contribuyente;
use App\Medidor;
use App\Servicio;
use Illuminate\Http\Request;
use Validator;

class MedidorController extends Controller
{
    public function index()
    {
        return response()->json(Medidor::orderBy('idmedidor', 'asc')->paginate(7), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'codigo' => 'required|unique:medidores'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'mensaje' => 'El codigo de medidor ya fue asignado'
            ], 500);
        } else {
            $Medidor = Medidor::create($request->all());
            return response()->json($Medidor, 201);
        }
    }

    public function show($id)
    {
        return response()->json(Medidor::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $Medidor = Medidor::find($id);
        $Medidor->update($request->all());
        return response()->json($Medidor, 200);
    }

    public function destroy($id)
    {
        $Medidor = Medidor::find($id);
        $Medidor->delete();
        return response()->json([
            'eliminado' => 'Medidor ' . $Medidor->idmedidor. ' eliminado exitosamente'
        ], 200);
    }
    public function medidoresActivos() {
        $medidores = Medidor::where('estado', 'Activo')->get();
        return response()->json($medidores, 200);
    }
    public function listaMedidores() {
        return response()->json(Medidor::orderBy('codigo', 'asc')->get(), 200);
    }
    public function listaMedidoresContribuyente($idcliente) {
        $servicios = Servicio::where('idcliente', $idcliente)->get();
        $medidores = [];
        foreach ($servicios as $servicio) {
            array_push($medidores, Medidor::find($servicio->idmedidor));
        }
        return response()->json($medidores, 200);
    }
}
