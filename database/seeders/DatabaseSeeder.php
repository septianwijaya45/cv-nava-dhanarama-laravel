<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@nava3d.com',
        ]);

        // Run other seeders
        $this->call([
            BloggerSeeder::class,
            PortfolioSeeder::class,
            ClientSeeder::class,
        ]);
    }
}
