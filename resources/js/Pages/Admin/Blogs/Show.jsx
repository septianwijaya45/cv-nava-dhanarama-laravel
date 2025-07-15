import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { CalendarIcon, TagIcon, UserIcon, EyeIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Show({ blog }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <AdminLayout title={`Blog: ${blog.title}`}>
            <Head title={`Blog: ${blog.title}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>
                                <div className="flex space-x-3">
                                    <Link
                                        href={route('admin.blogs.edit', blog.id)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={route('admin.blogs.index')}
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Back to Blogs
                                    </Link>
                                </div>
                            </div>

                            {/* Blog Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-4">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <UserIcon className="h-5 w-5 mr-2" />
                                        <span>By {blog.author}</span>
                                    </div>

                                    <div className="flex items-center text-sm text-gray-600">
                                        <CalendarIcon className="h-5 w-5 mr-2" />
                                        <span>Published on {formatDate(blog.created_at)}</span>
                                    </div>

                                    <div className="flex items-center text-sm text-gray-600">
                                        <TagIcon className="h-5 w-5 mr-2" />
                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{blog.category}</span>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <span className={`px-2 py-1 rounded text-sm font-medium ${
                                            blog.is_published
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {blog.is_published ? 'Published' : 'Draft'}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {blog.featured_image && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Featured Image
                                            </label>
                                            <img
                                                src={blog.featured_image}
                                                alt={blog.title}
                                                className="w-full h-48 object-cover rounded-lg border border-gray-300"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Blog Content */}
                            <div className="space-y-6">
                                {blog.excerpt && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Excerpt</h3>
                                        <p className="text-gray-700 italic bg-gray-50 p-4 rounded-lg">{blog.excerpt}</p>
                                    </div>
                                )}

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Content</h3>
                                    <div className="prose max-w-none">
                                        <div
                                            className="text-gray-700 leading-relaxed whitespace-pre-wrap"
                                            dangerouslySetInnerHTML={{ __html: blog.content }}
                                        />
                                    </div>
                                </div>

                                {blog.tags && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Tags</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {blog.tags.split(',').map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {tag.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* SEO Information */}
                                {(blog.meta_title || blog.meta_description) && (
                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Information</h3>
                                        <div className="space-y-4">
                                            {blog.meta_title && (
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Meta Title
                                                    </label>
                                                    <p className="text-gray-700 bg-gray-50 p-3 rounded">{blog.meta_title}</p>
                                                </div>
                                            )}
                                            {blog.meta_description && (
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Meta Description
                                                    </label>
                                                    <p className="text-gray-700 bg-gray-50 p-3 rounded">{blog.meta_description}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Blog Stats */}
                                <div className="border-t pt-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Blog Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                                        <div>
                                            <span className="font-medium">Slug:</span> {blog.slug}
                                        </div>
                                        <div>
                                            <span className="font-medium">Created:</span> {formatDate(blog.created_at)}
                                        </div>
                                        <div>
                                            <span className="font-medium">Updated:</span> {formatDate(blog.updated_at)}
                                        </div>
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
