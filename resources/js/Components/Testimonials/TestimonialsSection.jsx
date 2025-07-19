import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialCard = ({ testimonial }) => {
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <StarIcon
                key={index}
                className={`h-5 w-5 ${
                    index < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
            />
        ));
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 h-full">
            <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
            </div>

            <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.testimonial_text}"
            </blockquote>

            <div className="flex items-center">
                {testimonial.client_photo && (
                    <img
                        src={testimonial.client_photo}
                        alt={testimonial.client_name}
                        className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                )}
                <div>
                    <h4 className="font-semibold text-gray-900">
                        {testimonial.client_name}
                    </h4>
                    <p className="text-sm text-gray-600">
                        {testimonial.client_position}
                        {testimonial.client_company && (
                            <span className="block">{testimonial.client_company}</span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

const TestimonialsSection = ({ testimonials, title = "Apa Kata Klien Kami" }) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Kepercayaan klien adalah prioritas utama kami
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
