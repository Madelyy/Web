export default function ProjectsSection() {
    const projects = [
        { sector: "Sector pesquero",            servicio: "Gestión de calidad e inocuidad",     desc: "Implementación de sistema de gestión de calidad e inocuidad en planta de procesamiento de recursos hidrobiológicos.",                        img: "https://images.unsplash.com/photo-1727517786596-fe89c521318b?w=600&h=400&fit=crop&auto=format" },
        { sector: "Industria alimentaria",      servicio: "Consultoría y capacitación",         desc: "Programa de capacitación técnica in-house en buenas prácticas de manufactura y control de calidad para empresa del sector alimentario.",     img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format" },
        { sector: "Vivienda y construcción",    servicio: "Expedientes técnicos",               desc: "Elaboración de expedientes técnicos para proyecto de infraestructura productiva en el marco de inversión pública.",                          img: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=600&h=400&fit=crop&auto=format" },
        { sector: "Sector acuícola",            servicio: "Gestión ambiental",                  desc: "Consultoría técnica en gestión ambiental y cumplimiento normativo para empresa de producción acuícola.",                                     img: "https://images.unsplash.com/photo-1723134085909-19da487ac9bd?w=600&h=400&fit=crop&auto=format" },
        { sector: "Proyectos de inversión",     servicio: "Asesoramiento técnico",              desc: "Asesoramiento técnico y elaboración de documentación para proyecto de inversión en el sector productivo.",                                   img: "https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?w=600&h=400&fit=crop&auto=format" },
        { sector: "Sector industrial",          servicio: "Legislación y cumplimiento",         desc: "Asesoramiento en requisitos técnicos, legales y normativos para empresa del sector industrial.",                                             img: "https://images.unsplash.com/photo-1700727448575-6f1680cd7d75?w=600&h=400&fit=crop&auto=format" },
    ]

    return (
        <section id="experiencia" className="bg-[#EEF3FA] py-24 lg:py-32 engineering grid">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                        <h2
                            className="text-3xl lg:text-4xl font-bold max-w-md"
                            style={{
                                fontFamily: `var(--font-display)`,
                                color: `#1C2B3D`,
                                letterSpacing: `-0.02em`,
                            }}
                        >
                            Experiencia que genera confianza.
                        </h2>
                        <p
                            className="text-xs max-w-xs px-3 py-2 rounded-lg"
                            style={{
                                color: `#6E85A0`,
                                background: `rgba(74,122,181,0.07)`,
                                border: `1px solid #DDE8F5`,
                            }}
                        >
                            Contenido de casos a actualizar con proyectos reales de la
                            empresa.
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="group rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                            style={{
                                background: `#fff`,
                                border: `1px solid #DDE8F5`,
                                boxShadow: `0 4px 16px 0 4px 16px rgba(28,43,61,0.05)`,
                            }}
                        >
                            <div className="overflow-hidden h-48">
                                <img
                                    src={p.img}
                                    alt={p.sector}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-[#E8EFF8] text-[#4A7AB5] text-xs px-2.5 py-1 rounded-full font-medium">
                                        {p.sector}
                                    </span>
                                    <span className="bg-[#EBF0FA] text-[#2E52A8] text-xs px-2.5 py-1 rounded-full font-medium">
                                        {p.servicio}
                                    </span>
                                </div>
                                <p className="text-[#445569] text-sm leading-relaxed">
                                    {p.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}