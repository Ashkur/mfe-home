import { NextResponse } from 'next/server';

export function middleware(req) {
    console.log(req.nexUrl.href)
    return NextResponse.next()
}