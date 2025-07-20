import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function WebsiteAnalytics({ auth, analytics }) {
    const [selectedDate, setSelectedDate] = useState('');

    // Function to shorten URL
    const shortenUrl = (url) => {
        if (!url) return '';

        // Remove protocol and www
        let shortUrl = url.replace(/^https?:\/\/(www\.)?/, '');

        // Remove domain if it contains navadhanarama
        if (shortUrl.includes('navadhanarama')) {
            const parts = shortUrl.split('/');
            if (parts.length > 1) {
                return parts.slice(1).join('/');
            }
        }

        return shortUrl;
    };

    // Filter analytics by selected date
    const filteredAnalytics = selectedDate
        ? analytics.webAnalytics.filter(item => {
            if (!item.lastViewed) return false;
            const itemDate = new Date(item.lastViewed).toISOString().split('T')[0];
            return itemDate === selectedDate;
        })
        : analytics.webAnalytics;

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Website Analytics
                    </h2>
                    <div className="text-sm text-gray-600">
                        Last updated: {new Date().toLocaleDateString('id-ID')}
                    </div>
                </div>
            }
        >
            <Head title="Website Analytics" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2 sm:mb-0">Web Analytics by URL</h3>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 text-sm"
                                        placeholder="Filter by date"
                                    />
                                    {selectedDate && (
                                        <button
                                            onClick={() => setSelectedDate('')}
                                            className="text-sm text-gray-500 hover:text-gray-700 underline"
                                        >
                                            Clear filter
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <div className="min-w-full">
                                    <div className="overflow-hidden border border-gray-200 rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
                                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unique IPs</th>
                                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Viewed</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {filteredAnalytics && filteredAnalytics.length > 0 ? (
                                                    filteredAnalytics.map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50">
                                                            <td className="px-3 py-4 text-sm text-blue-700">
                                                                <div className="max-w-xs truncate" title={row.url}>
                                                                    {shortenUrl(row.url)}
                                                                </div>
                                                            </td>
                                                            <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">{row.views}</td>
                                                            <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">{row.uniqueIps}</td>
                                                            <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {row.lastViewed ? new Date(row.lastViewed).toLocaleString('id-ID') : '-'}
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="px-3 py-8 text-center text-gray-500">
                                                            {selectedDate ? 'No data found for selected date' : 'No analytics data available'}
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {filteredAnalytics && filteredAnalytics.length > 0 && (
                                <div className="mt-4 text-sm text-gray-600">
                                    Showing {filteredAnalytics.length} {filteredAnalytics.length === 1 ? 'result' : 'results'}
                                    {selectedDate && ` for ${new Date(selectedDate).toLocaleDateString('id-ID')}`}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
