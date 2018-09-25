<?php

namespace App\Http\Controllers;
use App\Servicio;
use App\Contribuyente;
use App\Multa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MultaController extends Controller
{
    public function index()
    {
        return response()->json(Multa::with('servicio.Contribuyente')
            ->orderBy('idmulta', 'desc')
            ->paginate(10), 200); 
   }

    public function exporarExcel()
    {
        return response()->json(DB::table('multas')
            ->join('servicios','servicios.idservicio','=','multas.idservicio')
            ->join('clientes','clientes.idcliente','=','servicios.idcliente')
            ->select('multas.idservicio','clientes.nombres as cliente','multas.descripcion','multas.valor')
            ->where('multas.estado','=','Deber')
            ->get(), 200);
    }

    public function store(Request $request)
    {
        $idcliente = $request->input('idcliente');
        $idmedidor = $request->input('idmedidor');
        $idservicio = Servicio::where('idcliente', $idcliente)
                                ->where('idmedidor', $idmedidor)
                                ->first()
                                ->idservicio;
        $multa = new Multa();
        $multa->idservicio = $idservicio;
        $multa->descripcion = $request->input('descripcion');
        $multa->valor = $request->input('valor');
        $multa->fecha = $request->input('fecha');
        $multa->estado = $request->input('estado');
        $multa->save();
        return response()->json($multa, 201);
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
