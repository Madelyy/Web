import { IconAnalysis, IconDesign, IconImplement, IconImprove, IconSearch } from "./Icons"

export default function MethodologySection() {
    const steps = [
        { num: "01", label: "Diagnóstico",      icon: <IconSearch />,       desc: "Evaluación integral del estado actual de la organización." },
        { num: "02", label: "Análisis",         icon: <IconAnalysis />,     desc: "Identificación de brechas, riesgos y oportunidades de mejora." },
        { num: "03", label: "Diseño",           icon: <IconDesign />,       desc: "Formulación de la estrategia técnica y plan de acción." },
        { num: "04", label: "Implementación",   icon: <IconImplement />,    desc: "Ejecución guiada y acompañamiento experto en cada etapa." },
        { num: "05", label: "Mejora",           icon: <IconImprove />,      desc: "Monitoreo, evaluación y optimización continua de resultados." },
    ]

    return (
        <section id="experiencia-metodologia" className="bg-white py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold"
                        style={{
                            fontFamily: "var(--font-display)",
                            color: "#1C2B3D",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        De la necesidad a la solución.
                    </h2>
                </div>
                <div className="relative">
                    <div
                        className="absolute top-10 left-0 right-0 h-px hidden lg:block"
                        style={{
                            background: `linear-gradient(to right, transparent, #DDE8F5 10%, #DDE8F5 90%, transparent)`
                        }}
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((s, i) => (
                            <div
                                key={s.num}
                                className="flex flex-col items-center text-center group"
                            >
                                <div
                                    className="relative w-20 h-20 rounded-full flex flex-col items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                                    style={{
                                        background: `#EEF3FA`,
                                        border: `2px solid ${i === 2 ? "#4A7AB5" : "#CAD8EC"}`,
                                        color: i === 2 ? "#4A7AB5" : "#6E85A0",
                                    }}
                                >
                                    <div className="mb-0.5">{s.icon}</div>
                                    <div
                                        className="text-xs font-bold"
                                        style={{
                                            fontFamily: `var(--font-display)`,
                                            color: `#9BAFC6`,
                                            fontSize: `0.6rem`
                                        }}
                                    >
                                        {s.num}
                                    </div>
                                </div>
                                <div
                                    className="font-bold text-sm mb-2"
                                    style={{
                                        color: `#1C2B3D`,
                                        fontFamily: "var(--font-display)"
                                    }}
                                >
                                    {s.label}
                                </div>
                                <p className="text-[#6E85A0] text-xs leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}