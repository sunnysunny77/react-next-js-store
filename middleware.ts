import { NextResponse } from "next/server"

export function middleware(request){

    const token = request.cookies.get("Store-App");
    
    if (request.nextUrl.pathname.startsWith("/store") && !token) {

        return NextResponse.redirect( new URL("/auth", request.url) );
    };
   
    if (request.nextUrl.pathname.startsWith("/auth") && token) {

        return NextResponse.redirect( new URL("/store", request.url) );
    };
};
