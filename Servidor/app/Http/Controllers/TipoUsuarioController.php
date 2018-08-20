<?php

namespace App\Http\Controllers;

use App\Privilegios;
use App\TipoUsuario;
use Illuminate\Http\Request;
use Validator;

class TipoUsuarioController extends Controller
{
    public function index()
    {
        return response()->json(TipoUsuario::orderBy('idtipo', 'desc')->paginate(10), 200);
    }

    public function listaCargos() {
        return response()->json(TipoUsuario::orderBy('idtipo', 'asc')->get(), 200);
    }
    public function listaPrivilegios($idtipo) {
        return response()->json(Privilegios::where('idtipo', $idtipo)->get(), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|unique:tipo_usuarios'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'mensaje' => 'El cargo esta registrado'
            ], 500);
        } else {
            $TipoUsuario = TipoUsuario::create($request->all());
            //buscar idtipo
            $idtipo = TipoUsuario::where('nombre', $request->input('nombre'))
                ->first()
                ->idtipo;
            //crear privilegios
            $rutas = ['tipousuarios','usuarios','privilegios','materiales','inventarios','movimientos','estadisticas','parametros','clientes','medidores','servicios','multas','lecturas','facturas'];
            for ($i = 1; $i<=1; $i++) {
                foreach ($rutas as $ruta) {
                    \App\Privilegios::create([
                        'idtipo' =>  $idtipo,
                        'ruta' => $ruta,
                        'estado' => true
                    ]);
                }
            }
            return response()->json($TipoUsuario, 201);
        }          
    }

    public function show($id)
    {
        return response()->json(TipoUsuario::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $TipoUsuario = TipoUsuario::find($id);
        $TipoUsuario->update($request->all());
        return response()->json($TipoUsuario, 200);
    }

    public function destroy($id)
    {
        $TipoUsuario = TipoUsuario::find($id);
        $TipoUsuario->delete();
        return response()->json([
            'eliminado' => 'Cargo ' . $TipoUsuario->nombre
                        . ' eliminado exitosamente'
        ], 200);
    }

}
