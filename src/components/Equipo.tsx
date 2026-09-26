import { equipoData } from "../data/equipoData";
import { IconMail, IconPhone } from "./Icons";

export default function Equipo() {
    return (
        <section id="equipo" className="reveal bg-[#243F73] relative py-0 overflow-hidden" style={{ minHeight: `500px` }}>
            <div className="absolute inset-0 engineering-grid-light" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
                <div className="max-w text-center">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight"
                        style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.02em` }}
                    >
                        Profesionales que hacen posible cada proyecto.
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {equipoData.map((e) => (
                        <div
                            key={e.cargo}
                            className="bg-white/5 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                            style={{ border: `1px solid rgba(255,255,255,0.12)` }}
                        >
                            <div
                                className="text-xs font-bold tracking-widest"
                                style={{ color: `#96BDD8`, fontFamily: `var(--font-display)` }}
                            >
                                {e.cargo}
                            </div>
                            <h3
                                className="font-bold pt-5 text-white mb-3 text-sm leading-snug"
                                style={{ fontFamily: `var(--font-display)` }}
                            >
                                {e.nombre}
                            </h3>
                            <p
                                className="text-xs leading-relaxed"
                                style={{ color: `rgba(255,255,255,0.65)` }}
                            >
                                {e.desc}
                            </p>
                            <div className="my-5 h-px bg-white/25" />
                            <div className="flex flex-col text-xs gap-5 text-[#96BDD8]">
                                <div className="flex gap-3">
                                    <IconMail />
                                    <p>{e.correo}</p>
                                </div>
                                <div className="flex gap-3">
                                    <IconPhone />
                                    <p>+51 {e.telefono}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}