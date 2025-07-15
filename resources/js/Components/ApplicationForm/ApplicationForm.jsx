import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp_number: '',
        application_request: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const response = await axios.post('/api/v1/application-request', formData);

            setMessage('Application submitted successfully! We will contact you soon.');
            setMessageType('success');
            setFormData({
                name: '',
                email: '',
                whatsapp_number: '',
                application_request: ''
            });
        } catch (error) {
            console.error('Error submitting application:', error);
            setMessage('Failed to submit application. Please try again.');
            setMessageType('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Ready to Start Your Project?
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Tell us about your project requirements and we'll get back to you with a custom solution.
                    </p>
                </div>

                {message && (
                    <div className={`mb-6 p-4 rounded-md ${
                        messageType === 'success'
                            ? 'bg-green-50 text-green-800 border border-green-200'
                            : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-3 px-4"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-3 px-4"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div>
                        <label htmlFor="whatsapp_number" className="block text-sm font-medium text-gray-700">
                            WhatsApp Number *
                        </label>
                        <input
                            type="tel"
                            id="whatsapp_number"
                            name="whatsapp_number"
                            value={formData.whatsapp_number}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-3 px-4"
                            placeholder="e.g., +6285231280175"
                        />
                    </div>

                    <div>
                        <label htmlFor="application_request" className="block text-sm font-medium text-gray-700">
                            Project Description *
                        </label>
                        <textarea
                            id="application_request"
                            name="application_request"
                            value={formData.application_request}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-3 px-4"
                            placeholder="Describe your project requirements, timeline, budget, and any specific features you need..."
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Or contact us directly via WhatsApp for immediate response
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;
