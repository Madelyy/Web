import { proyectosData } from "../data/proyectosData";

export default function Proyectos() {
    return (
        <section
            id="experiencia"
            className="reveal relative bg-[#EEF3FA] py-24 lg:py-32 overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(#DDE8F5 1px, transparent 1px), linear-gradient(90deg, #DDE8F5 1px, transparent 1px)`,
                    backgroundSize: `48px 48px`,
                    opacity: 0.45,
                    maskImage: `linear-gradient(to bottom, black 0%, transparent 65%)`,
                    WebkitMaskImage: `linear-gradient(to bottom, black 0%, transparent 65%)`,
                }}
            />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-14 lg:mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="flex gap-5">
                            <span
                                aria-hidden="true"
                                className="hidden sm:block w-1 rounded-full shrink-0"
                                style={{ background: `linear-gradient(to bottom, #2E52A8, #4A7AB5)` }}
                            />
                            <h2
                                className="text-3xl lg:text-4xl font-bold max-w-lg leading-tight"
                                style={{
                                    fontFamily: `var(--font-display)`,
                                    color: `#1C2B3D`,
                                    letterSpacing: `-0.02em`,
                                }}
                            >
                                Experiencia que genera confianza.
                            </h2>
                        </div>
                        <p
                            className="text-sm leading-relaxed max-w-xs px-4 py-3 rounded-lg"
                            style={{
                                color: `#51677A`,
                                background: `rgba(74,122,181,0.07)`,
                                border: `1px solid #DDE8F5`,
                            }}
                        >
                            Conocemos los desafíos de diferentes sectores.
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {proyectosData.map((p, i) => (
                        <article
                            key={i}
                            className="group flex flex-col rounded-xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 focus-within:-translate-y-1 hover:border-[#B9CCE6]"
                            style={{
                                border: `1px solid #DDE8F5`,
                                boxShadow: `0 1px 2px rgba(28,43,61,0.04), 0 8px 24px -8px rgba(28,43,61,0.10)`,
                            }}
                        >
                            <div className="relative overflow-hidden h-52">
                                <img
                                    src={p.img}
                                    alt={`Proyecto del sector ${p.sector}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0"
                                    style={{
                                        background: `linear-gradient(to top, rgba(28,43,61,0.35), rgba(28,43,61,0) 55%)`,
                                    }}
                                />
                                <span
                                    className="absolute left-4 bottom-4 text-xs font-semibold px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm"
                                    style={{ color: `#2E52A8` }}
                                >
                                    {p.sector}
                                </span>
                            </div>
                            <div className="flex flex-col flex-1 p-6 lg:p-7">
                                <p className="text-[#445569] text-[15px] leading-relaxed flex-1">
                                    {p.desc}
                                </p>

                                <div
                                    className="mt-6 pt-4 flex items-center gap-2"
                                    style={{ borderTop: `1px solid #E8EFF8` }}
                                >
                                    <span className="text-xs" style={{ color: `#6E85A0` }}>
                                        Servicio
                                    </span>
                                    <span className="bg-[#EBF0FA] text-[#2E52A8] text-xs px-2.5 py-1 rounded-full font-medium">
                                        {p.servicio}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
