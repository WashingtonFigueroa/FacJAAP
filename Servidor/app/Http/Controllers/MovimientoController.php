<?php

namespace App\Http\Controllers;

use App\Movimiento;
use App\FacturaVenta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use phpDocumentor\Reflection\Types\Null_;

class MovimientoController extends Controller
{
    public function index()
    {
    return response()->json(Movimiento::orderBy('idmovimiento', 'desc')->paginate(10),200);
    }

    public function Egresos()
    {
        $egresos = Movimiento::sum('valor');
        
      return response()->json($egresos, 200); 
    }

    public function Ingresos()
    {
        $ingresos = FacturaVenta::sum('valor');
        
      return response()->json($ingresos, 200); 
    }

    public function store(Request $request)
    {
        try{
            if ($request->hasFile('documento')){
                $path_documento = $request->file('documento')->store('documentos');
                $Movimiento = new Movimiento();
                $Movimiento->tipo = $request->input('tipo');
                $Movimiento->fecha = $request->input('fecha');
                $Movimiento->detalle = $request->input('detalle');
                $Movimiento->intermediario = $request->input('intermediario');
                $Movimiento->numfac = $request->input('numfac');
                $Movimiento->valor = $request->input('valor');
                $Movimiento->documento = $path_documento;
                $Movimiento->save();
            }
            else{
                $Movimiento = new Movimiento();
                $Movimiento->tipo = $request->input('tipo');
                $Movimiento->fecha = $request->input('fecha');
                $Movimiento->detalle = $request->input('detalle');
                $Movimiento->intermediario = $request->input('intermediario');
                $Movimiento->numfac = $request->input('numfac');
                $Movimiento->valor = $request->input('valor');
                $Movimiento->documento = "documentos/log.png";
                $Movimiento->save();
            }
            return response()->json([
                'title' => 'Exito',
                'message' => 'Movimiento guardado exitosamente',
                'movimiento' => $Movimiento
            ], 201);

        }catch (\Exception $e) {
            return response()->json([
                'title' => 'Exito',
                'message' => 'Movimiento no guardado exitosamente',
                'error' => 'ups!'
            ], 500);
        }
    }

    public function show($id)
    {
        return response()->json(Movimiento::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $Movimiento = Movimiento::find($id);
        $Movimiento->update($request->all());
        return response()->json($Movimiento, 200);
    }

    public function destroy($id)
    {
        $Movimiento = Movimiento::find($id);
//        Storage::delete($Movimiento->documento);
        $Movimiento->delete();
        return response()->json([
            'eliminado' => 'Movimiento con #' . $Movimiento->idmovimiento
                          . ' fue eliminado exitosamente'
        ], 200);
    }

    public function getDocumento($id){
        $Movimiento = Movimiento::find($id);
        return response()->file(storage_path('app/' . $Movimiento->documento));
        //return response()->download(storage_path('app/' . $Movimiento->documento));
    }

    public function ver_documento($id) {
        $documento = Movimiento::find($id)->documento;
        if($documento !== null)
        {
            return response()->file(storage_path('app/' . $documento));
        }
    }

}
