"use client"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { IconChevronRight, IconClipboard, IconX } from "../Icons"
import { serviciosData } from "../../data/serviciosData"

type Servicio = (typeof serviciosData)[number]

interface ServicioModalProps {
    service: Servicio
    isClosing: boolean
    onClose: () => void
}

export default function ServicioModal({ service, isClosing, onClose }: ServicioModalProps) {
    const dialogRef = useRef<HTMLDivElement>(null)
    // Guardamos onClose en un ref: así el efecto no se reinicia en cada render del padre
    const onCloseRef = useRef(onClose)
    onCloseRef.current = onClose

    useEffect(() => {
        const abierto = document.activeElement as HTMLElement | null
        const previous = document.body.style.overflow
        document.body.style.overflow = "hidden"
        dialogRef.current?.focus()

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onCloseRef.current()
        }
        document.addEventListener("keydown", onKey)

        return () => {
            document.removeEventListener("keydown", onKey)
            document.body.style.overflow = previous
            abierto?.focus() // devuelve el foco al botón que abrió el modal
        }
    }, [])

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C2B3D]/70 p-4 backdrop-blur-sm sm:p-6"
            onClick={onClose}
        >
            <div
                ref={dialogRef}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-labelledby="servicio-modal-title"
                className={`pop relative flex max-h-[85dvh] w-full flex-col overflow-hidden rounded-2xl bg-white shadow-2xl outline-none sm:max-w-[640px] ${isClosing ? "close" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div aria-hidden="true" className="h-1 shrink-0 bg-boya" />

                <div
                    className="flex shrink-0 items-start justify-between gap-4 px-6 pt-6 pb-5 sm:px-9 sm:pt-8"
                    style={{ background: "#F5F8FC", borderBottom: "1px solid #DDE8F5" }}
                >
                    <div className="min-w-0">
                        <span
                            className="mb-3 inline-flex h-8 min-w-8 items-center justify-center rounded-lg bg-[#2E52A8] px-2 text-xs font-bold text-white"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            {service.num}
                        </span>
                        <h2
                            id="servicio-modal-title"
                            className="text-xl leading-tight font-bold text-balance text-[#1C2B3D] sm:text-2xl lg:text-[26px]"
                            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                        >
                            {service.title}
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar"
                        className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-[#516A85] transition-colors hover:bg-[#EEF3FA] hover:text-[#1C2B3D] focus-visible:outline-2 focus-visible:outline-[#2E52A8]"
                        style={{ border: "1px solid #DDE8F5" }}
                    >
                        <IconX />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-9 sm:py-8">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EBF0FA] text-[#2E52A8]">
                            <IconClipboard />
                        </span>
                        <h3 className="text-lg font-bold text-[#1C2B3D]" style={{ fontFamily: "var(--font-display)" }}>
                            ¿Qué comprende?
                        </h3>
                    </div>
                    <div aria-hidden="true" className="regla-h mb-5 w-full text-[#DDE8F5]" />
                    <ul className="space-y-3">
                        {service.details.includes.map((item: string) => (
                            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-[#334A63]">
                                <span
                                    aria-hidden="true"
                                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-boya-soft text-[11px] font-bold text-boya-ink"
                                >
                                    ✓
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className="flex shrink-0 flex-col-reverse gap-3 bg-white px-6 py-5 sm:flex-row sm:justify-end sm:px-9"
                    style={{ borderTop: "1px solid #DDE8F5", paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
                >
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex cursor-pointer items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-[#334A63] transition-colors hover:bg-[#EEF3FA]"
                        style={{ border: "1px solid #CAD8EC", fontFamily: "var(--font-display)" }}
                    >
                        Cerrar
                    </button>
                    <a
                        href="#contacto"
                        onClick={(e) => {
                            e.preventDefault()
                            onClose()
                            setTimeout(() => {
                                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                            }, 220)
                        }}
                        className="group inline-flex items-center justify-center gap-2 rounded-lg bg-boya px-7 py-3 text-sm font-semibold text-boya-texto transition-all duration-200 hover:bg-boya-hover hover:shadow-lg"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Solicitar asesoría
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                            <IconChevronRight />
                        </span>
                    </a>
                </div>
            </div>
        </div>,
        document.body
    )
}
