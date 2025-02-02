import { NextResponse, type MiddlewareConfig, type NextRequest } from "next/server"

const publicRoutes = [
    {path: 'login', whenAuthenticated: 'redirect'},
    {path: 'register', whenAuthenticated: 'redirect'},
    {path: 'pricing', whenAuthenticated: 'next'},

]
 
const REDIRECT_WEN_NOT_AUTHENTICATED = '/login'

export function middleware (request: NextRequest) {
    const path = request.nextUrl.pathname;
    const publicRoute = publicRoutes.find(route => route.path === path);
    const authToken = request.cookies.get('token')

    if(!authToken && publicRoute) {
        return NextResponse.next()
    }

    if(!authToken && !publicRoute) {
        return NextResponse.redirect(REDIRECT_WEN_NOT_AUTHENTICATED)
    }

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