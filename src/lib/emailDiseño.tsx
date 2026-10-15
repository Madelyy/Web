import { DatosEmail } from "@/types/datosEmail"

const esc = (v: unknown) =>
    String(v ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")

const F = "Arial, Helvetica, sans-serif"

const titulo = (texto: string) => `
        <div style="padding: 28px 0 4px 0; font-family: ${F}; font-size: 12px; line-height: 16px; font-weight: bold; letter-spacing: 1px; color: #2E52A8;">
            ${texto}
        </div>
    `

const tabla = (filas: [string, string | null][]) => {
    const visibles = filas.filter(([, valor]) => valor)

    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            ${visibles.map(([etiqueta, valor], i) => {
                const borde = i < visibles.length - 1 ? "border-bottom: 1px solid #E8EFF8;" : ""
                return `
                     <tr>
                        <td width="34%" valign="top" style="padding: 14px 12px 14px 0; ${borde} font-family: ${F}; font-size: 13px; line-height: 22px; color: #6E85A0;">${etiqueta}</td>
                        <td align="right" valign="top" style="padding: 14px 0; ${borde} font-family: ${F}; font-size: 15px; line-height: 22px; font-weight: bold; color: #1C2B3D; word-break: break-word;">${valor}</td>
                    </tr>
                `
                }).join("")}
        </table>
    `
}

const enlace = (href: string, texto: string) => `
        <a href="${esc(href)}" style="color #2E52A8; text-decoration: none;">${esc(texto)}></a>
    `

const pastilla = (texto: string, fondo = "#EBF0FA", color = "#2E52A8") => `
        <span style="display: inline-block; margin: 0 8px 8px 0; padding: 6px 12px; border-radius: 999px; background-color: ${fondo}; font-family: ${F}; font-size: 12px; line-height: 16px; font-weight: bold; color: ${color};">
            ${esc(texto)}
        </span>
    `

export function emailDiseño(d: DatosEmail) {
    const referencia = d.id ? `N.º ALB-${new Date().getFullYear()}-${String(d.id).padStart(4, "0")}` : ""
    const recibido = new Date().toLocaleString("es-PE", { timeZone: "America/Lima", dateStyle: "long", timeStyle: "short" })
    const totalEmbarcaciones = d.rsw + d.convencional
    const urgente = d.plazo === "Lo antes posible"
    const telefonoLink = d.telefono.replace(/[^\d+]/g, "")

    const cajas: [string, number][] = [
        ["Con sistemas RSW", d.rsw],
        ["Convencionales", d.convencional],
        ["Total", totalEmbarcaciones]
    ]

    return `
        <div style="margin: 0; padding: 0; background-color: #EEF3FA;">
            <div style="display: none; max-height: 0; overflow: hidden; opacity: 0; color: #EEF3FA;">
                ${esc(d.nombre)} de ${esc(d.empresa)} ha enviado una consulta desde el sitio web.
            </div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #EEF3FA;">
                <tr>
                    <td align="center" style="padding: 32px 12px;">
                        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
                            style="width: 100%; max-width: 600px; background-color: #FFFFFF; border: 1px solid #DDE8F5; border-radius: 12px; overflow: hidden;">
 
                            <!-- Cabecera -->
                            <tr>
                                <td bgcolor="#243F73" style="background-color: #243F73; padding: 28px 32px;">
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td valign="top">
                                                <div style="font-family: ${F}; font-size: 20px; line-height: 26px; font-weight: bold; color: #FFFFFF; letter-spacing: 0.5px;">
                                                    Albatros Asociados SAC
                                                </div>
                                                <div style="font-family: ${F}; font-size: 13px; line-height: 20px; color: #96BDD8; margin-top: 4px;">
                                                    Consultoría técnica · Capacitación · Ingeniería
                                                </div>
                                            </td>
                                            ${referencia ? `
                                            <td align="right" valign="top" style="font-family: ${F}; font-size: 12px; line-height: 18px; font-weight: bold; color: #DCE8F5; white-space: nowrap;">
                                                ${referencia}
                                            </td>` : ""}
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td height="4" style="height: 4px; line-height: 4px; font-size: 0; background-color: #4A7AB5;">&nbsp;</td>
                            </tr>
 
                            <!-- Introducción y resumen -->
                            <tr>
                                <td style="padding: 36px 32px 8px 32px;">
                                    <h1 style="margin: 0 0 12px 0; font-family: ${F}; font-size: 24px; line-height: 30px; font-weight: bold; color: #1C2B3D;">
                                        Nueva solicitud de contacto
                                    </h1>
                                    <p style="margin: 0 0 18px 0; font-family: ${F}; font-size: 15px; line-height: 24px; color: #445569;">
                                        Se ha recibido una nueva solicitud de contacto a través del sitio web de
                                        <strong style="color: #1C2B3D;">Albatros Asociados SAC</strong>.
                                        <br><span style="color: #6E85A0; font-size: 13px;">Recibida el ${esc(recibido)}</span>
                                    </p>
                                    <div>
                                        ${pastilla(d.servicio)}
                                        ${d.plazo ? pastilla(d.plazo, urgente ? "#FEF1DC" : "#EEF3FA", urgente ? "#9A6212" : "#516A85") : ""}
                                        ${totalEmbarcaciones > 0 ? pastilla(`${totalEmbarcaciones} ${totalEmbarcaciones === 1 ? "embarcación" : "embarcaciones"}`, "#E3F6F2", "#0F7F6E") : ""}
                                    </div>
                                </td>
                            </tr>
 
                            <!-- Detalle -->
                            <tr>
                                <td style="padding: 0 32px;">
                                    ${titulo("DATOS DEL SOLICITANTE")}
                                    ${tabla([
                                        ["Nombre", esc(d.nombre)],
                                        ["Cargo", d.cargo ? esc(d.cargo) : null],
                                        ["Empresa", esc(d.empresa)],
                                        ["RUC", d.ruc ? esc(d.ruc) : null],
                                        ["Correo", enlace(`mailto:${d.correo}`, d.correo)],
                                        ["Teléfono", enlace(`tel:${telefonoLink}`, d.telefono)],
                                    ])}
 
                                    ${titulo("INFORMACIÓN DE LA SOLICITUD")}
                                    ${tabla([
                                        ["Servicio", esc(d.servicio)],
                                        ["Sector", d.sector ? esc(d.sector) : null],
                                        ["Plazo estimado", d.plazo ? esc(d.plazo) : null],
                                    ])}
 
                                    ${totalEmbarcaciones > 0 ? `
                                    ${titulo("EMBARCACIONES")}
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 12px;">
                                        <tr>
                                            ${cajas.map(([etiqueta, valor], i) => `
                                            <td width="33%" valign="top" style="padding: 0 ${i === 2 ? "0" : "6px"} 0 ${i === 0 ? "0" : "6px"};">
                                                <div style="background-color: ${i === 2 ? "#EBF0FA" : "#F5F8FC"}; border: 1px solid #DDE8F5; border-radius: 8px; padding: 14px 8px; text-align: center;">
                                                    <div style="font-family: ${F}; font-size: 24px; line-height: 28px; font-weight: bold; color: #243F73;">${valor}</div>
                                                    <div style="font-family: ${F}; font-size: 12px; line-height: 16px; color: #6E85A0; margin-top: 2px;">${etiqueta}</div>
                                                </div>
                                            </td>`).join("")}
                                        </tr>
                                    </table>` : ""}
 
                                    ${titulo("MENSAJE")}
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 8px;">
                                        <tr>
                                            <td width="4" bgcolor="#2E52A8" style="background-color: #2E52A8; width: 4px; font-size: 0; line-height: 0;">&nbsp;</td>
                                            <td bgcolor="#F5F8FC" style="background-color: #F5F8FC; padding: 18px 20px; font-family: ${F}; font-size: 15px; line-height: 24px; color: #1C2B3D; white-space: pre-wrap; word-break: break-word;">${d.mensaje ? esc(d.mensaje) : `<span style="color: #8FA3BB;">El solicitante no dejó mensaje.</span>`}</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
 
                            <!-- Botón de respuesta -->
                            <tr>
                                <td align="left" style="padding: 32px 32px 8px 32px;">
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td align="center" bgcolor="#2E52A8" style="background-color: #2E52A8; border-radius: 8px;">
                                                <a href="mailto:${esc(d.correo)}?subject=${encodeURIComponent("Respuesta a su consulta - Albatros Asociados SAC")}"
                                                    style="display: inline-block; padding: 14px 28px; font-family: ${F}; font-size: 14px; line-height: 20px; font-weight: bold; color: #FFFFFF; text-decoration: none; border-radius: 8px;">
                                                    Responder
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
 
                            <!-- Pie -->
                            <tr>
                                <td style="padding: 28px 32px 0 32px;">
                                    <div style="border-top: 1px solid #E8EFF8; padding: 20px 0 28px 0; font-family: ${F}; font-size: 12px; line-height: 18px; color: #6E85A0; text-align: center;">
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