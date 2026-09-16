import Image from "next/image";
import { etapasData } from "../data/etapasData"

export default function Nosotros() {
    return (
        <section id="nosotros" className="py-24 lg:py-32 bg-[#fff]">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 ">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    <div className="max-w-[500px]">
                        <h2
                            className="text-[#263238] text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                            style={{ letterSpacing: `-0.02em` }}
                        >
                            Experiencia técnica orientada a resultados.
                        </h2>
                        <p className="text-[#60757D] text-base leading-relaxed mb-10">
                            Somos una empresa peruana creada para ofrecer servicios de capacitación, consultorías y asesoramiento
                            técnico en arquitectura y diseño de ingeniería para el sector vivienda y construcción,
                            así como consultorías técnicas en gestión de la calidad para empresas del sector pesquero, industrial y productivo.
                        </p>
                        <div className="space-y-0">
                            {etapasData.map((s) => (
                                <div
                                    key={s.num}
                                    className="flex gap-5 group"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="bg-[#EEF3FA] text-[#2E52A8] border-[1.5px] border-[#CAD8EC  ] w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors duration-200">{s.num}</div>
                                        {!s.isLast && <div className="bg-[#DDE8F5] min-h-6 w-px flex-1 my-1" />}
                                    </div>
                                    <div className={s.isLast ? "" : "pb-5"}>
                                        <div className="text-[#1C2B3D] font-heading font-semibold text-sm mb-0.5">{s.title}</div>
                                        <div className="text-[#6E85A0] text-sm">{s.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-xl overflow-hidden shadow-[0 24px 64px rgba(28,43,61,0.12)]">
                            <Image
                                src="https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?w=800&h=700&fit=crop&auto=format"
                                alt="Planos arquitectura"
                                width={480}
                                height={480}
                                className="w-full object-cover"
                                priority
                            />
                        </div>
                        <div className="bg-[#1D5093] text-white absolute -bottom-6 -left-6 rounded-xl p-5 shadow-lg hidden lg:block max-w-[220px] transition-transform duration-200 hover:-translate-y-1">
                            <div className="text-[#96BDD8] text-xs mb-1 tracking-wider">ENFOQUE</div>
                            <div className="font-semibold text-sm leading-snug">Soluciones técnicas con impacto real en los procesos productivos.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}