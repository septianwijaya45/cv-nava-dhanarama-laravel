import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Create Account - NAVA DHANARAMA INDONESIA" />

            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                <p className="text-secondary-600">Join NAVA DHANARAMA INDONESIA admin panel</p>
            </div>

            <form onSubmit={submit} className="space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Full Name" className="text-gray-700 font-medium" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500 transition duration-200"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email Address" className="text-gray-700 font-medium" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500 transition duration-200"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Enter your email address"
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Password" className="text-gray-700 font-medium" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500 transition duration-200"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="Create a strong password"
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-gray-700 font-medium" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500 transition duration-200"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        placeholder="Confirm your password"
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div>
                    <PrimaryButton
                        className="w-full justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 font-medium transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={processing}
                    >
                        {processing ? (
                            <div className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Creating account...
                            </div>
                        ) : (
                            'Create Admin Account'
                        )}
                    </PrimaryButton>
                </div>

                {/* Footer Links */}
                <div className="flex items-center justify-between pt-4">
                    <Link
                        href={route('login')}
                        className="text-sm text-brand-600 hover:text-brand-500 font-medium transition duration-200"
                    >
                        Already have an account? Sign in
                    </Link>

                    <Link
                        href={route('/')}
                        className="text-sm text-secondary-600 hover:text-brand-600 font-medium transition duration-200"
                    >
                        ← Back to Website
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
