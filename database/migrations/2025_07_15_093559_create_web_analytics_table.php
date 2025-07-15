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
        Schema::create('web_analytics', function (Blueprint $table) {
            $table->id();
            $table->text('url');
            $table->string('ip_address', 45);
            $table->text('user_agent');
            $table->text('referrer')->nullable();
            $table->timestamp('viewed_at');
            $table->timestamps();

            $table->index(['viewed_at', 'ip_address']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('web_analytics');
    }
};
