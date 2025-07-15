<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ApplicationRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    public function index(Request $request)
    {
        $query = ApplicationRequest::query();

        // Search functionality
        if ($request->filled('search')) {
            $query->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('email', 'like', '%' . $request->search . '%')
                  ->orWhere('position', 'like', '%' . $request->search . '%');
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // Filter by project type
        if ($request->filled('project_type')) {
            $query->where('project_type', $request->project_type);
        }

        $applications = $query->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

        // Get project types for filter
        $projectTypes = ApplicationRequest::distinct('project_type')->pluck('project_type')->filter();

        // Get status counts
        $statusCounts = [
            'pending' => ApplicationRequest::where('status', 'pending')->count(),
            'reviewed' => ApplicationRequest::where('status', 'reviewed')->count(),
            'interviewed' => ApplicationRequest::where('status', 'interviewed')->count(),
            'accepted' => ApplicationRequest::where('status', 'accepted')->count(),
            'rejected' => ApplicationRequest::where('status', 'rejected')->count(),
        ];

        return Inertia::render('Admin/Applications/Index', [
            'applications' => $applications,
            'projectTypes' => $projectTypes,
            'statusCounts' => $statusCounts,
            'filters' => $request->only(['search', 'status', 'project_type'])
        ]);
    }

    public function show(ApplicationRequest $application)
    {
        return Inertia::render('Admin/Applications/Show', [
            'application' => $application
        ]);
    }

    public function updateStatus(Request $request, ApplicationRequest $application)
    {
        $request->validate([
            'status' => 'required|in:pending,reviewed,interviewed,accepted,rejected'
        ]);

        $application->update([
            'status' => $request->status,
            'status_updated_at' => now()
        ]);

        return redirect()->back()
            ->with('success', 'Application status updated successfully.');
    }

    public function destroy(ApplicationRequest $application)
    {
        // Delete CV file if exists
        if ($application->cv_path && Storage::exists($application->cv_path)) {
            Storage::delete($application->cv_path);
        }

        $application->delete();

        return redirect()->route('admin.applications.index')
            ->with('success', 'Application deleted successfully.');
    }
}
