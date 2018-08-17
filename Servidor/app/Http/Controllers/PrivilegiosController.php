<?php

namespace App\Http\Controllers;

use App\Privilegios;
use Illuminate\Http\Request;

class PrivilegiosController extends Controller
{
    protected $privilegioData = null;
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

    }

    private function guardar($idtipo) {
        $rutas = ['tipousuarios','usuarios','privilegios','materiales','inventarios','movimientos','estadisticas','parametros','clientes','medidores','servicios','multas','lecturas','facturas'];
        foreach ($rutas as $ruta){
            $privilegio = new Privilegios();
            $privilegio->idtipo = $idtipo;
            $privilegio->ruta = $ruta;
            $privilegio->estado = true;
            $privilegio->save();
        }
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
        if ($this->privilegioData === null) {
            $this->privilegioData = request()->all();
        }
        $existe = Privilegios::where('idtipo', $idtipo)->count();

        if ($existe > 0)
        {
            $privilegios = Privilegios::where('idtipo', $idtipo)->get();
            foreach ($privilegios as $privilegio) {
                switch ($privilegio->ruta) {
                    case 'tipousuarios':
                        $privilegio->estado = $this->privilegioData['tipousuarios'];
                        $privilegio->save();
                        break;
                    case 'usuarios':
                        $privilegio->estado = $this->privilegioData['usuarios'];
                        $privilegio->save();
                        break;
                    case 'privilegios':
                        $privilegio->estado = $this->privilegioData['privilegios'];
                        $privilegio->save();
                        break;
                    case 'materiales':
                        $privilegio->estado = $this->privilegioData['materiales'];
                        $privilegio->save();
                        break;
                    case 'inventarios':
                        $privilegio->estado = $this->privilegioData['inventarios'];
                        $privilegio->save();
                        break;
                    case 'movimientos':
                        $privilegio->estado = $this->privilegioData['movimientos'];
                        $privilegio->save();
                        break;
                    case 'estadisticas':
                        $privilegio->estado = $this->privilegioData['estadisticas'];
                        $privilegio->save();
                        break;
                    case 'parametros':
                        $privilegio->estado = $this->privilegioData['parametros'];
                        $privilegio->save();
                        break;
                    case 'clientes':
                        $privilegio->estado = $this->privilegioData['clientes'];
                        $privilegio->save();
                        break;
                    case 'medidores':
                        $privilegio->estado = $this->privilegioData['medidores'];
                        $privilegio->save();
                        break;
                    case 'servicios':
                        $privilegio->estado = $this->privilegioData['servicios'];
                        $privilegio->save();
                        break;
                    case 'multas':
                        $privilegio->estado = $this->privilegioData['multas'];
                        $privilegio->save();
                        break;
                    case 'lecturas':
                        $privilegio->estado = $this->privilegioData['lecturas'];
                        $privilegio->save();
                        break;
                    case 'facturas':
                        $privilegio->estado = $this->privilegioData['facturas'];
                        $privilegio->save();
                        break;
                }
            }
            return response()->json(['exito' => 'Privilegios actualizados'], 200);
        }else{
            $this->guardar($idtipo);
            $this->update($idtipo);
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
