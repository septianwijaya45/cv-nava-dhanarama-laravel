<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Career;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CareerController extends Controller
{
    public function index(Request $request)
    {
        $query = Career::query();

        // Search functionality
        if ($request->filled('search')) {
            $query->where('position', 'like', '%' . $request->search . '%')
                  ->orWhere('department', 'like', '%' . $request->search . '%');
        }

        // Filter by department
        if ($request->filled('department')) {
            $query->where('department', $request->department);
        }

        // Filter by type
        if ($request->filled('type')) {
            $query->where('type', $request->type);
        }

        $careers = $query->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

        // Get departments and types for filter
        $departments = Career::distinct('department')->pluck('department')->filter();
        $types = Career::distinct('type')->pluck('type')->filter();

        return Inertia::render('Admin/Careers/Index', [
            'careers' => $careers,
            'departments' => $departments,
            'types' => $types,
            'filters' => $request->only(['search', 'department', 'type'])
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Careers/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'position' => 'required|string|max:255',
            'description' => 'required|string',
            'qualification' => 'nullable|string',
            'department' => 'nullable|string|max:100',
            'type' => 'required|in:full-time,part-time,contract',
            'location' => 'required|in:remote,onsite',
            'posted_at' => 'nullable|date',
            'deadline' => 'nullable|date',
            'status' => 'boolean',
            'is_active' => 'boolean',
        ]);

        if (!isset($validated['posted_at'])) {
            $validated['posted_at'] = now();
        }

        Career::create($validated);

        return redirect()->route('admin.careers.index')
            ->with('success', 'Career position created successfully.');
    }

    public function show(Career $career)
    {
        return Inertia::render('Admin/Careers/Show', [
            'career' => $career
        ]);
    }

    public function edit(Career $career)
    {
        return Inertia::render('Admin/Careers/Edit', [
            'career' => $career
        ]);
    }

    public function update(Request $request, Career $career)
    {
        $validated = $request->validate([
            'position' => 'required|string|max:255',
            'description' => 'required|string',
            'qualification' => 'nullable|string',
            'department' => 'nullable|string|max:100',
            'type' => 'required|in:full-time,part-time,contract',
            'location' => 'required|in:remote,onsite',
            'posted_at' => 'nullable|date',
            'deadline' => 'nullable|date',
            'status' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $career->update($validated);

        return redirect()->route('admin.careers.index')
            ->with('success', 'Career position updated successfully.');
    }

    public function destroy(Career $career)
    {
        $career->delete();

        return redirect()->route('admin.careers.index')
            ->with('success', 'Career position deleted successfully.');
    }
}
