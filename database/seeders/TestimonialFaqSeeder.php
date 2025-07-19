<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimonial;
use App\Models\Faq;

class TestimonialFaqSeeder extends Seeder
{
    public function run()
    {
        // Create testimonials
        Testimonial::create([
            'client_name' => 'Budi Santoso',
            'client_position' => 'IT Manager',
            'client_company' => 'PT Teknologi Maju',
            'testimonial_text' => 'Nava Dhanarama Indonesia memberikan solusi IT yang sangat komprehensif dan professional. Tim mereka sangat responsif dan memahami kebutuhan bisnis kami.',
            'rating' => 5,
            'is_featured' => true,
            'is_active' => true
        ]);

        Testimonial::create([
            'client_name' => 'Sari Wijaya',
            'client_position' => 'CEO',
            'client_company' => 'CV Digital Solutions',
            'testimonial_text' => 'Kualitas layanan yang diberikan sangat memuaskan. Proses pengembangan aplikasi berjalan lancar dan sesuai timeline yang disepakati.',
            'rating' => 5,
            'is_featured' => true,
            'is_active' => true
        ]);

        Testimonial::create([
            'client_name' => 'Ahmad Rahman',
            'client_position' => 'Project Manager',
            'client_company' => 'PT Inovasi Teknologi',
            'testimonial_text' => 'Tim Nava sangat kompeten dalam mengembangkan sistem informasi. Hasil yang diberikan melebihi ekspektasi dan sangat user-friendly.',
            'rating' => 5,
            'is_featured' => true,
            'is_active' => true
        ]);

        // Create FAQs
        Faq::create([
            'question' => 'Apa saja layanan yang disediakan oleh Nava Dhanarama Indonesia?',
            'answer' => 'Kami menyediakan berbagai layanan IT seperti pengembangan sistem informasi custom, website development, mobile app development, otomasi bisnis, dan konsultasi IT.',
            'order' => 1,
            'is_active' => true
        ]);

        Faq::create([
            'question' => 'Berapa lama waktu yang dibutuhkan untuk mengembangkan sebuah aplikasi?',
            'answer' => 'Waktu pengembangan bervariasi tergantung kompleksitas proyek. Untuk aplikasi sederhana biasanya 1-2 bulan, sedangkan untuk sistem yang kompleks bisa 3-6 bulan atau lebih.',
            'order' => 2,
            'is_active' => true
        ]);

        Faq::create([
            'question' => 'Apakah ada dukungan maintenance setelah aplikasi selesai?',
            'answer' => 'Ya, kami menyediakan layanan maintenance dan support berkelanjutan untuk memastikan aplikasi Anda berjalan dengan optimal.',
            'order' => 3,
            'is_active' => true
        ]);

        Faq::create([
            'question' => 'Bagaimana proses pengembangan aplikasi di Nava Dhanarama?',
            'answer' => 'Proses kami dimulai dari analisis kebutuhan, desain, development, testing, deployment, dan maintenance. Setiap tahap melibatkan komunikasi intensif dengan klien.',
            'order' => 4,
            'is_active' => true
        ]);

        Faq::create([
            'question' => 'Apakah bisa menggunakan teknologi tertentu sesuai kebutuhan kami?',
            'answer' => 'Tentu! Kami sangat fleksibel dalam pemilihan teknologi dan akan menyesuaikan dengan kebutuhan spesifik bisnis Anda.',
            'order' => 5,
            'is_active' => true
        ]);
    }
}
