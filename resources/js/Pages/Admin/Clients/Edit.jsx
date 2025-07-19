import { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PhotoIcon } from '@heroicons/react/24/outline';

export default function Edit({ client }) {
    const { data, setData, put, processing, errors } = useForm({
        client_name: client.client_name || '',
        logo: client.logo || '',
        testimonial: client.testimonial || '',
        status: client.status,
        industry: client.industry || '',
        website: client.website || '',
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
                                        <label htmlFor="client_name" className="block text-sm font-medium text-gray-700">
                                            Client Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="client_name"
                                            value={data.client_name}
                                            onChange={(e) => setData('client_name', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                        />
                                        {errors.client_name && <p className="mt-2 text-sm text-red-600">{errors.client_name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                                            Industry
                                        </label>
                                        <input
                                            type="text"
                                            id="industry"
                                            value={data.industry}
                                            onChange={(e) => setData('industry', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                        {errors.industry && <p className="mt-2 text-sm text-red-600">{errors.industry}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="logo" className="block text-sm font-medium text-gray-700">
                                        Company Logo URL
                                    </label>
                                    <input
                                        type="url"
                                        id="logo"
                                        value={data.logo}
                                        onChange={(e) => { setData('logo', e.target.value); setLogoPreview(e.target.value); }}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="https://example.com/logo.png"
                                    />
                                    {errors.logo && <p className="mt-2 text-sm text-red-600">{errors.logo}</p>}
                                    {logoPreview && (
                                        <div className="mt-4">
                                            <img
                                                src={logoPreview}
                                                alt="Logo Preview"
                                                className="h-16 w-32 object-contain rounded-lg border border-gray-300"
                                            />
                                        </div>
                                    )}
                                </div>

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
                                    <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700">
                                        Client Testimonial
                                    </label>
                                    <textarea
                                        id="testimonial"
                                        value={data.testimonial}
                                        onChange={(e) => setData('testimonial', e.target.value)}
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    {errors.testimonial && <p className="mt-2 text-sm text-red-600">{errors.testimonial}</p>}
                                </div>
                                <div>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={data.status}
                                            onChange={(e) => setData('status', e.target.checked)}
                                            className="rounded border-gray-300 text-brand-600 shadow-sm focus:ring-brand-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">Active Client</span>
                                    </label>
                                    {errors.status && <p className="mt-2 text-sm text-red-600">{errors.status}</p>}
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
