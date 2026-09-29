import { equipoData } from "../data/equipoData";
import { IconMail, IconPhone } from "./Icons";

export default function Equipo() {
    return (
        <section id="equipo" className="reveal bg-[#243F73] relative overflow-hidden" style={{ minHeight: `500px` }}>
            <div aria-hidden="true" className="absolute inset-0 engineering-grid-light" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
                <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-white leading-tight"
                        style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.02em` }}
                    >
                        Profesionales que hacen posible cada proyecto.
                    </h2>
                    <div
                        aria-hidden="true"
                        className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#96BDD8]"
                    />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {equipoData.map((e) => (
                        <article
                            key={e.cargo}
                            className="relative flex flex-col bg-white rounded-xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                            style={{ boxShadow: `0 16px 40px -12px rgba(10,20,45,0.45)` }}
                        >
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-1"
                                style={{ background: `linear-gradient(90deg, #2E52A8, #4A7AB5)` }}
                            />
                            <span
                                className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-[#EBF0FA] text-[#2E52A8]"
                                style={{ fontFamily: `var(--font-display)` }}
                            >
                                {e.cargo}
                            </span>
                            <h3
                                className="mt-5 mb-3 text-lg font-bold leading-snug text-[#1C2B3D]"
                                style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.01em` }}
                            >
                                {e.nombre}
                            </h3>
                            <p className="text-sm leading-relaxed text-[#516A85] flex-1">{e.desc}</p>
                            <div className="my-6 h-px bg-[#E3EBF5]" />
                            <ul className="flex flex-col gap-3 text-sm">
                                <li>
                                    <a
                                        href={`mailto:${e.correo}`}
                                        className="flex items-center gap-3 text-[#2E52A8] hover:text-[#1D5093] transition-colors min-w-0"
                                    >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FA] text-[#2E52A8]">
                                            <IconMail />
                                        </span>
                                        <span className="break-all">{e.correo}</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`tel:+51${String(e.telefono).replace(/\s/g, "")}`}
                                        className="flex items-center gap-3 text-[#2E52A8] hover:text-[#1D5093] transition-colors"
                                    >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FA] text-[#2E52A8]">
                                            <IconPhone />
                                        </span>
                                        <span>+51 {e.telefono}</span>
                                    </a>
                                </li>
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}