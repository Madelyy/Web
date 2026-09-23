import Image from "next/image";
import { cardsSectorData } from "../data/cardsSectorData";

export default function SectorProductivo() {
    return (
        <section className="reveal bg-white py-24 lg:py-32 cursor-default">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2
                            className="text-3xl lg:text-4xl font-bold mb-5 leading-tight"
                            style={{ fontFamily: `var(--font-display)`, color: `#1C2B3D`, letterSpacing: `-0.02em` }}
                        >
                            Conocimiento técnico aplicado al sector pesquero y productivo.
                        </h2>
                        <p className="text-[#445569] leading-relaxed mb-10">
                            Entendemos los desafíos técnicos, productivos, regulatorios,
                            ambientales y de calidad que enfrentan las organizaciones del
                            sector pesquero, acuícola e industrial.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {cardsSectorData.map((c) => (
                                <div
                                    key={c.title}
                                    className="rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5"
                                    style={{ background: `#EEF3FA`, border: `1px solid #DDE8F5` }}
                                >
                                    <div className="bg-[#4A7AB5] w-6 h-px mb-3" />
                                    <div
                                        className="font-semibold text-sm mb-1.5"
                                        style={{ color: `#EEF3FA`, fontFamily: `var(--font-display)` }}
                                    >
                                        {c.title}
                                    </div>
                                    <p className="text-[#6E85A0] text-xs leading-relaxed">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="rounded-xl overflow-hidden"
                        style={{ boxShadow: `0 16px 48px rgba(28,43,61,0.10)` }}
                    >
                        <img src="https://images.unsplash.com/photo-1779517935471-6d3ec8754734?w=700&h=600&fit=crop&auto=format" alt="Trabajadores en planta pesquera clasificando productos" className="w-full h-[500px] object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}