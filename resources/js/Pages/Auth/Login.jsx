import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <Link href={route('home')} className="inline-block">
                            <img
                                src="/nava3d.png"
                                alt="NAVA DHANARAMA INDONESIA"
                                className="h-16 mx-auto"
                            />
                        </Link>
                        <h2 className="mt-6 text-3xl font-bold text-gray-900">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Or{' '}
                            <Link
                                href={route('home')}
                                className="font-medium text-brand-600 hover:text-brand-500"
                            >
                                back to homepage
                            </Link>
                        </p>
                    </div>

                    <div className="bg-white shadow-xl rounded-lg p-8">
                        {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="password" value="Password" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                </label>

                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-sm text-brand-600 hover:text-brand-500"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>

                            <div>
                                <PrimaryButton className="w-full flex justify-center" disabled={processing}>
                                    Sign in
                                </PrimaryButton>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link
                                    href={route('register')}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
                                >
                                    Create new account
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-xs text-gray-500">
                            © 2024 NAVA DHANARAMA INDONESIA. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
