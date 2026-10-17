import { cookies } from "next/headers"
import type { ResultSetHeader, RowDataPacket } from "mysql2"
import { db } from "@/lib/db"
import { T } from "@/lib/tablas"
import { COOKIE, verificarSesion } from "@/lib/auth"

const leerId = async (params: Promise<{ id: string }>) => {
    const { id } = await params
    const n = Number(id)

    return Number.isInteger(n) && n > 0 ? n : null
}

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const contactoId = await leerId(params)

    if (!contactoId) {
        return Response.json({ error: "Id inválido" }, { status: 400 })
    }

    try {
        const [notas] = await db.execute<RowDataPacket[]>(`
            SELECT id, contacto_id, autor, texto, fecha
            FROM ${T.notas}
            WHERE contacto_id = ?
            ORDER BY fecha DESC, id DESC`,
            [contactoId]
        )

        return Response.json({ notas })
    } catch (error) {
        console.error("Error al obtener los datos", error)

        return Response.json({ error: "No se pudieron leer las notas" }, { status: 500 })
    }
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const contactoId = await leerId(params)
    if (!contactoId) {
        return Response.json({ error: "Id inválido" }, { status: 400 })
    }
 
    const { texto } = await request.json().catch(() => ({}))
    const limpio = String(texto ?? "").trim().slice(0, 2000)
 
    if (!limpio) {
        return Response.json({ error: "La nota no puede estar vacía" }, { status: 400 })
    }
 
    try {
        const [existe] = await db.execute<RowDataPacket[]>(
            `SELECT id FROM ${T.contacto} WHERE id = ?`,
            [contactoId]
        )
        if (existe.length === 0) {
            return Response.json({ error: "Consulta no encontrada" }, { status: 404 })
        }
 
        const sesion = await verificarSesion((await cookies()).get(COOKIE)?.value)
        const autor = String(sesion?.usuario ?? "Sistema")
 
        const [resultado] = await db.execute<ResultSetHeader>(
            `INSERT INTO ${T.notas} (contacto_id, autor, texto) VALUES (?, ?, ?)`,
            [contactoId, autor, limpio]
        )
 
        const [filas] = await db.execute<RowDataPacket[]>(
            `SELECT id, contacto_id, autor, texto, fecha FROM ${T.notas} WHERE id = ?`,
            [resultado.insertId]
        )
 
        return Response.json({ nota: filas[0] }, { status: 201 })
    } catch (error) {
        console.error("Error al guardar la nota:", error)
        return Response.json({ error: "No se pudo guardar la nota" }, { status: 500 })
    }
}