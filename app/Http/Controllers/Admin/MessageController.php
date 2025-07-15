<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function index(Request $request)
    {
        $query = Message::query();

        // Search functionality
        if ($request->filled('search')) {
            $query->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('email', 'like', '%' . $request->search . '%')
                  ->orWhere('subject', 'like', '%' . $request->search . '%')
                  ->orWhere('message', 'like', '%' . $request->search . '%');
        }

        // Filter by read status
        if ($request->filled('status')) {
            $query->where('is_read', $request->status === 'read');
        }

        $messages = $query->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

        // Get unread count
        $unreadCount = Message::where('is_read', false)->count();

        return Inertia::render('Admin/Message/Index', [
            'messages' => $messages,
            'unreadCount' => $unreadCount,
            'filters' => $request->only(['search', 'status'])
        ]);
    }

    public function show(Message $message)
    {
        // Mark as read when viewing
        if (!$message->is_read) {
            $message->update(['is_read' => true, 'read_at' => now()]);
        }

        return Inertia::render('Admin/Message/Show', [
            'message' => $message
        ]);
    }

    public function markAsRead(Message $message)
    {
        $message->update(['is_read' => true, 'read_at' => now()]);

        return redirect()->back()
            ->with('success', 'Message marked as read.');
    }

    public function destroy(Message $message)
    {
        $message->delete();

        return redirect()->route('admin.messages.index')
            ->with('success', 'Message deleted successfully.');
    }
}
