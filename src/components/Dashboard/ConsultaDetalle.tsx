"use client"
import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import type { Contacto } from "@/types/dashboard"
import Icon from "../Icons/IconsDashboard"
import { ESTADOS, PRIORIDADES, estiloEstado, PRIORIDAD_ESTILOS } from "@/lib/estados"

function Dato({ label, children }: { label: string, children: React.ReactNode }) {
    return (
        <div className="flex items-start justify-between gap-4 py-3" style={{ borderBottom: `1px solid #EEF3FA` }}>
            <dt className="shrink-0 text-sm text-[#6E85A0]">{label}</dt>
            <dt className="min-w-0 break-words text-right text-sm font-semibold text-[#1C2B3D]">{children}</dt>
        </div>
    )
}

export default function ConsultaDetalle({
    contacto,
    onClose,
    onCambio,
    onGenerarPropuesta
}: {
    contacto: Contacto
    onClose: () => void
    onCambio: (id: number, cambios: Partial<Contacto>) => void
    onGenerarPropuesta?: (c: Contacto) => void
}) {
    const formatoFecha = (fecha: string) => {
        return new Date(fecha).toLocaleString("es-PE", {
            dateStyle: "short",
            timeStyle: "short"
        })
    }

    const [visible, setVisible] = useState(false)
    const [guardando, setGuardando] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const id = requestAnimationFrame(() => setVisible(true))

        return () => cancelAnimationFrame(id)
    }, [])

    const cerrar = useCallback(() => {
        setVisible(false)
        setTimeout(onClose, 200)
    }, [onClose])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && cerrar()
        document.addEventListener("keydown", onKey)

        const previo = document.body.style.overflow
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", onKey)
            document.body.style.overflow = previo
        }
    }, [cerrar])

    const actualizar = async (cambios: { estado?: string, prioridad?: string }) => {
        setGuardando(true)
        setError("")

        try {
            const response = await fetch(`/api/contacto/${contacto.id}`, {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(cambios)
            })

            if (!response.ok) {
                const data = await response.json().catch(() => ({}))

                throw new Error(data.error || "No se pudo actualizar")
            }

            onCambio(contacto.id, cambios as Partial<Contacto>)
        } catch (e) {
            setError(e instanceof Error ? e.message : "No se pudo actualizar")
        } finally {
            setGuardando(false)
        }
    }

    const prioridad = contacto.prioridad ?? "Media"
    const rsw = contacto.rsw_cantidad ?? 0
    const conv = contacto.convencional_cantidad ?? 0

    return createPortal(
        <div
            className={`fixed inset-0 z-50 bg-[#1C2B3D]/50 backdrop-blur-sm transition-opacity duration-200 cursor-default ${visible ? "opacity-100" : "opacity-0"}`}
            onClick={cerrar}
        >
            <aside
                role="dialog"
                aria-modal="true"
                aria-label={`Consulta de ${contacto.nombre}`}
                className={`absolute right-0 top-0 flex h-full w-full flex-col bg-white shadow-2xl transition-transform duration-200 sm:max-w-[500px] ${visible ? "translate-x-0" : "translate-x-full"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div aria-hidden="true" className="h-1 shrink-0" style={{ background: "linear-gradient(90deg, #2E52A8, #4A7AB5)" }} />
                <div className="flex shrink-0 items-start justify-between gap-4 bg-[#F5F8FC] px-6 py-5" style={{ borderBottom: "1px solid #DDE8F5" }}>
                    <div className="flex min-w-0 items-center gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2E52A8] text-base font-bold text-white uppercase">{contacto.nombre.split(" ").map((p) => p[0]).slice(0, 2).join("")}</span>
                        <div className="min-w-0">
                            <h2 className="truncate text-lg font-bold text-[#1C2B3D]" style={{ fontFamily: "var(--font-display)" }}>{contacto.nombre}</h2>
                            <p className="truncate text-sm text-[#6E85A0]">{contacto.empresa}{contacto.cargo ? ` · ${contacto.cargo}` : ""}</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={cerrar}
                        aria-label="Cerrar"
                        className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-[#516A85] transition-colors hover:bg-[#EEF3FA] hover:text-[#1C2B3D]"
                        style={{ border: "1px solid #DDE8F5" }}
                    >
                        <Icon name="close" size={19} />
                    </button>
                </div>
                <div className="flex-1 space-y-7 overflow-y-auto px-6 py-6">
                    <section>
                        <h3 className="mb-3 text-sm font-bold text-[#1C2B3D]">Estado</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {ESTADOS.map((e) => {
                                const activo = contacto.estado === e;
                                const s = estiloEstado(e);
                                return (
                                    <button
                                        key={e}
                                        type="button"
                                        disabled={guardando || activo}
                                        onClick={() => actualizar({ estado: e })}
                                        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all disabled:cursor-default"
                                        style={activo
                                            ? { background: s.bg, color: s.color, border: `1.5px solid ${s.dot}` }
                                            : { background: "#fff", color: "#516A85", border: "1.5px solid #CAD8EC" }}
                                    >
                                        <span className="h-2 w-2 rounded-full" style={{ background: s.dot }} />
                                        {e}
                                    </button>
                                );
                            })}
                        </div>
                    </section>
                    <section>
                        <h3 className="mb-3 text-sm font-bold text-[#1C2B3D]">Prioridad</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {PRIORIDADES.map((p) => {
                                const activo = prioridad === p;
                                const s = PRIORIDAD_ESTILOS[p];
                                return (
                                    <button
                                        key={p}
                                        type="button"
                                        disabled={guardando || activo}
                                        onClick={() => actualizar({ prioridad: p })}
                                        className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold transition-all disabled:cursor-default"
                                        style={activo
                                            ? { background: s.bg, color: s.color, border: `1.5px solid ${s.color}` }
                                            : { background: "#fff", color: "#516A85", border: "1.5px solid #CAD8EC" }}
                                    >
                                        {p}
                                    </button>
                                );
                            })}
                        </div>
                    </section>
                    <div aria-live="polite">
                        {error && (
                            <p className="rounded-lg px-4 py-3 text-sm font-medium" style={{ background: "#FCECEC", color: "#9B2C2C", border: "1px solid #F1C6C6" }}>
                                {error}
                            </p>
                        )}
                    </div>
                    <section>
                        <h3 className="mb-1 text-sm font-bold text-[#1C2B3D]">Datos de contacto</h3>
                        <dl>
                            <Dato label="Correo"><a href={`mailto:${contacto.correo}`} className="text-[#2E52A8] hover:underline">{contacto.correo}</a></Dato>
                            <Dato label="Teléfono"><a href={`tel:${contacto.telefono.replace(/[^\d+]/g, "")}`} className="text-[#2E52A8] hover:underline">{contacto.telefono}</a></Dato>
                            {contacto.ruc && <Dato label="RUC">{contacto.ruc}</Dato>}
                            <Dato label="Servicio">{contacto.servicio}</Dato>
                            {contacto.sector && <Dato label="Sector">{contacto.sector}</Dato>}
                            {contacto.plazo && <Dato label="Plazo">{contacto.plazo}</Dato>}
                            <Dato label="Registrada">{formatoFecha(contacto.fecha_registro)}</Dato>
                        </dl>
                    </section>
                    <section>
                        <h3 className="mb-3 text-sm font-bold text-[#1C2B3D]">Embarcaciones</h3>
                        {rsw + conv === 0 ? (
                            <p className="text-sm text-[#6E85A0]">No indicó embarcaciones.</p>
                        ) : (
                            <div className="grid grid-cols-3 gap-3">
                                {[["RSW", rsw], ["Convencionales", conv], ["Total", rsw + conv]].map(([label, valor], i) => (
                                    <div key={label as string} className="rounded-xl px-3 py-3 text-center" style={i === 2 ? { background: "#EBF0FA" } : { background: "#F5F8FC", border: "1px solid #DDE8F5" }}>
                                        <div className="text-2xl font-bold tabular-nums text-[#243F73]" style={{ fontFamily: "var(--font-display)" }}>{valor}</div>
                                        <div className="text-xs text-[#6E85A0]">{label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Mensaje */}
                    <section>
                        <h3 className="mb-3 text-sm font-bold text-[#1C2B3D]">Mensaje</h3>
                        {contacto.mensaje ? (
                            <div className="whitespace-pre-wrap break-words rounded-lg bg-[#F5F8FC] px-4 py-4 text-sm leading-relaxed text-[#1C2B3D]" style={{ borderLeft: "4px solid #2E52A8" }}>
                                {contacto.mensaje}
                            </div>
                        ) : (
                            <p className="text-sm text-[#6E85A0]">Sin mensaje.</p>
                        )}
                    </section>
                </div>

                {/* Pie fijo */}
                <div
                    className="flex shrink-0 flex-col gap-3 bg-white px-6 py-4 sm:flex-row sm:justify-end"
                    style={{ borderTop: "1px solid #DDE8F5", paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
                >
                    {onGenerarPropuesta && (
                        <button
                            type="button"
                            onClick={() => onGenerarPropuesta(contacto)}
                            className="cursor-pointer rounded-lg px-6 py-3 text-sm font-semibold text-[#2E52A8] transition-colors hover:bg-[#EEF3FA]"
                            style={{ border: "1.5px solid #CAD8EC", fontFamily: "var(--font-display)" }}
                        >
                            Generar propuesta
                        </button>
                    )}
                    <a
                        href={`mailto:${contacto.correo}?subject=${encodeURIComponent("Respuesta a su consulta - Albatros Asociados SAC")}`}
                        className="inline-flex items-center justify-center rounded-lg bg-[#2E52A8] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#243F73] hover:shadow-lg"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Responder por correo
                    </a>
                </div>
            </aside>
        </div>,
        document.body
    )
}