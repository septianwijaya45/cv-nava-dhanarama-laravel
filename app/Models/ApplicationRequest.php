<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicationRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'whatsapp_number',
        'application_request'
    ];

    // Scope for recent requests
    public function scopeRecent($query, $days = 30)
    {
        return $query->where('created_at', '>=', now()->subDays($days));
    }
}
