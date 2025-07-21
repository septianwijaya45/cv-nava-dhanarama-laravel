import { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { router } from '@inertiajs/react';

export default function Edit({ portfolio }) {
    // Map legacy boolean status (true/false) to string value for select
    const initialStatus =
        typeof portfolio.status === 'string'
            ? portfolio.status
            : portfolio.status
            ? 'completed'
            : 'planning';
    const { data, setData, put, processing, errors, reset } = useForm({
        title: portfolio.title || '',
        description: portfolio.description || '',
        category: portfolio.category || '',
        technologies: portfolio.technologies || '',
        image: null, // For new file upload
        demo_url: portfolio.demo_url || '',
        github_url: portfolio.github_url || '',
        client: portfolio.client || '',
        duration: portfolio.duration || '',
        team_size: portfolio.team_size || 1,
        featured: portfolio.featured || false,
        status: portfolio.status,
    });

    const [imagePreview, setImagePreview] = useState(
        portfolio.image ? `/storage/${portfolio.image}` : null
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        // If there's a new image file, use POST with _method for file upload
        if (data.image && data.image instanceof File) {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('category', data.category);
            formData.append('technologies', data.technologies || '');
            formData.append('demo_url', data.demo_url || '');
            formData.append('github_url', data.github_url || '');
            formData.append('client', data.client || '');
            formData.append('duration', data.duration || '');
            formData.append('team_size', data.team_size);
            formData.append('featured', data.featured ? '1' : '0');
            formData.append('status', data.status);
            formData.append('image', data.image);
            formData.append('_method', 'PUT');

            router.post(route('admin.portfolios.update', portfolio.id), formData, {
                forceFormData: true,
                onSuccess: () => reset(),
            });
        } else {
            // No new image, use regular PUT request
            put(route('admin.portfolios.update', portfolio.id), {
                title: data.title,
                description: data.description,
                category: data.category,
                technologies: data.technologies,
                demo_url: data.demo_url,
                github_url: data.github_url,
                client: data.client,
                duration: data.duration,
                team_size: data.team_size,
                featured: data.featured,
                status: data.status,
            }, {
                onSuccess: () => reset(),
            });
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            const reader = new FileReader();
            reader.onload = (e) => setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <AdminLayout title="Edit Portfolio Item">
            <Head title="Edit Portfolio Item" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-semibold text-gray-900">Edit Portfolio Item</h1>
                                <Link
                                    href={route('admin.portfolios.index')}
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Back to Portfolios
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                            Title *
                                        </label>
                                        <input
                                            type="text"
                                            id="title"
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                        />
                                        {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                            Category *
                                        </label>
                                        <select
                                            id="category"
                                            value={data.category}
                                            onChange={(e) => setData('category', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Mobile Development">Mobile Development</option>
                                            <option value="Desktop Application">Desktop Application</option>
                                            <option value="E-commerce">E-commerce</option>
                                            <option value="CMS">CMS</option>
                                            <option value="API Development">API Development</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.category && <p className="mt-2 text-sm text-red-600">{errors.category}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                        Description *
                                    </label>
                                    <textarea
                                        id="description"
                                        rows={4}
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                    {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
                                </div>

                                <div>
                                    <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
                                        Technologies Used
                                    </label>
                                    <input
                                        type="text"
                                        id="technologies"
                                        value={data.technologies}
                                        onChange={(e) => setData('technologies', e.target.value)}
                                        placeholder="e.g., Laravel, React, MySQL, Tailwind CSS"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    {errors.technologies && <p className="mt-2 text-sm text-red-600">{errors.technologies}</p>}
                                </div>

                                <div>
                                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                        Project Image
                                    </label>
                                    <input
                                        type="file"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                    />
                                    {errors.image && <p className="mt-2 text-sm text-red-600">{errors.image}</p>}

                                    {imagePreview && (
                                        <div className="mt-4">
                                            <p className="text-sm text-gray-500 mb-2">
                                                {data.image ? 'New Image Preview:' : 'Current Image:'}
                                            </p>
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="h-32 w-48 object-cover rounded-lg border border-gray-300"
                                                onError={() => setImagePreview(null)}
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="demo_url" className="block text-sm font-medium text-gray-700">
                                            Demo URL
                                        </label>
                                        <input
                                            type="url"
                                            id="demo_url"
                                            value={data.demo_url}
                                            onChange={(e) => setData('demo_url', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="https://demo.example.com"
                                        />
                                        {errors.demo_url && <p className="mt-2 text-sm text-red-600">{errors.demo_url}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="github_url" className="block text-sm font-medium text-gray-700">
                                            GitHub URL
                                        </label>
                                        <input
                                            type="url"
                                            id="github_url"
                                            value={data.github_url}
                                            onChange={(e) => setData('github_url', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="https://github.com/username/repo"
                                        />
                                        {errors.github_url && <p className="mt-2 text-sm text-red-600">{errors.github_url}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                                    <div>
                                        <label htmlFor="client" className="block text-sm font-medium text-gray-700">
                                            Client Name
                                        </label>
                                        <input
                                            type="text"
                                            id="client"
                                            value={data.client}
                                            onChange={(e) => setData('client', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                        {errors.client && <p className="mt-2 text-sm text-red-600">{errors.client}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                                            Project Duration
                                        </label>
                                        <input
                                            type="text"
                                            id="duration"
                                            value={data.duration}
                                            onChange={(e) => setData('duration', e.target.value)}
                                            placeholder="e.g., 3 months"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                        {errors.duration && <p className="mt-2 text-sm text-red-600">{errors.duration}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="team_size" className="block text-sm font-medium text-gray-700">
                                            Team Size
                                        </label>
                                        <input
                                            type="number"
                                            id="team_size"
                                            value={data.team_size}
                                            onChange={(e) => setData('team_size', parseInt(e.target.value))}
                                            min="1"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                        {errors.team_size && <p className="mt-2 text-sm text-red-600">{errors.team_size}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                            Status *
                                        </label>
                                        <select
                                            id="status"
                                            value={data.status}
                                            onChange={(e) => setData('status', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                        >
                                            <option value="completed">Completed</option>
                                            <option value="in_progress">In Progress</option>
                                            <option value="planning">Planning</option>
                                        </select>
                                        {errors.status && <p className="mt-2 text-sm text-red-600">{errors.status}</p>}
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="featured"
                                                type="checkbox"
                                                checked={data.featured}
                                                onChange={(e) => setData('featured', e.target.checked)}
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="featured" className="font-medium text-gray-700">
                                                Featured Project
                                            </label>
                                            <p className="text-gray-500">Display this project prominently on the website.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-3">
                                    <Link
                                        href={route('admin.portfolios.index')}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                    >
                                        {processing ? 'Updating...' : 'Update Portfolio'}
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
