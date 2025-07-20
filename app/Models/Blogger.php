<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Str;

class Blogger extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'cover_image',
        'content',
        'category',
        'status',
        'published_at',
        'meta_title',
        'meta_description'
    ];

    protected $casts = [
        'published_at' => 'datetime'
    ];

    // Automatically generate slug from title
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($blogger) {
            if (!$blogger->slug) {
                $blogger->slug = Str::slug($blogger->title);
            }
        });

        static::updating(function ($blogger) {
            if ($blogger->isDirty('title') && !$blogger->isDirty('slug')) {
                $blogger->slug = Str::slug($blogger->title);
            }
        });
    }

    // Relationship with BlogAnalytics
    public function analytics()
    {
        return $this->hasMany(BlogAnalytics::class, 'blogger_id');
    }

    // Scope for published posts
    public function scopePublished($query)
    {
        return $query->where('status', 'published')
                    ->whereNotNull('published_at')
                    ->where('published_at', '<=', now());
    }

    // Scope for draft posts
    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }
}
