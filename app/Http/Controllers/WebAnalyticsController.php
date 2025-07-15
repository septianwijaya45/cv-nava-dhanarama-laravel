<?php

namespace App\Http\Controllers;

use App\Models\WebAnalytics;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebAnalyticsController extends Controller
{
    /**
     * Display web analytics dashboard
     */
    public function index()
    {
        $todayVisits = WebAnalytics::today()->count();
        $weekVisits = WebAnalytics::thisWeek()->count();
        $monthVisits = WebAnalytics::thisMonth()->count();

        $topPages = WebAnalytics::selectRaw('url, COUNT(*) as visits')
                                ->groupBy('url')
                                ->orderBy('visits', 'desc')
                                ->limit(10)
                                ->get();

        $recentVisits = WebAnalytics::with([])
                                   ->latest('viewed_at')
                                   ->limit(50)
                                   ->get();

        return Inertia::render('Admin/Analytics/Index', [
            'stats' => [
                'today' => $todayVisits,
                'week' => $weekVisits,
                'month' => $monthVisits
            ],
            'topPages' => $topPages,
            'recentVisits' => $recentVisits
        ]);
    }

    /**
     * Track a page visit
     */
    public function track(Request $request)
    {
        $validated = $request->validate([
            'url' => 'required|string'
        ]);

        WebAnalytics::create([
            'url' => $validated['url'],
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'referrer' => $request->header('referer'),
            'viewed_at' => now()
        ]);

        return response()->json(['message' => 'Page view tracked'], 200);
    }
}
