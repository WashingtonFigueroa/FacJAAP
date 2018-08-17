<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class inventario extends Model
{
    use SoftDeletes;
    protected $table = 'inventarios';
    protected $primaryKey = 'idinventario';
    protected $fillable = [
        'idmaterial',
        'descripcion',
        'cantidad',
        'responsable',
        'fecha',
        'estado',
    ];
    protected $dates = ['deleted_at'];

    public function material() {
        return $this->belongsTo('App\material', 'idmaterial');
    }

}