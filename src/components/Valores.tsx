import { valoresData } from "../data/valoresData";

export default function Valores() {
    return (
        <section id="nosotros-valores" className="bg-white py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                        <h2
                            className="text-3xl lg:text-4xl font-bold max-w-md"
                            style={{ fontFamily: `var(--font-display)`, color: `#1C2B3D`, letterSpacing: `-0.02em` }}
                        >
                            Los principios que guían nuestro trabajo.
                        </h2>
                        <p className="text-sm max-w-xs" style={{ color: `#6E85A0` }}>
                            Cada proyecto refleja el compromiso de nuestros profesionales con
                            estos valores fundamentales.
                        </p>
                    </div>
                </div>
                <div className="grid sm-grid-cols-2 lg:grid-cols-5 gap-5">
                    {valoresData.map((v) => (
                        <div
                            key={v.num}
                            className="group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
                            style={{ border: `1px solid #DDE8F5`, background: `#fff`, boxShadow: `0 2px 12px rgba(28,43,61,0.04)` }}
                        >
                            <div
                                className="text-xs font-bold tracking-widest mb-4"
                                style={{ color: `#9BAFC6`, fontFamily: `var(--font-display)` }}
                            >
                                {v.num}
                            </div>
                            <div className="text-[#4A7AB5] mb-4 transition-colors duration-200 group-hover:text-[#1E6A8A]">
                                {v.icon}
                            </div>
                            <div
                                className="font-bold text-sm mb-2"
                                style={{ color: `#1C2B3D`, fontFamily: `var(--font-display)` }}
                            >
                                {v.label}
                            </div>
                            <div className="text-[#6E85A0] text-xs leading-relaxed">{v.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}