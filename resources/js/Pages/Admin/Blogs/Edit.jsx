import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function EditBlog({ auth, blog }) {
    const formatDateTimeLocal = (dateTime) => {
        if (!dateTime) return '';
        const dt = new Date(dateTime);
        const offset = dt.getTimezoneOffset() * 60000; // Handle timezone
        return new Date(dt - offset).toISOString().slice(0, 16);
    };

    const { data, setData, put, post, processing, errors } = useForm({
        title: blog.title || '',
        content: blog.content || '',
        category: blog.category || '',
        status: blog.status || 'draft',
        cover_image: null,
        published_at: formatDateTimeLocal(blog.published_at) || '',
        meta_title: blog.meta_title || '',
        meta_description: blog.meta_description || ''
    });


    const [previewImage, setPreviewImage] = useState(
        blog.cover_image ? `/storage/${blog.cover_image}` : ''
    );


const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('category', data.category);
    formData.append('status', data.status);
    formData.append('published_at', data.published_at || '');
    formData.append('meta_title', data.meta_title || '');
    formData.append('meta_description', data.meta_description || '');
    formData.append('_method', 'PUT');

    if (data.cover_image) {
        formData.append('cover_image', data.cover_image);
    }

    router.post(route('admin.blogs.update', blog.id), formData, {
        forceFormData: true,
        preserveScroll: true,
        onError: (errors) => {
            console.log('Validation Errors:', errors);
        },
    });
};

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('cover_image', file);
            const reader = new FileReader();
            reader.onload = (e) => setPreviewImage(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Blog Post
                </h2>
            }
        >
            <Head title="Edit Blog" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        required
                                    />
                                    {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Category</label>
                                    <select
                                        value={data.category}
                                        onChange={(e) => setData('category', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Mobile Development">Mobile Development</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Tutorial">Tutorial</option><option value="Edukasi">Edukasi</option>
                                        <option value="Insight Bisnis">Insight Bisnis</option>
                                        <option value="Panduan">Panduan</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                    {errors.category && <p className="mt-2 text-sm text-red-600">{errors.category}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Cover Image</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100"
                                    />
                                    {previewImage && (
                                        <img src={previewImage} alt="Preview" className="mt-2 h-32 w-auto rounded-lg" />
                                    )}
                                    {errors.cover_image && <p className="mt-2 text-sm text-red-600">{errors.cover_image}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Content</label>
                                    <textarea
                                        value={data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                        rows={10}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        required
                                    />
                                    {errors.content && <p className="mt-2 text-sm text-red-600">{errors.content}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Status</label>
                                    <select
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                    </select>
                                    {errors.status && <p className="mt-2 text-sm text-red-600">{errors.status}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Published At</label>
                                    <input
                                        type="datetime-local"
                                        value={data.published_at}
                                        onChange={(e) => setData('published_at', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                    />
                                    {errors.published_at && (
                                        <p className="mt-2 text-sm text-red-600">{errors.published_at}</p>
                                    )}
                                </div>

                                {/* SEO Meta Fields */}
                                <div className="border-t pt-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">SEO Settings</h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Meta Title
                                                <span className="text-gray-500 text-xs">(Max 60 characters for SEO)</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={data.meta_title}
                                                onChange={(e) => setData('meta_title', e.target.value)}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                                placeholder="If empty, will use the blog title"
                                                maxLength="60"
                                            />
                                            <div className="mt-1 text-xs text-gray-500">
                                                {data.meta_title.length}/60 characters
                                            </div>
                                            {errors.meta_title && <p className="mt-2 text-sm text-red-600">{errors.meta_title}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Meta Description
                                                <span className="text-gray-500 text-xs">(Max 160 characters for SEO)</span>
                                            </label>
                                            <textarea
                                                value={data.meta_description}
                                                onChange={(e) => setData('meta_description', e.target.value)}
                                                rows={3}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                                placeholder="Write a compelling description for search engines"
                                                maxLength="160"
                                            />
                                            <div className="mt-1 text-xs text-gray-500">
                                                {data.meta_description.length}/160 characters
                                            </div>
                                            {errors.meta_description && <p className="mt-2 text-sm text-red-600">{errors.meta_description}</p>}
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
                                        {processing ? 'Updating...' : 'Update Blog'}
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
