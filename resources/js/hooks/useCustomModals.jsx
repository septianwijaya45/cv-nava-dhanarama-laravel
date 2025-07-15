import { useState } from 'react';
import { PromptModal, ConfirmModal } from '@/Components/Modal/CustomModal';

export const useCustomModals = () => {
    const [promptConfig, setPromptConfig] = useState({
        isOpen: false,
        title: '',
        placeholder: '',
        defaultValue: '',
        onConfirm: () => {},
    });

    const [confirmConfig, setConfirmConfig] = useState({
        isOpen: false,
        title: '',
        message: '',
        onConfirm: () => {},
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        type: 'default',
    });

    const customPrompt = ({ title, placeholder = '', defaultValue = '' }) => {
        return new Promise((resolve) => {
            setPromptConfig({
                isOpen: true,
                title,
                placeholder,
                defaultValue,
                onConfirm: (value) => {
                    resolve(value);
                    setPromptConfig(prev => ({ ...prev, isOpen: false }));
                },
            });
        });
    };

    const customConfirm = ({ 
        title, 
        message, 
        confirmText = 'Confirm', 
        cancelText = 'Cancel', 
        type = 'default' 
    }) => {
        return new Promise((resolve) => {
            setConfirmConfig({
                isOpen: true,
                title,
                message,
                confirmText,
                cancelText,
                type,
                onConfirm: () => {
                    resolve(true);
                    setConfirmConfig(prev => ({ ...prev, isOpen: false }));
                },
            });
        });
    };

    const closePrompt = () => {
        setPromptConfig(prev => ({ ...prev, isOpen: false }));
    };

    const closeConfirm = () => {
        setConfirmConfig(prev => ({ ...prev, isOpen: false }));
    };

    const PromptComponent = () => (
        <PromptModal
            isOpen={promptConfig.isOpen}
            onClose={closePrompt}
            title={promptConfig.title}
            placeholder={promptConfig.placeholder}
            defaultValue={promptConfig.defaultValue}
            onConfirm={promptConfig.onConfirm}
        />
    );

    const ConfirmComponent = () => (
        <ConfirmModal
            isOpen={confirmConfig.isOpen}
            onClose={closeConfirm}
            title={confirmConfig.title}
            message={confirmConfig.message}
            confirmText={confirmConfig.confirmText}
            cancelText={confirmConfig.cancelText}
            type={confirmConfig.type}
            onConfirm={confirmConfig.onConfirm}
        />
    );

    return {
        customPrompt,
        customConfirm,
        PromptComponent,
        ConfirmComponent,
    };
};

export default useCustomModals;
