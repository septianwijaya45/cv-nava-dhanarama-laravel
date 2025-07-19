import { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Edit({ career }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        position: career.position || '',
        description: career.description || '',
        qualification: career.qualification || '',
        department: career.department || '',
        type: career.type || 'full-time',
        location: career.location || 'onsite',
        posted_at: career.posted_at || '',
        deadline: career.deadline || '',
        status: career.status !== undefined ? career.status : true,
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
                                            value={data.type}
                                            onChange={(e) => setData('type', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        >
                                            <option value="full-time">Full-time</option>
                                            <option value="part-time">Part-time</option>
                                            <option value="contract">Contract</option>
                                        </select>
                                        {errors.type && <p className="mt-2 text-sm text-red-600">{errors.type}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Location</label>
                                        <select
                                            value={data.location}
                                            onChange={(e) => setData('location', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        >
                                            <option value="onsite">Onsite</option>
                                            <option value="remote">Remote</option>
                                        </select>
                                        {errors.location && <p className="mt-2 text-sm text-red-600">{errors.location}</p>}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Posted Date</label>
                                        <input
                                            type="date"
                                            value={data.posted_at}
                                            onChange={(e) => setData('posted_at', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        />
                                        {errors.posted_at && <p className="mt-2 text-sm text-red-600">{errors.posted_at}</p>}
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
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="status"
                                                type="checkbox"
                                                checked={data.status}
                                                onChange={(e) => setData('status', e.target.checked)}
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="status" className="font-medium text-gray-700">
                                                Active Status
                                            </label>
                                            <p className="text-gray-500">Position is visible on website.</p>
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
                                                Accepting Applications
                                            </label>
                                            <p className="text-gray-500">Position is currently accepting applications.</p>
                                        </div>
                                    </div>
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
