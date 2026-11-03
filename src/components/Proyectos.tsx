import Image from "next/image"
import { proyectosData } from "@/data/proyectosData"
import MarcoTecnico from "@/components/ui/MarcoTecnico"
import Reveal from "@/components/ui/Reveal"
import Titulo from "@/components/ui/Titulo"

/**
 * Casos con foto PROPIA (ruta que empieza con "/") → ficha con foto.
 * Casos con foto de stock (https://...) → lista compacta sin foto.
 * Cuando tengas fotos propias de esos casos, cambia la ruta en proyectosData y pasan a ficha solos.
 */
const esLocal = (img?: string) => Boolean(img?.startsWith("/"))

export default function Proyectos() {
    const conFoto = proyectosData.filter((p) => esLocal(p.img))
    const sinFoto = proyectosData.filter((p) => !esLocal(p.img))

    return (
        <section id="experiencia" className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Titulo titulo="Experiencia que genera confianza." intro="Conocemos los desafíos de diferentes sectores." />

                {/* ---------- Fichas con foto ---------- */}
                <div className="mt-16 grid gap-20 lg:mt-20 lg:gap-24">
                    {conFoto.map((p, i) => {
                        const invertido = i % 2 === 1
                        return (
                            <article
                                key={`${p.sector}-${i}`}
                                // La foto ocupa como máximo 420px: más pequeña = más nítida
                                className={`grid items-center gap-10 lg:gap-16 ${invertido ? "lg:grid-cols-[minmax(0,1fr)_420px]" : "lg:grid-cols-[420px_minmax(0,1fr)]"
                                    }`}
                            >
                                <Reveal className={invertido ? "lg:order-2" : ""}>
                                    <MarcoTecnico className="mx-auto w-full max-w-[420px]">
                                        {/* Foto "montada": marco blanco que también disimula la baja resolución */}
                                        <div className="group rounded-xl bg-white p-2 shadow-[0_20px_50px_-20px_rgba(28,43,61,0.3)] ring-1 ring-[#DDE8F5]">
                                            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                                                <Image
                                                    src={p.img}
                                                    alt={`Proyecto del sector ${p.sector}`}
                                                    fill
                                                    sizes="420px"
                                                    quality={90}
                                                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                                                />
                                                <div aria-hidden="true" className="absolute inset-0 bg-[#4569B5]/15 mix-blend-multiply" />
                                            </div>
                                        </div>
                                    </MarcoTecnico>
                                </Reveal>

                                <Reveal delay={150} className={invertido ? "lg:order-1" : ""}>
                                    <span className="text-sm font-bold text-boya-ink" style={{ fontFamily: "var(--font-display)" }}>
                                        Ficha {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3
                                        className="mt-2 text-2xl font-bold text-[#1C2B3D] lg:text-3xl"
                                        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                                    >
                                        {p.sector}
                                    </h3>
                                    <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#445569]">{p.desc}</p>

                                    <dl className="mt-8 max-w-xl border-t border-[#DDE8F5] pt-5">
                                        <div className="grid grid-cols-[90px_1fr] gap-4 text-sm">
                                            <dt className="text-[#6E85A0]">Servicio</dt>
                                            <dd className="m-0 font-semibold text-[#2E52A8]">{p.servicio}</dd>
                                        </div>
                                    </dl>
                                </Reveal>
                            </article>
                        )
                    })}
                </div>

                {/* ---------- Otros frentes (sin foto de stock) ---------- */}
                {sinFoto.length > 0 && (
                    <div className="mt-24 lg:mt-32">
                        <h3
                            className="text-2xl font-bold text-[#243F73] lg:text-3xl"
                            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                        >
                            Otros frentes de trabajo
                        </h3>
                        <div aria-hidden="true" className="regla-h mt-6 mb-10 w-full text-[#B9CCE6]" />

                        <ul className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                            {sinFoto.map((p, i) => (
                                <li key={`${p.sector}-${i}`}>
                                    <Reveal delay={(i % 3) * 100}>
                                        <h4 className="text-lg font-bold text-[#1C2B3D]" style={{ fontFamily: "var(--font-display)" }}>
                                            {p.sector}
                                        </h4>
                                        <p className="mt-3 text-sm leading-relaxed text-[#445569]">{p.desc}</p>
                                        <p className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                                            <span className="text-[#6E85A0]">Servicio</span>
                                            <span className="rounded-full bg-boya-soft px-2.5 py-1 font-semibold text-boya-ink">{p.servicio}</span>
                                        </p>
                                    </Reveal>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    )
}
