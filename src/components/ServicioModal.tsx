"use client"
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IconChevronRight, IconClipboard, IconX } from "./Icons";
import { serviciosData } from "../data/serviciosData";

type Servicio = (typeof serviciosData)[number];

interface ServicioModalProps {
    service: Servicio
    isClosing: boolean
    onClose: () => void
}

export default function ServicioModal({
    service,
    isClosing,
    onClose
}: ServicioModalProps) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = previous;
        };
    }, [onClose]);

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C2B3D]/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="servicio-modal-title"
                className={`pop relative flex flex-col w-full sm:max-w-[640px] max-h-[85dvh] bg-white overflow-hidden rounded-2xl shadow-2xl ${isClosing ? `close` : ``}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    aria-hidden="true"
                    className="h-1 shrink-0"
                    style={{ background: `linear-gradient(90deg, #2E52A8, #4A7AB5)` }}
                />
                <div className="shrink-0 flex items-start justify-between gap-4 px-6 sm:px-9 pt-6 sm:pt-8 pb-5" style={{ background: `#F5F8FC`, borderBottom: `1px solid #DDE8F5` }}>
                    <div className="min-w-0">
                        <span
                            className="inline-flex items-center justify-center h-8 min-w-8 px-2 rounded-lg text-xs font-bold bg-[#243F73] text-white mb-3"
                            style={{ fontFamily: `var(--font-display)` }}
                        >
                            {service.num}
                        </span>
                        <h2
                            id="servicio-modal-title"
                            className="text-xl sm:text-2xl lg:text-[26px] font-bold leading-tight text-[#1C2B3D]"
                            style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.02em` }}
                        >
                            {service.title}
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar"
                        className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#516A85] transition-colors hover:bg-[#EEF3FA] hover:text-[#1C2B3D] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2E52A8]"
                        style={{ border: `1px solid #DDE8F5` }}
                    >
                        <IconX />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto px-6 sm:px-9 py-6 sm:py-8">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EBF0FA] text-[#2E52A8]">
                            <IconClipboard />
                        </span>
                        <h3
                            className="font-bold text-lg text-[#1C2B3D]"
                            style={{ fontFamily: `var(--font-display)` }}
                        >
                            ¿Qué comprende?
                        </h3>
                    </div>
                    <ul className="space-y-3">
                        {service.details.includes.map((item: string) => (
                            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-[#334A63]">
                                <span
                                    aria-hidden="true"
                                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2E52A8] text-white text-[11px] font-bold"
                                >
                                    ✓
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    className="shrink-0 flex flex-col-reverse sm:flex-row sm:justify-end gap-3 px-6 sm:px-9 py-5 bg-white"
                    style={{ borderTop: `1px solid #DDE8F5`, paddingBottom: `max(1.25rem, env(safe-area-inset-bottom))` }}
                >
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm text-[#334A63] transition-colors hover:bg-[#EEF3FA] cursor-pointer"
                        style={{ border: `1px solid #CAD8EC`, fontFamily: `var(--font-display)` }}
                    >
                        Cerrar
                    </button>
                    <a
                        href="#contacto"
                        onClick={(e) => {
                            e.preventDefault();
                            onClose();
                            setTimeout(() => {
                                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                            }, 220);
                        }}
                        className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm text-white bg-[#2E52A8] transition-all duration-200 hover:bg-[#243F73] hover:shadow-lg"
                        style={{ fontFamily: `var(--font-display)` }}
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
    );
}
