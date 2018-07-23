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
            $table->integer('idcontribuyente')->unsigned();
                $table->foreign('idcontribuyente')
                    ->references('idcontribuyente')
                    ->on('contribuyentes')
                    ->onDelete('cascade');
                 $table->integer('idmedidor')->unsigned();
                 $table->foreign('idmedidor')
                      ->references('idmedidor')
                      ->on('medidores')
                      ->onDelete('cascade');
            $table->date('fecha')->nullable();;
            $table->string('observacion', 250);
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
