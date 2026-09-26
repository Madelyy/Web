"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconX, IconMenu } from "../Icons";
import useInView from "@/hooks/useInView";

export default function HeaderSection() {
    const navLinks = [
        "Inicio",
        "Nosotros",
        "Equipo",
        "Servicios",
        "Experiencia",
        "Contacto",
    ]

    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40)
        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, [])


    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                background: scrolled ? `rgba(255,255,255,0.98)` : `rgba(255,255,255,0.94)`,
                backdropFilter: `blur(14px)`,
                borderBottom: scrolled ? `2px solid #DDE8F5` : `none`,
                boxShadow: scrolled ? `0 4px 24px rgba(16, 28, 43, 0.07)` : `none`,
            }}
        >
            <div
                className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between transition-all duration-300 h-16 lg:h-20"
                style={{ height: scrolled ? `60px` : `80px` }}
            >
                <Image
                    src={"/images/logoA_4B6FAE.png"}
                    alt="Albatros Asociados SAC"
                    height={250}
                    width={250}
                    className="shrink-0 transition-all duration-300 object-contain"
                    priority
                    style={{ width: scrolled ? `180px` : `250px`, height: scrolled ? `180` : `250px` }}
                />
                <nav className="hidden lg:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-[#445569] hover:text-[#2E52A8] text-sm font-medium transition-colors duration-200"
                        >
                            {link}
                        </a>
                    ))}
                </nav>
                <div className="hidden lg:flex">
                    <a
                        href="#contacto"
                        className="bg-[#4B6FAE] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:bg-[#6B9CC4]"
                        style={{
                            fontFamily: `var(--font-display)`,
                        }}
                    >
                        Solicitar asesoría
                    </a>
                </div>
                <button
                    className="lg:hidden p-1"
                    style={{ color: `#1C2B3D` }}
                    onClick={() => setOpen(!open)}
                >
                    {open ? <IconX /> : <IconMenu />}
                </button>
            </div>
            <div
                className="lg:hidden right-0"
                style={{ borderTop: `2px solid #DDE8F5` }}
            >
                {open && (
                    <div className="px-6 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-[#445569] hover:text-white text-sm font-medium py-1"
                            >
                                {link}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
                            style={{ background: `#4A7AB5`, color: `#fff` }}
                            onClick={() => setOpen(false)}
                        >
                            Solicitar asesoría
                        </a>
                    </div>
                )}
            </div>
        </header>
    )
}
