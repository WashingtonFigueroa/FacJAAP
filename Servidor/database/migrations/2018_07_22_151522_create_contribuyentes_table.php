<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContribuyentesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->increments('idcliente');
            $table->string('cedula', 13);
            $table->string('nombres', 100);
            $table->string('direccion', 150);
            $table->string('email', 100)->nullable();;
            $table->string('telefono', 10)->nullable();;
            $table->string('referencia', 10)->nullable();;
            $table->string('observacion', 100)->nullable();;
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clientes');
    }
}
