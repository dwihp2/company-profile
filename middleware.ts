import { NextResponse } from 'next/server';

export function middleware() {
  // Get response
  const response = NextResponse.next();

  // Set cache control headers to prevent aggressive caching
  response.headers.set('Cache-Control', 'no-store, max-age=0');
  response.headers.set('CDN-Cache-Control', 'no-store, max-age=0');
  response.headers.set('Vercel-CDN-Cache-Control', 'no-store, max-age=0');
  
  return response;
}

// Only run middleware on frontend pages, not admin or API routes
export const config = {
  matcher: ['/((?!api|admin|_next/static|_next/image|favicon.ico).*)'],
};
