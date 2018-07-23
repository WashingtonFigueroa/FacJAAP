<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetalleFacturaComprasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle_factura_compras', function (Blueprint $table) {
            $table->increments('iddetallecompra');
            $table->integer('idfacturacompra')->unsigned();
            $table->foreign('idfacturacompra')
            ->references('idfacturacompra') 
            ->on('factura_compras')
            ->onDelete('cascade');
            $table->integer('cantidad');
            $table->string('descripcion');
            $table->double('punit');
            $table->double('total');
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
        Schema::dropIfExists('detalle_factura_compras');
    }
}
