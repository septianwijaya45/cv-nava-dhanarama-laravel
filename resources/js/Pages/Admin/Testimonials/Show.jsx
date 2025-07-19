import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { StarIcon } from '@heroicons/react/24/solid';
import useCustomModals from '@/hooks/useCustomModals.jsx';
import CustomModal from '@/Components/Modal/CustomModal.jsx';

export default function TestimonialShow({ auth, testimonial }) {
    const { customConfirm, modalState, setModalState } = useCustomModals();

    const handleDelete = async () => {
        const confirmed = await customConfirm(
            `Are you sure you want to delete testimonial from "${testimonial.client_name}"?`,
            'This action cannot be undone.',
            'Delete Testimonial'
        );

        if (confirmed) {
            router.delete(route('admin.testimonials.destroy', testimonial.id));
        }
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <StarIcon
                key={index}
                className={`h-5 w-5 ${
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
                        Testimonial Details
                    </h2>
                    <div className="flex space-x-2">
                        <Link
                            href={route('admin.testimonials.edit', testimonial.id)}
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
                            href={route('admin.testimonials.index')}
                            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Back to List
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title={`Testimonial - ${testimonial.client_name}`} />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Client Photo */}
                                <div className="md:col-span-1">
                                    <div className="text-center">
                                        {testimonial.client_photo ? (
                                            <img
                                                src={`/storage/${testimonial.client_photo}`}
                                                alt={testimonial.client_name}
                                                className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                                            />
                                        ) : (
                                            <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 flex items-center justify-center shadow-lg">
                                                <span className="text-2xl text-gray-500 font-semibold">
                                                    {testimonial.client_name.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Client Details */}
                                <div className="md:col-span-2">
                                    <div className="space-y-4">
                                        {/* Client Name */}
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500">Client Name</h3>
                                            <p className="mt-1 text-lg font-semibold text-gray-900">
                                                {testimonial.client_name}
                                            </p>
                                        </div>

                                        {/* Client Position */}
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500">Position</h3>
                                            <p className="mt-1 text-gray-900">{testimonial.client_position}</p>
                                        </div>

                                        {/* Client Company */}
                                        {testimonial.client_company && (
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-500">Company</h3>
                                                <p className="mt-1 text-gray-900">{testimonial.client_company}</p>
                                            </div>
                                        )}

                                        {/* Rating */}
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500">Rating</h3>
                                            <div className="mt-1 flex items-center space-x-1">
                                                {renderStars(testimonial.rating)}
                                                <span className="ml-2 text-sm text-gray-600">
                                                    {testimonial.rating} out of 5 stars
                                                </span>
                                            </div>
                                        </div>

                                        {/* Status */}
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500">Status</h3>
                                            <div className="mt-1 flex space-x-2">
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
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <div className="mt-8">
                                <h3 className="text-sm font-medium text-gray-500 mb-3">Testimonial</h3>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <blockquote className="text-gray-900 italic">
                                        "{testimonial.testimonial_text}"
                                    </blockquote>
                                </div>
                            </div>

                            {/* Metadata */}
                            <div className="mt-8 border-t pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                                    <div>
                                        <strong>Created:</strong> {new Date(testimonial.created_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                    <div>
                                        <strong>Last Updated:</strong> {new Date(testimonial.updated_at).toLocaleDateString('en-US', {
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
