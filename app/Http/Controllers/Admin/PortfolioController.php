<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index(Request $request)
    {
        $query = Portfolio::query();

        // Search functionality
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('description', 'like', '%' . $request->search . '%');
        }

        // Filter by category
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        $portfolios = $query->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

        // Get categories for filter
        $categories = Portfolio::distinct('category')->pluck('category')->filter();

        return Inertia::render('Admin/Portfolios/Index', [
            'portfolios' => $portfolios,
            'categories' => $categories,
            'filters' => $request->only(['search', 'category'])
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Portfolios/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string|max:100',
            'technologies' => 'nullable|string',
            'image' => 'nullable|url',
            'demo_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'client' => 'nullable|string|max:255',
            'duration' => 'nullable|string|max:100',
            'team_size' => 'nullable|integer|min:1',
            'featured' => 'boolean',
            'status' => 'required|in:completed,in_progress,planning',
        ]);

        Portfolio::create($validated);

        return redirect()->route('admin.portfolios.index')
            ->with('success', 'Portfolio item created successfully.');
    }

    public function show(Portfolio $portfolio)
    {
        return Inertia::render('Admin/Portfolios/Show', [
            'portfolio' => $portfolio
        ]);
    }

    public function edit(Portfolio $portfolio)
    {
        return Inertia::render('Admin/Portfolios/Edit', [
            'portfolio' => $portfolio
        ]);
    }

    public function update(Request $request, Portfolio $portfolio)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string|max:100',
            'technologies' => 'nullable|string',
            'image' => 'nullable|url',
            'demo_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'client' => 'nullable|string|max:255',
            'duration' => 'nullable|string|max:100',
            'team_size' => 'nullable|integer|min:1',
            'featured' => 'boolean',
            'status' => 'required|in:completed,in_progress,planning',
        ]);

        $portfolio->update($validated);

        return redirect()->route('admin.portfolios.index')
            ->with('success', 'Portfolio item updated successfully.');
    }

    public function destroy(Portfolio $portfolio)
    {
        $portfolio->delete();

        return redirect()->route('admin.portfolios.index')
            ->with('success', 'Portfolio item deleted successfully.');
    }
}
