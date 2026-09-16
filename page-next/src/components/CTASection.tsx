import { IconChevronRight } from "./Icons";

export default function CTASection() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1527335988388-b40ee248d80c?w=1400&h=700&fit=crop&auto=format)`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }}
            />
            <div className="bg-[rgba(20,30,50,0.90)]/90 absolute inset-0" />
            <div className="absolute inset-0 engineering-grid-light" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
                <h2
                    className="text-3xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight"
                    style={{
                        fontFamily: `var(--font-display)`,
                        letterSpacing: `-0.02em`,
                    }}
                >
                    ¿Tienes un proyecto o desafío técnico?
                </h2>
                <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                    Conversemos sobre cómo podemos ayudarte a desarrollar, gestionar y
                    mejorar tu proyecto u organización.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#contacto"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:gap-10"
                        style={{
                            background: `#4A7AB5`,
                            color: `#fff`,
                            fontFamily: `var(--font-display)`,
                        }}
                    >
                        Solicitar asesoría <IconChevronRight />
                    </a>
                    <a
                        href="#servicios"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-white/10"
                        style={{
                            border: `1px solid rgba(255,255,255,0.28)`,
                            color: `#fff`,
                            fontFamily: `var(--font-display)`,
                        }}
                    >
                        Conocer nuestros servicios
                    </a>
                </div>
            </div>
        </section>
    )
}