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

    public function websiteAnalytics()
    {
        // Overview statistics
        $totalBlogs = Blogger::count();
        $totalPortfolios = Portfolio::count();
        $totalClients = Client::count();
        $totalCareers = Career::count();
        $totalApplications = ApplicationRequest::count();
        $totalMessages = Message::count();

        // Recent activity counts
        $recentStats = [
            'blogs_this_month' => Blogger::where('created_at', '>=', Carbon::now()->startOfMonth())->count(),
            'portfolios_this_month' => Portfolio::where('created_at', '>=', Carbon::now()->startOfMonth())->count(),
            'applications_this_month' => ApplicationRequest::where('created_at', '>=', Carbon::now()->startOfMonth())->count(),
            'messages_this_month' => Message::where('created_at', '>=', Carbon::now()->startOfMonth())->count(),
        ];

        // Application status distribution
        $applicationStats = ApplicationRequest::selectRaw('status, COUNT(*) as count')
            ->groupBy('status')
            ->pluck('count', 'status');

        // Portfolio category distribution
        $portfolioCategories = Portfolio::selectRaw('category, COUNT(*) as count')
            ->groupBy('category')
            ->pluck('count', 'category');

        // Client industry distribution
        $clientIndustries = Client::selectRaw('industry, COUNT(*) as count')
            ->whereNotNull('industry')
            ->groupBy('industry')
            ->pluck('count', 'industry');

        // Monthly growth data
        $monthlyGrowth = [];
        for ($i = 11; $i >= 0; $i--) {
            $date = Carbon::now()->subMonths($i);
            $monthlyGrowth[] = [
                'month' => $date->format('M Y'),
                'blogs' => Blogger::whereYear('created_at', $date->year)
                    ->whereMonth('created_at', $date->month)
                    ->count(),
                'portfolios' => Portfolio::whereYear('created_at', $date->year)
                    ->whereMonth('created_at', $date->month)
                    ->count(),
                'applications' => ApplicationRequest::whereYear('created_at', $date->year)
                    ->whereMonth('created_at', $date->month)
                    ->count(),
            ];
        }

        // Recent activities
        $recentActivities = collect([
            ...Blogger::latest()->take(3)->get()->map(function ($blog) {
                return [
                    'type' => 'blog',
                    'title' => $blog->title,
                    'date' => $blog->created_at,
                    'status' => ucfirst($blog->status)
                ];
            }),
            ...Portfolio::latest()->take(3)->get()->map(function ($portfolio) {
                return [
                    'type' => 'portfolio',
                    'title' => $portfolio->title,
                    'date' => $portfolio->created_at,
                    'status' => ucfirst($portfolio->status ?? 'active')
                ];
            }),
            ...ApplicationRequest::latest()->take(3)->get()->map(function ($app) {
                return [
                    'type' => 'application',
                    'title' => $app->name . ' - ' . $app->position,
                    'date' => $app->created_at,
                    'status' => ucfirst($app->status)
                ];
            }),
        ])->sortByDesc('date')->take(10)->values();

        // Unread messages count
        $unreadMessages = Message::where('is_read', false)->count();
        $pendingApplications = ApplicationRequest::where('status', 'pending')->count();

        return Inertia::render('Admin/Analytics/Website', [
            'analytics' => [
                'overview' => [
                    'totalBlogs' => $totalBlogs,
                    'totalPortfolios' => $totalPortfolios,
                    'totalClients' => $totalClients,
                    'activeCareers' => $totalCareers,
                    'totalApplications' => $totalApplications,
                    'totalMessages' => $totalMessages,
                    'unreadMessages' => $unreadMessages
                ],
                'growthData' => [
                    'blogsThisMonth' => $recentStats['blogs_this_month'],
                    'portfoliosThisMonth' => $recentStats['portfolios_this_month'],
                    'clientsThisMonth' => 0, // Add this if you have client creation tracking
                    'blogGrowth' => $totalBlogs > 0 ? round(($recentStats['blogs_this_month'] / $totalBlogs) * 100, 1) : 0,
                    'portfolioGrowth' => $totalPortfolios > 0 ? round(($recentStats['portfolios_this_month'] / $totalPortfolios) * 100, 1) : 0,
                    'clientGrowth' => 0
                ],
                'contentStats' => [
                    'portfolioCategories' => $portfolioCategories,
                    'clientIndustries' => $clientIndustries,
                    'applicationStats' => $applicationStats
                ],
                'monthlyStats' => collect($monthlyGrowth)->map(function ($month) {
                    return [
                        'period' => $month['month'],
                        'blogs' => $month['blogs'],
                        'portfolios' => $month['portfolios'],
                        'clients' => 0, // Add client tracking if needed
                        'applications' => $month['applications']
                    ];
                }),
                'recentActivity' => $recentActivities->map(function ($activity) {
                    return [
                        'type' => $activity['type'],
                        'description' => "New {$activity['type']}: {$activity['title']} ({$activity['status']})",
                        'time' => $activity['date']->diffForHumans()
                    ];
                })
            ]
        ]);
    }
}
