<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLecturasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lecturas', function (Blueprint $table) {
            $table->increments('idlectura');
            $table->integer('idservicio')->unsigned();
            $table->foreign('idservicio')
                  ->references('idservicio') 
                  ->on('servicios')
                  ->onDelete('cascade');
            $table->string('observacion');
            $table->date('fecha')->nullable;
            $table->integer('anterior');
            $table->integer('actual');
            $table->integer('consumo');
            $table->double('tarifa');
            $table->double('excedente');
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
        Schema::dropIfExists('lecturas');
    }
}
