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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('login', 'AuthenticationController@login');
Route::post('logout', 'AuthenticationController@logout');
Route::resource('proveedores', 'ProveedorController', ['except' => ['create', 'edit']]);
Route::resource('materiales', 'MaterialController', ['except' => ['create', 'edit']]);
Route::resource('factura_compras', 'FacturaCompraController', ['except' => ['create', 'edit']]);
Route::resource('detalleFacturaCompra', 'DetalleFacturaCompraController', ['except' => ['create', 'edit']]);
Route::resource('clientes', 'ContribuyenteController');
Route::resource('medidores', 'MedidorController');
Route::resource('servicios', 'ServicioController');
Route::resource('multas', 'MultaController');
Route::resource('movimientos', 'MovimientoController');
Route::resource('factura_ventas', 'FacturaVentaController');
Route::resource('pago_medidor', 'PagoMedidorController');
Route::resource('tipousuarios', 'TipoUsuarioController');
Route::resource('usuarios', 'UserController');
Route::resource('parametros', 'ParametroController');
Route::resource('privilegios', 'PrivilegioController');
Route::resource('lecturas', 'LecturaController');

/*recuperacion de documentos, archivos e imagenes*/
Route::get('factura_compras_documento/{id}', 'FacturaCompraController@getDocumento');
Route::get('medidores_activos', 'MedidorController@medidoresActivos');
