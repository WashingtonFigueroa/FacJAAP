<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class material extends Model
{
    use SoftDeletes;
    protected $table = 'materiales';
    protected $primaryKey = 'idmaterial';
    protected $fillable = [
        'nombre',
        'descripcion',
        'stock'
    ];
    protected $dates = ['deleted_at'];

    public function inventarios() {
        return $this->hasMany('App\inventario', 'idinventario');
    }

    /*Eliminacion en cascada, todos sus registros hijo, mueren tambien*/
    public static function boot()
    {
        parent::boot();
        static::deleting(function($padre) {
            $padre->inventarios()->delete();
        });
    }
}
