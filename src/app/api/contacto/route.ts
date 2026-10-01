import { db } from "@/lib/db";

export async function GET() {
    try {
        const [contactosRecientes] = await db.execute(`
                SELECT * FROM tb_contacto 
                ORDER BY fecha_registro DESC
                LIMIT 5
            `
        )

        const [contactos] = await db.execute(`
                SELECT * FROM tb_contacto
                ORDER BY fecha_registro DESC
            `
        )

        return Response.json({
            contactosRecientes,
            contactos
        })
    } catch (error) {
        console.error("Error al obtener datos:", error)

        return Response.json(
            { error: "No se pudieron obtener los contactos" },
            { status: 500 }
        )
    }
}