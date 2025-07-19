import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import { useCustomModals } from '@/hooks/useCustomModals.jsx';
import { StarIcon } from '@heroicons/react/24/solid';

export default function TestimonialIndex({ auth, testimonials, filters }) {
    const [search, setSearch] = useState(filters?.search || '');
    const { customConfirm, ConfirmComponent } = useCustomModals();

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('admin.testimonials.index'), { search });
    };

    const handleDelete = async (id, clientName) => {
        const confirmed = await customConfirm({
            title: 'Delete Testimonial',
            message: `Are you sure you want to delete testimonial from "${clientName}"? This action cannot be undone.`,
            confirmText: 'Delete',
            cancelText: 'Cancel',
            type: 'danger'
        });

        if (confirmed) {
            router.delete(route('admin.testimonials.destroy', id));
        }
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <StarIcon
                key={index}
                className={`h-4 w-4 ${
                    index < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
            />
        ));
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Testimonial Management
                    </h2>
                    <Link
                        href={route('admin.testimonials.create')}
                        className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add Testimonial
                    </Link>
                </div>
            }
        >
            <Head title="Testimonial Management" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Search */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6">
                            <form onSubmit={handleSearch} className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Search testimonials..."
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

                    {/* Testimonials List */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {testimonials.data.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-gray-500">No testimonials found.</p>
                                    <Link
                                        href={route('admin.testimonials.create')}
                                        className="mt-4 inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Add Your First Testimonial
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {testimonials.data.map((testimonial) => (
                                        <div key={testimonial.id} className="border border-gray-200 rounded-lg p-4">
                                            {/* Rating */}
                                            <div className="flex mb-3">
                                                {renderStars(testimonial.rating)}
                                            </div>

                                            {/* Client Info */}
                                            <div className="mb-3">
                                                <h3 className="font-semibold text-gray-900">
                                                    {testimonial.client_name}
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    {testimonial.client_position}
                                                    {testimonial.client_company && (
                                                        <span> - {testimonial.client_company}</span>
                                                    )}
                                                </p>
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                                                "{testimonial.testimonial_text}"
                                            </p>

                                            {/* Status Badges */}
                                            <div className="flex gap-2 mb-4">
                                                {testimonial.is_featured && (
                                                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                                                        Featured
                                                    </span>
                                                )}
                                                <span className={`px-2 py-1 text-xs rounded-full ${
                                                    testimonial.is_active
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {testimonial.is_active ? 'Active' : 'Inactive'}
                                                </span>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex justify-between items-center">
                                                <div className="space-x-2">
                                                    <Link
                                                        href={route('admin.testimonials.show', testimonial.id)}
                                                        className="text-brand-600 hover:text-brand-900 text-sm"
                                                    >
                                                        View
                                                    </Link>
                                                    <Link
                                                        href={route('admin.testimonials.edit', testimonial.id)}
                                                        className="text-indigo-600 hover:text-indigo-900 text-sm"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(testimonial.id, testimonial.client_name)}
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
                            {testimonials.links && testimonials.links.length > 3 && (
                                <div className="mt-6 flex justify-center">
                                    <nav className="flex space-x-2">
                                        {testimonials.links.map((link, index) => (
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

            <ConfirmComponent />
        </AdminLayout>
    );
}
