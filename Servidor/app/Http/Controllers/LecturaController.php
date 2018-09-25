<?php

namespace App\Http\Controllers;

use App\Contribuyente;
use App\FacturaVenta;
use App\Lectura;
use App\Mail\Factura;
use Illuminate\Support\Facades\Mail;
use App\Multa;
use App\Parametro;
use App\Servicio;
use App\Movimiento;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\DB;

class LecturaController extends Controller
{
    public function index()
    {
        return response()->json(Lectura::with('servicio.Contribuyente')
            ->orderBy('idlectura', 'desc')
            ->paginate(10),
            200);
    }

    public function exporarExcel()
    {
        return response()->json(DB::table('lecturas')
            ->join('servicios','servicios.idservicio','=','lecturas.idservicio')
            ->join('clientes','clientes.idcliente','=','servicios.idcliente')
            ->select('lecturas.idservicio','clientes.nombres as cliente','lecturas.observacion','lecturas.fecha','lecturas.anterior','lecturas.actual','lecturas.consumo','lecturas.excedente','lecturas.tarifa','lecturas.estado')
            ->get(), 200);
    }

    public function store(Request $request)
    {
        $anteriorInput = $request->input('anterior');
        $actualnput = $request->input('actual');
        if ($actualnput < $anteriorInput) {
            return response()->json([
                'error' => 'La lectura actual debe ser mayor al anterior'
            ], 500);
        }
        $idcliente = $request->input('idcliente');
        $idmedidor = $request->input('idmedidor');
        $idservicio = Servicio::where('idcliente', $idcliente)
                                ->where('idmedidor', $idmedidor)
                                ->first()
                                ->idservicio;

        $lugar = Contribuyente::where('idcliente', $idcliente)
                                    ->first()
                                    ->direccion;

        $baseM3 = Parametro::where('descripcion', 'like', '%'.'Base M3'.'%')->first();
        if ($lugar === "San José de Chorlaví")
        {
            $valorbase = Parametro::where('descripcion', 'like', '%'.'Base M3 Chorlavi'.'%')->first();
            $metroCubicoAgua = Parametro::where('descripcion', 'like', '%'.'M3 Agua Chorlavi'.'%')->first();
        }else {
            $valorbase = Parametro::where('descripcion', 'like', '%'.'Base M3 San Agustin'.'%')->first();
            $metroCubicoAgua = Parametro::where('descripcion', 'like', '%'.'M3 Agua San Agustin'.'%')->first();
        }

        $lectura = new Lectura();
        $lectura->idservicio = $idservicio;
        $lectura->observacion = $request->input('observacion');
        $lectura->fecha = Carbon::now()->format('Y-m-d');
        $lectura->anterior = $request->input('anterior');
        $lectura->actual = $request->input('actual');
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

    public function pagar($idlectura) {
        //http://localhost:8000/api/pagar/:idlectura?token=hasdkfjhaausdfi
        $user = JWTAuth::parseToken()->authenticate();
        if ($user->nombre != null) {
            $tarifa = 0;
            $multa = 0;

            $totalPagar = 0;
            $lectura = Lectura::find($idlectura);
            $tarifa += $lectura->tarifa;
            $totalPagar += $tarifa;
            $idservicio = $lectura->idservicio;

            $idcliente = Servicio::find($idservicio)->idcliente;
            $cliente = Contribuyente::find($idcliente);

            $multa += Multa::where('idservicio', $idservicio)
                                ->where('estado', 'Deber')
                                ->sum('valor');
            $totalPagar += $multa;
            $lectura->estado = 'Pagado';
            $lectura->save();
            $multas = Multa::where('idservicio', $idservicio)
                           ->where('estado', 'Deber')
                           ->get();
            foreach ($multas as $multa) {
                $multa->estado = 'Pagado';
                $multa->save();
            }

            $datos = [
                'idservicio' => $idservicio,
                'fecha' => Carbon::now(),
                'valor' => $totalPagar,
                'responsable' => $user->nombre,
                'estado' => 'Pagado',
                'impreso' => 'si'
            ];
            $idfactura = $this->crearFactura($datos);
            $envio = [
                'idfactura' => $idfactura,
                'cliente' => $cliente,
                'tarifa' => $tarifa,
                'multa' => $multa,
                'total' => $totalPagar,
                'lectura' => $lectura
            ];
            $correo = $cliente->email;
            if ($correo !== '')
            {
                Mail::send(new Factura($envio));
            }
            return response()->json($envio, 200);
        }
    }
    public function getMes($fecha) {
        $mes = '';
        $newDate = new Carbon($fecha, 'America/Guayaquil');
        switch($newDate->month) {
            case 1: $mes = 'Enero'; break;
            case 2: $mes = 'Febrero'; break;
            case 3: $mes = 'Marzo'; break;
            case 4: $mes = 'Abril'; break;
            case 5: $mes = 'Mayo'; break;
            case 6: $mes = 'Junio'; break;
            case 7: $mes = 'Julio'; break;
            case 8: $mes = 'Agosto'; break;
            case 9: $mes = 'Septiembre'; break;
            case 10: $mes = 'Octubre'; break;
            case 11: $mes = 'Noviembre'; break;
            case 12: $mes = 'Diciembre'; break;
        }
        return $mes;
    }
    public function crearFactura ($datos) {
        $factura = new FacturaVenta();
        $factura->idservicio = $datos['idservicio'];
        $factura->fecha = $datos['fecha'];
        $factura->valor = $datos['valor'];
        $factura->responsable = $datos['responsable'];
        $factura->estado = $datos['estado'];
        $factura->impreso = $datos['impreso'];
        $factura->mes = $this->getMes($datos['fecha']);
        $factura->save();
//   guardar movimiento
        $Movimiento = new Movimiento();
        $Movimiento->tipo = 'Ingreso';
        $Movimiento->fecha = $datos['fecha'];
        $Movimiento->detalle = 'Pago planilla';
        $Movimiento->intermediario = $datos['responsable'];
        $Movimiento->numfac = $factura->idfacturaventa;
        $Movimiento->valor = $datos['valor'];
        $Movimiento->save();
        return $factura->idfacturaventa;
    }
    public function verFactura($idlectura) {
        $tarifa = 0;
        $multa = 0;
        $totalPagar = 0;
        $lectura = Lectura::find($idlectura);
        $tarifa += $lectura->tarifa;
        $idservicio = $lectura->idservicio;
        $multa += Multa::where('idservicio', $idservicio)
            ->where('estado', 'Deber')
            ->sum('valor');
        $totalPagar = $tarifa + $multa;

        return response()->json([
            'tarifa' => $tarifa,
            'multa' => $multa,
            'total' => $totalPagar,
            'lectura' => $lectura
        ], 200);
    }
    public function searchLecturaAnterior($idmedidor) {

        $idservicio = Servicio::where('idmedidor', $idmedidor)
                                ->first()
                                ->idservicio;
        $lectura = Lectura::where('idservicio', $idservicio)
                            ->orderBy('idlectura', 'desc')
                            ->first();

        return response()->json($lectura, 200);
    }
}
