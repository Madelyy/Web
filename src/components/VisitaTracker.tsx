"use client";

import { useEffect } from "react";

export default function VisitaTracker() {
    useEffect(() => {
        console.log("Funcionando")

        const registrarVisita = async () => {
            try {
                const userAgent = navigator.userAgent;

                let dispositivo = "Desktop"

                if (/tablet|ipad/i.test(userAgent)) {
                    dispositivo = "Tablet"
                } else if (/mobile|android|iphone/i.test(userAgent)) {
                    dispositivo = "Móvil"
                }

                let navegador = "Desconocido"

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
        };

        registrarVisita()
    }, []);

    return null
}