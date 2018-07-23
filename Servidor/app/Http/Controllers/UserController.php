<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
    return response()->json(UserController::orderBy('nombre', 'asc')->get(),
                                200);
    }

    public function store(Request $request)
    {
        $UserController = UserController::create($request->all());
        return response()->json($UserController, 201);
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
