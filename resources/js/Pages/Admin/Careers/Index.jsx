import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import useCustomModals from '@/hooks/useCustomModals.jsx';
import CustomModal from '@/Components/Modal/CustomModal.jsx';

export default function CareerIndex({ auth, careers, filters }) {
    const [search, setSearch] = useState(filters.search || '');
    const [department, setDepartment] = useState(filters.department || '');
    const { customConfirm, modalState, setModalState } = useCustomModals();

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('admin.careers.index'), { search, department });
    };

    const handleDelete = async (id, title) => {
        const confirmed = await customConfirm(
            `Are you sure you want to delete job posting "${title}"?`,
            'This action cannot be undone.',
            'Delete Job Posting'
        );

        if (confirmed) {
            router.delete(route('admin.careers.destroy', id));
        }
    };

    const toggleStatus = (id, currentStatus) => {
        router.patch(route('admin.careers.update', id), {
            is_active: !currentStatus
        });
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Career Management
                    </h2>
                    <Link
                        href={route('admin.careers.create')}
                        className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Post New Job
                    </Link>
                </div>
            }
        >
            <Head title="Career Management" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6">
                            <form onSubmit={handleSearch} className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Search jobs..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                />
                                <select
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    className="rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                >
                                    <option value="">All Departments</option>
                                    <option value="Development">Development</option>
                                    <option value="Design">Design</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Sales">Sales</option>
                                </select>
                                <button
                                    type="submit"
                                    className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-md"
                                >
                                    Filter
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {careers.data.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-gray-500">No job postings found.</p>
                                    <Link
                                        href={route('admin.careers.create')}
                                        className="mt-4 inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Post Your First Job
                                    </Link>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Position
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Department
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Type
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Applications
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Deadline
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {careers.data.map((career) => (
                                                <tr key={career.id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {career.position}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                {career.location}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {career.department}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                                            {career.type}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                                                            {career.applications_count || 0} applications
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {career.deadline ? new Date(career.deadline).toLocaleDateString() : 'No deadline'}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <button
                                                            onClick={() => toggleStatus(career.id, career.is_active)}
                                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                                career.is_active
                                                                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                                                    : 'bg-red-100 text-red-800 hover:bg-red-200'
                                                            }`}
                                                        >
                                                            {career.is_active ? 'Active' : 'Inactive'}
                                                        </button>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                        <Link
                                                            href={route('admin.careers.show', career.id)}
                                                            className="text-brand-600 hover:text-brand-900"
                                                        >
                                                            View
                                                        </Link>
                                                        <Link
                                                            href={route('admin.careers.edit', career.id)}
                                                            className="text-indigo-600 hover:text-indigo-900"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(career.id, career.title)}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <CustomModal
                modalState={modalState}
                setModalState={setModalState}
            />
        </AdminLayout>
    );
}
