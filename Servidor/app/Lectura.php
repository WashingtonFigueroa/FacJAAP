<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lectura extends Model
{
    use SoftDeletes;
    protected $table = 'lecturas';
    protected $primaryKey = 'idlectura';
    protected $fillable = [
        'idservicio',
        'observacion',
        'fecha',
        'anterior',
        'actual',
        'consumo',
        'tarifa',
        'excedente',
        'estado'

    ];
    protected $dates = ['deleted_at'];
    
    public function servicio() {
        return $this->belongsTo('App\Servicio', 'idservicio');
    }
}
