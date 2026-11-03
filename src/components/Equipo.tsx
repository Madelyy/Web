import Image from "next/image"
import { equipoData } from "@/data/equipoData"
import { IconMail, IconPhone } from "./Icons"
import Reveal from "@/components/ui/Reveal"
import Titulo from "@/components/ui/Titulo"

/**
 * Cada integrante es un "fotocheck" (credencial) que cuelga de una cinta.
 * No necesita retrato: la franja superior lleva el logo. Si más adelante agregas
 * `foto: "/images/nombre.jpg"` en equipoData, la foto reemplaza al logo automáticamente.
 */
export default function Equipo() {
    return (
        <section id="equipo" className="relative overflow-hidden bg-[#EEF3FA] py-24 lg:py-32">
            <div aria-hidden="true" className="absolute inset-0 fondo-escamas" />
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                <Titulo titulo="Profesionales que hacen posible cada proyecto." />

                <div className="mx-auto mt-20 grid max-w-4xl gap-16 md:grid-cols-2 lg:mt-24 lg:gap-14">
                    {equipoData.map((e, i) => {
                        const foto = (e as { foto?: string }).foto

                        return (
                            <Reveal key={e.cargo} delay={i * 150}>
                                <article
                                    className={`group relative mx-auto flex h-full w-full max-w-md flex-col transition-transform duration-500 ease-out motion-safe:hover:-translate-y-2 motion-safe:hover:rotate-0 ${i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"
                                        }`}
                                >
                                    {/* Cinta */}
                                    <div aria-hidden="true" className="relative mx-auto -mb-1 h-14 w-9 bg-[#4569B5]">
                                        <span className="absolute inset-y-0 left-1.5 w-px bg-white/30" />
                                        <span className="absolute inset-y-0 right-1.5 w-px bg-white/30" />
                                    </div>

                                    {/* Credencial */}
                                    <div className="relative flex flex-1 flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[#DDE8F5] shadow-[0_28px_60px_-26px_rgba(36,63,115,0.45)] transition-shadow duration-500 group-hover:shadow-[0_36px_70px_-24px_rgba(36,63,115,0.5)]">
                                        {/* Ranura del gancho */}
                                        <span
                                            aria-hidden="true"
                                            className="absolute top-3 left-1/2 z-10 h-2.5 w-16 -translate-x-1/2 rounded-full bg-[#EEF3FA] ring-1 ring-black/10"
                                        />

                                        {/* Franja superior */}
                                        <div className="relative bg-[#4569B5] px-7 pt-10 pb-7 text-center">
                                            <div aria-hidden="true" className="absolute inset-0 engineering-grid-light" />
                                            <span className="absolute top-4 right-5 text-xs font-semibold text-white/85 tabular-nums">
                                                N.° {String(i + 1).padStart(2, "0")}
                                            </span>

                                            <div className="relative">
                                                {foto ? (
                                                    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-white/80">
                                                        <Image src={foto} alt={`Retrato de ${e.nombre}`} fill sizes="96px" className="object-cover" />
                                                    </div>
                                                ) : (
                                                    <Image
                                                        src="/images/logoB.png"
                                                        alt=""
                                                        width={190}
                                                        height={190}
                                                        className="mx-auto h-auto w-[130px]"
                                                    />
                                                )}
                                                <p className="mt-3 text-xs font-medium tracking-wide text-white/90">Equipo técnico</p>
                                            </div>
                                        </div>

                                        {/* Cuerpo */}
                                        <div className="flex flex-1 flex-col p-7 sm:p-8">
                                            <span
                                                className="self-start rounded-full bg-boya-soft px-3 py-1 text-xs font-semibold text-boya-ink"
                                                style={{ fontFamily: "var(--font-display)" }}
                                            >
                                                {e.cargo}
                                            </span>
                                            <h3
                                                className="mt-4 mb-3 text-xl leading-snug font-bold text-[#243F73]"
                                                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
                                            >
                                                {e.nombre}
                                            </h3>
                                            <p className="flex-1 text-sm leading-relaxed text-[#2B507F]">{e.desc}</p>

                                            <div aria-hidden="true" className="regla-h my-6 w-full text-[#B9CCE6]" />

                                            <ul className="flex flex-col gap-3 text-sm">
                                                <li>
                                                    <a
                                                        href={`mailto:${e.correo}`}
                                                        className="flex min-w-0 items-center gap-3 text-[#2B507F] transition-colors hover:text-[#1D5093]"
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
                                                        className="flex items-center gap-3 text-[#2B507F] transition-colors hover:text-[#1D5093]"
                                                    >
                                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FA] text-[#2E52A8]">
                                                            <IconPhone />
                                                        </span>
                                                        <span>+51 {e.telefono}</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
