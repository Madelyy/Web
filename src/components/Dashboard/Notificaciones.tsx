"use client"
// → components/Dashboard/Notificaciones.tsx
import { useEffect } from "react";
import Link from "next/link";
import type { Contacto } from "@/types/dashboard";
import Icon from "../Icons/IconsDashboard";

const tiempoTranscurrido = (fecha: string) => {
    const diferencia = Date.now() - new Date(fecha).getTime();

    const minutos = Math.floor(diferencia / 60000);
    if (minutos < 1) return "Hace unos segundos";
    if (minutos < 60) return `Hace ${minutos} ${minutos === 1 ? "minuto" : "minutos"}`;

    const horas = Math.floor(minutos / 60);
    if (horas < 24) return `Hace ${horas} ${horas === 1 ? "hora" : "horas"}`;

    const dias = Math.floor(horas / 24);
    return `Hace ${dias} ${dias === 1 ? "día" : "días"}`;
};

export default function Notificaciones({
    contacto,
    isClosing,
    onClose,
}: {
    contacto: Contacto[]
    isClosing: boolean
    onClose: () => void
}) {
    const pendientes = contacto.filter((c) => c.estado === "Pendiente");

    // Cerrar con Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 bg-[#1C2B3D]/30" onClick={onClose}>
            <div
                role="dialog"
                aria-label="Notificaciones"
                className={`pop absolute right-4 top-[72px] w-[calc(100vw-2rem)] max-w-[400px] overflow-hidden rounded-xl bg-white sm:right-6 ${isClosing ? "close" : ""}`}
                style={{
                    border: "1px solid #DDE8F5",
                    boxShadow: "0 24px 48px -12px rgba(28,43,61,0.28)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    aria-hidden="true"
                    className="h-1"
                    style={{ background: "linear-gradient(90deg, #2E52A8, #4A7AB5)" }}
                />

                <div className="flex items-center justify-between gap-3 px-5 py-4" style={{ borderBottom: "1px solid #EEF3FA" }}>
                    <div className="min-w-0">
                        <h2 className="font-bold text-[#1C2B3D]" style={{ fontFamily: "var(--font-display)" }}>Notificaciones</h2>
                        <p className="text-xs text-[#6E85A0]">
                            {pendientes.length === 0
                                ? "Sin consultas pendientes"
                                : `${pendientes.length} ${pendientes.length === 1 ? "consulta pendiente" : "consultas pendientes"}`}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar"
                        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#6E85A0] transition-colors cursor-pointer hover:bg-[#EEF3FA] hover:text-[#1C2B3D]"
                    >
                        <Icon name="close" size={19} />
                    </button>
                </div>
                <div className="max-h-[400px] overflow-y-auto">
                    {pendientes.length === 0 ? (
                        <div className="px-5 py-12 text-center">
                            <p className="text-sm font-semibold text-[#1C2B3D]">No hay notificaciones</p>
                            <p className="mt-1 text-xs text-[#6E85A0]">Todas las consultas están atendidas</p>
                        </div>
                    ) : (
                        pendientes.map((c) => (
                            <div
                                key={c.id}
                                className="flex gap-3 px-5 py-4 transition-colors hover:bg-[#F5F8FC]"
                                style={{ borderBottom: "1px solid #EEF3FA" }}
                            >
                                <span className="uppercase flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EBF0FA] text-sm font-bold text-[#2E52A8]">{c.nombre.split(" ").map((p) => p[0]).slice(0, 2).join("")}</span>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="truncate text-sm font-semibold text-[#1C2B3D]">{c.nombre}</p>
                                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#E8607A]" aria-label="Pendiente" />
                                    </div>
                                    <p className="truncate text-sm text-[#516A85]">
                                        {c.empresa} · {c.servicio}
                                    </p>
                                    <p className="mt-1 text-xs text-[#6E85A0]">{tiempoTranscurrido(c.fecha_registro)}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                {pendientes.length > 0 && (
                    <Link
                        href="/dashboard/contactos"
                        onClick={onClose}
                        className="block bg-[#F5F8FC] px-5 py-3.5 text-center text-sm font-semibold text-[#2E52A8] transition-colors hover:text-[#243F73]"
                        style={{ borderTop: "1px solid #EEF3FA" }}
                    >
                        Ver todas las consultas
                    </Link>
                )}
            </div>
        </div>
    );
}