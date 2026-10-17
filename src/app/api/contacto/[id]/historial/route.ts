import type { RowDataPacket } from "mysql2"
import { db } from "@/lib/db"
import { T } from "@/lib/tablas"

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const contactoId = Number(id)

    if (!Number.isInteger(contactoId) || contactoId <= 0) {
        return Response.json({ error: "Id inválido" }, { status: 400 })
    }

    try {
        const [historial] = await db.execute<RowDataPacket[]>(`
            SELECT id, contacto_id, estado_anterior, estado_nuevo, autor, fecha
            FROM ${T.historial}
            WHERE contacto_id = ?
            ORDER BY fecha DESC, id DESC`,
            [contactoId]
        )

        return Response.json({ historial })
    } catch (error) {
        console.error("Error al obtener el historial", error)

        return Response.json({ error: "No se pudo obtener el historial" }, { status: 500 })
    }
}