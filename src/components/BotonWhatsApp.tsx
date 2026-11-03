"use client"
import { useEffect, useState } from "react"

const NUMERO = "51990184822" // +51 990 184 822 — confirma que este número tenga WhatsApp
const MENSAJE = "Hola, quisiera solicitar asesoría técnica."

/** Aparece al bajar un poco; se oculta al llegar al formulario para no estorbar. */
export default function BotonWhatsApp() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const calcular = () => {
            const contacto = document.getElementById("contacto")
            const enContacto = contacto ? contacto.getBoundingClientRect().top < window.innerHeight * 0.5 : false
            setVisible(window.scrollY > 600 && !enContacto)
        }
        calcular()
        window.addEventListener("scroll", calcular, { passive: true })
        return () => window.removeEventListener("scroll", calcular)
    }, [])

    return (
        <a
            href={`https://wa.me/${NUMERO}?text=${encodeURIComponent(MENSAJE)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            tabIndex={visible ? 0 : -1}
            className={`group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-boya py-3 pr-3 pl-3 text-[#243F73] shadow-[0_12px_30px_-8px_rgba(20,40,90,0.45)] transition-all duration-300 hover:pr-5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E52A8] sm:right-6 sm:bottom-6 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
                }`}
        >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z" />
                <path d="M9 9.5c.3 2 2.5 4.2 4.5 4.5l1.3-1.2-1.8-1.1-.8.6c-.6-.3-1.4-1.1-1.7-1.7l.6-.8L10 8.7z" fill="currentColor" stroke="none" />
            </svg>
            <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-300 group-hover:max-w-[110px] group-focus-visible:max-w-[110px]">
                Escríbenos
            </span>
        </a>
    )
}
