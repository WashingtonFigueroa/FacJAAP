<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $tipo_usuario = \App\TipoUsuario::create([
            'nombre' => 'Administrador',
            'estado' => 'activo',
        ]);

        \App\User::create([
            'idtipo' => $tipo_usuario->idtipo,
            'nombre' => 'Washington',
            'correo' => 'washington@gmail.com',
            'password' => bcrypt('washington'),
        ]);

        \App\Parametro::create([
            'descripcion' => 'Base M3',
            'valor' => 15,
            'detalle' => 'Base consumo',
            'estado' => 'Activo',
        ]);
        \App\Parametro::create([
            'descripcion' => 'Base M3 Chorlavi',
            'valor' => 2.00,
            'detalle' => 'Valor base consumo',
            'estado' => 'Activo',
        ]);

        \App\Parametro::create([
            'descripcion' => 'M3 Agua Chorlavi',
            'valor' => 0.10,
            'detalle' => 'Valor m3 agua',
            'estado' => 'Activo',
        ]);

        \App\Parametro::create([
            'descripcion' => 'Servicio',
            'valor' => 300.00,
            'detalle' => 'Valor instalación',
            'estado' => 'Activo',
        ]);

        // $this->call(UsersTableSeeder::class);
    }
}
