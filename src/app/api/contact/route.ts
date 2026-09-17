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

        const { data, error } = await resend.emails.send({
            from: "Albatros Asociados SAC <onboarding@resend.dev>",
            to: ["madely126@gmail.com"],
            subject: `Nueva consulta de ${empresa}`,
            replyTo: correo,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                    <h2>NUEVA SOLICITUD DE CONTACTO</h2>
                    <p>
                        Se ha recibido una nueva solicitud de contacto a través del sitio web de
                        <strong>Albatros Asociados SAC</strong>
                    </p>

                    <h3>DATOS DEL SOLICITANTE</h3>

                    <p><strong>Nombre:</strong>     ${nombre}   </p>
                    <p><strong>Empresa:</strong>    ${empresa}  </p>
                    <p><strong>Correo:</strong>     ${correo}   </p>
                    <p><strong>Teléfono:</strong>   ${telefono} </p>

                    <h3>INFORMACIÓN DE LA SOLICITUD</h3>

                    <p><strong>Sector:</strong>     ${sector}   </p>
                    <p><strong>Servicio:</strong>   ${servicio} </p>

                    <h3><strong>MENSAJE</strong></h3>

                    <div style="background-color: #F5F7F9; padding: 15px; border-left: 4px solid #123B5D; margin-bottom: 20px"> 
                        ${mensaje} 
                    </div>
                </div>
            `
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