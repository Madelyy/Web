"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconX, IconMenu } from "../Icons";
import useInView from "@/hooks/useInView";

export default function HeaderSection() {
    const navLinks = [
        "Inicio",
        "Nosotros",
        "Servicios",
        "Sectores",
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
                borderBottom: scrolled ? `1px solid #DDE8F5` : `none`,
                boxShadow: scrolled ? `0 2px 24px rgba(28,43,61,0.07)` : `none`
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
                <Image
                    src={"/images/logoA.png"}
                    alt="Albatros Asociados SAC"
                    width={250}
                    height={200}
                    className="shrink-0"
                    priority
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
                        className="bg-[#4A7AB5] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:bg-[#6B9CC4]"
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
            {open && (
                <div
                    className="lg:hidden bg-white"
                    style={{ borderTop: `1px solid #DDE8F5` }}
                >
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
                            className="text-sm font-semibold px-5 py-2.5 rounded-lg text-center mt-2"
                            style={{ background: `#4A7AB5`, color: `#fff` }}
                            onClick={() => setOpen(false)}
                        >
                            Solicitar asesoría
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
