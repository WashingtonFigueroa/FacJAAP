<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServiciosTable extends Migration
{
    public function up()
    {
        Schema::create('servicios', function (Blueprint $table) {
            $table->increments('idservicio');
            $table->integer('idcliente')->unsigned();
                $table->foreign('idcliente')
                    ->references('idcliente')
                    ->on('clientes')
                    ->onDelete('cascade');
                 $table->integer('idmedidor')->unsigned();
                 $table->foreign('idmedidor')
                      ->references('idmedidor')
                      ->on('medidores')
                      ->onDelete('cascade');
            $table->date('fecha')->nullable();
            $table->string('observacion', 250)->nullable();
            $table->double('saldo', 8, 2);
            $table->string('estado', 100);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('servicios');
    }
}
