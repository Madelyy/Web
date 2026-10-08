import { valoresData } from "../data/valoresData";

export default function Valores() {
    return (
        <section id="nosotros-valores" className="reveal bg-white py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-14 lg:mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="flex gap-5">
                            <span
                                aria-hidden="true"
                                className="hidden sm:block w-1 rounded-full shrink-0"
                                style={{ background: `linear-gradient(to bottom, #2E52A8, #4A7AB5)` }}
                            />
                            <h2
                                className="text-3xl lg:text-4xl font-bold max-w-lg leading-tight"
                                style={{ fontFamily: `var(--font-display)`, color: `#1C2B3D`, letterSpacing: `-0.02em` }}
                            >
                                Los principios que guían nuestro trabajo.
                            </h2>
                        </div>
                        <p
                            className="text-sm leading-relaxed max-w-xs px-4 py-3 rounded-lg"
                            style={{ color: `#51677A`, background: `rgba(74,122,181,0.07)`, border: `1px solid #DDE8F5` }}
                        >
                            Cada proyecto refleja el compromiso de nuestros profesionales con estos valores
                            fundamentales.
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {valoresData.map((v) => (
                        <article
                            key={v.num}
                            className="group relative rounded-xl p-6 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#B9CCE6] cursor-default"
                            style={{
                                border: `1px solid #DDE8F5`,
                                boxShadow: `0 1px 2px rgba(28,43,61,0.04), 0 8px 24px -8px rgba(28,43,61,0.10)`,
                            }}
                        >
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                                style={{ background: `linear-gradient(90deg, #2E52A8, #4A7AB5)` }}
                            />
                            <div className="flex items-start justify-between mb-5">
                                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EBF0FA] text-[#2E52A8] transition-colors duration-200 group-hover:bg-[#2E52A8] group-hover:text-white">
                                    {v.icon}
                                </span>
                                <span
                                    className="text-xs font-bold text-[#7C93AE]"
                                    style={{ fontFamily: `var(--font-display)` }}
                                >
                                    {v.num}
                                </span>
                            </div>
                            <h3
                                className="font-bold text-base mb-2 text-[#1C2B3D]"
                                style={{ fontFamily: `var(--font-display)` }}
                            >
                                {v.label}
                            </h3>
                            <p className="text-[#516A85] text-sm leading-relaxed">{v.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
