<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Privilegios extends Model
{
    protected $table = 'privilegios';
    protected $primaryKey = 'idprivilegio';
    protected $fillable  = [
        'idtipo',
        'ruta',
        'estado',
    ];

    public function tipoUsuario() {
        return $this->belongsTo('App\TipoUsuario', 'idtipo');
    }
}
