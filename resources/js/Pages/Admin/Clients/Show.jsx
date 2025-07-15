import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { CalendarIcon, LinkIcon, MapPinIcon, UserGroupIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function Show({ client }) {
    const formatDate = (dateString) => {
        if (!dateString) return 'Not specified';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <AdminLayout title={`Client: ${client.name}`}>
            <Head title={`Client: ${client.name}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-3xl font-bold text-gray-900">{client.name}</h1>
                                <div className="flex space-x-3">
                                    <Link
                                        href={route('admin.clients.edit', client.id)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={route('admin.clients.index')}
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Back to Clients
                                    </Link>
                                </div>
                            </div>

                            {/* Client Logo and Basic Info */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                <div className="md:col-span-1">
                                    {client.logo ? (
                                        <div className="bg-white border-2 border-gray-200 rounded-lg p-4 flex items-center justify-center h-32">
                                            <img
                                                src={client.logo}
                                                alt={`${client.name} logo`}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <div className="bg-gray-100 border-2 border-gray-200 rounded-lg p-4 flex items-center justify-center h-32">
                                            <BuildingOfficeIcon className="h-12 w-12 text-gray-400" />
                                        </div>
                                    )}
                                </div>

                                <div className="md:col-span-2 space-y-4">
                                    {client.industry && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                                {client.industry}
                                            </span>
                                        </div>
                                    )}

                                    {client.featured && (
                                        <div>
                                            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                                ⭐ Featured Client
                                            </span>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {client.location && (
                                            <div className="flex items-center text-sm text-gray-600">
                                                <MapPinIcon className="h-5 w-5 mr-2" />
                                                <span>{client.location}</span>
                                            </div>
                                        )}

                                        {client.project_count !== null && (
                                            <div className="flex items-center text-sm text-gray-600">
                                                <UserGroupIcon className="h-5 w-5 mr-2" />
                                                <span>{client.project_count} {client.project_count === 1 ? 'project' : 'projects'}</span>
                                            </div>
                                        )}

                                        <div className="flex items-center text-sm text-gray-600">
                                            <CalendarIcon className="h-5 w-5 mr-2" />
                                            <span>Client since {formatDate(client.collaboration_since)}</span>
                                        </div>

                                        <div className="flex items-center text-sm text-gray-600">
                                            <CalendarIcon className="h-5 w-5 mr-2" />
                                            <span>Added on {formatDate(client.created_at)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Client Description */}
                            {client.description && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Description</h3>
                                    <div className="prose max-w-none">
                                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                                            {client.description}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Services Provided */}
                            {client.services && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Services Provided</h3>
                                    <div className="prose max-w-none">
                                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            {client.services}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Client Testimonial */}
                            {client.testimonial && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Testimonial</h3>
                                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
                                        <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                                            "{client.testimonial}"
                                        </blockquote>
                                        <footer className="mt-4 text-sm text-gray-600">
                                            — {client.name}
                                        </footer>
                                    </div>
                                </div>
                            )}

                            {/* External Links */}
                            {client.website && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">External Links</h3>
                                    <a
                                        href={client.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-200"
                                    >
                                        <LinkIcon className="h-5 w-5 mr-2" />
                                        Visit Website
                                    </a>
                                </div>
                            )}

                            {/* Client Stats */}
                            <div className="border-t pt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Statistics</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-blue-600">{client.project_count || 0}</div>
                                        <div className="text-sm text-gray-600">Projects Completed</div>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-green-600">
                                            {client.collaboration_since ?
                                                Math.floor((new Date() - new Date(client.collaboration_since)) / (365.25 * 24 * 60 * 60 * 1000)) : 0}
                                        </div>
                                        <div className="text-sm text-gray-600">Years Partnership</div>
                                    </div>

                                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-purple-600">
                                            {client.featured ? 'Yes' : 'No'}
                                        </div>
                                        <div className="text-sm text-gray-600">Featured Client</div>
                                    </div>

                                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-orange-600">
                                            {client.industry || 'N/A'}
                                        </div>
                                        <div className="text-sm text-gray-600">Industry</div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="border-t pt-6 mt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Timeline</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                                    <div>
                                        <span className="font-medium">Partnership Started:</span> {formatDate(client.collaboration_since)}
                                    </div>
                                    <div>
                                        <span className="font-medium">Record Created:</span> {formatDate(client.created_at)}
                                    </div>
                                    <div>
                                        <span className="font-medium">Last Updated:</span> {formatDate(client.updated_at)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
