<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqController extends Controller
{
    public function index()
    {
        $faqs = Faq::ordered()->paginate(10);

        return Inertia::render('Admin/Faqs/Index', [
            'faqs' => $faqs,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Faqs/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string',
            'order' => 'required|integer|min:0',
            'is_active' => 'boolean',
        ]);

        Faq::create($validated);

        return redirect()->route('admin.faqs.index')
            ->with('success', 'FAQ created successfully.');
    }

    public function show(Faq $faq)
    {
        return Inertia::render('Admin/Faqs/Show', [
            'faq' => $faq,
        ]);
    }

    public function edit(Faq $faq)
    {
        return Inertia::render('Admin/Faqs/Edit', [
            'faq' => $faq,
        ]);
    }

    public function update(Request $request, Faq $faq)
    {
        $validated = $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string',
            'order' => 'required|integer|min:0',
            'is_active' => 'boolean',
        ]);

        $faq->update($validated);

        return redirect()->route('admin.faqs.index')
            ->with('success', 'FAQ updated successfully.');
    }

    public function destroy(Faq $faq)
    {
        $faq->delete();

        return redirect()->route('admin.faqs.index')
            ->with('success', 'FAQ deleted successfully.');
    }

    public function reorder(Request $request, Faq $faq)
    {
        $direction = $request->input('direction');

        if ($direction === 'up') {
            // Find the FAQ with the next lower order
            $previousFaq = Faq::where('order', '<', $faq->order)
                ->orderBy('order', 'desc')
                ->first();

            if ($previousFaq) {
                // Swap orders
                $currentOrder = $faq->order;
                $faq->order = $previousFaq->order;
                $previousFaq->order = $currentOrder;

                $faq->save();
                $previousFaq->save();
            }
        } elseif ($direction === 'down') {
            // Find the FAQ with the next higher order
            $nextFaq = Faq::where('order', '>', $faq->order)
                ->orderBy('order', 'asc')
                ->first();

            if ($nextFaq) {
                // Swap orders
                $currentOrder = $faq->order;
                $faq->order = $nextFaq->order;
                $nextFaq->order = $currentOrder;

                $faq->save();
                $nextFaq->save();
            }
        }

        return redirect()->route('admin.faqs.index')
            ->with('success', 'FAQ order updated successfully.');
    }
}
