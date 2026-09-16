export default function CommitmentSection() {
    const cards = [
        {
            tag: "Compromiso",
            title: "Compromiso con la calidad",
            text: "Garantizar a nuestros clientes un servicio de calidad, a través de los mejores profesionales",
            accent: "#4A7AB5"
        },
        {
            tag: "Misión",
            title: "Nuestra misión",
            text: "Trabajar constantemente para brindar a nuestros clientes del sector productivo un servicio de alto nivel en soluciones integrales de capacitación, consultoría y asesoramiento técnico en gestión de la calidad, vivienda, construcción y sector productivo.",
            accent: "#2E52A8",
        },
        {
            tag: "Visión",
            title: "Nuestra visión",
            text: "Ser una de las empresas líderes en servicios de capacitación, consultorías y asesoramiento técnico de Gestión de la Calidad a nivel nacional, alcanzando la excelencia en la calidad del servicio.",
            accent: "#6B9CC4",
        },
    ]

    return (
        <section
            className="py-24 lg:py-32 engineering-grid"
            style={{ background: "#EEF3FA" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold"
                        style={{
                            fontFamily: "var(--font-display)",
                            color: "#1C2B3D",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Lo que nos define.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.tag}
                            className="rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
                            style={{
                                background: "#fff",
                                border: "1px solid #e8eef1",
                                boxShadow: "0 4px 24px rgba(18,59,74,0.06)",
                            }}
                        >
                            <div
                                className="text-xs font-semibold tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full self-start"
                                style={{ background: `${card.accent}15`, color: card.accent }}
                            >
                                {card.tag}
                            </div>
                            <div
                                className="w-10 h-px mb-5"
                                style={{ background: card.accent }}
                            />
                            <p
                                className="text-sm leading-relaxed flex-1"
                                style={{ color: "#445569" }}
                            >
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}