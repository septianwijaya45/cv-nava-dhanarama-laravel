import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function EditBlog({ auth, blog }) {
    const { data, setData, put, processing, errors } = useForm({
        title: blog.title || '',
        content: blog.content || '',
        category: blog.category || '',
        status: blog.status || 'draft',
        cover_image: blog.cover_image || ''
    });

    const [previewImage, setPreviewImage] = useState(blog.cover_image || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.blogs.update', blog.id));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target.result);
                setData('cover_image', e.target.result);
            };
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
                                        <option value="Tutorial">Tutorial</option>
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
