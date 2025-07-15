import { useLanguage } from '@/Contexts/LanguageContext';

export default function LanguageToggle() {
    const { language, toggleLanguage, isIndonesian } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200"
            title={isIndonesian ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
        >
            <div className="flex items-center space-x-1">
                {isIndonesian ? (
                    <>
                        <span className="text-sm font-medium">🇮🇩</span>
                        <span className="text-sm font-medium text-gray-700">ID</span>
                    </>
                ) : (
                    <>
                        <span className="text-sm font-medium">🇺🇸</span>
                        <span className="text-sm font-medium text-gray-700">EN</span>
                    </>
                )}
            </div>

            {/* Toggle switch visual */}
            <div className="relative inline-flex h-4 w-8 items-center rounded-full bg-gray-300 transition-colors">
                <span
                    className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                        isIndonesian ? 'translate-x-0.5' : 'translate-x-4'
                    }`}
                />
            </div>
        </button>
    );
}
