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
            'estado' => true,
        ]);

        \App\User::create([
            'nombre' => 'Washington',
            'correo' => 'washington@gmail.com',
            'password' => bcrypt('washington'),
            'idtipo' => $tipo_usuario->idtipo,
        ]);
        // $this->call(UsersTableSeeder::class);
    }
}
