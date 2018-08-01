<?php

namespace App\Http\Controllers;

use App\Contribuyente;
use Illuminate\Http\Request;
use Validator;

class ContribuyenteController extends Controller
{

    public function index()
    {
        return response()->json(Contribuyente::orderBy('idcliente', 'desc')->paginate(10), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cedula' => 'required|unique:clientes'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'mensaje' => 'El cliente esta registrado'
            ], 500);
        } else {
            $Contribuyente = Contribuyente::create($request->all());
            return response()->json($Contribuyente, 201);
        }          
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
            'eliminado' => 'Cliente ' . $Contribuyente->nombres
                        . ' eliminado exitosamente'
        ], 200);
    }
    public function listaContribuyentes() {
        return response()->json(Contribuyente::orderBy('nombres', 'asc')->get(), 200);
    }

}
