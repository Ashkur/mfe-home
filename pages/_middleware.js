import { NextResponse } from 'next/server';

export function middleware(req) {
    if(req.nextUrl.href.includes('/slug'))
    return NextResponse.next()
}