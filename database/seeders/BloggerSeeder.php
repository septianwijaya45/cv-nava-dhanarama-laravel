<?php

namespace Database\Seeders;

use App\Models\Blogger;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BloggerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $blogs = [
            [
                'title' => 'The Future of Web Development: Trends to Watch in 2025',
                'slug' => 'future-web-development-trends-2025',
                'cover_image' => 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
                'content' => 'Web development is constantly evolving, and 2025 promises to bring exciting new trends that will reshape how we build and interact with websites. From AI-powered development tools to advanced JavaScript frameworks, here\'s what you need to know about the future of web development...',
                'category' => 'Technology',
                'status' => 'published',
                'published_at' => now()->subDays(5)
            ],
            [
                'title' => 'Building Scalable Applications with Laravel and React',
                'slug' => 'building-scalable-applications-laravel-react',
                'cover_image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
                'content' => 'Laravel and React make a powerful combination for building modern web applications. In this comprehensive guide, we\'ll explore how to leverage the strengths of both technologies to create scalable, maintainable applications...',
                'category' => 'Development',
                'status' => 'published',
                'published_at' => now()->subDays(10)
            ],
            [
                'title' => 'Best Practices for Mobile App Development in 2025',
                'slug' => 'mobile-app-development-best-practices-2025',
                'cover_image' => 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
                'content' => 'Mobile app development continues to evolve with new technologies and user expectations. Learn about the latest best practices, from design principles to performance optimization...',
                'category' => 'Mobile',
                'status' => 'published',
                'published_at' => now()->subDays(15)
            ],
            [
                'title' => 'Draft Article: Upcoming Features',
                'slug' => 'draft-article-upcoming-features',
                'cover_image' => null,
                'content' => 'This is a draft article about upcoming features we\'re working on...',
                'category' => 'News',
                'status' => 'draft',
                'published_at' => null
            ]
        ];

        foreach ($blogs as $blog) {
            Blogger::create($blog);
        }
    }
}
