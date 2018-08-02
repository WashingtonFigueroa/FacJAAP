<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(User::with('tipoUsuario')
                                    ->orderBy('nombre', 'desc')
                                    ->paginate(10), 200);
    }

    public function listaUsuarios() {
        return response()->json(User::orderBy('nombre', 'desc')->get(), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|min:6|confirmed'
        ]);
        if ($validator->fails()){
            return response()->json([
                'error' => 'La confirmacion de password no coincide'
            ], 500);
        } else {
            $user = new User();
            $user->idtipo = $request->input('idtipo');
            $user->nombre = $request->input('nombre');
            $user->correo = $request->input('correo');
            $user->password = Hash::make($request->input('password'));
            $user->save();
            return response()->json($user, 201);
        }
    }

    public function show($id)
    {
        return response()->json(UserController::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $UserController = UserController::find($id);
        $UserController->update($request->all());
        return response()->json($UserController, 200);
    }

    public function destroy($id)
    {
        $UserController = UserController::find($id);
        $UserController->delete();
        return response()->json([
            'eliminado' => 'UserController ' . $UserController->nombre
                            . ' eliminado exitosamente'
        ], 200);
    }
}
