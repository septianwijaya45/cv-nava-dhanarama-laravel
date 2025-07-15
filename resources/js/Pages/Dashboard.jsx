import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Dashboard({ auth, stats }) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Default stats if not provided
    const defaultStats = {
        blogs: 0,
        portfolios: 0,
        clients: 0,
        careers: 0,
        applications: 0,
        messages: 0,
        unreadMessages: 0,
        pendingApplications: 0,
        ...stats
    };

    const quickActions = [
        {
            name: 'Create Blog Post',
            href: route('admin.blogs.create'),
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
            ),
            color: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            name: 'Add Portfolio',
            href: route('admin.portfolios.create'),
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
            ),
            color: 'bg-green-500 hover:bg-green-600'
        },
        {
            name: 'Add Client',
            href: route('admin.clients.create'),
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
            ),
            color: 'bg-purple-500 hover:bg-purple-600'
        },
        {
            name: 'Post Job',
            href: route('admin.careers.create'),
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V6m8 0H8m8 0l-1.5 1.5M8 6L9.5 7.5"></path>
                </svg>
            ),
            color: 'bg-indigo-500 hover:bg-indigo-600'
        }
    ];

    const managementCards = [
        {
            title: 'Blog Management',
            count: defaultStats.blogs,
            href: route('admin.blogs.index'),
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
            ),
            color: 'from-blue-500 to-blue-600',
            description: 'Manage blog posts and articles'
        },
        {
            title: 'Portfolio',
            count: defaultStats.portfolios,
            href: route('admin.portfolios.index'),
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
            ),
            color: 'from-green-500 to-green-600',
            description: 'Manage portfolio projects'
        },
        {
            title: 'Clients',
            count: defaultStats.clients,
            href: route('admin.clients.index'),
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
            ),
            color: 'from-purple-500 to-purple-600',
            description: 'Manage client information'
        },
        {
            title: 'Careers',
            count: defaultStats.careers,
            href: route('admin.careers.index'),
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V6m8 0H8m8 0l-1.5 1.5M8 6L9.5 7.5"></path>
                </svg>
            ),
            color: 'from-indigo-500 to-indigo-600',
            description: 'Manage job openings'
        },
        {
            title: 'Applications',
            count: defaultStats.applications,
            href: route('admin.applications.index'),
            badge: defaultStats.pendingApplications > 0 ? defaultStats.pendingApplications : null,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
            ),
            color: 'from-orange-500 to-orange-600',
            description: 'Manage job applications'
        },
        {
            title: 'Messages',
            count: defaultStats.messages,
            href: route('admin.messages.index'),
            badge: defaultStats.unreadMessages > 0 ? defaultStats.unreadMessages : null,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            ),
            color: 'from-red-500 to-red-600',
            description: 'Manage contact messages'
        }
    ];

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Admin Dashboard
                    </h2>
                    <div className="text-sm text-gray-600">
                        {currentTime.toLocaleString('id-ID', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </div>
                </div>
            }
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    {/* Welcome Section */}
                    <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-lg shadow-lg p-6 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold mb-2">
                                    Welcome back, {auth.user.name}!
                                </h1>
                                <p className="text-brand-100">
                                    Here's what's happening with your website today.
                                </p>
                            </div>
                            <div className="flex space-x-4">
                                <Link
                                    href={route('home')}
                                    className="bg-white text-brand-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition duration-200"
                                    target="_blank"
                                >
                                    View Website
                                </Link>
                                <Link
                                    href={route('admin.analytics.website')}
                                    className="bg-brand-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-400 transition duration-200"
                                >
                                    View Analytics
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {quickActions.map((action, index) => (
                                <Link
                                    key={index}
                                    href={action.href}
                                    className={`${action.color} text-white p-4 rounded-lg text-center hover:shadow-lg transition duration-200`}
                                >
                                    <div className="flex justify-center mb-2">
                                        {action.icon}
                                    </div>
                                    <span className="text-sm font-medium">{action.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Management Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {managementCards.map((card, index) => (
                            <Link
                                key={index}
                                href={card.href}
                                className="bg-white rounded-lg shadow hover:shadow-lg transition duration-200 overflow-hidden"
                            >
                                <div className={`bg-gradient-to-r ${card.color} p-6 text-white relative`}>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold">{card.title}</h3>
                                            <p className="text-2xl font-bold">{card.count}</p>
                                        </div>
                                        <div className="relative">
                                            {card.icon}
                                            {card.badge && (
                                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                                                    {card.badge}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-gray-600 text-sm">{card.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Analytics Preview */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Blog Analytics</h3>
                                <Link
                                    href={route('admin.analytics.blog')}
                                    className="text-brand-600 hover:text-brand-700 text-sm font-medium"
                                >
                                    View Details →
                                </Link>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Total Posts</span>
                                    <span className="font-semibold">{defaultStats.blogs}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Published</span>
                                    <span className="font-semibold text-green-600">{defaultStats.publishedBlogs || 0}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Drafts</span>
                                    <span className="font-semibold text-orange-600">{defaultStats.draftBlogs || 0}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Website Analytics</h3>
                                <Link
                                    href={route('admin.analytics.website')}
                                    className="text-brand-600 hover:text-brand-700 text-sm font-medium"
                                >
                                    View Details →
                                </Link>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Total Content</span>
                                    <span className="font-semibold">{defaultStats.blogs + defaultStats.portfolios}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Active Clients</span>
                                    <span className="font-semibold text-green-600">{defaultStats.clients}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Job Openings</span>
                                    <span className="font-semibold text-blue-600">{defaultStats.careers}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alerts */}
                    {(defaultStats.unreadMessages > 0 || defaultStats.pendingApplications > 0) && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                </svg>
                                <div>
                                    <h4 className="text-yellow-800 font-medium">Attention Required</h4>
                                    <div className="text-yellow-700 text-sm mt-1">
                                        {defaultStats.unreadMessages > 0 && (
                                            <p>You have {defaultStats.unreadMessages} unread message{defaultStats.unreadMessages > 1 ? 's' : ''}.</p>
                                        )}
                                        {defaultStats.pendingApplications > 0 && (
                                            <p>You have {defaultStats.pendingApplications} pending application{defaultStats.pendingApplications > 1 ? 's' : ''}.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
