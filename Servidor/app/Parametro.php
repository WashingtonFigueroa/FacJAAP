<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Parametro extends Model
{
    use SoftDeletes;
    protected $table = 'parametros';
    protected $primaryKey = 'idparametro';
    protected $fillable = [
        'descripcion',
        'valor',
        'detalle',
        'estado'
    ];
    protected $dates = ['deleted_at'];    
}
