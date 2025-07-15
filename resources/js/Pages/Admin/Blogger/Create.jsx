import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        slug: '',
        cover_image: '',
        content: '',
        category: '',
        status: 'draft',
        published_at: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/bloggers');
    };

    const handleTitleChange = (e) => {
        const title = e.target.value;
        setData({
            ...data,
            title,
            slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        });
    };

    return (
        <AdminLayout title="Create Blog Post">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/admin/bloggers"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        ← Back to Blog Posts
                    </Link>
                    <h1 className="mt-2 text-2xl font-semibold text-gray-900">Create New Blog Post</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title *
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={data.title}
                            onChange={handleTitleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                        {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                    </div>

                    <div>
                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                            Slug
                        </label>
                        <input
                            type="text"
                            id="slug"
                            value={data.slug}
                            onChange={(e) => setData('slug', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.slug && <p className="mt-1 text-sm text-red-600">{errors.slug}</p>}
                        <p className="mt-1 text-sm text-gray-500">Leave empty to auto-generate from title</p>
                    </div>

                    <div>
                        <label htmlFor="cover_image" className="block text-sm font-medium text-gray-700">
                            Cover Image URL
                        </label>
                        <input
                            type="url"
                            id="cover_image"
                            value={data.cover_image}
                            onChange={(e) => setData('cover_image', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.cover_image && <p className="mt-1 text-sm text-red-600">{errors.cover_image}</p>}
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            value={data.category}
                            onChange={(e) => setData('category', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                            Content *
                        </label>
                        <textarea
                            id="content"
                            rows={10}
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                        {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content}</p>}
                    </div>

                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                            Status *
                        </label>
                        <select
                            id="status"
                            value={data.status}
                            onChange={(e) => setData('status', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                        {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status}</p>}
                    </div>

                    {data.status === 'published' && (
                        <div>
                            <label htmlFor="published_at" className="block text-sm font-medium text-gray-700">
                                Publish Date
                            </label>
                            <input
                                type="datetime-local"
                                id="published_at"
                                value={data.published_at}
                                onChange={(e) => setData('published_at', e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.published_at && <p className="mt-1 text-sm text-red-600">{errors.published_at}</p>}
                            <p className="mt-1 text-sm text-gray-500">Leave empty to publish immediately</p>
                        </div>
                    )}

                    <div className="flex justify-end space-x-3">
                        <Link
                            href="/admin/bloggers"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                        >
                            {processing ? 'Creating...' : 'Create Blog Post'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
