import { SECTOR_IMAGES } from "../data/sectoresImagenes";
import { sectoresData } from "../data/sectoresData";

export default function Sectores() {
    return (
        <section id="sectores" className="reveal bg-[#EEF3FA] py-24 lg:py-32 engineering-grid cursor-default">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-14 lg:mb-16 flex gap-5">
                    <span
                        aria-hidden="true"
                        className="hidden sm:block w-1 rounded-full shrink-0"
                        style={{ background: `linear-gradient(to bottom, #2E52A8, #4A7AB5)` }}
                    />
                    <h2
                        className="text-3xl lg:text-4xl font-bold max-w-2xl leading-tight"
                        style={{ fontFamily: `var(--font-display)`, color: `#1C2B3D`, letterSpacing: `-0.02em` }}
                    >
                        Conocemos los desafíos de diferentes sectores.
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {sectoresData.map((s) => (
                        <article
                            key={s.title}
                            className="group relative h-80 rounded-xl overflow-hidden bg-[#111827]"
                            style={{ boxShadow: `0 8px 24px -8px rgba(28,43,61,0.25)` }}
                        >
                            <img
                                src={SECTOR_IMAGES[s.title]}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Degradado más firme abajo para que el texto siempre se lea */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0"
                                style={{
                                    background: `linear-gradient(to top, rgba(20,30,50,0.95) 0%, rgba(20,30,50,0.72) 40%, rgba(20,30,50,0.1) 75%, transparent 100%)`,
                                }}
                            />

                            {/* Barra de acento que aparece al pasar el mouse */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                                style={{ background: `linear-gradient(90deg, #4A7AB5, #96BDD8)` }}
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3
                                    className="font-bold text-white mb-2 text-lg leading-snug"
                                    style={{ fontFamily: `var(--font-display)` }}
                                >
                                    {s.title}
                                </h3>
                                <p className="text-white/85 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
