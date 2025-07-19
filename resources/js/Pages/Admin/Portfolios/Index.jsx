import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import useCustomModals from '@/hooks/useCustomModals.jsx';
import CustomModal from '@/Components/Modal/CustomModal.jsx';

export default function PortfolioIndex({ auth, portfolios, filters }) {
    const [search, setSearch] = useState(filters.search || '');
    const [category, setCategory] = useState(filters.category || '');
        const { customConfirm, ConfirmComponent } = useCustomModals();

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('admin.portfolios.index'), { search, category });
    };

    const handleDelete = async (id, title) => {
        const confirmed = await customConfirm({
            title: 'Delete Portfolio',
            message: `Are you sure you want to delete "${title}"? This action cannot be undone.`,
            confirmText: 'Delete',
            cancelText: 'Cancel',
            type: 'danger'
        });

        if (confirmed) {
            router.delete(route('admin.portfolios.destroy', id));
        }
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Portfolio Management
                    </h2>
                    <Link
                        href={route('admin.portfolios.create')}
                        className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add Portfolio
                    </Link>
                </div>
            }
        >
            <Head title="Portfolio Management" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6">
                            <form onSubmit={handleSearch} className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Search portfolios..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                />
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                                >
                                    <option value="">All Categories</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Mobile App">Mobile App</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
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
                            {portfolios.data.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-gray-500">No portfolios found.</p>
                                    <Link
                                        href={route('admin.portfolios.create')}
                                        className="mt-4 inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Add Your First Portfolio
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {portfolios.data.map((portfolio) => (
                                        <div key={portfolio.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                            {portfolio.image && (
                                                <img
                                                    src={portfolio.image}
                                                    alt={portfolio.title}
                                                    className="w-full h-48 object-cover"
                                                />
                                            )}
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                    {portfolio.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-2">{portfolio.category}</p>
                                                <p className="text-sm text-gray-700 mb-4">
                                                    {portfolio.description?.substring(0, 100)}...
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                                        portfolio.featured
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : 'bg-gray-100 text-gray-800'
                                                    }`}>
                                                        {portfolio.featured ? 'Featured' : 'Regular'}
                                                    </span>
                                                    <div className="space-x-2">
                                                        <Link
                                                            href={route('admin.portfolios.edit', portfolio.id)}
                                                            className="text-indigo-600 hover:text-indigo-900 text-sm"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(portfolio.id, portfolio.title)}
                                                            className="text-red-600 hover:text-red-900 text-sm"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <ConfirmComponent />
        </AdminLayout>
    );
}
