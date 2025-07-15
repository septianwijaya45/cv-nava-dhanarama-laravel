import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-brand-500 to-brand-700 items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10 text-center text-white px-12">
                    <div className="mb-8">
                        <img
                            src="/nava3d.png"
                            alt="NAVA DHANARAMA INDONESIA"
                            className="h-24 w-auto mx-auto mb-6 filter brightness-0 invert"
                        />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">
                        NAVA DHANARAMA
                    </h1>
                    <h2 className="text-2xl font-semibold mb-6">
                        INDONESIA
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Transforming Ideas into Digital Excellence
                    </p>
                    <div className="space-y-4 text-blue-100">
                        <div className="flex items-center justify-center space-x-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span>Professional Web Development</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span>Mobile Application Solutions</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span>Digital Transformation</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full transform translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full transform -translate-x-16 translate-y-16"></div>
            </div>

            {/* Right Side - Auth Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden text-center mb-8">
                        <Link href="/">
                            <img
                                src="/nava3d.png"
                                alt="NAVA DHANARAMA INDONESIA"
                                className="h-16 w-auto mx-auto mb-4"
                            />
                            <h1 className="text-2xl font-bold text-brand-700">NAVA DHANARAMA</h1>
                            <h2 className="text-lg font-semibold text-secondary-600">INDONESIA</h2>
                        </Link>
                    </div>

                    {/* Auth Card */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                        {children}
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-8 text-sm text-secondary-500">
                        <p>&copy; {new Date().getFullYear()} NAVA DHANARAMA INDONESIA. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
