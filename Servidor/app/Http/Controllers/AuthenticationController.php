<?php

namespace App\Http\Controllers;

use App\Privilegios;
use App\TipoUsuario;
use App\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator;

class AuthenticationController extends Controller
{
    public function login() {
        $credentials = request()->only('correo', 'password');
        $rules = [
            'correo' => 'required|email',
            'password' => 'required|min:8',
        ];
        $validator = Validator::make($credentials, $rules);
        if ($validator->fails()) {
            return response()->json([
                'autenticado' => false,
                'mensaje' => $validator->messages()
            ], 500);
        }
/*        return response()->json($credentials);*/
        try {
 //           \Config::set('auth.providers.users.model', \App\Usuario::class);
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'autenticado' => false,
                    'mensaje' => 'Las credenciales son incorrectas'
                ], 401);
            }
        } catch (JWTException $e) {
            return response()->json([
                'autenticado' => false,
                'mensaje' => 'Error durante la autenticacion, por favor intente nuevamente'],
                500);
        }
        //Bearer ajhslfkjadshflkahsdflkjhasdflkjh
        // api/usuario?token=halskjdfhalksdjfh
        /*JWTAuth::setToken('Bearer '  . $token);
        $usuario = JWTAuth::parseToken()->authenticate();*/
        $usuario = Usuario::where('correo', \request()->input('correo'))->first();
        $idtipo = TipoUsuario::find($usuario->idtipo)->idtipo;
        $privilegios = Privilegios::where('idtipo', $idtipo)->get();
        return response()->json([
            'autenticado' => true,
            'usuario' => $usuario,
            'privilegios' => $privilegios,
            'token' => $token,
            'mensaje' => 'Usuario autenticado exitosamente'
        ], 200);
    }

    public function logout() {

    }
}
