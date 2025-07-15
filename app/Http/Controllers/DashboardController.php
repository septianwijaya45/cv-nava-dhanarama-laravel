<?php

namespace App\Http\Controllers;

use App\Models\Blogger as Blog;
use App\Models\Portfolio;
use App\Models\Client;
use App\Models\Career;
use App\Models\Contact;
use App\Models\Message;
use App\Models\ApplicationRequest as Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'blogs' => Blog::count(),
            'publishedBlogs' => Blog::where('status', 'published')->count(),
            'draftBlogs' => Blog::where('status', 'draft')->count(),
            'portfolios' => Portfolio::count(),
            'clients' => Client::count(),
            'careers' => Career::where('is_active', true)->count(),
            'applications' => Application::count(),
            'pendingApplications' => Application::where('status', 'pending')->count(),
            'messages' => Message::count(),
            'unreadMessages' => Message::unread()->count(),
        ];

        return Inertia::render('Dashboard', [
            'stats' => $stats
        ]);
    }
}
