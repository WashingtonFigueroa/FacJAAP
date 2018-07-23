<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contribuyente extends Model
{
    use SoftDeletes;
    protected $table = 'contribuyentes';
    protected $primaryKey = 'idcontribuyente';
    protected $fillable = [
        'cedula',
        'nombres',
        'direccion',
        'email',
        'telefono',
        'referencia',
        'observacion',
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
