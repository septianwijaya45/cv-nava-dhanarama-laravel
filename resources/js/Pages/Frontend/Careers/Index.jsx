import FrontendLayout from '@/Layouts/FrontendLayout';
import { Link } from '@inertiajs/react';

export default function CareersIndex({ careers }) {
    return (
        <FrontendLayout
            title="Careers - NAVA DHANARAMA INDONESIA"
            metaDescription='Lowongan kerja dan karir di NAVA DHANARAMA INDONESIA. Bergabunglah dengan tim kami untuk membangun solusi digital inovatif. Perusahaan Karesidenan Kediri dan sekitarnya.'
            >
            {/* Header */}
            <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Join Our Team
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore exciting career opportunities and become part of our innovative team
                            building the future of digital solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Careers Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {careers.data.length > 0 ? (
                        <div className="space-y-8">
                            {careers.data.map((career) => (
                                <div key={career.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition duration-300">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center mb-4">
                                                <h3 className="text-2xl font-semibold text-gray-900 mr-4">
                                                    {career.position}
                                                </h3>
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                    career.type === 'full-time' ? 'bg-green-100 text-green-800' :
                                                    career.type === 'part-time' ? 'bg-blue-100 text-blue-800' :
                                                    career.type === 'contract' ? 'bg-purple-100 text-purple-800' :
                                                    'bg-gray-100 text-gray-800'
                                                }`}>
                                                    {career.type?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Full Time'}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="flex items-center text-gray-600">
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    </svg>
                                                    {career.location === 'remote' ? 'Remote' : 'Onsite'}
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V6m8 0H8m8 0l-1.5 1.5M8 6L9.5 7.5"></path>
                                                    </svg>
                                                    {career.department || 'Development'}
                                                </div>
                                            </div>

                                            <p className="text-gray-600 mb-6 line-clamp-3">
                                                {career.description}
                                            </p>

                                            {/* Requirements Preview */}
                                            {career.qualification && (
                                                <div className="mb-6">
                                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Qualifications:</h4>
                                                    <ul className="flex flex-wrap gap-2">
                                                        {career.qualification.split('\n').slice(0, 3).map((req, index) => (
                                                            <li key={index} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                                                {req.trim().replace(/^[•\-\*]\s*/, '')}
                                                            </li>
                                                        ))}
                                                        {career.qualification.split('\n').length > 3 && (
                                                            <li className="text-sm text-gray-500 px-3 py-1">
                                                                +{career.qualification.split('\n').length - 3} more
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:ml-6">
                                            <Link
                                                href={route('careers.show', career.id)}
                                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition duration-200"
                                            >
                                                View Details
                                            </Link>
                                            <Link
                                                href={route('contact')}
                                                className="inline-flex items-center justify-center px-6 py-3 border border-brand-300 text-base font-medium rounded-lg text-brand-700 bg-brand-50 hover:bg-brand-100 transition duration-200"
                                            >
                                                Apply Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V6m8 0H8m8 0l-1.5 1.5M8 6L9.5 7.5"></path>
                            </svg>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No open positions</h3>
                            <p className="text-gray-600 mb-6">There are currently no open career opportunities. Check back later!</p>
                            <Link
                                href={route('contact')}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition duration-200"
                            >
                                Send Us Your CV
                            </Link>
                        </div>
                    )}

                    {/* Pagination */}
                    {careers.links && careers.links.length > 3 && (
                        <div className="mt-12 flex justify-center">
                            <nav className="flex space-x-2">
                                {careers.links.map((link, index) => (
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

            {/* Benefits Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Work With Us?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Join a team that values innovation, growth, and work-life balance
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                ),
                                title: "Innovative Projects",
                                description: "Work on cutting-edge projects using the latest technologies and frameworks"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                ),
                                title: "Continuous Learning",
                                description: "Access to courses, conferences, and certification programs to enhance your skills"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                ),
                                title: "Remote Flexibility",
                                description: "Flexible working arrangements with remote and hybrid options available"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                ),
                                title: "Collaborative Team",
                                description: "Work with passionate professionals in a supportive and inclusive environment"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                                    </svg>
                                ),
                                title: "Competitive Benefits",
                                description: "Attractive salary packages with health insurance and performance bonuses"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                    </svg>
                                ),
                                title: "Career Growth",
                                description: "Clear career progression paths with mentorship and leadership opportunities"
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                                <div className="text-brand-600 mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-brand-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Join Our Team?
                    </h2>
                    <p className="text-lg text-brand-100 mb-8">
                        Don't see a position that fits? Send us your CV and we'll keep you in mind for future opportunities.
                    </p>
                    <Link
                        href={route('contact')}
                        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-brand-600 bg-white hover:bg-gray-50 transition duration-200"
                    >
                        Send Your Application
                    </Link>
                </div>
            </section>
        </FrontendLayout>
    );
}
