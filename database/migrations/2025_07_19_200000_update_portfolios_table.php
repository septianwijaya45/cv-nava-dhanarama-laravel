<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('portfolios', function (Blueprint $table) {
            if (Schema::hasColumn('portfolios', 'project_name')) {
                $table->renameColumn('project_name', 'title');
            }

            if (Schema::hasColumn('portfolios', 'demo_link')) {
                $table->string('demo_url')->nullable();
                $table->dropColumn('demo_link');
            } elseif (!Schema::hasColumn('portfolios', 'demo_url')) {
                $table->string('demo_url')->nullable();
            }

            // Tambahkan kolom baru jika belum ada
            if (!Schema::hasColumn('portfolios', 'technologies')) {
                $table->string('technologies')->nullable();
            }
            if (!Schema::hasColumn('portfolios', 'github_url')) {
                $table->string('github_url')->nullable();
            }
            if (!Schema::hasColumn('portfolios', 'client')) {
                $table->string('client')->nullable();
            }
            if (!Schema::hasColumn('portfolios', 'duration')) {
                $table->string('duration')->nullable();
            }
            if (!Schema::hasColumn('portfolios', 'team_size')) {
                $table->integer('team_size')->default(1);
            }
            if (!Schema::hasColumn('portfolios', 'featured')) {
                $table->boolean('featured')->default(false);
            }
        });

        // Lakukan perubahan tipe kolom status pada step terpisah
        if (Schema::hasColumn('portfolios', 'status')) {
            Schema::table('portfolios', function (Blueprint $table) {
                $table->dropColumn('status');
            });

            Schema::table('portfolios', function (Blueprint $table) {
                $table->string('status')->default('completed');
            });
        }
    }

    public function down(): void
    {
        Schema::table('portfolios', function (Blueprint $table) {
            // Reverse changes
            if (Schema::hasColumn('portfolios', 'title')) {
                $table->renameColumn('title', 'project_name');
            }
            if (Schema::hasColumn('portfolios', 'demo_url')) {
                $table->renameColumn('demo_url', 'demo_link');
            }
            if (Schema::hasColumn('portfolios', 'status')) {
                $table->dropColumn('status');
                $table->boolean('status')->default(true);
            }
            $table->dropColumn(['technologies','github_url','client','duration','team_size','featured']);
        });
    }
};
