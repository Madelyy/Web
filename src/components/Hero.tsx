import useInView from "@/hooks/useInView";
import { IconChevronRight } from "./Icons";

export default function Hero() {
    return (
        <section id="inicio" className="bg-[#111827] relative min-h-500px flex flex-col justify-end">
            <div
                className="absolute inset-0"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1727517786596-fe89c521318b?w=1600&h=900&fit=crop&auto=format&quot)`, backgroundSize: `cover`, backgroundPosition: `center` }}
            />
            <div
                className="absolute inset-0"
                style={{ backgroundImage: `linear-gradient(155deg, rgba(20,30,50,0.89) 0%, rgba(20,30,50,0.68) 50%, rgba(16,28,46,0.92) 100%)` }}
            />
            <div className="absolute inset-0 engineering-grid-light" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-32 w-full">
                <div className="max-w-3xl">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 transition-all duration-300 tracking-wider hover:brightness-150"
                        style={{ background: `rgba(74,122,181,0.12)`, border: `1px solid rgba(74,122,181,0.28)`, color: `#96BDD8` }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                        EMPRESA PERUANA · CONSULTORÍA ESPECIALIZADA
                    </div>
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
                        style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.02em` }}
                    >
                        Ingeniería y gestión para impulsar el sector pesquero y productivo.
                    </h1>
                    <p className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                        Capacitación, consultoría y asesoramiento técnico especializado en ingeniería, gestión de la calidad, inocuidad, medio ambiente y procesos productivos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <a
                            href="#servicios"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:gap-10"
                            style={{ background: `#2E52A8`, color: `#fff`, fontFamily: `var(--font-display)` }}
                        >
                            Conoce nuestros servicios <IconChevronRight />
                        </a>
                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-white/10"
                            style={{ border: `1px solid rgba(255,255,255,0.3)`, color: `#fff`, fontFamily: `var(--font-display)` }}
                        >
                            Solicitar asesoría
                        </a>
                    </div>
                </div>
            </div>
            <div
                className="absolute bottom-[-1px] left-0 right-0 h-24 pointer-events-none"
                style={{ background: "linear-gradient(to top, #fff, transparent)" }}
            />
        </section>
    )
}
