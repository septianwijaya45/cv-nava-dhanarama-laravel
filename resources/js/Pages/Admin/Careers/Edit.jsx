import { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Edit({ career }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        title: career.title || '',
        description: career.description || '',
        requirements: career.requirements || '',
        responsibilities: career.responsibilities || '',
        benefits: career.benefits || '',
        department: career.department || '',
        type: career.type || 'full-time',
        location: career.location || '',
        salary: career.salary || '',
        experience_level: career.experience_level || '',
        posted_date: career.posted_date || '',
        deadline: career.deadline || '',
        is_active: career.is_active !== undefined ? career.is_active : true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.careers.update', career.id));
    };

    return (
        <AdminLayout title="Edit Career Position">
            <Head title="Edit Career Position" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-semibold text-gray-900">Edit Career Position</h1>
                                <Link
                                    href={route('admin.careers.index')}
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Back to Careers
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                            Job Title *
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
                                        <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                                            Department *
                                        </label>
                                        <select
                                            id="department"
                                            value={data.department}
                                            onChange={(e) => setData('department', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                        >
                                            <option value="">Select Department</option>
                                            <option value="Engineering">Engineering</option>
                                            <option value="Design">Design</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Sales">Sales</option>
                                            <option value="HR">HR</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Operations">Operations</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.department && <p className="mt-2 text-sm text-red-600">{errors.department}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                        Job Description *
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
                                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
                                        Requirements
                                    </label>
                                    <textarea
                                        id="requirements"
                                        rows={4}
                                        value={data.requirements}
                                        onChange={(e) => setData('requirements', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="List the required qualifications, skills, and experience..."
                                    />
                                    {errors.requirements && <p className="mt-2 text-sm text-red-600">{errors.requirements}</p>}
                                </div>

                                <div>
                                    <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700">
                                        Responsibilities
                                    </label>
                                    <textarea
                                        id="responsibilities"
                                        rows={4}
                                        value={data.responsibilities}
                                        onChange={(e) => setData('responsibilities', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Describe the main responsibilities and duties..."
                                    />
                                    {errors.responsibilities && <p className="mt-2 text-sm text-red-600">{errors.responsibilities}</p>}
                                </div>

                                <div>
                                    <label htmlFor="benefits" className="block text-sm font-medium text-gray-700">
                                        Benefits & Perks
                                    </label>
                                    <textarea
                                        id="benefits"
                                        rows={3}
                                        value={data.benefits}
                                        onChange={(e) => setData('benefits', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="List benefits, perks, and compensation details..."
                                    />
                                    {errors.benefits && <p className="mt-2 text-sm text-red-600">{errors.benefits}</p>}
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                                            Employment Type *
                                        </label>
                                        <select
                                            id="type"
                                            value={data.type}
                                            onChange={(e) => setData('type', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                        >
                                            <option value="full-time">Full-time</option>
                                            <option value="part-time">Part-time</option>
                                            <option value="contract">Contract</option>
                                            <option value="remote">Remote</option>
                                        </select>
                                        {errors.type && <p className="mt-2 text-sm text-red-600">{errors.type}</p>}
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
                                            placeholder="City, Country or Remote"
                                        />
                                        {errors.location && <p className="mt-2 text-sm text-red-600">{errors.location}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                                            Salary Range
                                        </label>
                                        <input
                                            type="text"
                                            id="salary"
                                            value={data.salary}
                                            onChange={(e) => setData('salary', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="e.g., $50,000 - $70,000 per year"
                                        />
                                        {errors.salary && <p className="mt-2 text-sm text-red-600">{errors.salary}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="experience_level" className="block text-sm font-medium text-gray-700">
                                            Experience Level
                                        </label>
                                        <select
                                            id="experience_level"
                                            value={data.experience_level}
                                            onChange={(e) => setData('experience_level', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option value="">Select Experience Level</option>
                                            <option value="Entry Level">Entry Level</option>
                                            <option value="Junior">Junior (1-2 years)</option>
                                            <option value="Mid Level">Mid Level (3-5 years)</option>
                                            <option value="Senior">Senior (5+ years)</option>
                                            <option value="Lead">Lead (7+ years)</option>
                                            <option value="Manager">Manager</option>
                                            <option value="Director">Director</option>
                                        </select>
                                        {errors.experience_level && <p className="mt-2 text-sm text-red-600">{errors.experience_level}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="posted_date" className="block text-sm font-medium text-gray-700">
                                            Posted Date
                                        </label>
                                        <input
                                            type="date"
                                            id="posted_date"
                                            value={data.posted_date}
                                            onChange={(e) => setData('posted_date', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                        {errors.posted_date && <p className="mt-2 text-sm text-red-600">{errors.posted_date}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                                            Application Deadline
                                        </label>
                                        <input
                                            type="date"
                                            id="deadline"
                                            value={data.deadline}
                                            onChange={(e) => setData('deadline', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                        {errors.deadline && <p className="mt-2 text-sm text-red-600">{errors.deadline}</p>}
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="is_active"
                                            type="checkbox"
                                            checked={data.is_active}
                                            onChange={(e) => setData('is_active', e.target.checked)}
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="is_active" className="font-medium text-gray-700">
                                            Active Position
                                        </label>
                                        <p className="text-gray-500">Position is currently accepting applications.</p>
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-3">
                                    <Link
                                        href={route('admin.careers.index')}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                    >
                                        {processing ? 'Updating...' : 'Update Position'}
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
