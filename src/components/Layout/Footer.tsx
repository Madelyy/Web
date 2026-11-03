import Image from "next/image"
import type { ReactNode } from "react"
import { IconFacebook, IconGlobe, IconLinkedin, IconMail, IconPhone } from "../Icons"
import { sectoresData } from "@/data/sectoresData"
import { serviciosData } from "@/data/serviciosData"
import Olas from "../ui/Olas"

const navLinks = [
    ["Inicio", "inicio"],
    ["Nosotros", "nosotros"],
    ["Equipo", "equipo"],
    ["Servicios", "servicios"],
    ["Sectores", "sectores"],
    ["Experiencia", "experiencia"],
    ["Contacto", "contacto"],
] as const

const socialLinks = [
    { label: "LinkedIn", href: "#", icon: <IconLinkedin /> },
    { label: "Facebook", href: "#", icon: <IconFacebook /> },
    { label: "Sitio web", href: "#", icon: <IconGlobe /> },
].filter((s) => s.href !== "#") // Mientras sean "#" no se muestran. Pon la URL real y aparecen solos.

const linkClass =
    "inline-block py-0.5 text-sm text-white/90 transition-all duration-200 hover:translate-x-1 hover:text-boya focus-visible:text-boya"

function ColumnTitle({ children }: { children: ReactNode }) {
    return (
        <div className="mb-5">
            <div className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                {children}
            </div>
            <div aria-hidden="true" className="regla-h mt-3 w-16 text-boya" />
        </div>
    )
}

export default function FooterSection() {
    return (
        <footer className="relative overflow-hidden bg-[#2C4B85] text-white">
            {/* Ola: toma el color de la sección anterior (Contacto, #EEF3FA) */}
            <Olas color="text-[#EEF3FA]" className="top-0 rotate-180" />

            <div aria-hidden="true" className="absolute inset-0 engineering-grid-light" />

            {/* Rosa de los vientos: decoración muy tenue */}
            <svg
                aria-hidden="true"
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="pointer-events-none absolute -right-28 bottom-6 h-[420px] w-[420px] text-white/[0.07]"
            >
                <circle cx="100" cy="100" r="96" />
                <circle cx="100" cy="100" r="70" />
                <circle cx="100" cy="100" r="44" />
                <path d="M100 0v200M0 100h200M30 30l140 140M170 30L30 170" />
                <path d="M100 18l9 82-9 82-9-82z" />
            </svg>

            <div className="relative z-90 mx-auto max-w-7xl px-6 pt-24 lg:px-10 lg:pt-32">
                <div className="mb-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
                    {/* Marca + contacto */}
                    <div className="sm:col-span-2 lg:col-span-4">
                        <Image
                            src="/images/logoB.png"
                            alt="Albatros Asociados SAC"
                            width={190}
                            height={190}
                            className="mb-6 h-auto w-[170px] lg:w-[190px]"
                        />
                        <p className="mb-7 max-w-sm text-sm leading-relaxed text-white/90">
                            Consultoría técnica, capacitación e ingeniería para el sector pesquero, acuícola, industrial y
                            productivo.
                        </p>

                        <address className="space-y-3 text-sm text-white/90 not-italic">
                            <p className="flex items-start gap-3">
                                <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-boya" />
                                Pasaje Maracaibo N° 170, Jesús María
                            </p>
                            <p>
                                <a href="mailto:asistente@albatrosperu.com" className="flex items-center gap-3 transition-colors hover:text-boya">
                                    <span className="text-boya">
                                        <IconMail />
                                    </span>
                                    asistente@albatrosperu.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:+51990184822" className="flex items-center gap-3 transition-colors hover:text-boya">
                                    <span className="text-boya">
                                        <IconPhone />
                                    </span>
                                    +51 990 184 822
                                </a>
                            </p>
                        </address>

                        {socialLinks.length > 0 && (
                            <div className="mt-7 flex gap-3">
                                {socialLinks.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-boya hover:text-boya-texto"
                                        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    <nav aria-label="Empresa" className="lg:col-span-2">
                        <ColumnTitle>Empresa</ColumnTitle>
                        <ul className="space-y-1.5">
                            {navLinks.map(([texto, id]) => (
                                <li key={id}>
                                    <a href={`#${id}`} className={linkClass}>
                                        {texto}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="lg:col-span-3">
                        <ColumnTitle>Servicios</ColumnTitle>
                        <ul className="space-y-1.5">
                            {serviciosData.map((s) => (
                                <li key={s.title}>
                                    <a href="#servicios" className={linkClass}>
                                        {s.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <ColumnTitle>Sectores</ColumnTitle>
                        <ul className="space-y-1.5">
                            {sectoresData.map((s) => (
                                <li key={s.title}>
                                    <a href="#sectores" className={linkClass}>
                                        {s.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div aria-hidden="true" className="regla-h w-full text-white/35" />
                <div className="flex flex-col items-center justify-between gap-3 pt-6 pb-8 text-xs text-white/85 sm:flex-row">
                    <span>© {new Date().getFullYear()} Albatros Asociados SAC.</span>
                    {/* Coordenadas aproximadas de Jesús María: verifica que te gusten */}
                    <span className="tabular-nums">Lima, Perú · 12°04′ S · 77°03′ O</span>
                    <a href="#inicio" className="font-semibold text-white transition-colors hover:text-boya">
                        Volver arriba ↑
                    </a>
                </div>
            </div>
        </footer>
    )
}
