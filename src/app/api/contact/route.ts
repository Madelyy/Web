import { db } from "@/lib/db"
import { T } from "@/lib/tablas"
import { emailDiseño } from "@/lib/emailDiseño"
import { Resend } from "resend"
import type { ResultSetHeader } from "mysql2"

const resend = new Resend(process.env.RESEND_API_KEY)

const texto = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max)
const cantidad = (v: unknown) => Math.min(99, Math.max(0, Math.floor(Number(v) || 0)))

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => null)

        if (!body) {
            return Response.json({ error: "Solicitud inválida" }, { status: 400 })
        }

        if (body.website) {
            return Response.json({ success: true })
        }

        const nombre = texto(body.nombre, 120)
        const cargo = texto(body.cargo, 80) || null
        const empresa = texto(body.empresa, 150)
        const ruc = texto(body.ruc, 11).replace(/\D/g, "") || null
        const correo = texto(body.correo, 150)
        const telefono = texto(body.telefono, 20)
        const sector = texto(body.sector, 80) || null
        const servicio = texto(body.servicio, 150)
        const plazo = texto(body.plazo, 40) || null
        const mensaje = texto(body.mensaje, 3000) || null
        const rsw = cantidad(body.embarcaciones?.rsw)
        const convencional = cantidad(body.embarcaciones?.convencional)

        if (!nombre || !empresa || !telefono || !servicio || !/^\S+@\S+\.\S+$/.test(correo) || body.aceptaDatos !== true) {
            return Response.json({ error: "Faltan datos obligatorios" }, { status: 400 })
        }

        const [result] = await db.execute<ResultSetHeader>(
            `INSERT INTO ${T.contacto}
                (nombre, cargo, empresa, ruc, correo, telefono, sector, servicio, plazo, mensaje, rsw_cantidad, convencional_cantidad, acepta_datos)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`,
            [nombre, cargo, empresa, ruc, correo, telefono, sector, servicio, plazo, mensaje, rsw, convencional]
        )

        await db.execute(
            `INSERT INTO ${T.historial} (contacto_id, estado_anterior, estado_nuevo) VALUES (?, null, 'Pendiente')`,
            [result.insertId]
        )

        try {
            const { error } = await resend.emails.send({
                from: "Albatros Asociados SAC <onboarding@resend.dev>",
                to: ["madely126@gmail.com"],
                subject: `Nueva consulta de ${empresa}`,
                replyTo: correo,
                html: emailDiseño({
                    id: result.insertId,
                    nombre,
                    cargo,
                    empresa,
                    ruc,
                    correo,
                    telefono,
                    sector,
                    servicio,
                    plazo,
                    mensaje,
                    rsw,
                    convencional
                })
            })

            if (error) console.error("Error de Resend", error)
        } catch (mailError) {
            console.error("No se pudo enviar el correo", mailError)
        }

        return Response.json({ success: true, id: result.insertId }, { status: 201 })
    } catch (error) {
        console.error(error)

        return Response.json({ error: "Error al procesar la solicitud" }, { status: 500 })
    }
}