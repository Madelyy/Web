"use client"
import { useEffect, useState } from "react"

const SECCIONES = [
    ["inicio", "Inicio"],
    ["nosotros", "Nosotros"],
    ["equipo", "Equipo"],
    ["servicios", "Servicios"],
    ["sectores", "Sectores"],
    ["experiencia", "Experiencia"],
    ["contacto", "Contacto"],
] as const

/**
 * Regla vertical fija en el borde izquierdo (solo pantallas ≥ xl).
 * Se "llena" con el scroll como la marca de calado de un casco.
 * En pantallas menores el progreso se muestra como barra fina en el Header.
 */
export default function ReglaCalado() {
    const [progreso, setProgreso] = useState(0)
    const [activa, setActiva] = useState<string>(SECCIONES[0][1])

    useEffect(() => {
        let raf = 0

        const calcular = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight
            setProgreso(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)

            let actual: string = SECCIONES[0][1]
            for (const [id, etiqueta] of SECCIONES) {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) actual = etiqueta
            }
            setActiva(actual)
        }

        const onScroll = () => {
            cancelAnimationFrame(raf)
            raf = requestAnimationFrame(calcular)
        }

        calcular()
        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll)
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
        }
    }, [])

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed top-28 bottom-10 left-3 z-40 hidden w-40 text-[#B9CCE6] xl:block"
        >
            <div className="regla-v absolute inset-y-0 left-0" />
            <div className="absolute top-0 left-0 w-0.5 bg-boya" style={{ height: `${progreso * 100}%` }} />
            <div
                className="absolute left-0 flex items-center gap-2"
                style={{ top: `${progreso * 100}%`, transform: "translateY(-50%)" }}
            >
                <span className="h-0.5 w-5 bg-boya" />
                {/* La etiqueta solo cabe sin tapar contenido en pantallas ≥ 2xl */}
                <span className="hidden rounded bg-white/95 px-2 py-0.5 text-[10px] font-semibold text-[#243F73] shadow-sm 2xl:block">
                    {activa}
                </span>
            </div>
        </div>
    )
}