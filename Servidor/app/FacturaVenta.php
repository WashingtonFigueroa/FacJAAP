<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FacturaVenta extends Model
{
    use SoftDeletes;
    protected $table = 'factura_ventas';
    protected $primaryKey = 'idfacturaventa';
    protected $fillable = [
        'idservicio',
        'numero',
        'fecha',
        'valor',
        'responsable',
        'estado',
        'impreso',
        'mes',
    ];
    protected $dates = ['deleted_at'];
    
    public function servicio() {
        return $this->belongsTo('App\Servicio', 'idservicio');
    }
}
