<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogAnalytics extends Model
{
    use HasFactory;

    protected $fillable = [
        'blogger_id',
        'viewed_at',
        'ip_address',
        'user_agent',
        'referrer'
    ];

    protected $casts = [
        'viewed_at' => 'datetime'
    ];

    // Relationship with Blogger
    public function blogger()
    {
        return $this->belongsTo(Blogger::class);
    }
}
