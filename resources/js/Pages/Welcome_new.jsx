import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="NAVA DHANARAMA INDONESIA - Professional CV Portfolio" />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img
                                src="/nava3d.png"
                                alt="NAVA DHANARAMA INDONESIA"
                                className="h-10 w-auto"
                            />
                            <div className="ml-3">
                                <h1 className="text-lg font-bold text-gray-900">NAVA DHANARAMA</h1>
                                <p className="text-xs text-secondary-600">INDONESIA</p>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="min-h-screen bg-gradient-to-br from-brand-50 to-white pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Professional
                                <span className="text-brand-600 block">Portfolio</span>
                                <span className="text-secondary-600">& CV Website</span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Welcome to NAVA DHANARAMA INDONESIA's professional portfolio.
                                Showcasing expertise in web development, design, and digital solutions.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#portfolio"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition duration-200"
                                >
                                    View Portfolio
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-brand-300 text-base font-medium rounded-lg text-brand-700 bg-brand-50 hover:bg-brand-100 transition duration-200"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>

                        {/* Logo/Image */}
                        <div className="text-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-brand-600/10 rounded-full blur-3xl"></div>
                                <img
                                    src="/nava3d.png"
                                    alt="NAVA DHANARAMA INDONESIA Logo"
                                    className="relative mx-auto h-80 w-auto drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Coming Soon Sections */}
            <section id="portfolio" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio</h2>
                        <p className="text-lg text-gray-600 mb-8">Professional projects and achievements</p>
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                            <div className="text-brand-600 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14-7l-7 7 7 7M5 4v16"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
                            <p className="text-gray-600">Portfolio section is under development</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog & Articles</h2>
                        <p className="text-lg text-gray-600 mb-8">Insights and technical articles</p>
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-md mx-auto">
                            <div className="text-brand-600 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
                            <p className="text-gray-600">Blog section is under development</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 bg-brand-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                        <p className="text-lg text-brand-100 mb-8">Ready to work together? Let's discuss your project</p>
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                            <div className="text-brand-600 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Form</h3>
                            <p className="text-gray-600">Contact functionality coming soon</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <img
                                src="/nava3d.png"
                                alt="NAVA DHANARAMA INDONESIA"
                                className="h-8 w-auto"
                            />
                            <div className="ml-3">
                                <h3 className="text-lg font-bold text-white">NAVA DHANARAMA</h3>
                                <p className="text-sm text-gray-400">INDONESIA</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">Professional Web Development & Digital Solutions</p>
                        <p className="text-sm text-gray-500">
                            © 2024 NAVA DHANARAMA INDONESIA. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
