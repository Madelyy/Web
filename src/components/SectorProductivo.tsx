import { cardsSectorData } from "../data/cardsSectorData";

export default function SectorProductivo() {
    return (
        <section className="reveal bg-white py-24 lg:py-32 cursor-default">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                    <div>
                        <h2
                            className="text-3xl lg:text-4xl font-bold mb-5 leading-tight"
                            style={{ fontFamily: `var(--font-display)`, color: `#1C2B3D`, letterSpacing: `-0.02em` }}
                        >
                            Conocimiento técnico aplicado al sector pesquero y productivo.
                        </h2>
                        <div aria-hidden="true" className="mb-6 h-1 w-12 rounded-full bg-[#4A7AB5]" />
                        <p className="text-[#445569] leading-relaxed mb-10">
                            Entendemos los desafíos técnicos, productivos, regulatorios, ambientales y de calidad que
                            enfrentan las organizaciones del sector pesquero, acuícola e industrial.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {cardsSectorData.map((c) => (
                                <article
                                    key={c.title}
                                    className="relative rounded-xl p-6 overflow-hidden bg-[#F5F8FC] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B9CCE6] hover:bg-white hover:shadow-md"
                                    style={{ border: `1px solid #DDE8F5` }}
                                >
                                    <div
                                        aria-hidden="true"
                                        className="absolute left-0 top-0 h-full w-1"
                                        style={{ background: `linear-gradient(to bottom, #2E52A8, #4A7AB5)` }}
                                    />
                                    <h3
                                        className="font-semibold text-[15px] mb-2 text-[#1C2B3D]"
                                        style={{ fontFamily: `var(--font-display)` }}
                                    >
                                        {c.title}
                                    </h3>
                                    <p className="text-[#516A85] text-sm leading-relaxed">{c.desc}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div
                        className="rounded-xl overflow-hidden min-h-[320px]"
                        style={{ boxShadow: `0 24px 64px rgba(28,43,61,0.14)` }}
                    >
                        <img
                            src="/images/sectorEmbarcaciones.png"
                            alt="Trabajadores en planta pesquera clasificando productos"
                            className="w-full h-full min-h-[320px] lg:min-h-[500px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
