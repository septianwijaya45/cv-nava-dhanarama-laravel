import FrontendLayout from '@/Layouts/FrontendLayout';
import { Link } from '@inertiajs/react';

export default function BlogShow({ blog, relatedBlogs = [] }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const readingTime = (content) => {
        const wordsPerMinute = 200;
        const words = content.split(' ').length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${minutes} min read`;
    };

    return (
        <FrontendLayout title={`${blog.title} - Blog - NAVA DHANARAMA INDONESIA`}>
            {/* Blog Header */}
            <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="mb-6">
                            <Link
                                href={route('blogs.index')}
                                className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                                Back to Blog
                            </Link>
                        </div>

                        {blog.category && (
                            <div className="mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-100 text-brand-700">
                                    {blog.category}
                                </span>
                            </div>
                        )}

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {blog.title}
                        </h1>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                {blog.author || 'NAVA DHANARAMA'}
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                {formatDate(blog.created_at)}
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                {readingTime(blog.content)}
                            </div>
                        </div>

                        {blog.excerpt && (
                            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                                {blog.excerpt}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            {blog.featured_image && (
                <section className="py-8 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={blog.featured_image}
                                alt={blog.title}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Blog Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="prose prose-lg max-w-none">
                                {blog.content.split('\n').map((paragraph, index) => {
                                    if (paragraph.trim() === '') return null;

                                    // Handle different content types
                                    if (paragraph.startsWith('# ')) {
                                        return (
                                            <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                                                {paragraph.substring(2)}
                                            </h2>
                                        );
                                    } else if (paragraph.startsWith('## ')) {
                                        return (
                                            <h3 key={index} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                                                {paragraph.substring(3)}
                                            </h3>
                                        );
                                    } else if (paragraph.startsWith('### ')) {
                                        return (
                                            <h4 key={index} className="text-xl font-medium text-gray-900 mt-6 mb-3">
                                                {paragraph.substring(4)}
                                            </h4>
                                        );
                                    } else if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                                        return (
                                            <ul key={index} className="list-disc list-inside mb-4">
                                                <li className="text-gray-700">{paragraph.substring(2)}</li>
                                            </ul>
                                        );
                                    } else if (paragraph.includes('```')) {
                                        return (
                                            <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
                                                <code className="text-sm">{paragraph.replace(/```/g, '')}</code>
                                            </pre>
                                        );
                                    } else {
                                        return (
                                            <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                                                {paragraph}
                                            </p>
                                        );
                                    }
                                })}
                            </div>

                            {/* Tags */}
                            {blog.tags && (
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.split(',').map((tag, index) => (
                                            <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition duration-200">
                                                #{tag.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Share */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                                        title="Share on LinkedIn"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition duration-200"
                                        title="Share on Twitter"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition duration-200"
                                        title="Share on Facebook"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                    <button
                                        onClick={() => navigator.clipboard.writeText(window.location.href)}
                                        className="flex items-center justify-center w-10 h-10 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-200"
                                        title="Copy link"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Author Info */}
                            <div className="bg-gray-50 rounded-xl p-6 mb-8 sticky top-6">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                                        {(blog.author || 'NAVA DHANARAMA').charAt(0)}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {blog.author || 'NAVA DHANARAMA'}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Technology enthusiast and developer passionate about creating innovative solutions.
                                    </p>
                                    <Link
                                        href={route('contact')}
                                        className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium text-sm"
                                    >
                                        Contact Author
                                    </Link>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            {relatedBlogs.length > 0 && (
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                                    <div className="space-y-4">
                                        {relatedBlogs.slice(0, 3).map((relatedBlog) => (
                                            <Link
                                                key={relatedBlog.id}
                                                href={route('blog.show', relatedBlog.slug)}
                                                className="block group"
                                            >
                                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-brand-600 transition duration-200 line-clamp-2 mb-1">
                                                    {relatedBlog.title}
                                                </h4>
                                                <p className="text-xs text-gray-500">
                                                    {formatDate(relatedBlog.created_at)}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                    <Link
                                        href={route('blogs.index')}
                                        className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium text-sm mt-4"
                                    >
                                        View All Articles
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                You Might Also Like
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedBlogs.slice(0, 3).map((relatedBlog) => (
                                <Link
                                    key={relatedBlog.id}
                                    href={route('blog.show', relatedBlog.slug)}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden group"
                                >
                                    {relatedBlog.featured_image && (
                                        <div className="aspect-w-16 aspect-h-9">
                                            <img
                                                src={relatedBlog.featured_image}
                                                alt={relatedBlog.title}
                                                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6">
                                        {relatedBlog.category && (
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-brand-100 text-brand-700 mb-3">
                                                {relatedBlog.category}
                                            </span>
                                        )}

                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition duration-200 line-clamp-2">
                                            {relatedBlog.title}
                                        </h3>

                                        {relatedBlog.excerpt && (
                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {relatedBlog.excerpt}
                                            </p>
                                        )}

                                        <div className="flex items-center text-sm text-gray-500">
                                            <span>{relatedBlog.author || 'NAVA DHANARAMA'}</span>
                                            <span className="mx-2">•</span>
                                            <span>{formatDate(relatedBlog.created_at)}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Newsletter CTA */}
            <section className="py-16 bg-brand-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-lg text-brand-100 mb-8">
                        Get the latest articles and insights delivered to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={route('blogs.index')}
                            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-brand-600 bg-white hover:bg-gray-50 transition duration-200"
                        >
                            Read More Articles
                        </Link>
                        <Link
                            href={route('contact')}
                            className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-brand-700 transition duration-200"
                        >
                            Subscribe to Newsletter
                        </Link>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
