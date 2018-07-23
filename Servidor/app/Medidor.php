<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Medidor extends Model
{
    use SoftDeletes;
    protected $table = 'medidores';
    protected $primaryKey = 'idmedidor';
    protected $fillable = [
        'codigo',
        'observacion',
        'estado'
    ];
    protected $dates = ['deleted_at'];   

    public function Servicios() {
        return $this->hasMany('App\Servicio','idservicio');
    }

    /*Eliminacion en cascada, todos sus registros hijo, mueren tambien*/
    public static function boot()
    {
        parent::boot();
        static::deleting(function($padre) {
            $padre->Servicios()->delete();
        });
    }
}

