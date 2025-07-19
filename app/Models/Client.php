<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_name',
        'logo',
        'testimonial',
        'status',
        'industry',
        'website'
    ];

    // Scope for clients with testimonials
    public function scopeWithTestimonials($query)
    {
        return $query->whereNotNull('testimonial');
    }
}
