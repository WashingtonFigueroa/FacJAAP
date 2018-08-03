<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Usuario extends  Authenticatable
{
    use Notifiable;
    use SoftDeletes;
    protected $table = 'usuarios';
    protected $primaryKey = 'iduser';
    protected $fillable = [
        'idtipo',
        'nombre',
        'correo',
        'password'
    ];
    protected $dates = ['deleted_at'];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function tipoUsuario() {
        return $this->belongsTo('App\TipoUsuario', 'idtipo'); 
    }

}
