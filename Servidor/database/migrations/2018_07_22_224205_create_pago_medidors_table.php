<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagoMedidorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pago_medidores', function (Blueprint $table) {
            $table->increments('idpagomedidor');
            $table->integer('idservicio')->unsigned();
            $table->foreign('idservicio')
                  ->references('idservicio') 
                  ->on('servicios')
                  ->onDelete('cascade');
            $table->date('fecha')->nullable();
            $table->date('descripcion');
            $table->double('valor');
            $table->string('estado');
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
        Schema::dropIfExists('pago_medidores');
    }
}
