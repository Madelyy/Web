import { db } from "@/lib/db"
import { T } from "@/lib/tablas"

export async function GET() {
    try {
        const [contactosRecientes] = await db.execute(`
            SELECT * FROM ${T.contacto}
            ORDER BY fecha_registro DESC
            LIMIT 5
        `)

        const [contactos] = await db.execute(`
            SELECT * FROM ${T.contacto}
            ORDER BY fecha_registro    
        `)

        return Response.json({
            contactosRecientes,
            contactos
        })
    } catch (error) {
        console.error("Error al obtener datos", error)

        return Response.json(
            { error: "No se pudieron obtener los contactos" },
            { status: 500 }
        )
    }
}