<?php

namespace App\Http\Controllers;

use App\Models\Blogger;
use App\Models\BlogAnalytics;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class BloggerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bloggers = Blogger::latest()->paginate(10);

        return Inertia::render('Admin/Blogger/Index', [
            'bloggers' => $bloggers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Blogger/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|unique:bloggers,slug',
            'cover_image' => 'nullable|string',
            'content' => 'required|string',
            'category' => 'nullable|string|max:255',
            'status' => 'required|in:draft,published',
            'published_at' => 'nullable|date'
        ]);

        // Auto generate slug if not provided
        if (!$validated['slug']) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        // Set published_at if status is published and no published_at provided
        if ($validated['status'] === 'published' && !$validated['published_at']) {
            $validated['published_at'] = now();
        }

        Blogger::create($validated);

        return redirect()->route('bloggers.index')->with('success', 'Blog post created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Blogger $blogger)
    {
        // Track blog analytics
        BlogAnalytics::create([
            'blogger_id' => $blogger->id,
            'viewed_at' => now(),
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
            'referrer' => request()->header('referer')
        ]);

        return Inertia::render('Admin/Blogger/Show', [
            'blogger' => $blogger
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blogger $blogger)
    {
        return Inertia::render('Admin/Blogger/Edit', [
            'blogger' => $blogger
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blogger $blogger)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|unique:bloggers,slug,' . $blogger->id,
            'cover_image' => 'nullable|string',
            'content' => 'required|string',
            'category' => 'nullable|string|max:255',
            'status' => 'required|in:draft,published',
            'published_at' => 'nullable|date'
        ]);

        // Auto generate slug if not provided
        if (!$validated['slug']) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        // Set published_at if status changed to published and no published_at provided
        if ($validated['status'] === 'published' && $blogger->status !== 'published' && !$validated['published_at']) {
            $validated['published_at'] = now();
        }

        $blogger->update($validated);

        return redirect()->route('bloggers.index')->with('success', 'Blog post updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blogger $blogger)
    {
        $blogger->delete();

        return redirect()->route('bloggers.index')->with('success', 'Blog post deleted successfully.');
    }
}
