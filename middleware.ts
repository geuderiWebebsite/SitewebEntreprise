import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const noindexPaths = [
  "/serrurier-paris",
  "/serrurier-boulogne-billancourt",
  "/serrurier-neuilly",
  "/serrurier-vincennes",
  "/serrurier-saint-denis",
  "/serrurier-creteil",
  "/serrurier-montreuil",
];

const permanentRedirects: Record<string, string> = {
  "/old-page": "/new-page",
  "/services-serrurerie": "/services",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.next();
  }

  if (permanentRedirects[pathname]) {
    return NextResponse.redirect(
      new URL(permanentRedirects[pathname], request.url),
      { status: 301 }
    );
  }

  if (pathname.endsWith("/") && pathname !== "/") {
    const newUrl = new URL(request.url);
    newUrl.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(newUrl, { status: 301 });
  }

  const response = NextResponse.next();

  if (noindexPaths.includes(pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|logo.jpg|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
