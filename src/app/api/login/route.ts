import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { COOKIE, DURACION, crearSesion } from "@/lib/auth"

export async function POST(req: Request) {
    const { usuario, password } = await req.json().catch(() => ({}))

    const usuarioOk = usuario === process.env.ADMIN_USER
    const passwordOk = await bcrypt.compare(
        String(password ?? ""),
        process.env.ADMIN_PASSWORD_HASH ?? ""
    )

    if (!usuario || !password) {
        return NextResponse.json({ error: "Usuario o contraseña incorrectos" }, { status: 401 })
    }

    const token = await crearSesion(usuario)

    const res = NextResponse.json({ ok: true })
    res.cookies.set(COOKIE, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: DURACION
    })

    return res
}