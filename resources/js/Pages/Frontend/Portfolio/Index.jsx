import FrontendLayout from '@/Layouts/FrontendLayout';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';

export default function PortfolioIndex({ portfolios, categories }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const { t } = useLanguage();

    const filteredPortfolios = selectedCategory
        ? portfolios.data.filter(portfolio => portfolio.category === selectedCategory)
        : portfolios.data;

    return (
        <FrontendLayout
            title="Portfolio - NAVA DHANARAMA INDONESIA"
            metaDescription='Temukan portofolio proyek kami yang mencakup berbagai industri dan teknologi. Lihat bagaimana kami membantu klien mencapai tujuan mereka dengan solusi digital inovatif.'
            >
            {/* Header */}
            <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t('portfolio.title')}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('portfolio.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    {categories.length > 0 && (
                        <div className="mb-12">
                            <div className="flex flex-wrap justify-center gap-4">
                                <button
                                    onClick={() => setSelectedCategory('')}
                                    className={`px-6 py-2 rounded-full font-medium transition duration-200 ${
                                        selectedCategory === ''
                                            ? 'bg-brand-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    All Projects
                                </button>
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-6 py-2 rounded-full font-medium transition duration-200 ${
                                            selectedCategory === category
                                                ? 'bg-brand-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Projects Grid */}
                    {filteredPortfolios.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPortfolios.map((portfolio) => (
                                <div key={portfolio.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                                    {/* Project Image */}
                                    <div className="relative overflow-hidden">
                                        {portfolio.image ? (
                                            <img
                                                src={`/storage/${portfolio.image}`}
                                                alt={portfolio.title}
                                                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-64 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                                                <svg className="w-16 h-16 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14-7l-7 7 7 7M5 4v16"></path>
                                                </svg>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-brand-600 font-medium bg-brand-50 px-3 py-1 rounded-full">
                                                {portfolio.category}
                                            </span>
                                            {portfolio.status === 'completed' && (
                                                <span className="text-sm text-green-600 font-medium">Completed</span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition duration-200">
                                            {portfolio.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {portfolio.description}
                                        </p>

                                        {/* Technologies */}
                                        {portfolio.technologies && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {portfolio.technologies.split(',').slice(0, 3).map((tech, index) => (
                                                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <Link
                                                href={route('portfolio.show', portfolio.id)}
                                                className="flex-1 bg-brand-600 text-white text-center py-2 px-4 rounded-lg hover:bg-brand-700 transition duration-200 font-medium"
                                            >
                                                View Details
                                            </Link>
                                            {portfolio.demo_url && (
                                                <a
                                                    href={portfolio.demo_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 border border-brand-600 text-brand-600 rounded-lg hover:bg-brand-50 transition duration-200 font-medium"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14-7l-7 7 7 7M5 4v16"></path>
                            </svg>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
                            <p className="text-gray-600">
                                {selectedCategory ? `No projects in "${selectedCategory}" category.` : 'No projects available at the moment.'}
                            </p>
                        </div>
                    )}

                    {/* Pagination */}
                    {portfolios.links && portfolios.links.length > 3 && (
                        <div className="mt-12 flex justify-center">
                            <nav className="flex space-x-2">
                                {portfolios.links.map((link, index) => (
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

            {/* CTA Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Have a Project in Mind?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Let's discuss how I can help bring your vision to life with innovative solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={route('contact')}
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition duration-200"
                        >
                            Start a Project
                        </Link>
                        <Link
                            href={route('blogs.index')}
                            className="inline-flex items-center px-6 py-3 border border-brand-300 text-base font-medium rounded-lg text-brand-700 bg-brand-50 hover:bg-brand-100 transition duration-200"
                        >
                            Read My Blog
                        </Link>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
