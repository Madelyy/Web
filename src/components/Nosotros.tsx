import Image from "next/image";
import { etapasData } from "../data/etapasData";

export default function Nosotros() {
    return (
        <section id="nosotros" className="reveal py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Texto + etapas */}
                    <div className="max-w-[520px]">
                        <h2
                            className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                            style={{
                                fontFamily: `var(--font-display)`,
                                color: `#1C2B3D`,
                                letterSpacing: `-0.02em`,
                            }}
                        >
                            Experiencia técnica orientada a resultados.
                        </h2>
                        <p className="text-[#51677A] text-base leading-relaxed mb-10">
                            Somos una empresa peruana especializada en servicios de capacitación, consultoría y
                            asesoramiento técnico para el sector pesquero y productivo, con experiencia en gestión,
                            calidad, seguridad y mejora de procesos aplicados a embarcaciones y operaciones pesqueras.
                        </p>

                        <ol className="rounded-xl bg-[#F5F8FC] p-6" style={{ border: `1px solid #E8EFF8` }}>
                            {etapasData.map((s) => (
                                <li key={s.num} className="flex gap-5 group">
                                    <div className="flex flex-col items-center">
                                        <div
                                            className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-xs font-bold bg-white text-[#2E52A8] transition-colors duration-200 group-hover:bg-[#2E52A8] group-hover:text-white"
                                            style={{ border: `1.5px solid #CAD8EC` }}
                                        >
                                            {s.num}
                                        </div>
                                        {!s.isLast && <div className="bg-[#CAD8EC] min-h-6 w-px flex-1 my-1" />}
                                    </div>
                                    <div className={s.isLast ? "" : "pb-5"}>
                                        <div
                                            className="text-[#1C2B3D] font-semibold text-sm mb-0.5"
                                            style={{ fontFamily: `var(--font-display)` }}
                                        >
                                            {s.title}
                                        </div>
                                        <div className="text-[#516A85] text-sm leading-relaxed">{s.desc}</div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Imagen + enfoque */}
                    <div className="flex flex-col gap-5 lg:block lg:relative">
                        {/* Marco desplazado detrás de la imagen */}
                        <div
                            aria-hidden="true"
                            className="hidden lg:block absolute -top-4 -right-4 w-full h-full rounded-xl"
                            style={{ background: `#EEF3FA`, border: `1px solid #DDE8F5` }}
                        />
                        <div
                            className="relative rounded-xl overflow-hidden"
                            style={{ boxShadow: `0 24px 64px rgba(28,43,61,0.14)` }}
                        >
                            <Image
                                src="/images/embValentina.jpeg"
                                alt="Embarcación pesquera"
                                width={480}
                                height={480}
                                className="w-full aspect-[4/3] lg:aspect-square object-cover"
                                priority
                            />
                        </div>

                        {/* Tarjeta fuera de la foto en móvil; superpuesta en escritorio con borde blanco para separarla */}
                        <div
                            className="rounded-xl p-5 max-w-[260px] bg-[#1D5093] text-white lg:absolute lg:-bottom-8 lg:-left-8 transition-transform duration-200 hover:-translate-y-1"
                            style={{
                                border: `4px solid #fff`,
                                boxShadow: `0 12px 32px rgba(28,43,61,0.22)`,
                            }}
                        >
                            <div className="text-[#B7D2E6] text-xs font-semibold mb-1.5">Nuestro enfoque</div>
                            <div className="font-semibold text-sm leading-snug">
                                Soluciones técnicas para optimizar procesos y operaciones pesqueras.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
