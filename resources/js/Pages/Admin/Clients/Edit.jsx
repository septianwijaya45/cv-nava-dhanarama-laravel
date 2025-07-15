import { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PhotoIcon } from '@heroicons/react/24/outline';

export default function Edit({ client }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: client.name || '',
        description: client.description || '',
        industry: client.industry || '',
        logo: client.logo || '',
        website: client.website || '',
        location: client.location || '',
        collaboration_since: client.collaboration_since || '',
        project_count: client.project_count || 0,
        services: client.services || '',
        testimonial: client.testimonial || '',
        featured: client.featured || false,
    });

    const [logoPreview, setLogoPreview] = useState(client.logo || null);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.clients.update', client.id));
    };

    const handleLogoChange = (e) => {
        const url = e.target.value;
        setData('logo', url);
        setLogoPreview(url);
    };

    return (
        <AdminLayout title="Edit Client">
            <Head title="Edit Client" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-semibold text-gray-900">Edit Client</h1>
                                <Link
                                    href={route('admin.clients.index')}
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Back to Clients
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Company Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                        />
                                        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                                            Industry
                                        </label>
                                        <select
                                            id="industry"
                                            value={data.industry}
                                            onChange={(e) => setData('industry', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option value="">Select Industry</option>
                                            <option value="Technology">Technology</option>
                                            <option value="Healthcare">Healthcare</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Education">Education</option>
                                            <option value="E-commerce">E-commerce</option>
                                            <option value="Manufacturing">Manufacturing</option>
                                            <option value="Government">Government</option>
                                            <option value="Non-profit">Non-profit</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.industry && <p className="mt-2 text-sm text-red-600">{errors.industry}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                        Company Description
                                    </label>
                                    <textarea
                                        id="description"
                                        rows={3}
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Brief description of the company and their business..."
                                    />
                                    {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
                                </div>

                                <div>
                                    <label htmlFor="logo" className="block text-sm font-medium text-gray-700">
                                        Company Logo URL
                                    </label>
                                    <input
                                        type="url"
                                        id="logo"
                                        value={data.logo}
                                        onChange={handleLogoChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="https://example.com/logo.png"
                                    />
                                    {errors.logo && <p className="mt-2 text-sm text-red-600">{errors.logo}</p>}

                                    {logoPreview && (
                                        <div className="mt-4">
                                            <p className="text-sm text-gray-500 mb-2">Logo Preview:</p>
                                            <img
                                                src={logoPreview}
                                                alt="Logo Preview"
                                                className="h-16 w-32 object-contain rounded-lg border border-gray-300 bg-white p-2"
                                                onError={() => setLogoPreview(null)}
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                                            Website URL
                                        </label>
                                        <input
                                            type="url"
                                            id="website"
                                            value={data.website}
                                            onChange={(e) => setData('website', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="https://company.com"
                                        />
                                        {errors.website && <p className="mt-2 text-sm text-red-600">{errors.website}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            id="location"
                                            value={data.location}
                                            onChange={(e) => setData('location', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="City, Country"
                                        />
                                        {errors.location && <p className="mt-2 text-sm text-red-600">{errors.location}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="collaboration_since" className="block text-sm font-medium text-gray-700">
                                            Collaboration Since
                                        </label>
                                        <input
                                            type="date"
                                            id="collaboration_since"
                                            value={data.collaboration_since}
                                            onChange={(e) => setData('collaboration_since', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                        {errors.collaboration_since && <p className="mt-2 text-sm text-red-600">{errors.collaboration_since}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="project_count" className="block text-sm font-medium text-gray-700">
                                            Number of Projects
                                        </label>
                                        <input
                                            type="number"
                                            id="project_count"
                                            value={data.project_count}
                                            onChange={(e) => setData('project_count', parseInt(e.target.value) || 0)}
                                            min="0"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                        {errors.project_count && <p className="mt-2 text-sm text-red-600">{errors.project_count}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="services" className="block text-sm font-medium text-gray-700">
                                        Services Provided
                                    </label>
                                    <textarea
                                        id="services"
                                        rows={3}
                                        value={data.services}
                                        onChange={(e) => setData('services', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="List of services provided to this client..."
                                    />
                                    {errors.services && <p className="mt-2 text-sm text-red-600">{errors.services}</p>}
                                </div>

                                <div>
                                    <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700">
                                        Client Testimonial
                                    </label>
                                    <textarea
                                        id="testimonial"
                                        rows={4}
                                        value={data.testimonial}
                                        onChange={(e) => setData('testimonial', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="What the client said about working with us..."
                                    />
                                    {errors.testimonial && <p className="mt-2 text-sm text-red-600">{errors.testimonial}</p>}
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
                                            Featured Client
                                        </label>
                                        <p className="text-gray-500">Display this client prominently on the website.</p>
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-3">
                                    <Link
                                        href={route('admin.clients.index')}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                    >
                                        {processing ? 'Updating...' : 'Update Client'}
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
