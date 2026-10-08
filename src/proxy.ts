import { NextRequest, NextResponse } from "next/server"
import { COOKIE, verificarSesion } from "@/lib/auth"

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl
    const sesion = await verificarSesion(req.cookies.get(COOKIE)?.value)

    if (pathname === "/login") {
        return sesion
            ? NextResponse.redirect(new URL("/dashboard", req.url))
            : NextResponse.next()
    }

    if (pathname.startsWith("/api/")) {
        const protegida =
            pathname.startsWith("/api/contacto") ||
            (pathname.startsWith("/api/visita") && req.method === "GET")

        if (protegida && !sesion) {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 })
        }

        return NextResponse.next()
    }

    if (!sesion) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/login", "/dashboard/:path*", "/api/contacto/:path*", "/api/visita/:path*"]
}