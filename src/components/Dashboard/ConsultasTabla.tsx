import Link from "next/link"
import { Card } from "./Card"
import { IconArrow } from "../Icons"
import EstadoBadge from "./EstadoBadge"

type Contacto = {
    id: number
    nombre: string
    empresa: string
    correo: string
    telefono: string
    sector: string
    servicio: string
    mensaje: string
    estado: string
    fecha_registro: string
}

const fmt = (n: number) => n.toLocaleString("es-PE");

export default function ConsultasTablas({ contacto }: { contacto: Contacto[] }) {
    const formatoFecha = (fecha: string) => {
        return new Date(fecha).toLocaleString("es-PE", {
            dateStyle: "short",
            timeStyle: "short"
        })
    }

    return (
        <div className="-mx-2 overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
                <thead>
                    <tr className="text-xs font-semibold text-[#6E85A0]" style={{ borderBottom: `1px solid #DDE8F5` }} >
                        <th className="px-2 py-3 font-semibold">Solicitante</th>
                        <th className="px-2 py-3 font-semibold">Servicio</th>
                        <th className="px-2 py-3 font-semibold">Fecha</th>
                        <th className="px-2 py-3 font-semibold">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {contacto.map((c, id) => (
                        <tr
                            key={c.id}
                            className="transition-colors hover:bg-[#F5F8FC]"
                            style={id < contacto.length - 1 ? { borderBottom: `1px solid #EEF3FA` } : undefined}
                        >
                            <td className="px-2 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="min-w-0">
                                        <div className="truncate text-sm font-semibold text-[#1C2B3D]">{c.nombre}</div>
                                        <div className="truncate text-xs text-[#6E85A0]">{c.empresa}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-2 py-4 text-sm text-[#334A63]">{c.servicio}</td>
                            <td className="px-2 py-4 text-sm text-[#516A85]">{formatoFecha(c.fecha_registro)}</td>
                            <td className="px-2 py-4"><EstadoBadge estado={c.estado} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}