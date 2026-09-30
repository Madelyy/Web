import { db } from "@/lib/db";

export async function GET() {
    try {
        const [rows] = await db.execute(
            `SELECT * FROM tb_contacto ORDER BY fecha_registro DESC`
        )

        return Response.json(rows)
    } catch (error) {
        console.error("Error al obtener datos:", error)

        return Response.json(
            { error: "No se pudieron obtener los contactos" },
            { status: 500 }
        )
    }
}