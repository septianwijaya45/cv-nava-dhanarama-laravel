import AdminLayout from '@/Layouts/AdminLayout';
import {
    EyeIcon,
    GlobeAltIcon,
    CalendarIcon,
    ChartBarIcon
} from '@heroicons/react/24/outline';

export default function Index({ stats, topPages, recentVisits }) {
    return (
        <AdminLayout title="Web Analytics">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Web Analytics</h1>
                <p className="mt-2 text-sm text-gray-700">
                    Monitor your website traffic and user engagement.
                </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <CalendarIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">Today's Visits</dt>
                                    <dd className="text-lg font-medium text-gray-900">{stats.today}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <ChartBarIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">This Week</dt>
                                    <dd className="text-lg font-medium text-gray-900">{stats.week}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <GlobeAltIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">This Month</dt>
                                    <dd className="text-lg font-medium text-gray-900">{stats.month}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Top Pages */}
                <div className="bg-white shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Top Pages</h3>
                        <div className="flow-root">
                            <ul className="-my-5 divide-y divide-gray-200">
                                {topPages.length === 0 ? (
                                    <li className="py-4 text-sm text-gray-500 text-center">
                                        No page visits recorded yet.
                                    </li>
                                ) : (
                                    topPages.map((page, index) => (
                                        <li key={index} className="py-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <EyeIcon className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate">
                                                        {page.url}
                                                    </p>
                                                </div>
                                                <div className="inline-flex items-center text-sm font-semibold text-gray-900">
                                                    {page.visits} visits
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Recent Visits */}
                <div className="bg-white shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Visits</h3>
                        <div className="flow-root">
                            <ul className="-my-5 divide-y divide-gray-200">
                                {recentVisits.length === 0 ? (
                                    <li className="py-4 text-sm text-gray-500 text-center">
                                        No recent visits recorded.
                                    </li>
                                ) : (
                                    recentVisits.slice(0, 10).map((visit, index) => (
                                        <li key={index} className="py-3">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate">
                                                        {visit.url}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {visit.ip_address} • {new Date(visit.viewed_at).toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
