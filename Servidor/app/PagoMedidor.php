<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PagoMedidor extends Model
{
    use SoftDeletes;
    protected $table = 'pago_medidores';
    protected $primaryKey = 'idpagomedidor';
    protected $fillable = [
        'idservicio',
        'fecha',
        'descripcion',
        'valor',
        'estado'
    ];
    protected $dates = ['deleted_at'];
    
    public function servicio() {
        return $this->belongsTo('App\Servicio', 'idservicio');
    }  
}
