import AdminLayout from '@/Layouts/AdminLayout';
import {
    DocumentTextIcon,
    BriefcaseIcon,
    UserGroupIcon,
    BookOpenIcon,
    ChartBarIcon,
    InboxIcon
} from '@heroicons/react/24/outline';

const stats = [
    { name: 'Total Blogs', stat: '0', icon: DocumentTextIcon, href: '/admin/bloggers' },
    { name: 'Total Portfolio', stat: '0', icon: BriefcaseIcon, href: '/admin/portfolios' },
    { name: 'Total Clients', stat: '0', icon: UserGroupIcon, href: '/admin/clients' },
    { name: 'Total Careers', stat: '0', icon: BookOpenIcon, href: '/admin/careers' },
    { name: 'Applications', stat: '0', icon: InboxIcon, href: '/admin/application-requests' },
];

export default function Dashboard() {
    return (
        <AdminLayout title="Admin Dashboard">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                <p className="mt-2 text-sm text-gray-700">
                    Welcome to your admin dashboard. Here's an overview of your website.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item) => (
                    <div
                        key={item.name}
                        className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                    >
                        <dt>
                            <div className="absolute bg-indigo-500 rounded-md p-3">
                                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
                        </dt>
                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <a href={item.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                                        View all<span className="sr-only"> {item.name}</span>
                                    </a>
                                </div>
                            </div>
                        </dd>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <div className="bg-white shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
                        <div className="mt-5">
                            <div className="text-sm text-gray-500">
                                No recent activity to show.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
