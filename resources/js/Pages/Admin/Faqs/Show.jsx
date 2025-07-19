import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import useCustomModals from '@/hooks/useCustomModals.jsx';
import CustomModal from '@/Components/Modal/CustomModal.jsx';

export default function FaqShow({ auth, faq }) {
    const { customConfirm, modalState, setModalState } = useCustomModals();

    const handleDelete = async () => {
        const confirmed = await customConfirm(
            `Are you sure you want to delete this FAQ?`,
            `Question: "${faq.question}"`,
            'Delete FAQ'
        );

        if (confirmed) {
            router.delete(route('admin.faqs.destroy', faq.id));
        }
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        FAQ Details
                    </h2>
                    <div className="flex space-x-2">
                        <Link
                            href={route('admin.faqs.edit', faq.id)}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Edit
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                        <Link
                            href={route('admin.faqs.index')}
                            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Back to List
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title={`FAQ - ${faq.question.substring(0, 50)}...`} />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {/* Header Info */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex space-x-2">
                                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
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
                            </div>

                            {/* Question */}
                            <div className="mb-8">
                                <h3 className="text-sm font-medium text-gray-500 mb-3">Question</h3>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="text-lg font-semibold text-gray-900">
                                        {faq.question}
                                    </h4>
                                </div>
                            </div>

                            {/* Answer */}
                            <div className="mb-8">
                                <h3 className="text-sm font-medium text-gray-500 mb-3">Answer</h3>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div
                                        className="text-gray-900 prose max-w-none"
                                        style={{ whiteSpace: 'pre-wrap' }}
                                    >
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className="mb-8">
                                <h3 className="text-sm font-medium text-gray-500 mb-3">Preview (How it appears to users)</h3>
                                <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg">
                                    <div className="border border-gray-200 rounded-lg">
                                        <button
                                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                                            disabled
                                        >
                                            <span className="font-medium text-gray-900">{faq.question}</span>
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div className="px-6 pb-4">
                                            <div className="text-gray-700 text-sm" style={{ whiteSpace: 'pre-wrap' }}>
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Metadata */}
                            <div className="border-t pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                                    <div>
                                        <strong>Created:</strong> {new Date(faq.created_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                    <div>
                                        <strong>Last Updated:</strong> {new Date(faq.updated_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                </div>
                            </div>
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
