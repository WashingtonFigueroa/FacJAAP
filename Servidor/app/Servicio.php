<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Servicio extends Model
{
    protected $table = 'servicios';
    protected $primaryKey = 'idservicio';
    protected $fillable =  [
        'idcontribuyente',
        'idmedidor',
        'fecha',
        'observacion',
        'estado'
    ];
    protected $dates = ['deleted_at'];

    public function Contribuyente() {
        return $this->belongsTo('App\Contribuyente', 'idcontribuyente');
    }

    public function Medidor() {
        return $this->belongsTo('App\Medidor', 'idmedidor');
    }

    public function FacturaVentas() {
        return $this->hasMany('App\FacturaVenta', 'idfacturaventa');
    }

    public function PagoMedidor() {
        return $this->hasMany('App\PagoMedidor', 'idpagomedidor');
    }

    public function Lecturas() {
        return $this->hasMany('App\Lectura', 'idlectura');
    }

    public function Multas() {
        return $this->hasMany('App\Multa', 'idmulta');
    }

    public static function boot()
    {
        parent::boot();
        static::deleting(function($padre) {
            $padre->Multas()->delete();
            $padre->Lecturas()->delete();
            $padre->FacturaVentas()->delete();
            $padre->PagoMedidor()->delete();
        });
    }


}
