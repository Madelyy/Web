import { etapasData } from "../data/etapasData";

export default function Metodologia() {
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
                        {etapasData.map((s, i) => (
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
                                    {s.title}
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