import { SpiralLines } from "./Icons";
import { blocksData } from "../data/blocksData";

export default function Diferencial() {
    return (
        <section className="reveal bg-[#243F73] relative py-24 lg:py-32 overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 engineering-grid-light" />
            <SpiralLines />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-14 lg:mb-16 max-w-2xl">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight"
                        style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.02em` }}
                    >
                        Más que consultoría: acompañamiento técnico.
                    </h2>
                    <div aria-hidden="true" className="mb-5 h-1 w-12 rounded-full bg-[#96BDD8]" />
                    <p className="text-white/85 text-base lg:text-lg leading-relaxed">
                        Nos involucramos en los desafíos de nuestros clientes para transformar necesidades técnicas en
                        soluciones concretas.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {blocksData.map((b) => (
                        <article
                            key={b.num}
                            className="relative rounded-xl p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                            style={{
                                background: `rgba(255,255,255,0.10)`,
                                border: `1px solid rgba(255,255,255,0.22)`,
                                boxShadow: `0 12px 32px -12px rgba(10,20,45,0.4)`,
                            }}
                        >
                            <span
                                className="inline-flex items-center justify-center h-9 min-w-9 px-2 rounded-lg text-sm font-bold mb-5 bg-white text-[#243F73]"
                                style={{ fontFamily: `var(--font-display)` }}
                            >
                                {b.num}
                            </span>
                            <h3
                                className="font-bold text-white mb-3 text-base leading-snug"
                                style={{ fontFamily: `var(--font-display)` }}
                            >
                                {b.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-white/80">{b.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
