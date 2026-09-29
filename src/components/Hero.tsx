import { IconChevronRight } from "./Icons";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="bg-[#111827] relative min-h-[600px] flex flex-col justify-end overflow-hidden"
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1727517786596-fe89c521318b?w=1600&h=900&fit=crop&auto=format)`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(155deg, rgba(20,30,50,0.89) 0%, rgba(36,63,115,0.58) 50%, rgba(36,63,115,0.7) 100%)`,
                }}
            />
            <div aria-hidden="true" className="absolute inset-0 engineering-grid-light" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-36 w-full">
                <div className="max-w-3xl">
                    <div
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[13px] font-medium mb-8 backdrop-blur-sm"
                        style={{
                            background: `rgba(255,255,255,0.08)`,
                            border: `1px solid rgba(255,255,255,0.22)`,
                            color: `#DCE8F5`,
                        }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#96BDD8]" />
                        Empresa peruana · Consultoría especializada
                    </div>

                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-6"
                        style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.025em` }}
                    >
                        Ingeniería y gestión para impulsar el sector pesquero y productivo.
                    </h1>

                    <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                        Capacitación, consultoría y asesoramiento técnico especializado en ingeniería, gestión de la
                        calidad, inocuidad, medio ambiente y procesos productivos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Primario: blanco sobre azul, máximo contraste */}
                        <a
                            href="#servicios"
                            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm bg-white text-[#243F73] transition-all duration-200 hover:bg-[#EEF3FA] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            style={{ fontFamily: `var(--font-display)` }}
                        >
                            Conoce nuestros servicios
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                <IconChevronRight />
                            </span>
                        </a>
                        {/* Secundario: contorno translúcido */}
                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-sm text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:border-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            style={{
                                border: `1px solid rgba(255,255,255,0.4)`,
                                background: `rgba(255,255,255,0.06)`,
                                fontFamily: `var(--font-display)`,
                            }}
                        >
                            Solicitar asesoría
                        </a>
                    </div>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute bottom-[-1px] left-0 right-0 h-24 pointer-events-none"
                style={{ background: `linear-gradient(to top, #fff, transparent)` }}
            />
        </section>
    );
}