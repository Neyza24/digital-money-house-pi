
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  // Si el usuario está autenticado y la ruta es "/", redirige a /home
  if (pathname === "/" && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // Rutas protegidas: si no hay token, redirige al login
  if (pathname.startsWith("/home") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Evita que usuarios logueados accedan a /login o /register
  if ((pathname === "/login" || pathname === "/register" || pathname === "/") && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home/:path*", "/login", "/register"],
};
