<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ApplicationRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        $query = ApplicationRequest::query();

        // Search functionality
        if ($request->filled('search')) {
            $query->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('email', 'like', '%' . $request->search . '%')
                  ->orWhere('company', 'like', '%' . $request->search . '%');
        }

        // Filter by project type
        if ($request->filled('project_type')) {
            $query->where('project_type', $request->project_type);
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $contacts = $query->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

        // Get project types for filter
        $projectTypes = ApplicationRequest::distinct('project_type')->pluck('project_type')->filter();

        return Inertia::render('Admin/Contact/Index', [
            'contacts' => $contacts,
            'projectTypes' => $projectTypes,
            'filters' => $request->only(['search', 'project_type', 'status'])
        ]);
    }

    public function show(ApplicationRequest $contact)
    {
        return Inertia::render('Admin/Contact/Show', [
            'contact' => $contact
        ]);
    }

    public function destroy(ApplicationRequest $contact)
    {
        $contact->delete();

        return redirect()->route('admin.contacts.index')
            ->with('success', 'Contact deleted successfully.');
    }
}
