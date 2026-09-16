import { serviciosData } from "../data/serviciosData";
import { IconArrow } from "./Icons";

export default function Servicios() {
    return (
        <section id="servicios" className="bg-[#EEF3FA] py-24 lg:py-32 engineering-grid">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold mb-4"
                        style={{
                            fontFamily: `var(--font-display)`,
                            color: `#1C2B3D`,
                            letterSpacing: `-0.02em`
                        }}
                    >
                        Soluciones técnicas para organizaciones que buscan mejorar.
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {serviciosData.map((s) => (
                        <div
                            key={s.num}
                            className="group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                            style={{
                                background: "#DDE8F5",
                                border: "1px solid #DDE8F5",
                                boxShadow: "0 2px 12px rgba(28,43,61,0.04)"
                            }}
                        >
                            <div className="flex items-start justify-between mb-5">
                                <div
                                    className="text-xs font-bold trackind-widest"
                                    style={{
                                        color: `#9BAFC6`,
                                        fontFamily: "var(--font-display)"
                                    }}
                                >
                                    {s.num}
                                </div>
                                <div className="text-[#4A7AB5]">{s.icon}</div>
                            </div>
                            <h3
                                className="font-bold text-sm mb-2 leading-snug"
                                style={{
                                    color: `#1C2B3D`,
                                    fontFamily: `var(--font-display)`
                                }}
                            >
                                {s.title}
                            </h3>
                            <p className="text-[#6E85A0] text-xs leading-relaxed mb-5">{s.desc}</p>
                            <div className="text-[#4A7AB5] flex items-center gap-1 text-xs font-medium transition-all duration-200 group-hover:gap-5">Ver más <IconArrow /></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}