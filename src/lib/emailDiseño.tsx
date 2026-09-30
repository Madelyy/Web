export function emailDiseño(
    nombre: string,
    empresa: string,
    correo: string,
    telefono: string,
    sector: string,
    servicio: string,
    mensaje: string
) {
    return `
        <div style="margin: 0; padding: 0; background-color: #EEF3FA;">
            <div style="display: none; max-height: 0; overflow: hidden; opacity: 0; color: #EEF3FA;">
                ${nombre} de ${empresa} ha enviado una consulta desde el sitio web.
            </div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color: #EEF3FA;">
                <tr>
                    <td align="center" style="padding: 32px 12px;">
                        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
                            style="width: 100%; max-width: 600px; background-color: #FFFFFF; border: 1px solid #DDE8F5; border-radius: 12px; overflow: hidden;">
                            <tr>
                                <td bgcolor="#243F73" style="background-color: #243F73; padding: 28px 32px;">
                                    <div
                                        style="font-family: Arial, Helvetica, sans-serif; font-size: 20px; line-height: 26px; font-weight: bold; color: #FFFFFF; letter-spacing: 0.5px;">
                                        Albatros Asociados SAC
                                    </div>
                                    <div
                                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 20px; color: #96BDD8; margin-top: 4px;">
                                        Consultoría técnica · Capacitación · Ingeniería
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 36px 32px 8px 32px;">
                                    <h1
                                        style="margin: 0 0 12px 0; font-family: Arial, Helvetica, sans-serif; font-size: 24px; line-height: 30px; font-weight: bold; color: #1C2B3D;">
                                        Nueva solicitud de contacto
                                    </h1>
                                    <p
                                        style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 24px; color: #445569;">
                                        Se ha recibido una nueva solicitud de contacto a través del sitio web de
                                        <strong style="color: #1C2B3D;">Albatros Asociados SAC</strong>.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 32px;">
                                    <div
                                        style="padding: 28px 0 4px 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 16px; font-weight: bold; letter-spacing: 1px; color: #2E52A8;">
                                        DATOS DEL SOLICITANTE
                                    </div>
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="34%" valign="top"
                                                style="padding: 14px 12px 14px 0; border-bottom: 1px solid #E8EFF8; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 22px; color: #6E85A0;">
                                                Nombre</td>
                                            <td align="right" valign="top"
                                                style="padding: 14px 0; border-bottom: 1px solid #E8EFF8; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 22px; font-weight: bold; color: #1C2B3D;">
                                                ${nombre}</td>
                                        </tr>
                                        <tr>
                                            <td width="34%" valign="top"
                                                style="padding: 14px 12px 14px 0; border-bottom: 1px solid #E8EFF8; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 22px; color: #6E85A0;">
                                                Empresa</td>
                                            <td align="right" valign="top"
                                                style="padding: 14px 0; border-bottom: 1px solid #E8EFF8; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 22px; font-weight: bold; color: #1C2B3D;">
                                                ${empresa}</td>
                                        </tr>
                                        <tr>
                                            <td width="34%" valign="top"
                                                style="padding: 14px 12px 14px 0; border-bottom: 1px solid #E8EFF8; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 22px; color: #6E85A0;">
                                                Correo</td>
                                            <td align="right" valign="top"
                                                style="padding: 14px 0; border-bottom: 1px solid #E8EFF8; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 22px; font-weight: bold; color: #2E52A8; word-break: break-all;">
                                                <a href="mailto:${correo}"
                                                    style="color: #2E52A8; text-decoration: none;">${correo}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="34%" valign="top"
                                                style="padding: 14px 12px 14px 0; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 22px; color: #6E85A0;">
                                                Teléfono</td>
                                            <td align="right" valign="top"
                                                style="padding: 14px 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 22px; font-weight: bold; color: #1C2B3D;">
                                                ${telefono}</td>
                                        </tr>
                                    </table>
                                    <div
                                        style="padding: 28px 0 4px 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 16px; font-weight: bold; letter-spacing: 1px; color: #2E52A8;">
                                        INFORMACIÓN DE LA SOLICITUD
                                    </div>
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="34%" valign="top"
                                                style="padding: 14px 12px 14px 0; border-bottom: 1px solid #E8EFF8; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 22px; color: #6E85A0;">
                                                Sector</td>
                                            <td align="right" valign="top"
                                                style="padding: 14px 0; border-bottom: 1px solid #E8EFF8; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 22px; font-weight: bold; color: #1C2B3D;">
                                                ${sector}</td>
                                        </tr>
                                        <tr>
                                            <td width="34%" valign="top"
                                                style="padding: 14px 12px 14px 0; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 22px; color: #6E85A0;">
                                                Servicio</td>
                                            <td align="right" valign="top"
                                                style="padding: 14px 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 22px; font-weight: bold; color: #1C2B3D;">
                                                ${servicio}</td>
                                        </tr>
                                    </table>

                                    <div
                                        style="padding: 28px 0 12px 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 16px; font-weight: bold; letter-spacing: 1px; color: #2E52A8;">
                                        MENSAJE
                                    </div>
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="4" bgcolor="#2E52A8"
                                                style="background-color: #2E52A8; width: 4px; font-size: 0; line-height: 0;">
                                                &nbsp;</td>
                                            <td bgcolor="#F5F8FC"
                                                style="background-color: #F5F8FC; padding: 18px 20px; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 24px; color: #1C2B3D; white-space: pre-wrap; word-break: break-word;">
                                                ${mensaje}</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 36px 32px 0 32px;">
                                    <div
                                        style="border-top: 1px solid #E8EFF8; padding: 20px 0 28px 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 18px; color: #6E85A0; text-align: center;">
                                        Mensaje generado automáticamente desde el formulario de contacto del sitio web.
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    `
}