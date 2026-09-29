import { etapasData } from "../data/etapasData";

export default function Metodologia() {
    return (
        <section id="experiencia-metodologia" className="reveal bg-white py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-14 lg:mb-20 flex gap-5">
                    <span
                        aria-hidden="true"
                        className="hidden sm:block w-1 rounded-full shrink-0"
                        style={{ background: `linear-gradient(to bottom, #2E52A8, #4A7AB5)` }}
                    />
                    <h2
                        className="text-3xl lg:text-4xl font-bold"
                        style={{ fontFamily: `var(--font-display)`, color: `#1C2B3D`, letterSpacing: `-0.02em` }}
                    >
                        De la necesidad a la solución.
                    </h2>
                </div>

                <div className="relative">
                    {/* Línea que une las etapas (solo escritorio) */}
                    <div
                        aria-hidden="true"
                        className="absolute top-10 left-0 right-0 h-px hidden lg:block"
                        style={{ background: `linear-gradient(to right, transparent, #B9CCE6 10%, #B9CCE6 90%, transparent)` }}
                    />

                    <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
                        {etapasData.map((s) => (
                            <li key={s.num} className="flex flex-col items-center text-center group">
                                <div className="relative mb-6">
                                    <div
                                        className="w-20 h-20 rounded-full flex items-center justify-center bg-white text-[#2E52A8] transition-all duration-300 group-hover:bg-[#2E52A8] group-hover:text-white group-hover:shadow-lg"
                                        style={{ border: `2px solid #B9CCE6` }}
                                    >
                                        {s.icon}
                                    </div>
                                    {/* Número en una insignia legible */}
                                    <span
                                        className="absolute -top-1 -right-1 h-7 min-w-7 px-1.5 rounded-full flex items-center justify-center text-xs font-bold text-white bg-[#243F73]"
                                        style={{ fontFamily: `var(--font-display)`, border: `2px solid #fff` }}
                                    >
                                        {s.num}
                                    </span>
                                </div>
                                <h3
                                    className="font-bold text-base mb-2 text-[#1C2B3D]"
                                    style={{ fontFamily: `var(--font-display)` }}
                                >
                                    {s.title}
                                </h3>
                                <p className="text-[#516A85] text-sm leading-relaxed max-w-[240px]">{s.desc}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}