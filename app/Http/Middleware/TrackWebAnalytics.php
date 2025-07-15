<?php

namespace App\Http\Middleware;

use App\Models\WebAnalytics;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TrackWebAnalytics
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Only track GET requests and successful responses
        if ($request->isMethod('GET') && $response->getStatusCode() === 200) {
            // Skip tracking for admin routes, API routes, and assets
            $path = $request->path();
            $skipPaths = ['admin', 'api', 'assets', '_debugbar', 'storage'];

            $shouldSkip = false;
            foreach ($skipPaths as $skipPath) {
                if (str_starts_with($path, $skipPath)) {
                    $shouldSkip = true;
                    break;
                }
            }

            if (!$shouldSkip) {
                try {
                    WebAnalytics::create([
                        'url' => $request->fullUrl(),
                        'ip_address' => $request->ip(),
                        'user_agent' => $request->userAgent() ?? '',
                        'referrer' => $request->header('referer'),
                        'viewed_at' => now()
                    ]);
                } catch (\Exception $e) {
                    // Silently handle any errors to not break the app
                    logger()->error('Failed to track web analytics: ' . $e->getMessage());
                }
            }
        }

        return $response;
    }
}
