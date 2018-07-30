<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMultasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('multas', function (Blueprint $table) {
            $table->increments('idmulta');
            $table->integer('idservicio')->unsigned();
            $table->foreign('idservicio')
                  ->references('idservicio') 
                  ->on('servicios')
                  ->onDelete('cascade');
            $table->string('descripcion',200);
            $table->double('valor', 8, 2);
            $table->date('fecha');
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
        Schema::dropIfExists('multas');
    }
}
