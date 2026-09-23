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
                <div style="display: flex; justify-content: center; width: 100%; font-family: Arial, Helvetica, sans-serif; color: #333; line-height: 1.6">
                    <div style="width: 100%; max-width: 400px; margin: 0 auto; text-align: left">   
                        <h2 style="background-color: #DDE8F5; padding: 15px; text-align: center; margin-top: 0;">NUEVA SOLICITUD DE CONTACTO</h2>
                        <p style="padding-left: 5px; padding-right: 5px">
                            Se ha recibido una nueva solicitud de contacto a través del sitio web de
                            <strong>Albatros Asociados SAC</strong>
                        </p>

                        <div style="padding-left: 10px; padding-right: 10px">
                            <h3 style="color: #2E52A8; margin-top: 25px;">DATOS DEL SOLICITANTE</h3>

                            <div style="display: flex; justify-content: space-between; padding-left: 15%">
                                <div style="text-align: left; font-weight: bold;">
                                    <p style="margin: 8px 0;">Nombre:</p>
                                    <p style="margin: 8px 0;">Empresa:</p>
                                    <p style="margin: 8px 0;">Correo:</p>
                                    <p style="margin: 8px 0;">Teléfono:</p>
                                </div>

                                <div style="text-align: right; flex-grow: 1; padding-left: 20%">
                                    <p style="margin: 8px 0;">${nombre}</p>
                                    <p style="margin: 8px 0;">${empresa}</p>
                                    <p style="margin: 8px 0;">${correo}</p>
                                    <p style="margin: 8px 0;">${telefono}</p>
                                </div>
                            </div>

                            <h3 style="color: #2E52A8; margin-top: 25px;">INFORMACIÓN DE LA SOLICITUD</h3>

                            <div style="display: flex; justify-content: space-between; padding-left: 15%">
                                <div style="text-align: left; font-weight: bold;">
                                    <p style="margin: 8px 0;">Sector:</p>
                                    <p style="margin: 8px 0;">Servicio:</p>
                                </div>

                                <div style="text-align: right; flex-grow: 1; padding-left: 20%">
                                    <p style="margin: 8px 0;">${sector}</p>
                                    <p style="margin: 8px 0;">${servicio}</p>
                                </div>
                            </div>

                            <div style="margin-top: 25px;">
                                <h3 style="color: #2E52A8; margin-bottom: 10px"><strong>MENSAJE</strong></h3>
                                <div style="background-color: #F5F7F9; padding: 15px; border-left: 4px solid #123B5D; margin-bottom: 20px;"> 
                                    ${mensaje} 
                                </div>
                            </div>
                        </div>
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