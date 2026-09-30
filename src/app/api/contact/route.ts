import { db } from "@/lib/db";
import { emailDiseño } from "@/lib/emailDiseño";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const {
            nombre,
            empresa,
            correo,
            telefono,
            sector,
            servicio,
            mensaje
        } = await request.json();

        if (!nombre || !empresa || !telefono || !sector || !servicio || !mensaje) {
            return Response.json({ error: "Todos los campos son obligatorios" }, { status: 400 })
        }

        await db.execute(
            `INSERT INTO tb_contacto (nombre, empresa, correo, telefono, sector, servicio, mensaje) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                nombre,
                empresa,
                correo,
                telefono,
                sector,
                servicio,
                mensaje
            ]
        )

        const { data, error } = await resend.emails.send({
            from: "Albatros Asociados SAC <onboarding@resend.dev>",
            to: ["madely126@gmail.com"],
            subject: `Nueva consulta de ${empresa}`,
            replyTo: correo,
            html: emailDiseño(
                nombre,
                empresa,
                correo,
                telefono,
                sector,
                servicio,
                mensaje
            )
        })

        if (error) {
            console.error(error)

            return Response.json({ error: "No se pudo enviar el correo" }, { status: 500 })
        }

        return Response.json({
            success: true,
            data
        })
    } catch (error) {
        console.error(error)

        return Response.json({ error: "Error al procesar la solicitud" }, { status: 500 })
    }
}