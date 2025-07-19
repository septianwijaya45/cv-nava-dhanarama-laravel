<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index(Request $request)
    {
        $query = Client::query();

        // Search functionality
        if ($request->filled('search')) {
            $query->where('client_name', 'like', '%' . $request->search . '%')
                  ->orWhere('industry', 'like', '%' . $request->search . '%');
        }

        // Filter by industry
        if ($request->filled('industry')) {
            $query->where('industry', $request->industry);
        }

        $clients = $query->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

        // Get industries for filter
        $industries = Client::distinct('industry')->pluck('industry')->filter();

        return Inertia::render('Admin/Clients/Index', [
            'clients' => $clients,
            'industries' => $industries,
            'filters' => $request->only(['search', 'industry'])
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Clients/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'logo' => 'nullable|url',
            'testimonial' => 'nullable|string',
            'status' => 'boolean',
            'industry' => 'nullable|string|max:100',
            'website' => 'nullable|url',
        ]);

        Client::create($validated);

        return redirect()->route('admin.clients.index')
            ->with('success', 'Client created successfully.');
    }

    public function show(Client $client)
    {
        return Inertia::render('Admin/Clients/Show', [
            'client' => $client
        ]);
    }

    public function edit(Client $client)
    {
        return Inertia::render('Admin/Clients/Edit', [
            'client' => $client
        ]);
    }

    public function update(Request $request, Client $client)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'logo' => 'nullable|url',
            'testimonial' => 'nullable|string',
            'status' => 'boolean',
            'industry' => 'nullable|string|max:100',
            'website' => 'nullable|url',
        ]);

        $client->update($validated);

        return redirect()->route('admin.clients.index')
            ->with('success', 'Client updated successfully.');
    }

    public function destroy(Client $client)
    {
        $client->delete();

        return redirect()->route('admin.clients.index')
            ->with('success', 'Client deleted successfully.');
    }
}
