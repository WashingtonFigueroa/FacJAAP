<?php

namespace App\Http\Controllers;

use App\Lectura;
use App\Parametro;
use App\Servicio;
use Illuminate\Http\Request;

class LecturaController extends Controller
{
    public function index()
    {
        return response()->json(Lectura::with('servicio')
            ->orderBy('idlectura', 'asc')->get(),200);

            // return response()->json(Servicio::with('Contribuyente','Medidor')
            // ->orderBy('idservicio', 'asc')
            // ->paginate(7),
            // 200); 
    }

    public function store(Request $request)
    {
        /*
         * anterior
         * consumo
         * tarifa
         * excedente
         * */
        $idservicio = $request->input('idservicio');
        $lecturas = Servicio::find('idservicio')->Lecturas()->count();
        $metroCubicoAgua = Parametro::where('descripcion', 'like', '%'.'Metro cubico de agua'.'%')->first();
        $base = Parametro::where('descripcion', 'like', '%'.'base'.'%')->first();
        $lectura = new Lectura();
        if ($lecturas === 0) {
            $lectura->idservicio = $idservicio;
            $lectura->observacion = $request->input('observacion');
            $lectura->fecha = $request->input('fecha');
            $lectura->actual = $request->input('actual');
            $lectura->anterior = $request->input('actual');
            $lectura->consumo = 0;
            $lectura->excedente = ($lectura->consumo - $base->valor) * $metroCubicoAgua->valor;
            $lectura->tarifa = $lectura->excedente + $metroCubicoAgua->valor;
            $lectura->estado = $request->input('estado');
            $lectura->save();
        } else {
            $ultimaLectura = Servicio::find('idservicio')->Lecturas()->orderBy('idlectura', 'desc')->first();
            $lectura->idservicio = $idservicio;
            $lectura->observacion = $request->input('observacion');
            $lectura->fecha = $request->input('fecha');
            $lectura->actual = $request->input('actual');
            $lectura->anterior = $ultimaLectura->actual;
            $lectura->consumo = $lectura->actual - $lectura->anterior;
            $lectura->excedente = ($lectura->consumo - $base->valor) * $metroCubicoAgua->valor;
            $lectura->tarifa = $lectura->excedente + $metroCubicoAgua->valor;
            $lectura->estado = $request->input('estado');
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
