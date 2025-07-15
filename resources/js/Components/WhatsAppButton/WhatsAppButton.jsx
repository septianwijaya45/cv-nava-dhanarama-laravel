import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { PromptModal } from '@/Components/Modal/CustomModal';

const WhatsAppButton = () => {
    const [showNameModal, setShowNameModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [userInfo, setUserInfo] = useState({ name: '', email: '' });

    const handleWhatsAppClick = () => {
        setShowNameModal(true);
    };

    const handleNameSubmit = (name) => {
        setUserInfo(prev => ({ ...prev, name: name || 'Visitor' }));
        setShowNameModal(false);
        setShowEmailModal(true);
    };

    const handleEmailSubmit = (email) => {
        const finalEmail = email || 'email@example.com';
        const finalName = userInfo.name || 'Visitor';
        setUserInfo(prev => ({ ...prev, email: finalEmail }));
        setShowEmailModal(false);

        // Create WhatsApp message
        const message = `Halo%2C%20perkenalkan%20saya%20${encodeURIComponent(finalName)}%20(email%3A%20${encodeURIComponent(finalEmail)})%20ingin%20membuat%20aplikasi.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%3F`;
        const whatsappUrl = `https://wa.me/6285962890502?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleModalClose = () => {
        setShowNameModal(false);
        setShowEmailModal(false);
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
                    aria-label="Contact via WhatsApp"
                >
                    <FaWhatsapp className="w-6 h-6" />
                </button>
            </div>

            {/* Name Input Modal */}
            <PromptModal
                isOpen={showNameModal}
                onClose={handleModalClose}
                title="Contact Information"
                placeholder="Enter your name"
                defaultValue=""
                onConfirm={handleNameSubmit}
            />

            {/* Email Input Modal */}
            <PromptModal
                isOpen={showEmailModal}
                onClose={handleModalClose}
                title="Email Address"
                placeholder="Enter your email address"
                defaultValue=""
                onConfirm={handleEmailSubmit}
            />
        </>
    );
};

export default WhatsAppButton;
