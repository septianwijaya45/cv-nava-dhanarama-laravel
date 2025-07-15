<?php

namespace Database\Seeders;

use App\Models\Portfolio;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $portfolios = [
            [
                'project_name' => 'E-Commerce Platform',
                'image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
                'description' => 'A modern e-commerce platform built with Laravel and React. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
                'demo_link' => 'https://demo-ecommerce.example.com',
                'category' => 'Web Application'
            ],
            [
                'project_name' => 'Task Management App',
                'image' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
                'description' => 'A comprehensive task management application with team collaboration features, real-time notifications, and progress tracking.',
                'demo_link' => 'https://demo-taskmanager.example.com',
                'category' => 'Productivity'
            ],
            [
                'project_name' => 'Restaurant Booking System',
                'image' => 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
                'description' => 'Online restaurant booking system with table management, menu display, and reservation management for restaurant owners.',
                'demo_link' => null,
                'category' => 'Business Solution'
            ],
            [
                'project_name' => 'Learning Management System',
                'image' => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
                'description' => 'Complete LMS platform for online education with course management, student progress tracking, and interactive learning tools.',
                'demo_link' => 'https://demo-lms.example.com',
                'category' => 'Education'
            ],
            [
                'project_name' => 'Real Estate Portal',
                'image' => 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
                'description' => 'Property listing platform with advanced search filters, virtual tours, and agent management system.',
                'demo_link' => 'https://demo-realestate.example.com',
                'category' => 'Web Application'
            ],
            [
                'project_name' => 'Healthcare Management System',
                'image' => 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
                'description' => 'Comprehensive healthcare management solution for clinics and hospitals with patient records, appointment scheduling, and billing.',
                'demo_link' => null,
                'category' => 'Healthcare'
            ]
        ];

        foreach ($portfolios as $portfolio) {
            Portfolio::create($portfolio);
        }
    }
}
