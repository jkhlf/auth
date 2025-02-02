import { NextResponse, type MiddlewareConfig, type NextRequest } from "next/server"

const publicRoutes = []
 
const REDIRECT_WEN_NOT_AUTHENTICATED = '/login'

export function middleware (request: NextRequest) {
    const path = request.nextUrl.pathname;

    return NextResponse.next();
}

export const config: MiddlewareConfig  = {
    matcher: [
         /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ],
}