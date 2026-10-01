"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function VisitaTracker() {
    const pathname = usePathname()
    const registrado = useRef(false)

    useEffect(() => {
        if (pathname !== "/") return
        if (registrado.current) return

        registrado.current = true

        const registrarVisita = async () => {
            try {
                const userAgent = navigator.userAgent;

                let dispositivo = "Desktop"

                if (/tablet|ipad/i.test(userAgent)) {
                    dispositivo = "Tablet"
                } else if (/mobile|android|iphone/i.test(userAgent)) {
                    dispositivo = "Mobile"
                }

                let navegador = "Unknown"

                if (/edg/i.test(userAgent)) {
                    navegador = "Edge"
                } else if (/chrome/i.test(userAgent)) {
                    navegador = "Chrome"
                } else if (/firefox/i.test(userAgent)) {
                    navegador = "Firefox"
                } else if (/safari/i.test(userAgent)) {
                    navegador = "Safari"
                }

                await fetch("/api/visita", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        dispositivo,
                        navegador,
                    }),
                });
            } catch (error) {
                console.error("No se pudo registrar la visita:", error)
            }
        }

        registrarVisita()

    }, [pathname])

    return null
}