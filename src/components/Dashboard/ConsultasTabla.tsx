import Link from "next/link";
import Icon from "../Icons/IconsDashboard";
import EstadoBadge from "./EstadoBadge";
import { Contacto } from "@/types/dashboard";

const fmt = (n: number) => n.toLocaleString("es-PE");

export default function ConsultasTablas({
    contacto,
    mostrarVerTodos = true
}: {
    contacto: Contacto[]
    mostrarVerTodos?: boolean
}) {
    const formatoFecha = (fecha: string) => {
        return new Date(fecha).toLocaleString("es-PE", {
            dateStyle: "short",
            timeStyle: "short"
        })
    }

    return (
        <section className="relative overflow-hidden rounded-xl bg-white" style={{
            border: "1px solid #DDE8F5",
            boxShadow: "0 1px 2px rgba(28,43,61,0.04), 0 8px 24px -8px rgba(28,43,61,0.10)",
        }}>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: `linear-gradient(90deg, #2E52A8, #4A7AB5)` }}
            />
            <div className="flex items-center justify-between gap-4 px-5 pb-5 pt-7 sm:px-6">
                <div className="min-w-0">
                    <h2 className="text-lg font-bold text-[#1C2B3D]" style={{ fontFamily: `var(--font-display)` }}>Proyectos activos</h2>
                    <p className="mt-1 text-xs" style={{ color: `#718198` }}>Seguimiento operativo en tiempo real</p>
                </div>
                {mostrarVerTodos && (
                    <Link
                        href="/dashboard/contactos"
                        className="flex shrink-0 items-center gap-1 text-sm font-semibold text-[#2E52A8] transition-all duration-200 hover:gap-2 hover:text-[#243F73]"
                    >
                        Ver todas <Icon name="arrow" size={15} />
                    </Link>
                )}
            </div>
            <div className="overflow-x-auto md:block">
                <table className="w-full min-w-[680px] text-left">
                    <thead>
                        <tr className="text-xs font-semibold text-[#6E85A0] border-y text-[10px] uppercase tracking-wider" style={{ borderBottom: `1px solid #DDE8F5` }} >
                            <th className="px-10 py-3 font-semibold">Solicitante</th>
                            <th className="px-10 py-3 font-semibold">Servicio</th>
                            <th className="px-10 py-3 font-semibold">Fecha</th>
                            <th className="px-10 py-3 font-semibold">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacto.map((c, id) => (
                            <tr
                                key={c.id}
                                className="transition-colors hover:bg-[#F5F8FC]"
                                style={id < contacto.length - 1 ? { borderBottom: `1px solid #076fff` } : undefined}
                            >
                                <td className="px-10 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EBF0FA] text-sm font-bold text-[#2E52A8] uppercase">{c.nombre.split(" ").map((p) => p[0]).slice(0, 2).join("")}</span>
                                        <div className="min-w-0">
                                            <div className="truncate text-sm font-semibold text-[#1C2B3D]">{c.nombre}</div>
                                            <div className="truncate text-xs text-[#6E85A0]">{c.empresa}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-10 py-4 text-sm text-[#334A63]">{c.servicio}</td>
                                <td className="whitespace-nowrap px-10 py-4 text-sm text-[#516A85]]">{formatoFecha(c.fecha_registro)}</td>
                                <td className="px-10 py-4"><EstadoBadge estado={c.estado} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}