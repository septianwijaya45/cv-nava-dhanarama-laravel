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
        Schema::create('blog_analytics', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('blogger_id');
            $table->timestamp('viewed_at');
            $table->string('ip_address', 45);
            $table->text('user_agent');
            $table->text('referrer')->nullable();
            $table->timestamps();

            $table->foreign('blogger_id')->references('id')->on('bloggers')->onDelete('cascade');
            $table->index(['blogger_id', 'viewed_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_analytics');
    }
};
