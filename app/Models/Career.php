<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    use HasFactory;

    protected $fillable = [
        'position',
        'description',
        'qualification',
        'status',
        'is_active',
        'location',
        'department',
        'type',
        'posted_at',
        'deadline'
    ];

    protected $casts = [
        'posted_at' => 'datetime',
        'deadline' => 'datetime'
    ];

    // Scope for active careers (not yet expired)
    public function scopeActive($query)
    {
        return $query->where('deadline', '>', now());
    }

    // Scope for remote positions
    public function scopeRemote($query)
    {
        return $query->where('location', 'remote');
    }

    // Scope for onsite positions
    public function scopeOnsite($query)
    {
        return $query->where('location', 'onsite');
    }
}
