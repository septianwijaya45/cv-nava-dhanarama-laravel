import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { CalendarIcon, LinkIcon, CodeBracketIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Show({ portfolio }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getStatusColor = (status) => {
        const colors = {
            'completed': 'bg-green-100 text-green-800',
            'in_progress': 'bg-yellow-100 text-yellow-800',
            'planning': 'bg-blue-100 text-blue-800'
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    const getStatusText = (status) => {
        const texts = {
            'completed': 'Completed',
            'in_progress': 'In Progress',
            'planning': 'Planning'
        };
        return texts[status] || status;
    };

    return (
        <AdminLayout title={`Portfolio: ${portfolio.title}`}>
            <Head title={`Portfolio: ${portfolio.title}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-3xl font-bold text-gray-900">{portfolio.title}</h1>
                                <div className="flex space-x-3">
                                    <Link
                                        href={route('admin.portfolios.edit', portfolio.id)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={route('admin.portfolios.index')}
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Back to Portfolio
                                    </Link>
                                </div>
                            </div>

                            {/* Project Image */}
                            {portfolio.image && (
                                <div className="mb-8">
                                    <img
                                        src={portfolio.image}
                                        alt={portfolio.title}
                                        className="w-full h-64 object-cover rounded-lg border border-gray-300"
                                    />
                                </div>
                            )}

                            {/* Project Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                            {portfolio.category}
                                        </span>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(portfolio.status)}`}>
                                            {getStatusText(portfolio.status)}
                                        </span>
                                    </div>

                                    {portfolio.featured && (
                                        <div>
                                            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                                ⭐ Featured Project
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-center text-sm text-gray-600">
                                        <CalendarIcon className="h-5 w-5 mr-2" />
                                        <span>Created on {formatDate(portfolio.created_at)}</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {portfolio.client && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
                                            <p className="text-gray-900">{portfolio.client}</p>
                                        </div>
                                    )}

                                    {portfolio.duration && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                                            <p className="text-gray-900 flex items-center">
                                                <ClockIcon className="h-4 w-4 mr-2" />
                                                {portfolio.duration}
                                            </p>
                                        </div>
                                    )}

                                    {portfolio.team_size && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
                                            <p className="text-gray-900 flex items-center">
                                                <UserIcon className="h-4 w-4 mr-2" />
                                                {portfolio.team_size} {portfolio.team_size === 1 ? 'person' : 'people'}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Project Description */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Description</h3>
                                <div className="prose max-w-none">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{portfolio.description}</p>
                                </div>
                            </div>

                            {/* Technologies */}
                            {portfolio.technologies && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {portfolio.technologies.split(',').map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center"
                                            >
                                                <CodeBracketIcon className="h-4 w-4 mr-1" />
                                                {tech.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Project Links */}
                            {(portfolio.demo_url || portfolio.github_url) && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Links</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {portfolio.demo_url && (
                                            <a
                                                href={portfolio.demo_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-200"
                                            >
                                                <LinkIcon className="h-5 w-5 mr-2" />
                                                View Live Demo
                                            </a>
                                        )}
                                        {portfolio.github_url && (
                                            <a
                                                href={portfolio.github_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded transition duration-200"
                                            >
                                                <CodeBracketIcon className="h-5 w-5 mr-2" />
                                                View Source Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Project Timeline */}
                            <div className="border-t pt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Timeline</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                                    <div>
                                        <span className="font-medium">Created:</span> {formatDate(portfolio.created_at)}
                                    </div>
                                    <div>
                                        <span className="font-medium">Last Updated:</span> {formatDate(portfolio.updated_at)}
                                    </div>
                                    <div>
                                        <span className="font-medium">Current Status:</span> {getStatusText(portfolio.status)}
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
