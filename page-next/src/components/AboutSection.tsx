import Image from "next/image";
import TimelineItem from "./Comps/TimelineItem"

export default function AboutSection() {
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
                            <TimelineItem
                                number={"01"}
                                title={"Diagnóstico"}
                                description={"Evaluación inicial del estado de la organización"}
                            />
                            <TimelineItem
                                number={"02"}
                                title={"Análisis"}
                                description={"Identificación de brechas y oportunidades de mejora"}
                            />
                            <TimelineItem
                                number={"03"}
                                title={"Solución"}
                                description={"Diseño de estrategia técnica personalizada"}
                            />
                            <TimelineItem
                                number={"04"}
                                title={"Implementación"}
                                description={"Ejecución guiada con acompañamiento experto"}
                            />
                            <TimelineItem
                                number={"05"}
                                title={"Mejora"}
                                description={"Monitoreo y optimización continua de resultados"}
                                isLast
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-xl overflow-hidden shadow-[0px_24px_64px_rgba(18,59,74,0.12)]">
                            <Image
                                src="https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?w=800&h=700&fit=crop&auto=format"
                                alt="Planos arquitectura"
                                width={480}
                                height={480}
                                className="w-full object-cover"
                                priority
                            />
                        </div>
                        <div className="bg-[#1D5093] text-white absolute -bottom-6 -left-6 rounded-xl p-5 shadow-lg hidden lg:block max-w-[220px]">
                            <div className="text-xs text-white/50 mb-1 tracking-wider">ENFOQUE</div>
                            <div className="font-semibold text-sm leading-snug font-body">Soluciones técnicas con impacto real en los procesos productivos.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}