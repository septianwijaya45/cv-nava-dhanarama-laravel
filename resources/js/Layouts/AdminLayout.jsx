import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    HomeIcon,
    DocumentTextIcon,
    BriefcaseIcon,
    UserGroupIcon,
    BookOpenIcon,
    ChartBarIcon,
    Bars3Icon,
    XMarkIcon,
    InboxIcon
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Blogs', href: '/admin/blogs', icon: DocumentTextIcon },
    { name: 'Portfolio', href: '/admin/portfolios', icon: BriefcaseIcon },
    { name: 'Clients', href: '/admin/clients', icon: UserGroupIcon },
    { name: 'Careers', href: '/admin/careers', icon: BookOpenIcon },
    { name: 'Applications', href: '/admin/applications', icon: InboxIcon },
    { name: 'Analytics Blog', href: '/admin/analytics/blog', icon: ChartBarIcon },
    { name: 'Analytics Website', href: '/admin/analytics/website', icon: ChartBarIcon },
];

export default function AdminLayout({ children, title = 'Admin Dashboard', header }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { url } = usePage();

    return (
        <>
            <Head title={title} />
            <div className="h-full">
                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                    <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
                        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                            <div className="flex flex-shrink-0 items-center px-4">
                                <img
                                    className="h-8 w-auto"
                                    src="/nava3d.png"
                                    alt="Nava 3D"
                                />
                                <span className="ml-2 text-xl font-bold text-gray-900">Admin</span>
                            </div>
                            <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                                {navigation.map((item) => {
                                    const isActive = url.startsWith(item.href);
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`${
                                                isActive
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                                        >
                                            <item.icon
                                                className={`${
                                                    isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'
                                                } mr-3 flex-shrink-0 h-6 w-6`}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className="md:hidden">
                    {sidebarOpen && (
                        <div className="fixed inset-0 z-40 flex">
                            <div className="fixed inset-0" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-600 opacity-75" onClick={() => setSidebarOpen(false)}></div>
                            </div>
                            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        <img
                                            className="h-8 w-auto"
                                            src="/nava3d.png"
                                            alt="Nava 3D"
                                        />
                                        <span className="ml-2 text-xl font-bold text-gray-900">Admin</span>
                                    </div>
                                    <nav className="mt-5 px-2 space-y-1">
                                        {navigation.map((item) => {
                                            const isActive = url.startsWith(item.href);
                                            return (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={`${
                                                        isActive
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                    } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                                                >
                                                    <item.icon
                                                        className={`${
                                                            isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'
                                                        } mr-4 flex-shrink-0 h-6 w-6`}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </Link>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Main content */}
                <div className="md:pl-64 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <main className="flex-1">
                        {header && (
                            <div className="bg-white shadow">
                                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                    {header}
                                </div>
                            </div>
                        )}
                        <div className="py-6">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
