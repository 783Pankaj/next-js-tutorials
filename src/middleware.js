import { NextResponse } from "next/server";


export default function middleware(request){
    console.log("middleware worrking123");
    // console.log(request)
    if(request.nextUrl.pathname!="/login"){
    return NextResponse.redirect(new URL("/login", request.url))
    }
}

export const config={
     matcher:["/about/aboutstudent/:path*", "/study/:path*"]
}