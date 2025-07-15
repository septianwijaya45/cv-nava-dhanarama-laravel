<?php

namespace App\Http\Controllers;

use App\Models\ApplicationRequest;
use App\Models\Blogger;
use App\Models\Portfolio;
use App\Models\Client;
use App\Models\Career;
use App\Models\WebAnalytics;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ApiController extends Controller
{
    /**
     * Submit application request from frontend
     */
    public function submitApplication(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'whatsapp_number' => 'required|string|max:20',
            'application_request' => 'required|string'
        ]);

        $applicationRequest = ApplicationRequest::create($validated);

        return response()->json([
            'message' => 'Application submitted successfully',
            'data' => $applicationRequest
        ], 201);
    }

    /**
     * Get published blogs for frontend
     */
    public function getBlogs(Request $request): JsonResponse
    {
        $query = Blogger::published();

        if ($request->has('category') && $request->category) {
            $query->where('category', $request->category);
        }

        $blogs = $query->latest('published_at')->paginate(9);

        return response()->json($blogs);
    }

    /**
     * Get single blog by slug
     */
    public function getBlog(string $slug): JsonResponse
    {
        $blog = Blogger::where('slug', $slug)->published()->firstOrFail();

        // Track blog analytics
        $blog->analytics()->create([
            'viewed_at' => now(),
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
            'referrer' => request()->header('referer')
        ]);

        return response()->json($blog);
    }

    /**
     * Get portfolios for frontend
     */
    public function getPortfolios(Request $request): JsonResponse
    {
        $query = Portfolio::query();

        if ($request->has('category') && $request->category) {
            $query->byCategory($request->category);
        }

        $portfolios = $query->latest()->paginate(12);

        return response()->json($portfolios);
    }

    /**
     * Get clients for frontend
     */
    public function getClients(): JsonResponse
    {
        $clients = Client::latest()->get();

        return response()->json($clients);
    }

    /**
     * Get active careers for frontend
     */
    public function getCareers(): JsonResponse
    {
        $careers = Career::active()->latest('posted_at')->get();

        return response()->json($careers);
    }

    /**
     * Get blog categories
     */
    public function getBlogCategories(): JsonResponse
    {
        $categories = Blogger::published()
                            ->whereNotNull('category')
                            ->distinct()
                            ->pluck('category');

        return response()->json($categories);
    }

    /**
     * Get portfolio categories
     */
    public function getPortfolioCategories(): JsonResponse
    {
        $categories = Portfolio::distinct()->pluck('category');

        return response()->json($categories);
    }
}
