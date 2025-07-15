<?php

namespace App\Http\Controllers;

use App\Models\Blogger;
use App\Models\Portfolio;
use App\Models\Client;
use App\Models\Career;
use App\Models\ApplicationRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function home()
    {
        $blogs = Blogger::published()
            ->with('analytics')
            ->latest('published_at')
            ->limit(6)
            ->get();

        $portfolios = Portfolio::where('status', 'active')
            ->latest()
            ->limit(6)
            ->get();

        $clients = Client::where('status', 'active')
            ->latest()
            ->limit(8)
            ->get();

        return Inertia::render('Frontend/Home', [
            'blogs' => $blogs,
            'portfolios' => $portfolios,
            'clients' => $clients,
        ]);
    }

    public function blogs(Request $request)
    {
        $query = Blogger::published()->with('analytics');

        if ($request->category) {
            $query->where('category', $request->category);
        }

        if ($request->search) {
            $query->where(function($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('content', 'like', '%' . $request->search . '%');
            });
        }

        $blogs = $query->latest('published_at')->paginate(9);

        $categories = Blogger::select('category')
            ->distinct()
            ->whereNotNull('category')
            ->pluck('category');

        return Inertia::render('Frontend/Blogs/Index', [
            'blogs' => $blogs,
            'categories' => $categories,
            'filters' => $request->only(['category', 'search'])
        ]);
    }

    public function blog($slug)
    {
        $blog = Blogger::where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        // Track view
        $blog->analytics()->create([
            'viewed_at' => now(),
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
        ]);

        $relatedBlogs = Blogger::published()
            ->where('id', '!=', $blog->id)
            ->where('category', $blog->category)
            ->limit(3)
            ->get();

        return Inertia::render('Frontend/Blogs/Show', [
            'blog' => $blog,
            'relatedBlogs' => $relatedBlogs,
        ]);
    }

    public function portfolio()
    {
        $portfolios = Portfolio::where('status', 'active')
            ->latest()
            ->paginate(12);

        $categories = Portfolio::select('category')
            ->distinct()
            ->whereNotNull('category')
            ->pluck('category');

        return Inertia::render('Frontend/Portfolio/Index', [
            'portfolios' => $portfolios,
            'categories' => $categories,
        ]);
    }

    public function portfolioShow($id)
    {
        $portfolio = Portfolio::where('status', 'active')
            ->findOrFail($id);

        $relatedPortfolios = Portfolio::where('status', 'active')
            ->where('id', '!=', $portfolio->id)
            ->where('category', $portfolio->category)
            ->limit(3)
            ->get();

        return Inertia::render('Frontend/Portfolio/Show', [
            'portfolio' => $portfolio,
            'relatedPortfolios' => $relatedPortfolios,
        ]);
    }

    public function clients()
    {
        $clients = Client::where('status', 'active')
            ->latest()
            ->paginate(16);

        return Inertia::render('Frontend/Clients/Index', [
            'clients' => $clients,
        ]);
    }

    public function careers()
    {
        $careers = Career::where('status', 'active')
            ->latest()
            ->paginate(10);

        return Inertia::render('Frontend/Careers/Index', [
            'careers' => $careers,
        ]);
    }

    public function careerShow($id)
    {
        $career = Career::where('status', 'active')
            ->findOrFail($id);

        return Inertia::render('Frontend/Careers/Show', [
            'career' => $career,
        ]);
    }

    public function contact()
    {
        return Inertia::render('Frontend/Contact');
    }

    public function submitApplication(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'cv_file' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
        ]);

        if ($request->hasFile('cv_file')) {
            $validated['cv_file'] = $request->file('cv_file')->store('cv-files', 'public');
        }

        ApplicationRequest::create($validated);

        return back()->with('success', 'Application submitted successfully! We will contact you soon.');
    }
}
