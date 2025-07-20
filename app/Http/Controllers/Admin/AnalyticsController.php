<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blogger;
use App\Models\Portfolio;
use App\Models\Client;
use App\Models\Career;
use App\Models\ApplicationRequest;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class AnalyticsController extends Controller
{
    public function blogAnalytics()
    {
        // Blog statistics
        $totalBlogs = Blogger::count();
        $publishedBlogs = Blogger::where('status', 'published')->count();
        $draftBlogs = Blogger::where('status', 'draft')->count();

        // Category distribution
        $categoryStats = Blogger::selectRaw('category, COUNT(*) as count')
            ->groupBy('category')
            ->pluck('count', 'category');

        // Monthly blog creation
        $monthlyBlogs = Blogger::selectRaw('YEAR(created_at) as year, MONTH(created_at) as month, COUNT(*) as count')
            ->where('created_at', '>=', Carbon::now()->subYear())
            ->groupBy('year', 'month')
            ->orderBy('year', 'desc')
            ->orderBy('month', 'desc')
            ->get()
            ->map(function ($item) {
                return [
                    'period' => Carbon::createFromDate($item->year, $item->month, 1)->format('M Y'),
                    'count' => $item->count
                ];
            });

        // Most popular tags (if you have tags field)
        $popularTags = collect([
            ['tag' => 'Web Development', 'count' => 5],
            ['tag' => 'PHP', 'count' => 3],
            ['tag' => 'Laravel', 'count' => 4],
            ['tag' => 'JavaScript', 'count' => 2]
        ]); // Placeholder since tags field might not exist

        // Recent activity
        $recentBlogs = Blogger::latest()->take(5)->get(['id', 'title', 'created_at', 'status', 'category']);

        return Inertia::render('Admin/Analytics/Blog', [
            'analytics' => [
                'overview' => [
                    'totalBlogs' => $totalBlogs,
                    'publishedBlogs' => $publishedBlogs,
                    'draftBlogs' => $draftBlogs,
                    'publishRate' => $totalBlogs > 0 ? round(($publishedBlogs / $totalBlogs) * 100, 1) : 0
                ],
                'categoryStats' => $categoryStats,
                'monthlyStats' => $monthlyBlogs,
                'popularTags' => $popularTags,
                'recentPosts' => $recentBlogs->map(function ($blog) {
                    return [
                        'title' => $blog->title,
                        'status' => $blog->status,
                        'category' => $blog->category,
                        'created_at' => $blog->created_at
                    ];
                })
            ]
        ]);
    }

    public function websiteAnalytics(Request $request)
    {
        // Query untuk mendapatkan data analytics
        $query = \DB::table('web_analytics')
            ->select('url', 'ip_address', 'viewed_at');

        // Filter berdasarkan tanggal jika ada
        if ($request->filled('date')) {
            $query->whereDate('viewed_at', $request->date);
        }

        $rawAnalytics = $query->get();

        // Kelompokkan berdasarkan URL
        $grouped = collect($rawAnalytics)
            ->groupBy('url')
            ->map(function ($items, $url) {
                $views = $items->count();
                $uniqueIps = $items->pluck('ip_address')->unique()->count();
                $lastViewed = $items->max('viewed_at');
                return [
                    'url' => $url,
                    'views' => $views,
                    'uniqueIps' => $uniqueIps,
                    'lastViewed' => $lastViewed ? Carbon::parse($lastViewed)->format('Y-m-d H:i:s') : null,
                ];
            })
            ->sortByDesc('views')
            ->values();

        return Inertia::render('Admin/Analytics/Website', [
            'analytics' => [
                'webAnalytics' => $grouped
            ],
            'filters' => $request->only(['date'])
        ]);
    }
}
