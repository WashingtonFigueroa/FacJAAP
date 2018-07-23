<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DetalleFacturaCompra extends Model
{
    use SoftDeletes;
    protected $table = 'detalle_factura_compras';
    protected $primaryKey = 'iddetallecompra';
    protected $fillable = [
        'idfacturacompra',
        'cantidad',
        'descripcion',
        'punit',
        'total'
    ];
    protected $dates = ['deleted_at']; 
    public function factura_compras() {
        return $this->belongsTo('App\FacturaCompra', 'idfacturacompra');
    } 
}
