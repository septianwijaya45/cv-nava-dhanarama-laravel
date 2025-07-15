import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function Index({ bloggers }) {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this blog post?')) {
            // Add delete logic here
        }
    };

    return (
        <AdminLayout title="Blog Management">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Blog Posts</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all blog posts including their title, status, and publication date.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        href="/admin/bloggers/create"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Add Blog Post
                    </Link>
                </div>
            </div>

            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Published At
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {bloggers.data.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                                No blog posts found.
                                            </td>
                                        </tr>
                                    ) : (
                                        bloggers.data.map((blogger) => (
                                            <tr key={blogger.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{blogger.title}</div>
                                                    <div className="text-sm text-gray-500">{blogger.slug}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {blogger.category || '-'}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                        blogger.status === 'published'
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                        {blogger.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {blogger.published_at ? new Date(blogger.published_at).toLocaleDateString() : '-'}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex space-x-2">
                                                        <Link
                                                            href={`/admin/bloggers/${blogger.id}`}
                                                            className="text-blue-600 hover:text-blue-900"
                                                        >
                                                            <EyeIcon className="h-5 w-5" />
                                                        </Link>
                                                        <Link
                                                            href={`/admin/bloggers/${blogger.id}/edit`}
                                                            className="text-indigo-600 hover:text-indigo-900"
                                                        >
                                                            <PencilIcon className="h-5 w-5" />
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(blogger.id)}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            <TrashIcon className="h-5 w-5" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            {bloggers.links && (
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex-1 flex justify-between sm:hidden">
                        {bloggers.prev_page_url && (
                            <Link
                                href={bloggers.prev_page_url}
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                Previous
                            </Link>
                        )}
                        {bloggers.next_page_url && (
                            <Link
                                href={bloggers.next_page_url}
                                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                Next
                            </Link>
                        )}
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">{bloggers.from}</span> to{' '}
                                <span className="font-medium">{bloggers.to}</span> of{' '}
                                <span className="font-medium">{bloggers.total}</span> results
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
