<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FacturaCompra extends Model
{
    protected $table = 'factura_compras';
    protected $primaryKey = 'idfacturacompra';
    protected $fillable =  [
        'idproveedor',
        'numero',
        'contrato',
        'comprador',
        'fecha',
        'documento',
        'contacto',
        'telefono',
    ];
    protected $dates = ['deleted_at'];
    public function proveedor() {
        return $this->belongsTo('App\Proveedor');
    }

    public function DetalleFacturaCompra() {
        return $this->hasMany('App\DetalleFacturaCompra', 'idfacturacompra');
    }

    public static function boot()
    {
        parent::boot();
        static::deleting(function($padre) {
            $padre->DetalleFacturaCompra()->delete();
        });
    }
}
