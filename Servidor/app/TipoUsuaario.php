<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TipoUsuario extends Model
{
    use SoftDeletes;
    protected $table = 'tipo_usuarios';
    protected $primaryKey = 'idtipo';
    protected $fillable = [
        'nombre',
        'estado'
    ];
    protected $dates = ['deleted_at'];

    public function users() {
        return $this->hasMany('App\User', 'iduser');
    }

    /*Eliminacion en cascada, todos sus registros hijo, mueren tambien*/
    public static function boot()
    {
        parent::boot();
        static::deleting(function($padre) {
            $padre->users()->delete();
        });
    }
}
