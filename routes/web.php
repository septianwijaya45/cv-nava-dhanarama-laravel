<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FrontendController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Frontend Routes
Route::get('/', [FrontendController::class, 'home'])->name('home');

// Blog Routes
Route::get('/blogs', [FrontendController::class, 'blogs'])->name('blogs.index');
Route::get('/blog/{slug}', [FrontendController::class, 'blog'])->name('blogs.show');

// Portfolio Routes
Route::get('/portfolio', [FrontendController::class, 'portfolio'])->name('portfolio.index');
Route::get('/portfolio/{id}', [FrontendController::class, 'portfolioShow'])->name('portfolio.show');

// Client Routes
Route::get('/clients', [FrontendController::class, 'clients'])->name('clients.index');

// Career Routes
Route::get('/careers', [FrontendController::class, 'careers'])->name('careers.index');
Route::get('/career/{id}', [FrontendController::class, 'careerShow'])->name('careers.show');

// Contact & Application
Route::get('/contact', [FrontendController::class, 'contact'])->name('contact');
Route::post('/application', [FrontendController::class, 'submitApplication'])->name('application.submit');

// Admin Dashboard (authenticated)
Route::get('/dashboard', [App\Http\Controllers\DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

// Admin CRUD Routes (authenticated)
Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    // Blog Management
    Route::resource('blogs', App\Http\Controllers\Admin\BlogController::class);

    // Portfolio Management
    Route::resource('portfolios', App\Http\Controllers\Admin\PortfolioController::class);

    // Clients Management
    Route::resource('clients', App\Http\Controllers\Admin\ClientController::class);

    // Careers Management
    Route::resource('careers', App\Http\Controllers\Admin\CareerController::class);

    // Contact Management
    Route::get('contacts', [App\Http\Controllers\Admin\ContactController::class, 'index'])->name('contacts.index');
    Route::get('contacts/{contact}', [App\Http\Controllers\Admin\ContactController::class, 'show'])->name('contacts.show');
    Route::delete('contacts/{contact}', [App\Http\Controllers\Admin\ContactController::class, 'destroy'])->name('contacts.destroy');

    // Messages Management
    Route::get('messages', [App\Http\Controllers\Admin\MessageController::class, 'index'])->name('messages.index');
    Route::get('messages/{message}', [App\Http\Controllers\Admin\MessageController::class, 'show'])->name('messages.show');
    Route::delete('messages/{message}', [App\Http\Controllers\Admin\MessageController::class, 'destroy'])->name('messages.destroy');
    Route::patch('messages/{message}/mark-read', [App\Http\Controllers\Admin\MessageController::class, 'markAsRead'])->name('messages.mark-read');

    // Applications Management
    Route::get('applications', [App\Http\Controllers\Admin\ApplicationController::class, 'index'])->name('applications.index');
    Route::get('applications/{application}', [App\Http\Controllers\Admin\ApplicationController::class, 'show'])->name('applications.show');
    Route::delete('applications/{application}', [App\Http\Controllers\Admin\ApplicationController::class, 'destroy'])->name('applications.destroy');
    Route::patch('applications/{application}/status', [App\Http\Controllers\Admin\ApplicationController::class, 'updateStatus'])->name('applications.update-status');

    // Analytics
    Route::get('analytics/blog', [App\Http\Controllers\Admin\AnalyticsController::class, 'blogAnalytics'])->name('analytics.blog');
    Route::get('analytics/website', [App\Http\Controllers\Admin\AnalyticsController::class, 'websiteAnalytics'])->name('analytics.website');
});

// Debug route for analytics
Route::get('/debug-analytics', function () {
    try {
        $totalBlogs = \App\Models\Blogger::count();
        $totalPortfolios = \App\Models\Portfolio::count();
        $totalClients = \App\Models\Client::count();
        return response()->json([
            'status' => 'success',
            'data' => [
                'blogs' => $totalBlogs,
                'portfolios' => $totalPortfolios,
                'clients' => $totalClients
            ]
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'error',
            'message' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine()
        ]);
    }
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
