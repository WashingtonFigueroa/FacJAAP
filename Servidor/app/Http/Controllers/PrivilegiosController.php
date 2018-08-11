<?php

namespace App\Http\Controllers;

use App\Privilegios;
use Illuminate\Http\Request;

class PrivilegiosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Privilegios::get(), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Privilegios  $privilegios
     * @return \Illuminate\Http\Response
     */
    public function show(Privilegios $privilegios)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Privilegios  $privilegios
     * @return \Illuminate\Http\Response
     */
    public function edit(Privilegios $privilegios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Privilegios  $privilegios
     * @return \Illuminate\Http\Response
     */
    public function update($idtipo)
    {
        $privilegioData = request()->all();
        $privilegios = Privilegios::where('idtipo', $idtipo)->get();

        if ($privilegios != 0)
        {
            foreach ($privilegios as $privilegio) {
                switch ($privilegio->ruta) {
                    case 'tipousuarios':
                        $privilegio->estado = $privilegioData['tipousuarios'];
                        $privilegio->save();
                        break;
                    case 'usuarios':
                        $privilegio->estado = $privilegioData['usuarios'];
                        $privilegio->save();
                        break;
                    case 'privilegios':
                        $privilegio->estado = $privilegioData['privilegios'];
                        $privilegio->save();
                        break;
                    case 'inventario':
                        $privilegio->estado = $privilegioData['inventario'];
                        $privilegio->save();
                        break;
                    case 'kardex':
                        $privilegio->estado = $privilegioData['kardex'];
                        $privilegio->save();
                        break;
                    case 'administracion':
                        $privilegio->estado = $privilegioData['administracion'];
                        $privilegio->save();
                        break;
                    case 'estadisticas':
                        $privilegio->estado = $privilegioData['estadisticas'];
                        $privilegio->save();
                        break;
                    case 'parametros':
                        $privilegio->estado = $privilegioData['parametros'];
                        $privilegio->save();
                        break;
                    case 'clientes':
                        $privilegio->estado = $privilegioData['clientes'];
                        $privilegio->save();
                        break;
                    case 'medidores':
                        $privilegio->estado = $privilegioData['medidores'];
                        $privilegio->save();
                        break;
                    case 'servicios':
                        $privilegio->estado = $privilegioData['servicios'];
                        $privilegio->save();
                        break;
                    case 'multas':
                        $privilegio->estado = $privilegioData['multas'];
                        $privilegio->save();
                        break;
                    case 'lecturas':
                        $privilegio->estado = $privilegioData['lecturas'];
                        $privilegio->save();
                        break;
                    case 'pago_planilla':
                        $privilegio->estado = $privilegioData['pago_planilla'];
                        $privilegio->save();
                        break;
                }
            }
            return response()->json(['exito' => 'Privilegios actualizados'], 200);
        }else{
            $privilegio = Privilegios::create($privilegioData->all());
            return response()->json($privilegio, 201);
        }


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Privilegios  $privilegios
     * @return \Illuminate\Http\Response
     */
    public function destroy(Privilegios $privilegios)
    {
        //
    }
}
