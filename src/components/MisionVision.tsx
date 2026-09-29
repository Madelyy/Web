import { cardsMVData } from "../data/cardsMVData";

export default function MisionVision() {
    return (
        <section
            className="reveal py-24 lg:py-32 engineering-grid"
            style={{ background: "#EEF3FA" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center mb-14 lg:mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold"
                        style={{
                            fontFamily: `var(--font-display)`,
                            color: `#1C2B3D`,
                            letterSpacing: `-0.02em`,
                        }}
                    >
                        Lo que nos define.
                    </h2>
                    <div
                        aria-hidden="true"
                        className="mx-auto mt-5 h-1 w-12 rounded-full"
                        style={{ background: `linear-gradient(90deg, #2E52A8, #4A7AB5)` }}
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {cardsMVData.map((card) => (
                        <article
                            key={card.tag}
                            className="relative flex flex-col rounded-xl bg-white p-8 lg:p-9 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#B9CCE6]"
                            style={{
                                border: `1px solid #DDE8F5`,
                                boxShadow: `0 1px 2px rgba(28,43,61,0.04), 0 8px 24px -8px rgba(28,43,61,0.10)`,
                            }}
                        >
                            {/* Barra de color superior: identifica cada tarjeta */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-1"
                                style={{ background: card.accent }}
                            />

                            <h3
                                className="self-start text-sm font-semibold px-3.5 py-1.5 rounded-full mb-6"
                                style={{
                                    background: `${card.accent}15`,
                                    color: card.accent,
                                    fontFamily: `var(--font-display)`,
                                }}
                            >
                                {card.tag}
                            </h3>

                            <p
                                className="text-[15px] leading-relaxed flex-1"
                                style={{ color: `#445569` }}
                            >
                                {card.text}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}