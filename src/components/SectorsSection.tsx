export default function SectorsSection() {
    const SECTOR_IMAGES: Record<string, string> = {
        "Pesca y acuicultura": "https://images.unsplash.com/photo-1588159481334-3502acdcbfb9?w=600&h=500&fit=crop&auto=format",
        "Alimentos": "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&h=500&fit=crop&auto=format",
        "Industria y sector productivo": "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&h=500&fit=crop&auto=format",
        "Vivienda y construcción": "https://images.unsplash.com/photo-1527335988388-b40ee248d80c?w=600&h=500&fit=crop&auto=format",
        "Proyectos de inversión": "https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?w=600&h=500&fit=crop&auto=format",
        "Gestión ambiental": "https://images.unsplash.com/photo-1563391017873-6e6beab67fed?w=600&h=500&fit=crop&auto=format",
    }

    const sectors = [
        { title: "Pesca y acuicultura",             desc: "Procesamiento, productos hidrobiológicos y procesos productivos." },
        { title: "Alimentos",                       desc: "Calidad, inocuidad y sistemas de gestión alimentaria." },
        { title: "Industria y sector productivo",   desc: "Procesos, producción y mejora organizacional." },
        { title: "Vivienda y construcción",         desc: "Arquitectura, ingeniería y expedientes técnicos." },
        { title: "Proyectos de inversión",          desc: "Desarrollo de documentación técnica para proyectos." },
        { title: "Gestión ambiental",               desc: "Calidad, desempeño ambiental y sostenibilidad." },
    ]

    return (
        <section id="sectores" className="bg-[#EEF3FA] py-24 lg:py-32 engineering-grid cursor:default">
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
                        Conocemos los desafíos de diferentes sectores.
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sectors.map((s) => (
                        <div
                            key={s.title}
                            className="group relative rounded-xl overflow-hidden cursor:pointer"
                            style={{
                                height: `280px`,
                                background: `#111827`
                            }}
                        >
                            <img
                                src={SECTOR_IMAGES[s.title]}
                                alt={s.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                            />
                            <div
                                className="absolute inset-0 transition-opacity duration-300  hover:opacity-80"
                                style={{
                                    background: `linear-gradient(to top, rgba(20,30,50,0.89) 0%, rgba(20,30,50,0.30) 60%, transparent 100%)`
                                }}
                            >
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div
                                        className="font-bold text-white mb-1.5 text-base"
                                        style={{ fontFamily: `var(--font-display)` }}
                                    >
                                        {s.title}
                                    </div>
                                    <p className="text-white/60 text-xs leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}