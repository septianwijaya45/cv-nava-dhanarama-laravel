<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $careers = Career::latest()->paginate(10);

        return Inertia::render('Admin/Career/Index', [
            'careers' => $careers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Career/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'position' => 'required|string|max:255',
            'description' => 'required|string',
            'qualification' => 'required|string',
            'location' => 'required|in:remote,onsite',
            'posted_at' => 'required|date',
            'deadline' => 'required|date|after:posted_at'
        ]);

        Career::create($validated);

        return redirect()->route('careers.index')->with('success', 'Career created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Career $career)
    {
        return Inertia::render('Admin/Career/Show', [
            'career' => $career
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Career $career)
    {
        return Inertia::render('Admin/Career/Edit', [
            'career' => $career
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Career $career)
    {
        $validated = $request->validate([
            'position' => 'required|string|max:255',
            'description' => 'required|string',
            'qualification' => 'required|string',
            'location' => 'required|in:remote,onsite',
            'posted_at' => 'required|date',
            'deadline' => 'required|date|after:posted_at'
        ]);

        $career->update($validated);

        return redirect()->route('careers.index')->with('success', 'Career updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Career $career)
    {
        $career->delete();

        return redirect()->route('careers.index')->with('success', 'Career deleted successfully.');
    }
}
