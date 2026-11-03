import Image from "next/image"
import { cardsMVData } from "@/data/cardsMVData"
import { valoresData } from "@/data/valoresData"
import MarcoTecnico from "@/components/ui/MarcoTecnico"
import Reveal from "@/components/ui/Reveal"
import Titulo from "@/components/ui/Titulo"

/**
 * Fusiona lo que antes eran 3 secciones: Nosotros + MisionVision + Valores.
 * (El proceso de 5 etapas ahora vive en <Ruta />.)
 */
export default function Nosotros() {
    return (
        <section id="nosotros" className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {/* ---- Quiénes somos ---- */}
                <div className="grid items-center gap-16 lg:grid-cols-[1fr_.9fr] lg:gap-24">
                    <Reveal>
                        <Titulo titulo="Experiencia técnica orientada a resultados." />
                        <p className="mt-8 max-w-[540px] text-base leading-relaxed text-[#51677A]">
                            Somos una empresa peruana especializada en servicios de capacitación, consultoría y asesoramiento
                            técnico para el sector pesquero y productivo, con experiencia en gestión, calidad, seguridad y mejora
                            de procesos aplicados a embarcaciones y operaciones pesqueras.
                        </p>
                        <p
                            className="mt-8 max-w-[540px] border-l-2 border-boya pl-5 text-lg leading-snug font-semibold text-[#243F73]"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Soluciones técnicas para optimizar procesos y operaciones pesqueras.
                        </p>
                    </Reveal>

                    <Reveal delay={150}>
                        <MarcoTecnico className="mx-auto w-full max-w-lg lg:max-w-none">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-[0_24px_64px_rgba(28,43,61,0.14)] lg:aspect-[4/5]">
                                <Image
                                    src="/images/embValentina.jpeg"
                                    alt="Embarcación pesquera"
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 45vw, 90vw"
                                    className="object-cover"
                                />
                                <div aria-hidden="true" className="absolute inset-0 bg-[#4569B5]/15 mix-blend-multiply" />
                            </div>
                        </MarcoTecnico>
                    </Reveal>
                </div>

                {/* ---- Compromiso · Misión · Visión (sin tarjetas: texto sobre regla) ---- */}
                <div className="mt-24 grid gap-12 border-t border-[#DDE8F5] pt-14 md:grid-cols-3 md:gap-10 lg:mt-32">
                    {cardsMVData.map((card, i) => (
                        <Reveal key={card.tag} delay={i * 120}>
                            <div aria-hidden="true" className="regla-h mb-5 w-16 text-boya" />
                            <h3 className="text-lg font-bold text-[#243F73]" style={{ fontFamily: "var(--font-display)" }}>
                                {card.tag}
                            </h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-[#445569]">{card.text}</p>
                        </Reveal>
                    ))}
                </div>

                {/* ---- Valores ---- */}
                <div className="mt-24 lg:mt-32">
                    <h3
                        className="max-w-md text-2xl font-bold text-[#1C2B3D] lg:text-3xl"
                        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                    >
                        Los principios que guían nuestro trabajo.
                    </h3>
                    <div aria-hidden="true" className="regla-h mt-8 mb-8 w-full text-[#B9CCE6]" />
                    <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
                        {valoresData.map((v) => (
                            <li key={v.label} className="group">
                                <h4
                                    className="text-base font-bold text-[#243F73] transition-colors duration-200 group-hover:text-boya-ink"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    {v.label}
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-[#516A85]">{v.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}