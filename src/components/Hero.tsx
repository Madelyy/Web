import Image from "next/image"
import type { CSSProperties } from "react"
import { IconChevronRight } from "./Icons"
import Olas from "./ui/Olas"

// Pasos reales de tu servicio de auditorías (tomados del texto de "Experiencia")
const checklist = [
    "Manual de higiene y saneamiento",
    "Registros y formatos al día",
    "Inspección de seguimiento",
    "Acompañamiento el día de la auditoría",
]

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties

export default function Hero() {
    return (
        <section id="inicio" className="relative overflow-hidden bg-[#4569B5]">
            {/* Fondo: azul del sitio, más claro arriba. Nada oscuro. */}
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(160deg,#5B86C2_0%,#4569B5_55%,#426DA3_100%)]" />
            <div aria-hidden="true" className="absolute inset-0 engineering-grid-light" />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pt-32 pb-28 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-10 lg:pt-44 lg:pb-36">
                {/* ---------- Texto ---------- */}
                <div>
                    <div
                        className="anim-subir mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[13px] font-medium text-[#EAF1FA] backdrop-blur-sm"
                        style={{ ...delay(0.05), background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.28)" }}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-boya" />
                        Empresa peruana · Consultoría especializada
                    </div>

                    <h1
                        className="anim-subir mb-6 text-4xl leading-[1.1] font-bold text-balance text-white md:text-5xl lg:text-6xl"
                        style={{ ...delay(0.15), fontFamily: "var(--font-display)", letterSpacing: "-0.025em" }}
                    >
                        Ingeniería y gestión para impulsar el sector pesquero y productivo.
                    </h1>

                    <div aria-hidden="true" className="anim-subir regla-h mb-6 w-32 text-boya" style={delay(0.25)} />

                    <p className="anim-subir mb-10 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl" style={delay(0.3)}>
                        Capacitación, consultoría y asesoramiento técnico especializado en ingeniería, gestión de la calidad,
                        inocuidad, medio ambiente y procesos productivos.
                    </p>

                    <div className="anim-subir flex flex-col gap-4 sm:flex-row" style={delay(0.4)}>
                        <a
                            href="#servicios"
                            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-boya px-7 py-3.5 text-sm font-semibold text-[#243F73] transition-all duration-200 hover:bg-[#FFB36A] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Conoce nuestros servicios
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                <IconChevronRight />
                            </span>
                        </a>
                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            style={{ border: "1px solid rgba(255,255,255,0.5)", fontFamily: "var(--font-display)" }}
                        >
                            Solicitar asesoría
                        </a>
                    </div>
                </div>

                {/* ---------- Foto en arco + acta ---------- */}
                <div className="anim-subir relative mx-auto w-full max-w-md lg:max-w-none" style={delay(0.3)}>
                    <div aria-hidden="true" className="absolute -inset-3 rounded-t-[999px] rounded-b-3xl border border-white/35" />
                    <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-[#5B86C2] shadow-[0_30px_80px_-20px_rgba(20,40,90,0.45)]">
                        <Image
                            src="/images/Hero.jpeg"
                            alt="Embarcación pesquera"
                            fill
                            priority
                            sizes="(min-width: 1024px) 45vw, 90vw"
                            className="object-cover"
                        />
                        {/* Tinte azul: unifica la foto con la paleta */}
                        <div aria-hidden="true" className="absolute inset-0 bg-[#4569B5]/25 mix-blend-multiply" />
                    </div>

                    {/* Acta de ejemplo: cada ítem se marca solo, una vez, al cargar */}
                    <div
                        role="group"
                        aria-label="Ejemplo de lista de verificación de una auditoría sanitaria"
                        className="anim-subir absolute -bottom-8 left-0 w-[84%] max-w-[320px] rounded-xl bg-white p-5 shadow-[0_24px_60px_-18px_rgba(20,40,90,0.5)] sm:-left-8"
                        style={delay(0.9)}
                    >
                        <p className="text-sm font-bold text-[#243F73]" style={{ fontFamily: "var(--font-display)" }}>
                            Auditoría sanitaria
                        </p>
                        <div aria-hidden="true" className="regla-h mt-2 mb-4 text-[#B9CCE6]" />
                        <ul className="space-y-2.5">
                            {checklist.map((texto, i) => (
                                <li key={texto} className="flex items-start gap-2.5 text-[13px] leading-snug text-[#334A63]">
                                    <svg viewBox="0 0 20 20" className="mt-px h-5 w-5 shrink-0" aria-hidden="true">
                                        <circle cx="10" cy="10" r="9.25" className="fill-boya-soft" />
                                        <path
                                            d="M5.5 10.5l3 3 6-7"
                                            fill="none"
                                            stroke="#B4531A"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="check-trazo"
                                            style={delay(1.5 + i * 0.55)}
                                        />
                                    </svg>
                                    {texto}
                                </li>
                            ))}
                        </ul>
                        <span
                            className="anim-sello absolute -top-4 -right-3 rounded-md border-2 border-boya-ink bg-boya-soft px-2.5 py-1 text-[11px] font-extrabold tracking-wider text-boya-ink uppercase"
                            style={delay(3.8)}
                        >
                            Listo para auditar
                        </span>
                    </div>
                </div>
            </div>

            {/* Ola de transición hacia la siguiente sección (blanca) */}
            <Olas color="text-white" className="-bottom-px" />
        </section>
    )
}
