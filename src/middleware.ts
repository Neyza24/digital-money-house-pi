
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

  
  const token = request.cookies.get('token')?.value;

  const { pathname } = request.nextUrl;

  // 🔒 Rutas protegidas: si no hay token, redirige al login
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 🚫 Evitar que usuarios logueados accedan a /login o /register
  if ((pathname === '/login' || pathname === '/register') && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
   
}

export const config = {
	matcher: ['/dashboard/:path*', '/login', '/register'],
};
