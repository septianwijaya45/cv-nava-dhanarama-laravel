import FrontendLayout from '@/Layouts/FrontendLayout';
import { Link } from '@inertiajs/react';

export default function ClientsIndex({ clients }) {
    return (
        <FrontendLayout title="Our Clients - NAVA DHANARAMA INDONESIA">
            {/* Header */}
            <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our Trusted Clients
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're proud to work with amazing companies and organizations who trust us
                            to deliver exceptional digital solutions and innovative technologies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Client Stats */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-brand-600 mb-2">
                                {clients.total || 0}+
                            </div>
                            <div className="text-gray-600">Happy Clients</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-brand-600 mb-2">150+</div>
                            <div className="text-gray-600">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-brand-600 mb-2">98%</div>
                            <div className="text-gray-600">Client Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-brand-600 mb-2">5+</div>
                            <div className="text-gray-600">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {clients.data && clients.data.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {clients.data.map((client) => (
                                    <div key={client.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden group">
                                        {/* Client Logo/Image */}
                                        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                                            {client.logo ? (
                                                <img
                                                    src={client.logo}
                                                    alt={client.name}
                                                    className="w-full h-48 object-contain p-8 group-hover:scale-105 transition duration-300"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-48 bg-gradient-to-br from-brand-50 to-brand-100">
                                                    <div className="text-6xl font-bold text-brand-600">
                                                        {client.name.charAt(0)}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Client Info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition duration-200">
                                                {client.name}
                                            </h3>

                                            {client.industry && (
                                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                                    </svg>
                                                    {client.industry}
                                                </div>
                                            )}

                                            {client.description && (
                                                <p className="text-gray-600 mb-4 line-clamp-3">
                                                    {client.description}
                                                </p>
                                            )}

                                            {/* Client Details */}
                                            <div className="space-y-2">
                                                {client.website && (
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 0V3m0 9h9m-9 0l-9-9"></path>
                                                        </svg>
                                                        <a
                                                            href={client.website}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:text-brand-600 transition duration-200"
                                                        >
                                                            Visit Website
                                                        </a>
                                                    </div>
                                                )}

                                                {client.project_count && (
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                                        </svg>
                                                        {client.project_count} Project{client.project_count !== 1 ? 's' : ''}
                                                    </div>
                                                )}

                                                {client.collaboration_since && (
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                        </svg>
                                                        Partner since {new Date(client.collaboration_since).getFullYear()}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Services/Tags */}
                                            {client.services && (
                                                <div className="mt-4 pt-4 border-t border-gray-100">
                                                    <div className="flex flex-wrap gap-2">
                                                        {client.services.split(',').slice(0, 3).map((service, index) => (
                                                            <span key={index} className="text-xs bg-brand-100 text-brand-700 px-2 py-1 rounded-full">
                                                                {service.trim()}
                                                            </span>
                                                        ))}
                                                        {client.services.split(',').length > 3 && (
                                                            <span className="text-xs text-gray-500 px-2 py-1">
                                                                +{client.services.split(',').length - 3} more
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {clients.links && clients.links.length > 3 && (
                                <div className="mt-12 flex justify-center">
                                    <nav className="flex space-x-2">
                                        {clients.links.map((link, index) => (
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
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No clients to display</h3>
                            <p className="text-gray-600 mb-6">We're always looking for new partnerships and collaborations.</p>
                            <Link
                                href={route('contact')}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition duration-200"
                            >
                                Partner With Us
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Services We Provide */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Services We Provide to Our Clients
                        </h2>
                        <p className="text-lg text-gray-600">
                            Comprehensive digital solutions tailored to meet diverse business needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                ),
                                title: "Web Development",
                                description: "Custom websites and web applications built with modern technologies and best practices.",
                                features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern Frameworks"]
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                    </svg>
                                ),
                                title: "Mobile Applications",
                                description: "Native and cross-platform mobile apps for iOS and Android with seamless user experience.",
                                features: ["iOS & Android", "React Native", "Flutter", "Native Performance"]
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                                    </svg>
                                ),
                                title: "Database Solutions",
                                description: "Robust database design and management for scalable and secure data storage.",
                                features: ["Database Design", "Cloud Integration", "Data Migration", "Performance Tuning"]
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                ),
                                title: "Security & Maintenance",
                                description: "Comprehensive security audits and ongoing maintenance to keep your systems secure.",
                                features: ["Security Audits", "24/7 Monitoring", "Regular Updates", "Backup Solutions"]
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                ),
                                title: "Performance Optimization",
                                description: "Speed up your applications and improve user experience with our optimization services.",
                                features: ["Load Time Optimization", "Code Review", "Caching Strategies", "CDN Integration"]
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                    </svg>
                                ),
                                title: "Technical Consulting",
                                description: "Expert guidance on technology decisions, architecture design, and digital transformation.",
                                features: ["Architecture Review", "Technology Stack", "Digital Strategy", "Code Audits"]
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
                                <div className="text-brand-600 mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-1">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                                            <svg className="w-3 h-3 text-brand-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-brand-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Join Our Client Family?
                    </h2>
                    <p className="text-lg text-brand-100 mb-8">
                        Let's discuss how we can help transform your business with our innovative solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={route('contact')}
                            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-brand-600 bg-white hover:bg-gray-50 transition duration-200"
                        >
                            Start Your Project
                        </Link>
                        <Link
                            href={route('portfolio.index')}
                            className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-brand-700 transition duration-200"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
