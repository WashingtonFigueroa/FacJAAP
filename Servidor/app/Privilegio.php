<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Privilegio extends Model
{
    use SoftDeletes;
    protected $table = 'privilegios';
    protected $primaryKey = 'idprivilegio';
    protected $fillable = [
        'iduser',
        'nombre',
        'estado'
    ];
    protected $dates = ['deleted_at'];
    
    public function users() {
        return $this->belongsTo('App\User', 'iduser');
    } 
}
