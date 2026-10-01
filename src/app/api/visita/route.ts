import { db } from "@/lib/db";
import type { RowDataPacket } from "mysql2";

type DispositivoRow = RowDataPacket & {
    dispositivo: string
    total: number
}

type NavegadorRow = RowDataPacket & {
    navegador: string
    total: number
}

type VisitaDiaRow = RowDataPacket & {
    fecha: string
    total: number
}

export async function GET() {
    try {
        const [dispositivos] = await db.execute<DispositivoRow[]>(`
            SELECT dispositivo, COUNT(*) AS total 
            FROM tb_visita 
            GROUP BY dispositivo
            ORDER BY total DESC
        `)

        const [navegadores] = await db.execute<NavegadorRow[]>(`
            SELECT navegador, COUNT(*) AS total
            FROM tb_visita
            GROUP BY navegador
            ORDER BY total DESC
        `)

        const [visitasPorDia] = await db.execute<VisitaDiaRow[]>(`
            SELECT 
                DATE(fecha_registro) AS fecha,
                COUNT(*) AS total
            FROM tb_visita
            GROUP BY DATE(fecha_registro)
            ORDER BY DATE(fecha_registro)
        `)

        return Response.json({
            dispositivos,
            navegadores,
            dispositivoPrincipal: dispositivos[0] ?? null,
            navegadorPrincipal: navegadores[0] ?? null,
            visitasPorDia
        })

    } catch (error) {
        console.error("Error al obtener datos:", error)

        return Response.json(
            { error: "No se pudieron obtener las visitas" },
            { status: 500 }
        )
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json()

        const { dispositivo, navegador } = data

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