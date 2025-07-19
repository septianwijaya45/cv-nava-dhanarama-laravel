import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ContactModal from '@/Components/Modal/ContactModal.jsx';

const WhatsAppButton = () => {
    const [showContactModal, setShowContactModal] = useState(false);

    const handleWhatsAppClick = () => {
        setShowContactModal(true);
    };

    const handleContactSubmit = (contactData) => {
        // Use provided values or defaults
        const finalName = contactData.name || 'Visitor';
        const finalEmail = contactData.email || 'email@example.com';

        // Create WhatsApp message
        const message = `Halo%2C%20perkenalkan%20saya%20${encodeURIComponent(finalName)}%20(email%3A%20${encodeURIComponent(finalEmail)})%20ingin%20membuat%20aplikasi.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%3F`;
        const whatsappUrl = `https://wa.me/6285962890502?text=${message}`;
        window.open(whatsappUrl, '_blank');
        
        setShowContactModal(false);
    };

    const handleModalClose = () => {
        setShowContactModal(false);
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

            <ContactModal
                isOpen={showContactModal}
                onClose={handleModalClose}
                onSubmit={handleContactSubmit}
                title="Contact Information"
            />
        </>
    );
};

export default WhatsAppButton;
