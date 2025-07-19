import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

export default function TestimonialCreate({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        client_name: '',
        client_position: '',
        client_company: '',
        testimonial_text: '',
        client_photo: null,
        rating: 5,
        is_featured: false,
        is_active: true,
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('client_photo', file);
            const reader = new FileReader();
            reader.onload = (e) => setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleRatingClick = (rating) => {
        setData('rating', rating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.testimonials.store'), {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    const renderStarRating = () => {
        return [...Array(5)].map((_, index) => {
            const rating = index + 1;
            const Icon = rating <= data.rating ? StarIcon : StarOutlineIcon;
            return (
                <button
                    key={index}
                    type="button"
                    onClick={() => handleRatingClick(rating)}
                    className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
                >
                    <Icon className="h-6 w-6" />
                </button>
            );
        });
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Add New Testimonial
                    </h2>
                    <Link
                        href={route('admin.testimonials.index')}
                        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Back to List
                    </Link>
                </div>
            }
        >
            <Head title="Add New Testimonial" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Client Name */}
                                <div>
                                    <label htmlFor="client_name" className="block text-sm font-medium text-gray-700">
                                        Client Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="client_name"
                                        value={data.client_name}
                                        onChange={(e) => setData('client_name', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        required
                                    />
                                    {errors.client_name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.client_name}</p>
                                    )}
                                </div>

                                {/* Client Position */}
                                <div>
                                    <label htmlFor="client_position" className="block text-sm font-medium text-gray-700">
                                        Client Position <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="client_position"
                                        value={data.client_position}
                                        onChange={(e) => setData('client_position', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        required
                                    />
                                    {errors.client_position && (
                                        <p className="mt-1 text-sm text-red-600">{errors.client_position}</p>
                                    )}
                                </div>

                                {/* Client Company */}
                                <div>
                                    <label htmlFor="client_company" className="block text-sm font-medium text-gray-700">
                                        Client Company
                                    </label>
                                    <input
                                        type="text"
                                        id="client_company"
                                        value={data.client_company}
                                        onChange={(e) => setData('client_company', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                    />
                                    {errors.client_company && (
                                        <p className="mt-1 text-sm text-red-600">{errors.client_company}</p>
                                    )}
                                </div>

                                {/* Testimonial Text */}
                                <div>
                                    <label htmlFor="testimonial_text" className="block text-sm font-medium text-gray-700">
                                        Testimonial Text <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="testimonial_text"
                                        rows={4}
                                        value={data.testimonial_text}
                                        onChange={(e) => setData('testimonial_text', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        required
                                    />
                                    {errors.testimonial_text && (
                                        <p className="mt-1 text-sm text-red-600">{errors.testimonial_text}</p>
                                    )}
                                </div>

                                {/* Client Photo */}
                                <div>
                                    <label htmlFor="client_photo" className="block text-sm font-medium text-gray-700">
                                        Client Photo
                                    </label>
                                    <input
                                        type="file"
                                        id="client_photo"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100"
                                    />
                                    {errors.client_photo && (
                                        <p className="mt-1 text-sm text-red-600">{errors.client_photo}</p>
                                    )}
                                    {imagePreview && (
                                        <div className="mt-2">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="h-20 w-20 rounded-full object-cover"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Rating */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Rating <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex items-center space-x-1">
                                        {renderStarRating()}
                                        <span className="ml-2 text-sm text-gray-600">
                                            {data.rating} out of 5 stars
                                        </span>
                                    </div>
                                    {errors.rating && (
                                        <p className="mt-1 text-sm text-red-600">{errors.rating}</p>
                                    )}
                                </div>

                                {/* Checkboxes */}
                                <div className="flex space-x-6">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="is_featured"
                                            checked={data.is_featured}
                                            onChange={(e) => setData('is_featured', e.target.checked)}
                                            className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="is_featured" className="ml-2 block text-sm text-gray-900">
                                            Featured Testimonial
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="is_active"
                                            checked={data.is_active}
                                            onChange={(e) => setData('is_active', e.target.checked)}
                                            className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900">
                                            Active
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end space-x-3">
                                    <Link
                                        href={route('admin.testimonials.index')}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                    >
                                        {processing ? 'Creating...' : 'Create Testimonial'}
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
