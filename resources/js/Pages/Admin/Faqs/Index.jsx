import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import useCustomModals from '@/hooks/useCustomModals.jsx';
import CustomModal from '@/Components/Modal/CustomModal.jsx';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FaqIndex({ auth, faqs, filters }) {
    const [search, setSearch] = useState(filters?.search || '');
    const { customConfirm, modalState, setModalState } = useCustomModals();

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('admin.faqs.index'), { search });
    };

    const handleDelete = async (id, question) => {
        const confirmed = await customConfirm(
            `Are you sure you want to delete this FAQ?`,
            `Question: "${question.substring(0, 50)}..."`,
            'Delete FAQ'
        );

        if (confirmed) {
            router.delete(route('admin.faqs.destroy', id));
        }
    };

    const reorderFaq = (id, direction) => {
        router.put(route('admin.faqs.reorder', id), {
            direction: direction
        });
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        FAQ Management
                    </h2>
                    <Link
                        href={route('admin.faqs.create')}
                        className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add FAQ
                    </Link>
                </div>
            }
        >
            <Head title="FAQ Management" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Search */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6">
                            <form onSubmit={handleSearch} className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Search FAQs..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                />
                                <button
                                    type="submit"
                                    className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-md"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* FAQs List */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {faqs.data.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-gray-500">No FAQs found.</p>
                                    <Link
                                        href={route('admin.faqs.create')}
                                        className="mt-4 inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Add Your First FAQ
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {faqs.data.map((faq, index) => (
                                        <div key={faq.id} className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    {/* Order */}
                                                    <div className="flex items-center mb-2">
                                                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mr-2">
                                                            Order: {faq.order}
                                                        </span>
                                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                                            faq.is_active
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-red-100 text-red-800'
                                                        }`}>
                                                            {faq.is_active ? 'Active' : 'Inactive'}
                                                        </span>
                                                    </div>

                                                    {/* Question */}
                                                    <h3 className="font-semibold text-gray-900 mb-2">
                                                        {faq.question}
                                                    </h3>

                                                    {/* Answer Preview */}
                                                    <p className="text-sm text-gray-700 line-clamp-2">
                                                        {faq.answer}
                                                    </p>
                                                </div>

                                                {/* Order Controls */}
                                                <div className="flex flex-col ml-4">
                                                    <button
                                                        onClick={() => reorderFaq(faq.id, 'up')}
                                                        disabled={index === 0}
                                                        className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                                                        title="Move Up"
                                                    >
                                                        <ChevronUpIcon className="h-4 w-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => reorderFaq(faq.id, 'down')}
                                                        disabled={index === faqs.data.length - 1}
                                                        className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                                                        title="Move Down"
                                                    >
                                                        <ChevronDownIcon className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                                                <div className="text-xs text-gray-500">
                                                    Created: {new Date(faq.created_at).toLocaleDateString()}
                                                </div>
                                                <div className="space-x-2">
                                                    <Link
                                                        href={route('admin.faqs.show', faq.id)}
                                                        className="text-brand-600 hover:text-brand-900 text-sm"
                                                    >
                                                        View
                                                    </Link>
                                                    <Link
                                                        href={route('admin.faqs.edit', faq.id)}
                                                        className="text-indigo-600 hover:text-indigo-900 text-sm"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(faq.id, faq.question)}
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
                            {faqs.links && faqs.links.length > 3 && (
                                <div className="mt-6 flex justify-center">
                                    <nav className="flex space-x-2">
                                        {faqs.links.map((link, index) => (
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
