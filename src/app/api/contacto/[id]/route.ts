import { cookies } from "next/headers"
import type { RowDataPacket } from "mysql2"
import { db } from "@/lib/db"
import { T } from "@/lib/tablas"
import { COOKIE, verificarSesion } from "@/lib/auth"

const ESTADOS = ["Pendiente", "En proceso", "Atendido", "Descartado"]
const PRIORIDADES = ["Alta", "Media", "Baja"]

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const contactoId = Number(id)

    if (!Number.isInteger(contactoId) || contactoId <= 0) {
        return Response.json({ error: "Id inválido" }, { status: 400 })
    }

    const { estado, prioridad } = await request.json().catch(() => ({}))

    if (estado === undefined && prioridad === undefined) {
        return Response.json({ error: "Nada que actualizar" }, { status: 400 })
    }

    if (estado !== undefined && !ESTADOS.includes(estado)) {
        return Response.json({ error: "Estado no válido" })
    }

    if (prioridad !== undefined && !PRIORIDADES.includes(prioridad)) {
        return Response.json({ error: "Prioridad no válida" }, { status: 400 })
    }

    try {
        const [rows] = await db.execute<RowDataPacket[]>(
            `SELECT estado FROM ${T.contacto} WHERE id = ?`,
            [contactoId]
        )

        if (rows.length === 0) {
            return Response.json({ error: "Consulta no encontrada" }, { status: 404 })
        }

        const estadoAnterior = rows[0].estado as string

        const sets: string[] = []
        const valores: (string | number)[] = []

        if (estado !== undefined) {
            sets.push("estado = ?")
            valores.push(estado)
        }

        if (prioridad !== undefined) {
            sets.push("prioridad = ?")
            valores.push(prioridad)
        }

        await db.execute(
            `UPDATE ${T.contacto} SET ${sets.join(", ")} WHERE id = ?`,
            [...valores, contactoId]
        )

        if (estado !== undefined && estado !== estadoAnterior) {
            const sesion = await verificarSesion((await cookies()).get(COOKIE)?.value)
            await db.execute(
                `INSERT INTO ${T.historial} (contacto_id, estado_anterior, estado_nuevo, autor) VALUES (?, ?, ?, ?)`,
                [contactoId, estadoAnterior, estado, String(sesion?.usuario ?? "")]
            )
        }

        return Response.json({ success: true })
    } catch (error) {
        console.error("Error al actualizar la consulta:", error)

        return Response.json({ error: "No se pudo actualizar la consulta" }, { status: 500 })
    }
}