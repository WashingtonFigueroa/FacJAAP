<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class BackupController extends Controller
{
    public function generarBackup() {
        try {
            $filename = 'backup-' . date('Y-m-d');
            Artisan::call('backup:mysql-dump', ['filename' => $filename]);
            $output = Artisan::output();
            return response()->download(storage_path('app/backups/' . $filename . '.sql'));
        } catch (Exception $e) {
            Flash::error($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
