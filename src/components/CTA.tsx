import { IconChevronRight } from "./Icons";

export default function CTA() {
    return (
        <section className="reveal relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0" style={{ backgroundImage: `url(/images/embarcacionMariangella.jpeg)`, backgroundSize: `cover`, backgroundPosition: `center` }} />
            <div className="absolute inset-0" style={{ background: `rgba(36,63,115,0.9)` }} />
            <div aria-hidden="true" className="absolute inset-0 engineering-grid-light" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mx-auto max-w-4xl rounded-2xl px-6 py-14 lg:px-16 lg:py-16 text-center">
                    <h2
                        className="text-3xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight"
                        style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.02em` }}
                    >
                        ¿Tienes un proyecto o desafío técnico?
                    </h2>
                    <div aria-hidden="true" className="mx-auto mb-6 h-1 w-12 rounded-full bg-[#96BDD8]" />
                    <p className="text-white/85 text-base lg:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                        Conversemos sobre cómo podemos ayudarte a desarrollar, gestionar y mejorar tu proyecto u
                        organización.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contacto"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm bg-white text-[#243F73] transition-all duration-200 hover:bg-[#EEF3FA] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            style={{ fontFamily: `var(--font-display)` }}
                        >
                            Solicitar asesoría
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                <IconChevronRight />
                            </span>
                        </a>
                        <a
                            href="#servicios"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:bg-white/15 hover:border-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            style={{
                                border: `1px solid rgba(255,255,255,0.4)`,
                                fontFamily: `var(--font-display)`,
                            }}
                        >
                            Conocer nuestros servicios
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
