import FrontendLayout from '@/Layouts/FrontendLayout';
import { Link } from '@inertiajs/react';
import { useLanguage } from '@/Contexts/LanguageContext';
import TestimonialsSection from '@/Components/Testimonials/TestimonialsSection';
import FaqSection from '@/Components/FAQ/FaqSection';
import TechnologySection from '@/Components/Technology/TechnologySection';

export default function Home({ blogs, portfolios, clients, testimonials = [], faqs = [] }) {
    const { t } = useLanguage();

    return (
        <FrontendLayout
            title="Nava Dhanarama Indonesia - Jasa Pengembangan Sistem & Otomasi Bisnis Terpercaya"
            metaDescription="Nava Dhanarama Indonesia menyediakan jasa pengembangan sistem informasi, otomasi bisnis, website development, dan mobile app development untuk transformasi digital bisnis Anda."
        >
            {/* Hero Section */}
            <section className="min-h-screen bg-gradient-to-br from-brand-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                                <span className="text-brand-600">Nava Dhanarama</span>
                                <span className="block text-gray-900">Indonesia</span>
                                <span className="block text-2xl lg:text-3xl text-secondary-600 font-medium mt-2">
                                    Jasa Pengembangan Sistem & Otomasi Bisnis
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Transformasi digital bisnis Anda dengan solusi sistem informasi custom,
                                otomasi proses bisnis, website development, dan mobile application yang
                                profesional dan terpercaya.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link
                                    href={route('portfolio.index')}
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition duration-200"
                                >
                                    Lihat Portfolio Kami
                                </Link>
                                <Link
                                    href={route('contact')}
                                    className="inline-flex items-center justify-center px-6 py-3 border border-brand-300 text-base font-medium rounded-lg text-brand-700 bg-brand-50 hover:bg-brand-100 transition duration-200"
                                >
                                    Konsultasi Gratis
                                </Link>
                            </div>

                            {/* Stats */}
                            {/* <div className="grid grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-brand-600">{portfolios.length}+</div>
                                    <div className="text-sm text-gray-600">Proyek Selesai</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-brand-600">{clients.length}+</div>
                                    <div className="text-sm text-gray-600">Klien Puas</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-brand-600">5+</div>
                                    <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                                </div>
                            </div> */}
                            <div className="grid grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-brand-600">35+</div>
                                    <div className="text-sm text-gray-600">Proyek Selesai</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-brand-600">38+</div>
                                    <div className="text-sm text-gray-600">Klien Puas</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-brand-600">2+</div>
                                    <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                                </div>
                            </div>
                        </div>

                        {/* Logo/Image */}
                        <div className="text-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-brand-600/10 rounded-full blur-3xl"></div>
                                <img
                                    src="/nava3d.png"
                                    alt="Nava Dhanarama Indonesia - Jasa Pengembangan Sistem dan Otomasi Bisnis Professional"
                                    className="relative mx-auto h-80 w-auto drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            What I Do
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive digital solutions to help your business thrive in the modern world
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                                    </svg>
                                ),
                                title: "Web Development",
                                description: "Modern, responsive websites built with latest technologies like Laravel, React, and Vue.js"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                    </svg>
                                ),
                                title: "Mobile App Development",
                                description: "Cross-platform mobile applications for iOS and Android using React Native and Flutter"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
                                    </svg>
                                ),
                                title: "UI/UX Design",
                                description: "Beautiful and intuitive user interfaces that provide exceptional user experience"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                    </svg>
                                ),
                                title: "Digital Marketing",
                                description: "SEO optimization, social media marketing, and digital strategy to grow your online presence"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                                    </svg>
                                ),
                                title: "E-Commerce Solutions",
                                description: "Complete online store development with payment integration and inventory management"
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
                                    </svg>
                                ),
                                title: "API Development",
                                description: "RESTful APIs and microservices architecture for scalable backend solutions"
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
                                <div className="text-brand-600 mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Preview */}
            {portfolios.length > 0 && (
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Featured Projects
                            </h2>
                            <p className="text-xl text-gray-600">
                                Some of my recent work and achievements
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {portfolios.slice(0, 6).map((portfolio) => (
                                <div key={portfolio.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                                    {portfolio.image && (
                                        <img
                                            src={portfolio.image}
                                            alt={portfolio.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    )}
                                    <div className="p-6">
                                        <div className="text-sm text-brand-600 font-medium mb-2">{portfolio.category}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{portfolio.title}</h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">{portfolio.description}</p>
                                        <Link
                                            href={route('portfolio.show', portfolio.id)}
                                            className="text-brand-600 hover:text-brand-700 font-medium"
                                        >
                                            View Project →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
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

            {/* Blog Preview */}
            {blogs.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Latest Articles
                            </h2>
                            <p className="text-xl text-gray-600">
                                Insights, tutorials, and thoughts on web development
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {blogs.slice(0, 3).map((blog) => (
                                <div key={blog.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
                                    {blog.cover_image && (
                                        <img
                                            src={`/storage/${blog.cover_image}`}
                                            alt={blog.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    )}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-brand-600 font-medium">{blog.category}</span>
                                            <span className="text-sm text-gray-500">
                                                {new Date(blog.published_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {blog.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                                        </p>
                                        <Link
                                            href={route('blogs.show', blog.slug)}
                                            className="text-brand-600 hover:text-brand-700 font-medium"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link
                                href={route('blogs.index')}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition duration-200"
                            >
                                View All Articles
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Clients Section */}
            {clients.length > 0 && (
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Trusted By
                            </h2>
                            <p className="text-xl text-gray-600">
                                Companies that have trusted me with their digital transformation
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            {clients.slice(0, 8).map((client) => (
                                <div key={client.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center">
                                    {client.logo ? (
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="h-12 w-auto object-contain"
                                        />
                                    ) : (
                                        <div className="text-gray-600 font-medium text-center">{client.name}</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href={route('clients.index')}
                                className="inline-flex items-center px-6 py-3 border border-brand-300 text-base font-medium rounded-lg text-brand-700 bg-brand-50 hover:bg-brand-100 transition duration-200"
                            >
                                View All Clients
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Technology Section */}
            <TechnologySection />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={testimonials} />

            {/* FAQ Section */}
            <FaqSection faqs={faqs} title="Frequently Asked Questions" />

            {/* CTA Section */}
            <section className="py-20 bg-brand-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Siap Transformasi Digital Bisnis Anda?
                    </h2>
                    <p className="text-xl text-brand-100 mb-8 max-w-3xl mx-auto">
                        Mari diskusikan bagaimana kami dapat membantu mewujudkan ide Anda dengan
                        teknologi terdepan dan solusi kreatif yang tepat sasaran.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={route('contact')}
                            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-brand-600 bg-white hover:bg-gray-50 transition duration-200"
                        >
                            Minta Penawaran
                        </Link>
                        <Link
                            href={route('careers.index')}
                            className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-brand-600 transition duration-200"
                        >
                            Lihat Karir
                        </Link>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
