<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('position');
            $table->text('description');
            $table->text('qualification');
            $table->boolean('status')->default(true);
            $table->boolean('is_active')->default(true);
            $table->enum('location', ['remote', 'onsite']);
            $table->string('department')->nullable();
            $table->string('type')->default('full-time')->enum(['full-time', 'part-time', 'contract']);
            $table->timestamp('posted_at');
            $table->timestamp('deadline');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('careers');
    }
};
