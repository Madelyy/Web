import Button from "./Comps/Button"

export default function HeroSection() {
    return (
        <section id="inicio" className="relative min-h-screen flex flex-col justify-end">
            <div
                className="absolute inset-0 bg-cover bg-position: center center"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1727517786596-fe89c521318b?w=1600&h=900&fit=crop&auto=format&quot)` }}
            />
            <div
                className="absolute inset-0"
                style={{ backgroundImage: `linear-gradient(160deg, rgba(18, 47, 74, 0.88) 0%, rgba(18, 44, 74, 0.72) 50%, rgba(18, 50, 74, 0.92) 100%` }}
            />
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                    backgroundSize: `40px 40px`
                }}
            />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-32 w-full">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center bg-[#4D8B7233] border-1px-[#4D8B7266] gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 tracking-wider">
                        <span className="w-1.75 h-1.75 rounded-full bg-current animate-pulse"></span>
                        EMPRESA PERUANA · CONSULTORÍA ESPECIALIZADA
                    </div>
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
                        style={{
                            fontFamily: `var(--font-display)`,
                            letterSpacing: `-0.02em`
                        }}
                    >
                        Ingeniería y gestión para impulsar el sector pesquero y productivo.
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2x1">
                        Capacitación, consultoría y asesoramiento técnico especializado en ingeniería, gestión de la calidad, inocuidad, medio ambiente y procesos productivos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <Button
                            variant="secondary"
                        >
                            Conoce nuestros servicios
                        </Button>
                        <Button
                            variant="transparent"
                        >
                            Solicitar asesoría
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className="absolute bottom-0 left-0 right-0 h-30 pointer-events-none"
                style={{ backgroundImage: `linear-gradient(to top, rgb(255, 255, 255), transparent)` }}
            />
        </section>
    )
}
