import { IconChevronRight } from "./Icons";
import { tagsData } from "../data/tagsData";

export default function Capacitacion() {
    return (
        <section className="reveal relative overflow-hidden" style={{ minHeight: `500px` }}>
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=1400&h=600&fit=crop&auto=format)`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                }}
            />
            <div className="absolute inset-0" style={{ background: `rgba(36,63,115,0.9)` }} />
            <div aria-hidden="true" className="absolute inset-0 engineering-grid-light" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
                <div className="flex gap-6 lg:gap-8 max-w-3xl">
                    <span
                        aria-hidden="true"
                        className="hidden sm:block w-1 rounded-full shrink-0 bg-[#96BDD8]"
                    />
                    <div>
                        <h2
                            className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight"
                            style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.02em` }}
                        >
                            Capacitación técnica diseñada para tu organización.
                        </h2>
                        <p className="text-white/85 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                            Desarrollamos programas de capacitación in-house adaptados a las necesidades específicas de
                            cada empresa, combinando conocimiento técnico, experiencia profesional y aplicación
                            práctica.
                        </p>

                        <ul className="flex flex-wrap gap-2.5 mb-10">
                            {tagsData.map((tag) => (
                                <li
                                    key={tag}
                                    className="text-[13px] font-medium px-3.5 py-1.5 rounded-full text-white/95 transition-colors duration-200 hover:bg-white/20"
                                    style={{
                                        background: `rgba(255,255,255,0.12)`,
                                        border: `1px solid rgba(255,255,255,0.25)`,
                                    }}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contacto"
                            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm bg-white text-[#243F73] transition-all duration-200 hover:bg-[#EEF3FA] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            style={{ fontFamily: `var(--font-display)` }}
                        >
                            Solicitar capacitación
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                <IconChevronRight />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
