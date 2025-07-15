<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\WebAnalyticsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Public API routes for frontend
Route::prefix('v1')->group(function () {
    // Application submission
    Route::post('application-request', [ApiController::class, 'submitApplication']);

    // Blog endpoints
    Route::get('blogs', [ApiController::class, 'getBlogs']);
    Route::get('blogs/{slug}', [ApiController::class, 'getBlog']);
    Route::get('blog-categories', [ApiController::class, 'getBlogCategories']);

    // Portfolio endpoints
    Route::get('portfolios', [ApiController::class, 'getPortfolios']);
    Route::get('portfolio-categories', [ApiController::class, 'getPortfolioCategories']);

    // Client endpoints
    Route::get('clients', [ApiController::class, 'getClients']);

    // Career endpoints
    Route::get('careers', [ApiController::class, 'getCareers']);

    // Analytics tracking
    Route::post('analytics/track', [WebAnalyticsController::class, 'track']);
});
