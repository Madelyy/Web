import { SpiralLines } from "./Icons";
import { blocksData } from "../data/blocksData";

export default function Diferencial() {
    return (
        <section className="reveal bg-[#243F73] relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 engineering-grid-light" />
            <SpiralLines />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-16 max-w-2xl">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight"
                        style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.02em` }}
                    >
                        Más que consultoría: acompañamiento técnico.
                    </h2>
                    <p className="text-white/60 leading-rexaled">
                        Nos involucramos en los desafíos de nuestros clientes para
                        transformar necesidades técnicas en soluciones concretas.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {blocksData.map((b) => (
                        <div
                            key={b.num}
                            className="bg-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/13"
                            style={{ border: `1px solid rgba(255,255,255,0.12)` }}
                        >
                            <div
                                className="text-xs font-bold tracking-widest mb-5"
                                style={{ color: `#96BDD8`, fontFamily: `var(--font-display)` }}
                            >
                                {b.num}
                            </div>
                            <h3
                                className="font-bold text-white mb-3 text-sm leading-snug"
                                style={{ fontFamily: `var(--font-display)` }}
                            >
                                {b.title}
                            </h3>
                            <p
                                className="text-xs leading-relaxed"
                                style={{ color: `rgba(255,255,255,0.45)` }}
                            >
                                {b.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}