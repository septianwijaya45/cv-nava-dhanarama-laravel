import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';

export default function CreateCareer({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        position: '',
        description: '',
        qualification: '',
        department: '',
        type: 'full-time',
        location: 'onsite',
        posted_at: '',
        deadline: '',
        status: true,
        is_active: true
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.careers.store'));
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Post New Job
                </h2>
            }
        >
            <Head title="Post New Job" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Position</label>
                                    <input
                                        type="text"
                                        value={data.position}
                                        onChange={(e) => setData('position', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        required
                                    />
                                    {errors.position && <p className="mt-2 text-sm text-red-600">{errors.position}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Department</label>
                                        <select
                                            value={data.department}
                                            onChange={(e) => setData('department', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        >
                                            <option value="">Select Department</option>
                                            <option value="Development">Development</option>
                                            <option value="Design">Design</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Sales">Sales</option>
                                            <option value="Operations">Operations</option>
                                        </select>
                                        {errors.department && <p className="mt-2 text-sm text-red-600">{errors.department}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Employment Type</label>
                                        <select
                                            value={data.employment_type}
                                            onChange={(e) => setData('employment_type', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        >
                                            <option value="Full-time">Full-time</option>
                                            <option value="Part-time">Part-time</option>
                                            <option value="Contract">Contract</option>
                                            <option value="Freelance">Freelance</option>
                                            <option value="Internship">Internship</option>
                                        </select>
                                        {errors.employment_type && <p className="mt-2 text-sm text-red-600">{errors.employment_type}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Experience Level</label>
                                        <select
                                            value={data.experience_level}
                                            onChange={(e) => setData('experience_level', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        >
                                            <option value="">Select Level</option>
                                            <option value="Entry Level">Entry Level</option>
                                            <option value="Mid Level">Mid Level</option>
                                            <option value="Senior Level">Senior Level</option>
                                            <option value="Lead/Manager">Lead/Manager</option>
                                        </select>
                                        {errors.experience_level && <p className="mt-2 text-sm text-red-600">{errors.experience_level}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Location</label>
                                        <input
                                            type="text"
                                            value={data.location}
                                            onChange={(e) => setData('location', e.target.value)}
                                            placeholder="e.g. Jakarta, Indonesia or Remote"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        />
                                        {errors.location && <p className="mt-2 text-sm text-red-600">{errors.location}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Salary Range</label>
                                        <input
                                            type="text"
                                            value={data.salary_range}
                                            onChange={(e) => setData('salary_range', e.target.value)}
                                            placeholder="e.g. $50,000 - $70,000"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        />
                                        {errors.salary_range && <p className="mt-2 text-sm text-red-600">{errors.salary_range}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Application Deadline</label>
                                    <input
                                        type="date"
                                        value={data.deadline}
                                        onChange={(e) => setData('deadline', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                    />
                                    {errors.deadline && <p className="mt-2 text-sm text-red-600">{errors.deadline}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Job Description</label>
                                    <textarea
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        required
                                    />
                                    {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Key qualification</label>
                                    <textarea
                                        value={data.qualification}
                                        onChange={(e) => setData('qualification', e.target.value)}
                                        rows={4}
                                        placeholder="• Responsibility 1&#10;• Responsibility 2&#10;• Responsibility 3"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                    />
                                    {errors.qualification && <p className="mt-2 text-sm text-red-600">{errors.qualification}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Requirements</label>
                                    <textarea
                                        value={data.requirements}
                                        onChange={(e) => setData('requirements', e.target.value)}
                                        rows={4}
                                        placeholder="• Requirement 1&#10;• Requirement 2&#10;• Requirement 3"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                    />
                                    {errors.requirements && <p className="mt-2 text-sm text-red-600">{errors.requirements}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Skills Required</label>
                                    <input
                                        type="text"
                                        value={data.skills_required}
                                        onChange={(e) => setData('skills_required', e.target.value)}
                                        placeholder="Laravel, React, MySQL, JavaScript"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                    />
                                    {errors.skills_required && <p className="mt-2 text-sm text-red-600">{errors.skills_required}</p>}
                                </div>

                                <div>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={data.is_active}
                                            onChange={(e) => setData('is_active', e.target.checked)}
                                            className="rounded border-gray-300 text-brand-600 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">Publish this job immediately</span>
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
                                        {processing ? 'Posting...' : 'Post Job'}
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
