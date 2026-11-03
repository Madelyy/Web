"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { IconX, IconMenu } from "../Icons"

// [texto visible, id de la sección]
const links = [
    ["Inicio", "inicio"],
    ["Nosotros", "nosotros"],
    ["Equipo", "equipo"],
    ["Servicios", "servicios"],
    ["Experiencia", "experiencia"],
    ["Contacto", "contacto"],
] as const

export default function HeaderSection() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [progreso, setProgreso] = useState(0)
    const [activo, setActivo] = useState<string>("inicio")

    // Scroll: encoge el header y calcula el progreso (barra visible solo donde no hay regla lateral)
    useEffect(() => {
        let raf = 0
        const calcular = () => {
            setScrolled(window.scrollY > 40)
            const max = document.documentElement.scrollHeight - window.innerHeight
            setProgreso(max > 0 ? Math.min(1, window.scrollY / max) : 0)
        }
        const onScroll = () => {
            cancelAnimationFrame(raf)
            raf = requestAnimationFrame(calcular)
        }
        calcular()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    // Scrollspy: marca el link de la sección que se está viendo
    useEffect(() => {
        const secciones = links
            .map(([, id]) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        const io = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((e) => e.isIntersecting && setActivo(e.target.id))
            },
            { rootMargin: "-40% 0px -55% 0px" }
        )
        secciones.forEach((el) => io.observe(el))
        return () => io.disconnect()
    }, [])

    // Menú móvil: Esc, bloqueo de scroll y cierre al pasar a escritorio
    useEffect(() => {
        if (!open) return

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false)
        }
        const mq = window.matchMedia("(min-width: 1024px)")
        const onChange = (e: MediaQueryListEvent) => {
            if (e.matches) setOpen(false)
        }
        const previo = document.body.style.overflow
        document.body.style.overflow = "hidden"

        document.addEventListener("keydown", onKey)
        mq.addEventListener("change", onChange)
        return () => {
            document.body.style.overflow = previo
            document.removeEventListener("keydown", onKey)
            mq.removeEventListener("change", onChange)
        }
    }, [open])

    return (
        <header
            className="fixed top-0 right-0 left-0 z-50 transition-shadow duration-300"
            style={{
                background: "rgba(255,255,255,0.96)",
                backdropFilter: "blur(6px)",
                borderBottom: "1px solid #DDE8F5",
                boxShadow: scrolled ? "0 6px 24px -8px rgba(16,28,43,0.12)" : "none",
            }}
        >
            <div
                className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-10 ${
                    scrolled ? "h-[60px] lg:h-[68px]" : "h-[68px] lg:h-[84px]"
                }`}
            >
                <a href="#inicio" aria-label="Ir al inicio" className="shrink-0">
                    <Image
                        src="/images/logoA_4B6FAE.png"
                        alt="Albatros Asociados SAC"
                        width={250}
                        height={250}
                        priority
                        className={`h-auto object-contain transition-all duration-300 ${
                            scrolled ? "w-[150px] lg:w-[180px]" : "w-[165px] lg:w-[220px]"
                        }`}
                    />
                </a>

                <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
                    {links.map(([texto, id]) => {
                        const esActivo = activo === id
                        return (
                            <a
                                key={id}
                                href={`#${id}`}
                                aria-current={esActivo ? "location" : undefined}
                                className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-boya after:transition-transform after:duration-200 hover:text-[#2E52A8] hover:after:scale-x-100 ${
                                    esActivo ? "text-[#2E52A8] after:scale-x-100" : "text-[#334A63] after:scale-x-0"
                                }`}
                            >
                                {texto}
                            </a>
                        )
                    })}
                </nav>

                <div className="hidden lg:flex">
                    <a
                        href="#contacto"
                        className="rounded-lg bg-[#2E52A8] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#243F73] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E52A8]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Solicitar asesoría
                    </a>
                </div>

                <button
                    type="button"
                    className="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-[#5275BC] transition-colors hover:bg-[#EEF3FA] lg:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="menu-movil"
                    aria-label={open ? "Cerrar menú" : "Abrir menú"}
                >
                    {open ? <IconX /> : <IconMenu />}
                </button>
            </div>

            {/* Progreso de lectura (en xl+ lo reemplaza la regla lateral) */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-boya xl:hidden"
                style={{ transform: `scaleX(${progreso})` }}
            />

            {open && (
                <div
                    id="menu-movil"
                    className="absolute inset-x-0 top-full max-h-[calc(100dvh-68px)] overflow-y-auto bg-white lg:hidden"
                    style={{ borderTop: "1px solid #DDE8F5", boxShadow: "0 16px 32px -12px rgba(16,28,43,0.18)" }}
                >
                    <nav className="flex flex-col px-6 pt-2 pb-6" aria-label="Principal móvil">
                        {links.map(([texto, id]) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={() => setOpen(false)}
                                aria-current={activo === id ? "location" : undefined}
                                className={`py-3.5 text-base font-medium transition-colors hover:text-[#2E52A8] ${
                                    activo === id ? "text-[#2E52A8]" : "text-[#334A63]"
                                }`}
                                style={{ borderBottom: "1px solid #EEF3FA" }}
                            >
                                {texto}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            onClick={() => setOpen(false)}
                            className="mt-5 rounded-lg bg-[#2E52A8] px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#243F73]"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Solicitar asesoría
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}