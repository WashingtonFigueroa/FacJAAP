<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Multa extends Model
{
    use SoftDeletes;
    protected $table = 'multas';
    protected $primaryKey = 'idmulta';
    protected $fillable = [
        'idservicio',
        'descripcion',
        'valor',
        'fecha',
        'estado'
    ];
    protected $dates = ['deleted_at'];
    
    public function servicio() {
        return $this->belongsTo('App\Servicio', 'idservicio');
    }
}

