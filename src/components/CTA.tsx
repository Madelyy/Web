import Image from "next/image"
import { IconChevronRight } from "./Icons"
import Sonar from "./ui/Sonar"

export default function CTA() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-36">
            <Image
                src="/images/embarcacionMariangella.jpeg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[#426DA3]/80" />
            <div aria-hidden="true" className="absolute inset-0 engineering-grid-light" />
            <Sonar className="top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-white/40" />
            <div aria-hidden="true" className="regla-h absolute inset-x-6 top-6 text-white/40 lg:inset-x-10" />

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
                <h2
                    className="mx-auto mb-6 max-w-2xl text-3xl leading-tight font-bold text-balance text-white lg:text-5xl"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                >
                    ¿Tienes un proyecto o desafío técnico?
                </h2>
                <div aria-hidden="true" className="regla-h mx-auto mb-6 w-24 text-boya" />
                <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/90 lg:text-lg">
                    Conversemos sobre cómo podemos ayudarte a desarrollar, gestionar y mejorar tu proyecto u organización.
                </p>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                        href="#contacto"
                        className="group inline-flex items-center justify-center gap-2 rounded-lg bg-boya px-8 py-4 text-sm font-semibold text-[#243F73] transition-all duration-200 hover:bg-[#FFB36A] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Solicitar asesoría
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                            <IconChevronRight />
                        </span>
                    </a>
                    <a
                        href="#servicios"
                        className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-semibold text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        style={{ border: "1px solid rgba(255,255,255,0.5)", fontFamily: "var(--font-display)" }}
                    >
                        Conocer nuestros servicios
                    </a>
                </div>
            </div>
        </section>
    )
}
