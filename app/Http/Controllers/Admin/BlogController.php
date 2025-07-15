<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blogger;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $query = Blogger::query();

        // Search functionality
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('content', 'like', '%' . $request->search . '%');
        }

        // Filter by category
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('is_published', $request->status === 'published');
        }

        $blogs = $query->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

        // Get categories for filter
        $categories = Blogger::distinct('category')->pluck('category')->filter();

        return Inertia::render('Admin/Blogs/Index', [
            'blogs' => $blogs,
            'categories' => $categories,
            'filters' => $request->only(['search', 'category', 'status'])
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Blogs/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'nullable|string|max:500',
            'category' => 'required|string|max:100',
            'tags' => 'nullable|string',
            'featured_image' => 'nullable|url',
            'is_published' => 'boolean',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
        ]);

        $validated['slug'] = Str::slug($validated['title']);
        $validated['author'] = auth()->user()->name;

        // Ensure unique slug
        $originalSlug = $validated['slug'];
        $counter = 1;
        while (Blogger::where('slug', $validated['slug'])->exists()) {
            $validated['slug'] = $originalSlug . '-' . $counter;
            $counter++;
        }

        Blogger::create($validated);

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog post created successfully.');
    }

    public function show(Blogger $blog)
    {
        return Inertia::render('Admin/Blogs/Show', [
            'blog' => $blog
        ]);
    }

    public function edit(Blogger $blog)
    {
        return Inertia::render('Admin/Blogs/Edit', [
            'blog' => $blog
        ]);
    }

    public function update(Request $request, Blogger $blog)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'nullable|string|max:500',
            'category' => 'required|string|max:100',
            'tags' => 'nullable|string',
            'featured_image' => 'nullable|url',
            'is_published' => 'boolean',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
        ]);

        // Update slug if title changed
        if ($validated['title'] !== $blog->title) {
            $validated['slug'] = Str::slug($validated['title']);

            // Ensure unique slug
            $originalSlug = $validated['slug'];
            $counter = 1;
            while (Blogger::where('slug', $validated['slug'])->where('id', '!=', $blog->id)->exists()) {
                $validated['slug'] = $originalSlug . '-' . $counter;
                $counter++;
            }
        }

        $blog->update($validated);

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog post updated successfully.');
    }

    public function destroy(Blogger $blog)
    {
        $blog->delete();

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog post deleted successfully.');
    }
}
