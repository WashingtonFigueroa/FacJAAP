<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;
    protected $table = 'users';
    protected $primaryKey = 'iduser';
    protected $fillable = [
        // 'idtipo',
        'name',
        'email'
    ];
    protected $dates = ['deleted_at'];

    protected $hidden = [
        'password', 'remember_token',
    ];

    // public function TipoUsuaario() {
    //     return $this->belongsTo('App\TipoUsuaario', 'idtipo');
    // }
}
