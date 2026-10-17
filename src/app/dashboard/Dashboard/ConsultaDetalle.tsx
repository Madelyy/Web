"use client"
import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import type { Contacto, Nota, Historial } from "@/types/dashboard"
import Icon from "../../../components/Icons/IconsDashboard"
import { ESTADOS, PRIORIDADES, estiloEstado, PRIORIDAD_ESTILOS } from "@/lib/estados"

type Ventana = "detalle" | "notas" | "historial"

const duracion = (ms: number) => {
    const min = Math.floor(ms / 60000)
    if (min < 1) return "menos de 1 minuto"
    if (min < 60) return `${min} min`

    const horas = Math.floor(min / 60)
    if (horas < 24) return `${horas} h ${min % 60} min`

    const dias = Math.floor(horas / 24)
    return `${dias} ${dias === 1 ? "día" : "días"} ${horas % 24} h`
}

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
    const [ventana, setVentana] = useState<Ventana>("detalle")
    const [guardando, setGuardando] = useState(false)
    const [error, setError] = useState("")

    const [notas, setNotas] = useState<Nota[]>([])
    const [historial, setHistorial] = useState<Historial[]>([])
    const [cargandoExtra, setCargandoExtra] = useState(true)
    const [errorExtra, setErrorExtra] = useState("")

    const [textoNota, setTextoNota] = useState("")
    const [enviandoNota, setEnviandoNota] = useState(false)
    const [errorNota, setErrorNota] = useState("")

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

    const cargarNotas = useCallback(async () => {
        const response = await fetch(`/api/contacto/${contacto.id}/notas`)

        if (!response.ok) throw new Error("notas")

        const data = await response.json()

        setNotas(Array.isArray(data.notas) ? data.notas : [])
    }, [contacto.id])

    const cargarHistorial = useCallback(async () => {
        const response = await fetch(`/api/contacto/${contacto.id}/historial`)

        if (!response.ok) throw new Error("historial")

        const data = await response.json()

        setHistorial(Array.isArray(data.historial) ? data.historial : [])
    }, [contacto.id])

    useEffect(() => {
        let activo = true
        setCargandoExtra(true)
        setErrorExtra("")

        Promise.all([cargarNotas(), cargarHistorial()])
            .catch(() => activo && setErrorExtra("No se pudo cargar el seguimiento de esta consulta."))
            .finally(() => activo && setCargandoExtra(false))

        return () => { activo = false }
    }, [cargarNotas, cargarHistorial])


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

            if (cambios.estado) await cargarHistorial().catch(() => { })
        } catch (e) {
            setError(e instanceof Error ? e.message : "No se pudo actualizar")
        } finally {
            setGuardando(false)
        }
    }

    const agregarNota = async () => {
        const texto = textoNota.trim()

        if (!texto) return

        setEnviandoNota(true)
        setErrorNota("")

        try {
            const response = await fetch(`/api/contacto/${contacto.id}/notas`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ texto })
            })

            const data = await response.json().catch(() => ({}))

            if (!response.ok) throw new Error(data.error || "No se pudo guardar la nota")

            setNotas((prev) => [data.nota, ...prev])
            setTextoNota("")
        } catch (e) {
            setErrorNota(e instanceof Error ? e.message : "No se pudo guardar la nota")
        } finally {
            setEnviandoNota(false)
        }
    }

    const prioridad = contacto.prioridad ?? "Media"
    const rsw = contacto.rsw_cantidad ?? 0
    const conv = contacto.convencional_cantidad ?? 0

    const primeraRespuesta = [...historial].reverse().find((h) => h.estado_nuevo !== "Pendiente")
    const tiempoRespuesta = primeraRespuesta
        ? duracion(new Date(primeraRespuesta.fecha).getTime() - new Date(contacto.fecha_registro).getTime())
        : null

    const ventanas: { id: Ventana, label: string }[] = [
        { id: "detalle", label: "Detalle" },
        { id: "notas", label: `Notas${notas.length ? ` (${notas.length})` : ""}` },
        { id: "historial", label: "Historial" }
    ]

    return createPortal(
        <div
            className={`fixed inset-0 z-50 bg-[#1C2B3D]/50 transition-opacity duration-200 cursor-default ${visible ? "opacity-100" : "opacity-0"}`}
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
                <div role="tablist" className="flex shrink-0 gap-1 px-4 pt-2" style={{ borderBottom: "1px solid #DDE8F5" }}>
                    {ventanas.map((v) => (
                        <button
                            key={v.id}
                            type="button"
                            role="tab"
                            aria-selected={ventana === v.id}
                            onClick={() => setVentana(v.id)}
                            className={`relative cursor-pointer px-4 py-3 text-sm font-semibold transition-colors ${ventana === v.id ? "text-[#2E52A8]" : "text-[#6E85A0] hover:text-[#1C2B3D]"}`}
                        >
                            {v.label}
                            {ventana === v.id && <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[#2E52A8]" />}
                        </button>
                    ))}
                </div>
                {ventana === "detalle" && (
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
                )}
                {ventana === "notas" && (
                    <div className="flex-1 space-y-7 overflow-y-auto px-6 py-6">
                        <label htmlFor="nota" className="mb-2 block text-sm font-bold text-[#1C2B3D]">Agregar una nota interna</label>
                        <textarea
                            id="nota"
                            rows={3}
                            maxLength={2000}
                            value={textoNota}
                            onChange={(e) => setTextoNota(e.target.value)}
                            placeholder="Ej. Llamé al cliente, pidió la propuesta la próxima semana..."
                            className="w-full resize-none rounded-lg border-[1.5px] border-[#CAD8EC] bg-[#F5F8FC] px-4 py-3 text-sm text-[#1C2B3D] outline-none transition-all placeholder:text-[#8FA3BB] focus:border-[#2E52A8] focus:bg-white focus:ring-1 focus:ring-[#2E52A8]/15"
                        />
                        <div className="mt-3 flex items-center justify-between gap-3">
                            <span className="text-xs text-[#6E85A0]">Solo lo ve el equipo, no el cliente</span>
                            <button
                                type="button"
                                onClick={agregarNota}
                                disabled={enviandoNota || !textoNota.trim()}
                                className="cursor-pointer rounded-lg bg-[#2E52A8] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#243F73] disabled:cursor-not-allowed"
                                style={{ fontFamily: `var(--font-display)` }}
                            >
                                {enviandoNota ? "Guardando..." : "Agregar nota"}
                            </button>
                        </div>
                        {errorNota && <p className="mt-3 text-sm font-medium text-[#B23A55]">{errorNota}</p>}
                        <div className="mt-7">
                            {cargandoExtra ? (
                                <p className="text-sm text-[#6E85A0]">Cargando notas...</p>
                            ) : errorExtra ? (
                                <p className="text-sm font-medium text-[#B23A55]">{errorExtra}</p>
                            ) : notas.length === 0 ? (
                                <p className="rounded-lg bg-[#F5F8FC] px-4 py-8 text-center text-sm text-[#6E85A0]">Aún no hay notas para esta consulta</p>
                            ) : (
                                <ul className="space-y-3">
                                    {notas.map((n) => (
                                        <li
                                            key={n.id}
                                            className="rounded-lg bg-[#F5F8FC] p-4"
                                            style={{ border: `1px solid #DDE8F5` }}
                                        >
                                            <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-[#1C2B3D]">{n.texto}</p>
                                            <p className="mt-2 text-xs text-[#6E85A0]">
                                                <span className="font-semibold text-[#516A85]">{n.autor} · {formatoFecha(n.fecha)}</span>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                )}
                {ventana === "historial" && (
                    <div className="flex-1 space-y-7 overflow-y-auto px-6 py-6">
                        <div className="mb-6 rounded-xl bg-[#EBF0FA] px-5 py-4">
                            <div className="text-xs text-[#6E85A0]">Tiempo de primera respuesta</div>
                            <div className="text-xl font-bold text-[#243F73]" style={{ fontFamily: `var(--font-display)` }}>
                                {cargandoExtra ? "..." : tiempoRespuesta ?? "Aún sin atender"}
                            </div>
                        </div>
                        {cargandoExtra ? (
                            <p className="text-sm text-[#6E85A0]">Cargando historial...</p>
                        ) : errorExtra ? (
                            <p className="text-sm font-medium">{errorExtra}</p>
                        ) : historial.length === 0 ? (
                            <p className="ronuded-lg bg-[#F5F8FC] px-4 py-8 text-center text-sm text-[#6E85A0]">Sin movimientos registrados</p>
                        ) : (
                            <ol>
                                {historial.map((h, i) => {
                                    const s = estiloEstado(h.estado_nuevo);
                                    return (
                                        <li key={h.id} className="relative pb-6 pl-7 last:pb-0">
                                            <span className="absolute left-0 top-1 h-3 w-3 rounded-full" style={{ background: s.dot }} />
                                            {i < historial.length - 1 && <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-5 w-px bg-[#DDE8F5]" />}
                                            <p className="text-sm font-semibold text-[#1C2B3D]">
                                                {h.estado_anterior ? `${h.estado_anterior} → ${h.estado_nuevo}` : `Consulta registrada · ${h.estado_nuevo}`}
                                            </p>
                                            <p className="text-xs text-[#6E85A0]">
                                                {h.autor ? `${h.autor} · ` : ""}{formatoFecha(h.fecha)}
                                            </p>
                                        </li>
                                    );
                                })}

                            </ol>
                        )}
                    </div>
                )}
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