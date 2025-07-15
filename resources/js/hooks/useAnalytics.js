import { useEffect } from 'react';
import axios from 'axios';

export const useAnalytics = () => {
    useEffect(() => {
        // Track page view when component mounts
        const trackPageView = async () => {
            try {
                await axios.post('/api/v1/analytics/track', {
                    url: window.location.href
                });
            } catch (error) {
                console.log('Analytics tracking failed:', error);
                // Fail silently to not break the user experience
            }
        };

        // Track initial page load
        trackPageView();

        // Track SPA navigation if using history API
        const handlePopState = () => {
            setTimeout(trackPageView, 100); // Small delay to ensure URL has changed
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);
};

export default useAnalytics;
