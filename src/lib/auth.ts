import { SignJWT, jwtVerify } from "jose"

export const COOKIE = "albatros_sesion"
export const DURACION = 60 * 60 * 8

const secret = () => new TextEncoder().encode(process.env.SESSION_SECRET)

export const crearSesion = (usuario: string) =>
    new SignJWT({ usuario })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("8h")
        .sign(secret())

export async function verificarSesion(token?: string) {
    if (!token) return null

    try {
        const { payload } = await jwtVerify(token, secret())

        return payload
    } catch {
        return null
    }
}