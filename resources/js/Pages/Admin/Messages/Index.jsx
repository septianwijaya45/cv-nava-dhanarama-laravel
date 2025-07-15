import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import useCustomModals from '@/Hooks/useCustomModals';
import CustomModal from '@/Components/Modal/CustomModal.jsx';

export default function MessageIndex({ auth, messages, filters }) {
    const [search, setSearch] = useState(filters.search || '');
    const [status, setStatus] = useState(filters.status || '');
    const { customConfirm, modalState, setModalState } = useCustomModals();

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('admin.messages.index'), { search, status });
    };

    const handleDelete = async (id, name, subject) => {
        const confirmed = await customConfirm(
            `Are you sure you want to delete message from "${name}"?`,
            `Subject: "${subject}"`,
            'Delete Message'
        );
        
        if (confirmed) {
            router.delete(route('admin.messages.destroy', id));
        }
    };

    const markAsRead = (id) => {
        router.patch(route('admin.messages.mark-read', id));
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Messages
                    </h2>
                    <div className="text-sm text-gray-600">
                        Total: {messages.total} messages
                    </div>
                </div>
            }
        >
            <Head title="Messages" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6">
                            <form onSubmit={handleSearch} className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Search messages..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                />
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                >
                                    <option value="">All Messages</option>
                                    <option value="unread">Unread</option>
                                    <option value="read">Read</option>
                                </select>
                                <button
                                    type="submit"
                                    className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-md"
                                >
                                    Filter
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {messages.data.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-gray-500">No messages found.</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {messages.data.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`border rounded-lg p-4 ${
                                                !message.is_read ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
                                            }`}
                                        >
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-3 mb-2">
                                                        <h3 className="text-lg font-medium text-gray-900">
                                                            {message.subject}
                                                        </h3>
                                                        {!message.is_read && (
                                                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                                                New
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                                                        <span><strong>From:</strong> {message.name}</span>
                                                        <span><strong>Email:</strong> {message.email}</span>
                                                        {message.phone && (
                                                            <span><strong>Phone:</strong> {message.phone}</span>
                                                        )}
                                                        <span><strong>Date:</strong> {new Date(message.created_at).toLocaleDateString()}</span>
                                                    </div>
                                                    <div className="text-gray-700 mb-4">
                                                        {message.message.length > 200 ? (
                                                            <div>
                                                                <p>{message.message.substring(0, 200)}...</p>
                                                                <Link
                                                                    href={route('admin.messages.show', message.id)}
                                                                    className="text-brand-600 hover:text-brand-700 text-sm"
                                                                >
                                                                    Read more →
                                                                </Link>
                                                            </div>
                                                        ) : (
                                                            <p>{message.message}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                                                <div className="text-xs text-gray-500">
                                                    {message.ip_address && `IP: ${message.ip_address}`}
                                                </div>
                                                <div className="space-x-2">
                                                    {!message.is_read && (
                                                        <button
                                                            onClick={() => markAsRead(message.id)}
                                                            className="text-blue-600 hover:text-blue-900 text-sm"
                                                        >
                                                            Mark as Read
                                                        </button>
                                                    )}
                                                    <Link
                                                        href={`mailto:${message.email}?subject=Re: ${message.subject}`}
                                                        className="text-green-600 hover:text-green-900 text-sm"
                                                    >
                                                        Reply
                                                    </Link>
                                                    <Link
                                                        href={route('admin.messages.show', message.id)}
                                                        className="text-brand-600 hover:text-brand-900 text-sm"
                                                    >
                                                        View Details
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(message.id, message.name, message.subject)}
                                                        className="text-red-600 hover:text-red-900 text-sm"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Pagination */}
                            {messages.links && messages.links.length > 3 && (
                                <div className="mt-6 flex justify-center">
                                    <nav className="flex space-x-2">
                                        {messages.links.map((link, index) => (
                                            <Link
                                                key={index}
                                                href={link.url}
                                                className={`px-3 py-2 text-sm rounded-md ${
                                                    link.active
                                                        ? 'bg-brand-600 text-white'
                                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                                }`}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        ))}
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <CustomModal
                modalState={modalState}
                setModalState={setModalState}
            />
        </AdminLayout>
    );
}
