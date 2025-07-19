import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FaqItem = ({ faq, isOpen, onToggle }) => {
    return (
        <div className="border border-gray-200 rounded-lg mb-4">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                </h3>
                {isOpen ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
            </button>

            {isOpen && (
                <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                    </p>
                </div>
            )}
        </div>
    );
};

const FaqSection = ({ faqs, title = "Frequently Asked Questions" }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (faqId) => {
        setOpenFaq(openFaq === faqId ? null : faqId);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Pertanyaan yang sering diajukan tentang layanan kami
                    </p>
                </div>

                <div className="space-y-0">
                    {faqs.map((faq) => (
                        <FaqItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openFaq === faq.id}
                            onToggle={() => toggleFaq(faq.id)}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        Masih ada pertanyaan lain?
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition duration-200"
                    >
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
