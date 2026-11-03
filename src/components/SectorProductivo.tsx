import Image from "next/image"
import { cardsSectorData } from "@/data/cardsSectorData"
import MarcoTecnico from "@/components/ui/MarcoTecnico"
import Reveal from "@/components/ui/Reveal"
import Titulo from "@/components/ui/Titulo"

/** Absorbe también a <Sectores /> (que ya tenías comentado): los 4 ámbitos viven aquí. */
export default function SectorProductivo() {
    return (
        <section id="sectores" className="relative bg-[#EEF3FA] py-24 lg:py-32">
            <div aria-hidden="true" className="absolute inset-0 fondo-escamas" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
                    {/* Foto a la izquierda en escritorio; en móvil va después del texto */}
                    <Reveal className="order-2 lg:order-1">
                        <MarcoTecnico className="mx-auto w-full max-w-lg lg:max-w-none">
                            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-[0_24px_64px_rgba(28,43,61,0.14)] lg:aspect-[4/5]">
                                <Image
                                    src="/images/sectorEmbarcaciones.png"
                                    alt="Trabajadores en planta pesquera clasificando productos"
                                    fill
                                    sizes="(min-width: 1024px) 40vw, 90vw"
                                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                                />
                                <div aria-hidden="true" className="absolute inset-0 bg-[#4569B5]/15 mix-blend-multiply" />
                            </div>
                        </MarcoTecnico>
                    </Reveal>

                    <div className="order-1 lg:order-2">
                        <Titulo titulo="Conocimiento técnico aplicado al sector pesquero y productivo." />
                        <p className="mt-6 mb-10 max-w-xl text-base leading-relaxed text-[#445569]">
                            Entendemos los desafíos técnicos, productivos, regulatorios, ambientales y de calidad que enfrentan las
                            organizaciones del sector pesquero, acuícola e industrial.
                        </p>

                        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                            {cardsSectorData.map((c, i) => (
                                <li key={c.title}>
                                    <Reveal delay={i * 100}>
                                        <div aria-hidden="true" className="regla-h mb-4 w-full text-[#B9CCE6]" />
                                        <h3
                                            className="mb-2 text-[17px] font-bold text-[#243F73]"
                                            style={{ fontFamily: "var(--font-display)" }}
                                        >
                                            {c.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-[#516A85]">{c.desc}</p>
                                    </Reveal>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
