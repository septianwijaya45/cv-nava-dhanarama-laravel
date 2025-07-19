import React from 'react';

const TechnologySection = () => {
    const technologies = [
        {
            category: "Frontend Development",
            items: [
                { name: "Bootstrap CSS, Tailwind and Others", icon: "🟢", description: "Progressive CSS" },
                { name: "React.js", icon: "⚛️", description: "Modern UI framework" },
                { name: "Next.js", icon: "⚫", description: "Full-stack React" }
            ]
        },
        {
            category: "Backend Development",
            items: [
                { name: "Laravel", icon: "🔶", description: "PHP framework" },
                { name: "CI3", icon: "☕", description: "PHP framework" },
                { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
                { name: "Python", icon: "🐍", description: "Django & FastAPI" },
            ]
        },
        {
            category: "Database & Cloud",
            items: [
                { name: "MySQL", icon: "🐬", description: "Relational database" },
                { name: "PostgreSQL", icon: "🐘", description: "Advanced database" },
                { name: "MongoDB", icon: "🍃", description: "NoSQL database" }
            ]
        },
        {
            category: "Mobile Development",
            items: [
                { name: "React Native", icon: "📱", description: "Cross-platform" },
                // { name: "Flutter", icon: "🦋", description: "Google framework" },
                // { name: "Ionic", icon: "⚡", description: "Hybrid apps" },
                // { name: "Native", icon: "📲", description: "iOS & Android" }
            ]
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Teknologi Kami
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Menggunakan teknologi terdepan untuk menghadirkan solusi terbaik
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technologies.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                                {category.category}
                            </h3>
                            <div className="space-y-4">
                                {category.items.map((tech, techIndex) => (
                                    <div
                                        key={techIndex}
                                        className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <span className="text-2xl mr-3">{tech.icon}</span>
                                        <div>
                                            <h4 className="font-medium text-gray-900">
                                                {tech.name}
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                {tech.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-brand-50 rounded-lg p-8">
                        <h3 className="text-xl font-semibold text-brand-900 mb-4">
                            Teknologi Custom Sesuai Kebutuhan
                        </h3>
                        <p className="text-brand-700 mb-6">
                            Tidak melihat teknologi yang Anda butuhkan? Tim kami siap mempelajari dan mengimplementasikan
                            teknologi baru sesuai dengan kebutuhan spesifik proyek Anda.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition duration-200"
                        >
                            Konsultasi Teknologi
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
