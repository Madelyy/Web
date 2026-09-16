import { IconChevronRight } from "./Icons"
import { tagsData } from "../data/tagsData"

export default function Capacitacion() {
    return (
        <section
            className="relative py-0 overflow-hidden cursor-default"
            style={{ minHeight: "500px" }}
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=1400&h=600&fit=crop&auto=format)`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                }}
            />
            <div
                className="absolute inset-0"
                style={{ background: `rgba(20,30,50,0.87)` }}
            />
            <div className="absolute inset-0 engineering-grid-light" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
                <div className="max-w-2xl">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight"
                        style={{
                            fontFamily: `var(--font-display)`,
                            letterSpacing: `-0.02em`,
                        }}
                    >
                        Capacitación técnica diseñada para tu organización.
                    </h2>
                    <p className="text-white/65 mb-8 leading-relaxed">
                        Desarrollamos programas de capacitación in-house adaptados a las
                        necesidades específicas de cada empresa, combinando conocimiento
                        técnico, experiencia profesional y aplicación práctica.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {tagsData.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-3 py-1.5 rounded-full transition-all duration-300 hover:brightness-150"
                                style={{
                                    background: `rgba(74,122,181,0.12)`,
                                    border: `1px solid rgba(74,122,181,0.28)`,
                                    color: `#96BDD8`,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <a
                        href="#contacto"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:gap-10"
                        style={{
                            background: `#4A7AB5`,
                            color: `#fff`,
                            fontFamily: `var(--font-display)`
                        }}
                    >
                        Solicitar capacitación <IconChevronRight />
                    </a>
                </div>
            </div>
        </section>
    )
}