import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';
import LanguageToggle from '@/Components/LanguageToggle';
import WhatsAppButton from '@/Components/WhatsAppButton/WhatsAppButton';

export default function FrontendLayout({
    children,
    title = "NAVA DHANARAMA INDONESIA",
    metaDescription = "Nava Dhanarama Indonesia - Spesialis pengembangan sistem informasi, otomasi bisnis, dan solusi digital untuk transformasi bisnis modern."
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    const navigation = [
        { name: t('nav.home'), href: route('home') },
        { name: t('nav.portfolio'), href: route('portfolio.index') },
        { name: t('nav.blog'), href: route('blogs.index') },
        { name: t('nav.clients'), href: route('clients.index') },
        { name: t('nav.careers'), href: route('careers.index') },
        { name: t('nav.contact'), href: route('contact') },
    ];

    return (
        <>
            <Head title={title}>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content="pengembangan sistem, otomasi bisnis, website development, mobile app, sistem informasi, digital transformation, Laravel, React, custom software" />
                <meta name="author" content="Nava Dhanarama Indonesia" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/nava3d.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={window.location.href} />
            </Head>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href={route('home')} className="flex items-center">
                            <img
                                src="/nava3d.png"
                                alt="NAVA DHANARAMA INDONESIA"
                                className="h-10 w-auto"
                            />
                            <div className="ml-3">
                                <h1 className="text-lg font-bold text-gray-900">NAVA DHANARAMA</h1>
                                <p className="text-xs text-secondary-600">INDONESIA</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-brand-600 font-medium transition duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <LanguageToggle />
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-600 hover:text-brand-600"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="md:hidden border-t border-gray-200 py-4">
                            <div className="flex flex-col space-y-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-600 hover:text-brand-600 font-medium transition duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="pt-2 border-t border-gray-200">
                                    <LanguageToggle />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-16">
                {children}
            </main>

            {/* WhatsApp Floating Button */}
            <div className="fixed bottom-6 right-6 z-40">
                <WhatsAppButton />
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center mb-4">
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
                            <p className="text-gray-400 mb-4">
                                Professional Web Development & Digital Solutions.
                                Creating innovative digital experiences that drive business growth.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://www.instagram.com/navadhanaramaindonesia/" className=" bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-brand-600  transition duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4.5 7.75A3.25 3.25 0 0 1 7.75 4.5h8.5a3.25 3.25 0 0 1 3.25 3.25v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5A3.25 3.25 0 0 1 4.5 16.25v-8.5Zm7.5 1.25a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm0 1.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm5.25-2.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5Z"/>
                                        </svg>

                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-400 hover:text-white transition duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Web Development</li>
                                <li>Mobile App Development</li>
                                <li>UI/UX Design</li>
                                <li>Digital Marketing</li>
                                <li>SEO Optimization</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p className="text-sm text-gray-500">
                            © 2024 NAVA DHANARAMA INDONESIA. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
