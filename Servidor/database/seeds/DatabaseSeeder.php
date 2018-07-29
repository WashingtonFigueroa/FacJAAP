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
        // $this->call(UsersTableSeeder::class);
    }
}
