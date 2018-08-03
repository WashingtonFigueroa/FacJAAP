<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventarios', function (Blueprint $table) {
            $table->increments('idinventario');
            $table->integer('idmaterial')->unsigned();
            $table->foreign('idmaterial')->references('idmaterial')->on('materiales')->onDelete('cascade');
            $table->string('descripcion',255);
            $table->integer('cantidad');
            $table->string('responsable',100);
            $table->date('fecha');
            $table->string('estado',25);
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
        Schema::dropIfExists('inventarios');
    }
}
