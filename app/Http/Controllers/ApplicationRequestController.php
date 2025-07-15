<?php

namespace App\Http\Controllers;

use App\Models\ApplicationRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicationRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $applicationRequests = ApplicationRequest::latest()->paginate(10);

        return Inertia::render('Admin/ApplicationRequest/Index', [
            'applicationRequests' => $applicationRequests
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/ApplicationRequest/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'whatsapp_number' => 'required|string|max:20',
            'application_request' => 'required|string'
        ]);

        ApplicationRequest::create($validated);

        return redirect()->route('application-requests.index')->with('success', 'Application request created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(ApplicationRequest $applicationRequest)
    {
        return Inertia::render('Admin/ApplicationRequest/Show', [
            'applicationRequest' => $applicationRequest
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ApplicationRequest $applicationRequest)
    {
        return Inertia::render('Admin/ApplicationRequest/Edit', [
            'applicationRequest' => $applicationRequest
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ApplicationRequest $applicationRequest)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'whatsapp_number' => 'required|string|max:20',
            'application_request' => 'required|string'
        ]);

        $applicationRequest->update($validated);

        return redirect()->route('application-requests.index')->with('success', 'Application request updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ApplicationRequest $applicationRequest)
    {
        $applicationRequest->delete();

        return redirect()->route('application-requests.index')->with('success', 'Application request deleted successfully.');
    }
}
