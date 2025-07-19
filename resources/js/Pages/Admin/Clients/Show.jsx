import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { LinkIcon } from '@heroicons/react/24/outline';

export default function Show({ client }) {
    return (
        <AdminLayout title={`Client: ${client.client_name}`}>
            <Head title={`Client: ${client.client_name}`} />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {client.client_name}
                            </h1>
                            <div className="mb-6">
                                {client.logo && (
                                    <img src={client.logo} alt="Logo" className="h-32 w-auto object-contain rounded-lg" />
                                )}
                            </div>
                            {client.industry && (
                                <div className="mb-4">
                                    <strong>Industry:</strong> {client.industry}
                                </div>
                            )}
                            <div className="mb-4">
                                <strong>Status:</strong> {client.status ? 'Active' : 'Inactive'}
                            </div>
                            {client.testimonial && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Testimonial</h3>
                                    <blockquote className="italic text-gray-700">
                                        "{client.testimonial}"
                                    </blockquote>
                                </div>
                            )}
                            {client.website && (
                                <div className="mb-6">
                                    <a
                                        href={client.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        <LinkIcon className="h-5 w-5 mr-2" /> Visit Website
                                    </a>
                                </div>
                            )}
                            <Link
                                href={route('admin.clients.index')}
                                className="text-brand-600 hover:text-brand-900"
                            >
                                &larr; Back to Clients
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
