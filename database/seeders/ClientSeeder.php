<?php

namespace Database\Seeders;

use App\Models\Client;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $clients = [
            [
                'client_name' => 'TechStart Inc.',
                'logo' => 'https://via.placeholder.com/200x100/4F46E5/FFFFFF?text=TechStart',
                'testimonial' => 'Nava 3D delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding.',
                'website' => 'https://techstart-inc.example.com'
            ],
            [
                'client_name' => 'Digital Solutions Ltd.',
                'logo' => 'https://via.placeholder.com/200x100/059669/FFFFFF?text=Digital+Solutions',
                'testimonial' => 'Working with Nava 3D was a fantastic experience. They transformed our ideas into a beautiful, functional web application.',
                'website' => 'https://digitalsolutions.example.com'
            ],
            [
                'client_name' => 'GreenTech Corp',
                'logo' => 'https://via.placeholder.com/200x100/0D9488/FFFFFF?text=GreenTech',
                'testimonial' => 'The team at Nava 3D is professional, responsive, and delivers high-quality work on time. Highly recommended!',
                'website' => 'https://greentech-corp.example.com'
            ],
            [
                'client_name' => 'EduLearn Platform',
                'logo' => 'https://via.placeholder.com/200x100/7C3AED/FFFFFF?text=EduLearn',
                'testimonial' => 'Our learning management system built by Nava 3D has revolutionized how we deliver online education. Excellent work!',
                'website' => 'https://edulearn.example.com'
            ],
            [
                'client_name' => 'HealthCare Plus',
                'logo' => 'https://via.placeholder.com/200x100/DC2626/FFFFFF?text=HealthCare+Plus',
                'testimonial' => null,
                'website' => 'https://healthcareplus.example.com'
            ],
            [
                'client_name' => 'FoodieApp',
                'logo' => 'https://via.placeholder.com/200x100/EA580C/FFFFFF?text=FoodieApp',
                'testimonial' => 'The restaurant booking system created by Nava 3D has streamlined our operations and improved customer satisfaction significantly.',
                'website' => null
            ]
        ];

        foreach ($clients as $client) {
            Client::create($client);
        }
    }
}
