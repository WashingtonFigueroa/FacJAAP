<?php

namespace App\Http\Controllers;

use App\Contribuyente;
use App\Lectura;
use App\Parametro;
use App\Servicio;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Client;

class LecturaController extends Controller
{
    public function index()
    {
        return response()->json(Lectura::with('servicio')
            ->orderBy('idlectura', 'asc')
            ->paginate(7),
            200);
    }

    public function store(Request $request)
    {

        $idcliente = $request->input('idcliente');
        $idmedidor = $request->input('idmedidor');
        $idservicio = Servicio::where('idcliente', $idcliente)
                                ->where('idmedidor', $idmedidor)
                                ->first()
                                ->idservicio;

        $lecturas = Servicio::find($idservicio)->lecturas()->count();

        $baseM3 = Parametro::where('descripcion', 'like', '%'.'Base M3'.'%')->first();
        $valorbase = Parametro::where('descripcion', 'like', '%'.'Base M3 Chorlavi'.'%')->first();
        $metroCubicoAgua = Parametro::where('descripcion', 'like', '%'.'M3 Agua Chorlavi'.'%')->first();
        
        $lectura = new Lectura();
        if ($lecturas === 0) {
            $lectura->idservicio = $idservicio;
            $lectura->observacion = $request->input('observacion');
            $lectura->fecha = $request->input('fecha');
            $lectura->actual = $request->input('actual');
            $lectura->anterior = $request->input('actual');
            $lectura->consumo = $request->input('actual');
            if ($lectura->consumo > $baseM3->valor)
            {
                $lectura->excedente = $lectura->consumo - $baseM3->valor;
                $lectura->tarifa = ($lectura->excedente *  $metroCubicoAgua->valor) + $valorbase->valor;
            }else{
                $lectura->excedente = 0;
                $lectura->tarifa = $valorbase->valor;
            }
            $lectura->estado = 'Deber';
            $lectura->save();
        } else {
            $ultimaLectura = Servicio::find($idservicio)->lecturas()->orderBy('idlectura', 'desc')->first();
            $lectura->idservicio = $idservicio;
            $lectura->observacion = $request->input('observacion');
            $lectura->fecha = $request->input('fecha');
            $lectura->actual = $request->input('actual');
            $lectura->anterior = $ultimaLectura->actual;
            $lectura->consumo = $lectura->actual - $lectura->anterior;
            if ($lectura->consumo > $baseM3->valor)
            {
                $lectura->excedente = $lectura->consumo - $baseM3->valor;
                $lectura->tarifa = ($lectura->excedente *  $metroCubicoAgua->valor) + $valorbase->valor;
            }else{
                $lectura->excedente = 0;
                $lectura->tarifa = $valorbase->valor;
            }
            $lectura->estado = 'Deber';
            $lectura->save();
        }
        return response()->json($lectura, 201);
    }

    public function show($id)
    {
        return response()->json(Lectura::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $Lectura = Lectura::find($id);
        $Lectura->update($request->all());
        return response()->json($Lectura, 200);
    }

    public function destroy($id)
    {
        $Lectura = Lectura::find($id);
        $Lectura->delete();
        return response()->json([
            'eliminado' => 'Lectura ' . $Lectura->idlectura
                . ' eliminado exitosamente'
        ], 200);
    }
}
