<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::post('login', 'AuthenticationController@login');
Route::post('logout', 'AuthenticationController@logout');
Route::resource('clientes', 'ContribuyenteController');
Route::resource('medidores', 'MedidorController');
Route::resource('servicios', 'ServicioController');
Route::resource('multas', 'MultaController');

Route::resource('movimientos', 'MovimientoController');
Route::get('total_egresos', 'MovimientoController@Egresos');
Route::get('total_ingresos', 'MovimientoController@Ingresos');

Route::resource('factura_ventas', 'FacturaVentaController');
Route::resource('pago_medidor', 'PagoMedidorController');
Route::resource('parametros', 'ParametroController');
Route::resource('tipousuarios', 'TipoUsuarioController');
Route::resource('usuarios', 'UsuarioController');
Route::resource('listaUsuarios', 'UsuarioController@listaUsuarios');
Route::resource('privilegios', 'PrivilegiosController', ['only'=> ['index', 'update','store']]);

Route::resource('lecturas', 'LecturaController');
Route::resource('materiales', 'MaterialController');
Route::resource('inventarios', 'InventarioController');


/*recuperacion de documentos, archivos e imagenes*/
Route::get('factura_compras_documento/{id}', 'FacturaCompraController@getDocumento');
Route::get('medidores_activos', 'MedidorController@medidoresActivos');
Route::get('lista_servicios', 'ServicioController@listaServicios');
//exportar excel
Route::get('exporarExcel_servicios', 'ServicioController@exporarExcel');
Route::get('exporarExcel_multas', 'MultaController@exporarExcel');
Route::get('exporarExcel_lecturas', 'LecturaController@exporarExcel');

Route::get('lista_clientes', 'ContribuyenteController@listaContribuyentes');

Route::get('lista_cargos', 'TipoUsuarioController@listaCargos');
Route::get('lista_privilegios/{idtipo}', 'TipoUsuarioController@listaPrivilegios');

Route::get('lista_materiales', 'MaterialController@listaMateriales');
Route::get('lista_medidores', 'MedidorController@listaMedidores');
Route::get('lista_medidores_cliente/{idcliente}', 'MedidorController@listaMedidoresContribuyente');
Route::get('lista_medidores_cliente_nombres/{nombres}', 'MedidorController@listaMedidoresContribuyenteNombres');
Route::get('lista_lecturas/{idmedidor}', 'MedidorController@listaLecturas');
Route::get('servicio_medidor/{idmedidor}', 'MedidorController@servicioMedidor');

/*actualizar*/
Route::get('pagar/{idlectura}', 'LecturaController@pagar');
Route::get('ver_factura/{idlectura}', 'LecturaController@verFactura');
Route::get('ventas_mes/{start}/{end}', 'FacturaVentaController@ventasMes');

Route::get('search_lectura_anterior/{idmedidor}', 'LecturaController@searchLecturaAnterior');


Route::get('generar_backup', 'BackupController@generarBackup');

Route::post('buscar_cliente', 'ContribuyenteController@buscarContribuyente');
//Buscar doc
Route::get('ver_documento/{id}','MovimientoController@ver_documento');