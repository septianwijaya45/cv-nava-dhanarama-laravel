import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateClient({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        client_name: '',
        logo: '',
        testimonial: '',
        status: true,
        industry: '',
        website: ''
    });

    const [previewLogo, setPreviewLogo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.clients.store'));
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewLogo(e.target.result);
                setData('logo', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add New Client
                </h2>
            }
        >
            <Head title="Add Client" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Client Name and Industry */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Client Name</label>
                                        <input
                                            type="text"
                                            value={data.client_name}
                                            onChange={(e) => setData('client_name', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                            required
                                        />
                                        {errors.client_name && <p className="mt-2 text-sm text-red-600">{errors.client_name}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Industry</label>
                                        <input
                                            type="text"
                                            value={data.industry}
                                            onChange={(e) => setData('industry', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        />
                                        {errors.industry && <p className="mt-2 text-sm text-red-600">{errors.industry}</p>}
                                    </div>
                                </div>

                                {/* Website and Logo Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Website</label>
                                    <input
                                        type="url"
                                        value={data.website}
                                        onChange={(e) => setData('website', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                    />
                                    {errors.website && <p className="mt-2 text-sm text-red-600">{errors.website}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Company Logo</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleLogoChange}
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100"
                                    />
                                    {previewLogo && (
                                        <img src={previewLogo} alt="Preview" className="mt-2 h-16 w-auto rounded-lg" />
                                    )}
                                    {errors.logo && <p className="mt-2 text-sm text-red-600">{errors.logo}</p>}
                                </div>

                                {/* Testimonial and Active Status */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Client Testimonial</label>
                                    <textarea
                                        value={data.testimonial}
                                        onChange={(e) => setData('testimonial', e.target.value)}
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                    />
                                    {errors.testimonial && <p className="mt-2 text-sm text-red-600">{errors.testimonial}</p>}
                                </div>
                                <div>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={data.status}
                                            onChange={(e) => setData('status', e.target.checked)}
                                            className="rounded border-gray-300 text-brand-600 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">Active Client</span>
                                    </label>
                                </div>

                                <div className="flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => window.history.back()}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                    >
                                        {processing ? 'Adding...' : 'Add Client'}
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
