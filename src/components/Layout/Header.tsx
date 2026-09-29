"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconX, IconMenu } from "../Icons";

const navLinks = [ "Inicio", "Nosotros", "Equipo", "Servicios", "Experiencia", "Contacto" ];

export default function HeaderSection() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        handler();
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{ background: `rgba(255,255,255,0.97)`, backdropFilter: `blur(4px)`, borderBottom: `1px solid #DDE8F5`, boxShadow: scrolled ? `0 6px 24px -8px rgba(16,28,43,0.12)` : `none`,}}
        >
            <div className={`max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? `h-[60px] lg:h-[68px]` : `h-[68px] lg:h-[84px]`}`}>
                <a href="#inicio" aria-label="Ir al inicio" className="shrink-0">
                    <Image
                        src={"/images/logoA_4B6FAE.png"}
                        alt="Albatros Asociados SAC"
                        width={250}
                        height={250}
                        priority
                        className={`h-auto object-contain transition-all duration-300 ${scrolled ? `w-[150px] lg:w-[180px]` : `w-[165px] lg:w-[220px]`}`}
                    />
                </a>
                <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="relative text-[#334A63] hover:text-[#2E52A8] text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#2E52A8] after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                            {link}
                        </a>
                    ))}
                </nav>
                <div className="hidden lg:flex">
                    <a
                        href="#contacto"
                        className="bg-[#2E52A8] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:bg-[#243F73] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E52A8]"
                        style={{ fontFamily: `var(--font-display)` }}
                    >
                        Solicitar asesoría
                    </a>
                </div>
                <button
                    type="button"
                    className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg text-[#1C2B3D] transition-colors hover:bg-[#EEF3FA] cursor-pointer"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls="menu-movil"
                    aria-label={open ? "Cerrar menú" : "Abrir menú"}
                >
                    {open ? <IconX /> : <IconMenu />}
                </button>
            </div>
            {open && (
                <div
                    id="menu-movil"
                    className="lg:hidden absolute top-full inset-x-0 bg-white max-h-[calc(100dvh-72px)] overflow-y-auto"
                    style={{ borderTop: `1px solid #DDE8F5`, boxShadow: `0 16px 32px -12px rgba(16,28,43,0.18)` }}
                >
                    <nav className="px-6 pt-2 pb-6 flex flex-col" aria-label="Principal móvil">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setOpen(false)}
                                className="py-3.5 text-base font-medium text-[#334A63] transition-colors hover:text-[#2E52A8]"
                                style={{ borderBottom: `1px solid #EEF3FA` }}
                            >
                                {link}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            onClick={() => setOpen(false)}
                            className="mt-5 text-sm font-semibold px-5 py-3.5 rounded-lg text-center text-white bg-[#2E52A8] transition-colors hover:bg-[#243F73]"
                            style={{ fontFamily: `var(--font-display)` }}
                        >
                            Solicitar asesoría
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
