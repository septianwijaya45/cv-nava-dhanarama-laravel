import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function FaqCreate({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        question: '',
        answer: '',
        order: 1,
        is_active: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.faqs.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Add New FAQ
                    </h2>
                    <Link
                        href={route('admin.faqs.index')}
                        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Back to List
                    </Link>
                </div>
            }
        >
            <Head title="Add New FAQ" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Question */}
                                <div>
                                    <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                                        Question <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="question"
                                        value={data.question}
                                        onChange={(e) => setData('question', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        required
                                        placeholder="Enter the frequently asked question..."
                                    />
                                    {errors.question && (
                                        <p className="mt-1 text-sm text-red-600">{errors.question}</p>
                                    )}
                                </div>

                                {/* Answer */}
                                <div>
                                    <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
                                        Answer <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="answer"
                                        rows={6}
                                        value={data.answer}
                                        onChange={(e) => setData('answer', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        required
                                        placeholder="Provide a detailed answer to the question..."
                                    />
                                    {errors.answer && (
                                        <p className="mt-1 text-sm text-red-600">{errors.answer}</p>
                                    )}
                                </div>

                                {/* Order */}
                                <div>
                                    <label htmlFor="order" className="block text-sm font-medium text-gray-700">
                                        Display Order
                                    </label>
                                    <input
                                        type="number"
                                        id="order"
                                        min="1"
                                        value={data.order}
                                        onChange={(e) => setData('order', parseInt(e.target.value) || 1)}
                                        className="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                    />
                                    <p className="mt-1 text-sm text-gray-500">
                                        Lower numbers appear first in the FAQ list.
                                    </p>
                                    {errors.order && (
                                        <p className="mt-1 text-sm text-red-600">{errors.order}</p>
                                    )}
                                </div>

                                {/* Active Status */}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="is_active"
                                        checked={data.is_active}
                                        onChange={(e) => setData('is_active', e.target.checked)}
                                        className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900">
                                        Active (FAQ will be visible to users)
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end space-x-3">
                                    <Link
                                        href={route('admin.faqs.index')}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                    >
                                        {processing ? 'Creating...' : 'Create FAQ'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
