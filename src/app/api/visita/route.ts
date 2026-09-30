import { db } from "@/lib/db";

export async function GET() {
    try {
        const [rows] = await db.execute(
            `SELECT dispositivo, COUNT(*) AS total FROM tb_visita GROUP BY dispositivo`
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

export async function POST(request: Request) {
    try {
        const data = await request.json()

        const { dispositivo, navegador } = data;

        await db.execute(
            `INSERT INTO tb_visita (dispositivo, navegador)
             VALUES (?, ?)`,
            [dispositivo, navegador]
        )

        return Response.json({
            success: true,
            message: "Visita registrada correctamente",
        })
    } catch (error) {
        console.error("Error al registrar visita:", error)

        return Response.json(
            { error: "No se pudo registrar la visita" },
            { status: 500 }
        )
    }
}