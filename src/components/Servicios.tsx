"use client"
import Image from "next/image"
import { useState } from "react"
import { serviciosData } from "@/data/serviciosData"
import { tagsData } from "@/data/tagsData"
import { IconArrow, IconChevronRight } from "./Icons"
import ServicioModal from "./ui/ServicioModal"
import MarcoTecnico from "@/components/ui/MarcoTecnico"
import Titulo from "@/components/ui/Titulo"

type Servicio = (typeof serviciosData)[number]

/**
 * Los 8 servicios agrupados en 3 familias (por posición en serviciosData):
 * 0 SANIPES · 1 Manuales · 2 Inspección · 3 Calidad · 4 Ambiental · 5 Expedientes · 6 Capacitación · 7 Legislación
 * Si cambias el orden en tus datos, ajusta los índices aquí.
 */
const familias = [
    { titulo: "Sanitario y auditorías", indices: [0, 1, 2], img: "/images/industriaPesquera.png" },
    { titulo: "Sistemas de gestión", indices: [3, 4, 7], img: "/images/normativaPesqueria.jpg" },
    { titulo: "Ingeniería y formación", indices: [5, 6], img: "/images/operacionPesquera.png" },
].map((f) => ({
    ...f,
    items: f.indices.map((i) => serviciosData[i]).filter((s): s is Servicio => Boolean(s)),
}))

export default function Servicios() {
    const [selectedService, setSelectedService] = useState<Servicio | null>(null)
    const [isClosing, setIsClosing] = useState(false)
    const [activo, setActivo] = useState({ fam: 0, titulo: familias[0].titulo })

    const closeModal = () => {
        setIsClosing(true)
        setTimeout(() => {
            setSelectedService(null)
            setIsClosing(false)
        }, 175)
    }

    return (
        <section id="servicios" className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Titulo titulo="Soluciones técnicas para organizaciones que buscan mejorar." />

                {/* La foto ahora mide 380px como máximo: así no se amplía más allá de su resolución real. */}
                <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
                    {/* ---------- Índice de servicios ---------- */}
                    <div>
                        {familias.map((f, fi) => (
                            <div key={f.titulo} className={fi > 0 ? "mt-14" : ""}>
                                <h3 className="text-lg font-bold text-[#243F73]" style={{ fontFamily: "var(--font-display)" }}>
                                    {f.titulo}
                                </h3>
                                <div aria-hidden="true" className="regla-h mt-3 w-full text-[#B9CCE6]" />

                                <ul>
                                    {f.items.map((s) => (
                                        <li key={s.num}>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedService(s)}
                                                onMouseEnter={() => setActivo({ fam: fi, titulo: s.title })}
                                                onFocus={() => setActivo({ fam: fi, titulo: s.title })}
                                                className="group relative grid w-full cursor-pointer grid-cols-[2.5rem_1fr_auto] items-start gap-4 border-b border-[#DDE8F5] px-3 py-5 text-left transition-colors duration-200 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:origin-top before:scale-y-0 before:bg-boya before:transition-transform before:duration-300 hover:bg-[#F5F8FC] hover:before:scale-y-100 focus-visible:bg-[#F5F8FC] focus-visible:outline-2 focus-visible:outline-[#2E52A8] focus-visible:before:scale-y-100"
                                            >
                                                <span className="pt-0.5 text-sm font-bold text-boya-ink" style={{ fontFamily: "var(--font-display)" }}>
                                                    {s.num}
                                                </span>
                                                <span>
                                                    <span
                                                        className="block text-base leading-snug font-bold text-[#1C2B3D] transition-colors duration-200 group-hover:text-[#2E52A8]"
                                                        style={{ fontFamily: "var(--font-display)" }}
                                                    >
                                                        {s.title}
                                                    </span>
                                                    <span className="mt-1.5 block text-sm leading-relaxed text-[#516A85]">{s.desc}</span>
                                                </span>
                                                <span className="pt-1 text-[#4569B5] transition-transform duration-200 group-hover:translate-x-1">
                                                    <IconArrow />
                                                </span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* ---------- Panel de foto (solo escritorio): cambia según el servicio ---------- */}
                    <aside className="relative hidden lg:block" aria-hidden="true">
                        <div className="sticky top-32">
                            <MarcoTecnico>
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#EEF3FA] shadow-[0_20px_50px_-20px_rgba(28,43,61,0.3)]">
                                    {familias.map((f, i) => (
                                        <Image
                                            key={f.img}
                                            src={f.img}
                                            alt=""
                                            fill
                                            sizes="380px"
                                            quality={90}
                                            className={`object-cover transition-opacity duration-700 ${i === activo.fam ? "opacity-100" : "opacity-0"}`}
                                        />
                                    ))}
                                    <div className="absolute inset-0 bg-[#4569B5]/15 mix-blend-multiply" />
                                </div>
                            </MarcoTecnico>

                            {/* Leyenda debajo de la foto (ya no la tapa) */}
                            <div className="mt-7 border-t border-[#DDE8F5] pt-4">
                                <p className="text-xs font-semibold text-boya-ink">{familias[activo.fam].titulo}</p>
                                <p className="mt-1 text-sm font-bold text-[#243F73]" style={{ fontFamily: "var(--font-display)" }}>
                                    {activo.titulo}
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* ---------- Capacitación ---------- */}
                <div className="mt-20 grid items-center gap-10 rounded-2xl bg-[#EEF3FA] p-8 lg:mt-28 lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:p-14">
                    <div>
                        <h3
                            className="text-2xl font-bold text-[#1C2B3D] lg:text-3xl"
                            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                        >
                            Capacitación técnica diseñada para tu organización.
                        </h3>
                        <div aria-hidden="true" className="regla-h mt-5 mb-5 w-24 text-boya" />
                        <p className="max-w-xl text-base leading-relaxed text-[#51677A]">
                            Desarrollamos programas de capacitación in-house adaptados a las necesidades específicas de cada
                            empresa, combinando conocimiento técnico, experiencia profesional y aplicación práctica.
                        </p>
                    </div>
                    <div>
                        <ul className="mb-8 flex flex-wrap gap-2.5">
                            {tagsData.map((tag) => (
                                <li key={tag} className="rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#2E52A8] ring-1 ring-[#DDE8F5]">
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#contacto"
                            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-boya px-7 py-3.5 text-sm font-semibold text-boya-texto transition-all duration-200 hover:bg-boya-hover hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E52A8]"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Solicitar capacitación
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                <IconChevronRight />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {selectedService && <ServicioModal service={selectedService} isClosing={isClosing} onClose={closeModal} />}
        </section>
    )
}
