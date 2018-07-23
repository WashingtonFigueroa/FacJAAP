<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFacturaVentasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('factura_ventas', function (Blueprint $table) {
            $table->increments('idfacturaventa');
            $table->integer('idservicio')->unsigned();
            $table->foreign('idservicio')
                  ->references('idservicio') 
                  ->on('servicios')
                  ->onDelete('cascade');
            $table->string('numero');
            $table->date('fecha');
            $table->double('valor');
            $table->string('responsable');
            $table->string('estado');
            $table->string('impreso');
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
        Schema::dropIfExists('factura_ventas');
    }
}
