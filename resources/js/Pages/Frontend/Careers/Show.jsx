import FrontendLayout from '@/Layouts/FrontendLayout';
import { Link } from '@inertiajs/react';

export default function CareerShow({ career, relatedCareers = [] }) {
    return (
        <FrontendLayout title={`${career.title} - Careers - NAVA DHANARAMA INDONESIA`}>
            {/* Career Header */}
            <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="mb-6">
                            <Link
                                href={route('careers.index')}
                                className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                                Back to Careers
                            </Link>
                        </div>

                        <div className="flex justify-center mb-4">
                            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                                career.type === 'full-time' ? 'bg-green-100 text-green-800' :
                                career.type === 'part-time' ? 'bg-blue-100 text-blue-800' :
                                career.type === 'contract' ? 'bg-purple-100 text-purple-800' :
                                'bg-gray-100 text-gray-800'
                            }`}>
                                {career.type?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Full Time'}
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {career.title}
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center text-gray-600">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                {career.location || 'Remote'}
                            </div>
                            <div className="flex items-center justify-center text-gray-600">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                                </svg>
                                {career.salary || 'Competitive'}
                            </div>
                            <div className="flex items-center justify-center text-gray-600">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V6m8 0H8m8 0l-1.5 1.5M8 6L9.5 7.5"></path>
                                </svg>
                                {career.department || 'Development'}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Job Details */}
                        <div className="lg:col-span-2">
                            {/* Description */}
                            {career.description && (
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Description</h2>
                                    <div className="prose prose-lg text-gray-600">
                                        {career.description.split('\n').map((paragraph, index) => (
                                            <p key={index} className="mb-4">{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Requirements */}
                            {career.requirements && (
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
                                    <ul className="space-y-3">
                                        {career.requirements.split('\n').filter(req => req.trim()).map((requirement, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="w-5 h-5 text-brand-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="text-gray-700">{requirement.trim().replace(/^[•\-\*]\s*/, '')}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Responsibilities */}
                            {career.responsibilities && (
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsibilities</h2>
                                    <ul className="space-y-3">
                                        {career.responsibilities.split('\n').filter(resp => resp.trim()).map((responsibility, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="w-5 h-5 text-brand-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"></path>
                                                </svg>
                                                <span className="text-gray-700">{responsibility.trim().replace(/^[•\-\*]\s*/, '')}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Benefits */}
                            {career.benefits && (
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
                                    <ul className="space-y-3">
                                        {career.benefits.split('\n').filter(benefit => benefit.trim()).map((benefit, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="text-gray-700">{benefit.trim().replace(/^[•\-\*]\s*/, '')}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Apply Now Card */}
                            <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 mb-8 sticky top-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Interested in this position?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Send us your application and we'll get back to you as soon as possible.
                                </p>
                                <Link
                                    href={route('contact')}
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition duration-200"
                                >
                                    Apply Now
                                </Link>

                                <div className="mt-6 pt-6 border-t border-brand-200">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Info:</h4>
                                    <dl className="space-y-2">
                                        <div>
                                            <dt className="text-xs text-gray-500">Position Type</dt>
                                            <dd className="text-sm font-medium text-gray-900">
                                                {career.type?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Full Time'}
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="text-xs text-gray-500">Department</dt>
                                            <dd className="text-sm font-medium text-gray-900">{career.department || 'Development'}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-xs text-gray-500">Experience Level</dt>
                                            <dd className="text-sm font-medium text-gray-900">{career.experience_level || 'Mid-Level'}</dd>
                                        </div>
                                        {career.posted_date && (
                                            <div>
                                                <dt className="text-xs text-gray-500">Posted</dt>
                                                <dd className="text-sm font-medium text-gray-900">
                                                    {new Date(career.posted_date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </dd>
                                            </div>
                                        )}
                                    </dl>
                                </div>
                            </div>

                            {/* Share */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this job</h3>
                                <div className="flex space-x-3">
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`Check out this job opportunity: ${career.title} at NAVA DHANARAMA INDONESIA`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition duration-200"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
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
                    </div>
                </div>
            </section>

            {/* Related Careers */}
            {relatedCareers.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Other Opportunities
                            </h2>
                            <p className="text-lg text-gray-600">
                                Explore other exciting career opportunities at NAVA DHANARAMA INDONESIA
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedCareers.map((relatedCareer) => (
                                <div key={relatedCareer.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <div className="mb-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            relatedCareer.type === 'full-time' ? 'bg-green-100 text-green-800' :
                                            relatedCareer.type === 'part-time' ? 'bg-blue-100 text-blue-800' :
                                            relatedCareer.type === 'contract' ? 'bg-purple-100 text-purple-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                            {relatedCareer.type?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Full Time'}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {relatedCareer.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {relatedCareer.description}
                                    </p>

                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        {relatedCareer.location || 'Remote'}
                                    </div>

                                    <Link
                                        href={route('careers.show', relatedCareer.id)}
                                        className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium"
                                    >
                                        View Details
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 bg-brand-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Apply?
                    </h2>
                    <p className="text-lg text-brand-100 mb-8">
                        Take the next step in your career journey with us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={route('contact')}
                            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-brand-600 bg-white hover:bg-gray-50 transition duration-200"
                        >
                            Apply for This Position
                        </Link>
                        <Link
                            href={route('careers.index')}
                            className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-brand-700 transition duration-200"
                        >
                            View All Careers
                        </Link>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
