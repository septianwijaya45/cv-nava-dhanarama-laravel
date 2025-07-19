import FrontendLayout from '@/Layouts/FrontendLayout';
import { Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function BlogsIndex({ blogs, categories, filters }) {
    const [search, setSearch] = useState(filters.search || '');
    const [category, setCategory] = useState(filters.category || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('blogs.index'), { search, category }, { preserveState: true });
    };

    const handleCategoryFilter = (selectedCategory) => {
        setCategory(selectedCategory);
        router.get(route('blogs.index'), { search, category: selectedCategory }, { preserveState: true });
    };

    return (
        <FrontendLayout
            title="Blog & Articles - NAVA DHANARAMA INDONESIA"
            metaDescription="Blog sistem informasi, otomasi bisnis, website development, dan mobile app development Nava Dhanarama Indonesia."
            >
            {/* Header */}
            <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Blog & Articles
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Insights, tutorials, and thoughts on web development, technology trends,
                            and digital solutions from my experience in the field.
                        </p>

                        {/* Search Form */}
                        <form onSubmit={handleSearch} className="max-w-md mx-auto">
                            <div className="flex">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search articles..."
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-brand-500 focus:border-brand-500"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-brand-600 text-white rounded-r-lg hover:bg-brand-700 transition duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    {categories.length > 0 && (
                        <div className="mb-12">
                            <div className="flex flex-wrap justify-center gap-4">
                                <button
                                    onClick={() => handleCategoryFilter('')}
                                    className={`px-6 py-2 rounded-full font-medium transition duration-200 ${
                                        category === ''
                                            ? 'bg-brand-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    All Articles
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategoryFilter(cat)}
                                        className={`px-6 py-2 rounded-full font-medium transition duration-200 ${
                                            category === cat
                                                ? 'bg-brand-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Blog Grid */}
                    {blogs.data.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.data.map((blog) => (
                                <article key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                                    {/* Featured Image */}
                                    {blog.cover_image ? (
                                        <img
                                            src={`/storage/${blog.cover_image}`}
                                            alt={blog.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-48 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                            </svg>
                                        </div>
                                    )}

                                    {/* Article Content */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm text-brand-600 font-medium bg-brand-50 px-3 py-1 rounded-full">
                                                {blog.category}
                                            </span>
                                            <time className="text-sm text-gray-500">
                                                {new Date(blog.published_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </time>
                                        </div>

                                        <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-brand-600 transition duration-200">
                                            <Link href={route('blogs.show', blog.slug)}>
                                                {blog.title}
                                            </Link>
                                        </h2>

                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {blog.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                                        </p>

                                        {/* Read More & Stats */}
                                        <div className="flex items-center justify-between">
                                            <Link
                                                href={route('blogs.show', blog.slug)}
                                                className="text-brand-600 hover:text-brand-700 font-medium"
                                            >
                                                Read More →
                                            </Link>

                                            {blog.analytics && blog.analytics.length > 0 && (
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                    </svg>
                                                    {blog.analytics.length} views
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                            <p className="text-gray-600">
                                {search || category ? 'Try adjusting your search or filter criteria.' : 'No articles have been published yet.'}
                            </p>
                        </div>
                    )}

                    {/* Pagination */}
                    {blogs.links && blogs.links.length > 3 && (
                        <div className="mt-12 flex justify-center">
                            <nav className="flex space-x-2">
                                {blogs.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url || '#'}
                                        className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                                            link.active
                                                ? 'bg-brand-600 text-white'
                                                : link.url
                                                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                    : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                                        }`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-brand-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-lg text-brand-100 mb-8">
                        Get the latest articles and insights delivered to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
                        />
                        <button className="px-6 py-3 bg-white text-brand-600 rounded-lg hover:bg-gray-50 transition duration-200 font-medium">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
