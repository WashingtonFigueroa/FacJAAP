<?php

namespace App\Http\Controllers;

use App\Medidor;
use App\Parametro;
use App\Servicio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ServicioController extends Controller
{
    public function index()
    {
    return response()->json(Servicio::with('Contribuyente','Medidor')
                    ->orderBy('idservicio', 'desc')
                    ->paginate(150),
                    200); 
    }

    public function exporarExcel()
    {
        return response()->json(DB::table('servicios')
            ->join('clientes','clientes.idcliente','=','servicios.idcliente')
            ->join('medidores','medidores.idmedidor','=','servicios.idmedidor')
            ->select('servicios.idservicio','clientes.nombres as contribuyente','medidores.codigo as numero')
            ->get(), 200);
    }
    
    public function store(Request $request)
    {
        $parametro = Parametro::where('descripcion', 'like', '%' . 'Servicio' . '%' )
                              ->first();
        $servicio = new Servicio();
        $servicio->idcliente = $request->input('idcliente');
        $servicio->idmedidor = $request->input('idmedidor');
        $servicio->fecha = $request->input('fecha');
        $servicio->observacion = $request->input('observacion');
        $servicio->estado = $request->input('estado');
        $servicio->saldo = $parametro->valor;
        $servicio->save();
        $medidor = Medidor::find($servicio->idmedidor);
        $medidor->estado = 'Pasivo';
        $medidor->save();
        return response()->json($servicio, 201);
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
    public function listaServicios() {
        return response()->json(Servicio::orderBy('idservicio')->get(), 200);
    }
}
