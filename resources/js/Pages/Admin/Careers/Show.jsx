import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { CalendarIcon, MapPinIcon, CurrencyDollarIcon, ClockIcon, UserGroupIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

export default function Show({ career }) {
    const formatDate = (dateString) => {
        if (!dateString) return 'Not specified';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getTypeColor = (type) => {
        const colors = {
            'full-time': 'bg-green-100 text-green-800',
            'part-time': 'bg-blue-100 text-blue-800',
            'contract': 'bg-purple-100 text-purple-800',
            'remote': 'bg-orange-100 text-orange-800'
        };
        return colors[type] || 'bg-gray-100 text-gray-800';
    };

    const getTypeText = (type) => {
        const texts = {
            'full-time': 'Full-time',
            'part-time': 'Part-time',
            'contract': 'Contract',
            'remote': 'Remote'
        };
        return texts[type] || type;
    };

    const isDeadlinePassed = (deadline) => {
        if (!deadline) return false;
        return new Date(deadline) < new Date();
    };

    return (
        <AdminLayout title={`Career: ${career.title}`}>
            <Head title={`Career: ${career.title}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-3xl font-bold text-gray-900">{career.title}</h1>
                                <div className="flex space-x-3">
                                    <Link
                                        href={route('admin.careers.edit', career.id)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={route('admin.careers.index')}
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Back to Careers
                                    </Link>
                                </div>
                            </div>

                            {/* Job Info Header */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center w-fit">
                                            <BriefcaseIcon className="h-4 w-4 mr-1" />
                                            {career.department}
                                        </span>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type</label>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(career.type)}`}>
                                            {getTypeText(career.type)}
                                        </span>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            career.is_active
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}>
                                            {career.is_active ? '✅ Active' : '❌ Inactive'}
                                        </span>
                                    </div>

                                    {career.experience_level && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                                            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center w-fit">
                                                <UserGroupIcon className="h-4 w-4 mr-1" />
                                                {career.experience_level}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    {career.location && (
                                        <div className="flex items-center text-sm text-gray-600">
                                            <MapPinIcon className="h-5 w-5 mr-2" />
                                            <span>{career.location}</span>
                                        </div>
                                    )}

                                    {career.salary && (
                                        <div className="flex items-center text-sm text-gray-600">
                                            <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                                            <span>{career.salary}</span>
                                        </div>
                                    )}

                                    <div className="flex items-center text-sm text-gray-600">
                                        <CalendarIcon className="h-5 w-5 mr-2" />
                                        <span>Posted on {formatDate(career.posted_date || career.created_at)}</span>
                                    </div>

                                    {career.deadline && (
                                        <div className={`flex items-center text-sm ${
                                            isDeadlinePassed(career.deadline) ? 'text-red-600' : 'text-gray-600'
                                        }`}>
                                            <ClockIcon className="h-5 w-5 mr-2" />
                                            <span>
                                                Deadline: {formatDate(career.deadline)}
                                                {isDeadlinePassed(career.deadline) && ' (Expired)'}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Job Description */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Description</h3>
                                <div className="prose max-w-none">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                                        {career.description}
                                    </p>
                                </div>
                            </div>

                            {/* Requirements */}
                            {career.requirements && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
                                    <div className="prose max-w-none">
                                        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            {career.requirements}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Responsibilities */}
                            {career.responsibilities && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities</h3>
                                    <div className="prose max-w-none">
                                        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                            {career.responsibilities}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Benefits */}
                            {career.benefits && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits & Perks</h3>
                                    <div className="prose max-w-none">
                                        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                                            {career.benefits}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Job Stats */}
                            <div className="border-t pt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Position Statistics</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-blue-600">{career.department}</div>
                                        <div className="text-sm text-gray-600">Department</div>
                                    </div>

                                    <div className={`p-4 rounded-lg text-center ${
                                        career.is_active ? 'bg-green-50' : 'bg-red-50'
                                    }`}>
                                        <div className={`text-2xl font-bold ${
                                            career.is_active ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                            {career.is_active ? 'Open' : 'Closed'}
                                        </div>
                                        <div className="text-sm text-gray-600">Application Status</div>
                                    </div>

                                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-purple-600">
                                            {getTypeText(career.type)}
                                        </div>
                                        <div className="text-sm text-gray-600">Employment Type</div>
                                    </div>

                                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-orange-600">
                                            {career.experience_level || 'Any'}
                                        </div>
                                        <div className="text-sm text-gray-600">Experience Level</div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="border-t pt-6 mt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Timeline</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                                    <div>
                                        <span className="font-medium">Position Posted:</span> {formatDate(career.posted_date || career.created_at)}
                                    </div>
                                    <div>
                                        <span className="font-medium">Application Deadline:</span> {formatDate(career.deadline)}
                                    </div>
                                    <div>
                                        <span className="font-medium">Last Updated:</span> {formatDate(career.updated_at)}
                                    </div>
                                </div>
                            </div>

                            {/* Application Actions */}
                            {career.is_active && !isDeadlinePassed(career.deadline) && (
                                <div className="border-t pt-6 mt-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply for This Position</h3>
                                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                                        <p className="text-gray-700 mb-4">
                                            Interested candidates can apply through our career portal or contact our HR department.
                                        </p>
                                        <div className="flex space-x-4">
                                            <Link
                                                href="/careers"
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                View on Website
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Contact HR
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
