<?php

namespace App\Http\Controllers;

use App\FacturaVenta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FacturaVentaController extends Controller
{
    public function index()
    {
        return response()->json(FacturaVenta::orderBy('idfacturaventa', 'desc')->paginate(10), 200);

    }

    public function exporarExcel()
    {
        return response()->json(DB::table('factura_ventas')
            ->join('servicios','servicios.idservicio','=','factura_ventas.idservicio')
            ->join('clientes','clientes.idcliente','=','servicios.idcliente')
            ->select('factura_ventas.idservicio','clientes.nombres as cliente','factura_ventas.fecha','factura_ventas.valor','factura_ventas.responsable')
            ->get(), 200);
    }

    public function store(Request $request)
    {
        $FacturaVenta = FacturaVenta::create($request->all());
        return response()->json($FacturaVenta, 201);
    }

    public function show($id)
    {
        return response()->json(FacturaVenta::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $FacturaVenta = FacturaVenta::find($id);
        $FacturaVenta->update($request->all());
        return response()->json($FacturaVenta, 200);
    }

    public function destroy($id)
    {
        $FacturaVenta = FacturaVenta::find($id);
        $FacturaVenta->delete();
        return response()->json([
            'eliminado' => 'FacturaVenta ' . $FacturaVenta->idfacturaventa
                . ' eliminado exitosamente'
        ], 200);
    }
    public function ventasMes($start, $end) {
        $ventas = FacturaVenta::whereBetween('fecha', [$start, $end])
            ->groupBy('mes')
            ->selectRaw('mes, sum(valor) as suma')
            ->get();
        return response()->json($ventas, 200); 
    }
}
