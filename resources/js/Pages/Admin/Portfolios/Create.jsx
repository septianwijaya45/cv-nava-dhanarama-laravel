import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function CreatePortfolio({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        category: '',
        client: '',
        demo_url: '',
        github_url: '',
        technologies: '',
        image: null,
        featured: false,
        status: 'planning',
        duration: '',
        team_size: 1
    });

    const [previewImage, setPreviewImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.portfolios.store'), {
            forceFormData: true,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
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
                    Add New Portfolio
                </h2>
            }
        >
            <Head title="Add Portfolio" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Mobile Development">Mobile Development</option>
                                            <option value="Desktop Application">Desktop Application</option>
                                            <option value="E-commerce">E-commerce</option>
                                            <option value="CMS">CMS</option>
                                            <option value="API Development">API Development</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.category && <p className="mt-2 text-sm text-red-600">{errors.category}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        required
                                    />
                                    {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Client</label>
                                        <input
                                            type="text"
                                            value={data.client}
                                            onChange={(e) => setData('client', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        />
                                        {errors.client && <p className="mt-2 text-sm text-red-600">{errors.client}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Duration</label>
                                        <input
                                            type="text"
                                            value={data.duration}
                                            onChange={(e) => setData('duration', e.target.value)}
                                            placeholder="e.g., 3 months"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        />
                                        {errors.duration && <p className="mt-2 text-sm text-red-600">{errors.duration}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Team Size</label>
                                        <input
                                            type="number"
                                            value={data.team_size}
                                            onChange={(e) => setData('team_size', parseInt(e.target.value))}
                                            min="1"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                        />
                                        {errors.team_size && <p className="mt-2 text-sm text-red-600">{errors.team_size}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Technologies</label>
                                    <input
                                        type="text"
                                        value={data.technologies}
                                        onChange={(e) => setData('technologies', e.target.value)}
                                        placeholder="Laravel, React, MySQL"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                    />
                                    {errors.technologies && <p className="mt-2 text-sm text-red-600">{errors.technologies}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Demo URL</label>
                                        <input
                                            type="url"
                                            value={data.demo_url}
                                            onChange={(e) => setData('demo_url', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                            placeholder="https://demo.example.com"
                                        />
                                        {errors.demo_url && <p className="mt-2 text-sm text-red-600">{errors.demo_url}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">GitHub URL</label>
                                        <input
                                            type="url"
                                            value={data.github_url}
                                            onChange={(e) => setData('github_url', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                            placeholder="https://github.com/username/repo"
                                        />
                                        {errors.github_url && <p className="mt-2 text-sm text-red-600">{errors.github_url}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Project Image</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100"
                                    />
                                    {previewImage && (
                                        <img src={previewImage} alt="Preview" className="mt-2 h-32 w-auto rounded-lg" />
                                    )}
                                    {errors.image && <p className="mt-2 text-sm text-red-600">{errors.image}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Status</label>
                                        <select
                                            value={data.status}
                                            onChange={(e) => setData('status', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                            required
                                        >
                                            <option value="planning">Planning</option>
                                            <option value="in_progress">In Progress</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                        {errors.status && <p className="mt-2 text-sm text-red-600">{errors.status}</p>}
                                    </div>

                                    <div>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={data.featured}
                                                onChange={(e) => setData('featured', e.target.checked)}
                                                className="rounded border-gray-300 text-brand-600 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">Featured Project</span>
                                        </label>
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
                                        {processing ? 'Adding...' : 'Add Portfolio'}
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
