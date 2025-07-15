<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebAnalytics extends Model
{
    use HasFactory;

    protected $fillable = [
        'url',
        'ip_address',
        'user_agent',
        'referrer',
        'viewed_at'
    ];

    protected $casts = [
        'viewed_at' => 'datetime'
    ];

    // Scope for today's analytics
    public function scopeToday($query)
    {
        return $query->whereDate('viewed_at', today());
    }

    // Scope for this week's analytics
    public function scopeThisWeek($query)
    {
        return $query->whereBetween('viewed_at', [now()->startOfWeek(), now()->endOfWeek()]);
    }

    // Scope for this month's analytics
    public function scopeThisMonth($query)
    {
        return $query->whereMonth('viewed_at', now()->month)
                    ->whereYear('viewed_at', now()->year);
    }
}
