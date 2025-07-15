import FrontendLayout from '@/Layouts/FrontendLayout';
import { Link } from '@inertiajs/react';

export default function PortfolioShow({ portfolio, relatedPortfolios }) {
    return (
        <FrontendLayout title={`${portfolio.title} - Portfolio - NAVA DHANARAMA INDONESIA`}>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-4">
                                <Link
                                    href={route('portfolio.index')}
                                    className="text-brand-600 hover:text-brand-700 font-medium"
                                >
                                    ← Back to Portfolio
                                </Link>
                            </div>

                            <span className="text-brand-600 font-medium bg-brand-50 px-3 py-1 rounded-full text-sm">
                                {portfolio.category}
                            </span>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                                {portfolio.title}
                            </h1>

                            <p className="text-xl text-gray-600 mb-8">
                                {portfolio.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                {portfolio.demo_url && (
                                    <a
                                        href={portfolio.demo_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                        View Live Demo
                                    </a>
                                )}
                                {portfolio.github_url && (
                                    <a
                                        href={portfolio.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 border border-brand-300 text-base font-medium rounded-lg text-brand-700 bg-brand-50 hover:bg-brand-100 transition duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        View Code
                                    </a>
                                )}
                            </div>
                        </div>

                        <div>
                            {portfolio.image ? (
                                <img
                                    src={portfolio.image}
                                    alt={portfolio.title}
                                    className="w-full rounded-xl shadow-2xl"
                                />
                            ) : (
                                <div className="w-full h-96 bg-gradient-to-br from-brand-100 to-brand-200 rounded-xl flex items-center justify-center">
                                    <svg className="w-24 h-24 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14-7l-7 7 7 7M5 4v16"></path>
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Project Info */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>

                            <div className="prose prose-lg max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: portfolio.content || portfolio.description }} />
                            </div>

                            {/* Features */}
                            {portfolio.features && (
                                <div className="mt-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                                    <ul className="space-y-2">
                                        {portfolio.features.split('\n').map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span className="text-gray-700">{feature.trim()}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>

                                <div className="space-y-4">
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Client</dt>
                                        <dd className="text-sm text-gray-900">{portfolio.client || 'Personal Project'}</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Category</dt>
                                        <dd className="text-sm text-gray-900">{portfolio.category}</dd>
                                    </div>

                                    {portfolio.completion_date && (
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500">Completed</dt>
                                            <dd className="text-sm text-gray-900">
                                                {new Date(portfolio.completion_date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long'
                                                })}
                                            </dd>
                                        </div>
                                    )}

                                    {portfolio.technologies && (
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500 mb-2">Technologies</dt>
                                            <dd className="flex flex-wrap gap-2">
                                                {portfolio.technologies.split(',').map((tech, index) => (
                                                    <span key={index} className="text-xs bg-brand-100 text-brand-800 px-2 py-1 rounded-full">
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                            </dd>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Contact CTA */}
                            <div className="mt-6 bg-brand-600 p-6 rounded-xl text-white">
                                <h3 className="text-lg font-semibold mb-2">Interested in Similar Work?</h3>
                                <p className="text-brand-100 mb-4 text-sm">
                                    Let's discuss how I can help with your project.
                                </p>
                                <Link
                                    href={route('contact')}
                                    className="inline-flex items-center px-4 py-2 bg-white text-brand-600 rounded-lg hover:bg-gray-50 transition duration-200 font-medium"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            {relatedPortfolios.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Related Projects
                            </h2>
                            <p className="text-lg text-gray-600">
                                More projects in the {portfolio.category} category
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPortfolios.map((relatedPortfolio) => (
                                <div key={relatedPortfolio.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                                    {relatedPortfolio.image ? (
                                        <img
                                            src={relatedPortfolio.image}
                                            alt={relatedPortfolio.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-48 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                                            <svg className="w-12 h-12 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14-7l-7 7 7 7M5 4v16"></path>
                                            </svg>
                                        </div>
                                    )}

                                    <div className="p-6">
                                        <span className="text-sm text-brand-600 font-medium">{relatedPortfolio.category}</span>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{relatedPortfolio.title}</h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">{relatedPortfolio.description}</p>
                                        <Link
                                            href={route('portfolio.show', relatedPortfolio.id)}
                                            className="text-brand-600 hover:text-brand-700 font-medium"
                                        >
                                            View Project →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href={route('portfolio.index')}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition duration-200"
                            >
                                View All Projects
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </FrontendLayout>
    );
}
