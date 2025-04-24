import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

  const token = request.cookies.get("Store-App");

  if (request.nextUrl.pathname === "/store" &&  !token) {

    return NextResponse.redirect(new URL("/", request.url));
  };

  if (request.nextUrl.pathname === "/authentication" &&  token) {

    return NextResponse.redirect(new URL("/store", request.url));
  };

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline' https://*.paypal.com;
    img-src 'self' blob: data: https://*.paypalobjects.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    connect-src 'self' https://www.sandbox.paypal.com https://www.paypal.com;
    form-action 'self';
    frame-src https://www.sandbox.paypal.com;
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `;

  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, " ").trim();

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-nonce", nonce);

  requestHeaders.set(

    'Content-Security-Policy', contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({

    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(

    'Content-Security-Policy',contentSecurityPolicyHeaderValue
  );

  return response;
};

export const config = {

  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};