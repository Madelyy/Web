"use client"
import { useState } from "react";
import { serviciosData } from "../data/serviciosData";
import { IconArrow } from "./Icons";
import ServicioModal from "./ServicioModal";

export default function Servicios() {
    const [selectedService, setSelectedService] = useState<(typeof serviciosData)[number] | null>(null)
    const [isClosing, setIsClosing] = useState(false)

    const closeModal = () => {
        setIsClosing(true)

        setTimeout(() => {
            setSelectedService(null)
            setIsClosing(false)
        }, 175);
    };

    return (
        <section id="servicios" className="reveal bg-[#EEF3FA] py-24 lg:py-32 engineering-grid">
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
                        Soluciones técnicas para organizaciones que buscan mejorar.
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {serviciosData.map((s) => (
                        <article
                            key={s.num}
                            className="group relative flex flex-col rounded-xl p-6 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#B9CCE6] hover:shadow-lg"
                            style={{
                                border: `1px solid #DDE8F5`,
                                boxShadow: `0 1px 2px rgba(28,43,61,0.04), 0 8px 24px -8px rgba(28,43,61,0.10)`,
                            }}
                        >
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                                style={{ background: `linear-gradient(90deg, #2E52A8, #4A7AB5)` }}
                            />

                            <div className="flex items-start justify-between mb-5">
                                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EBF0FA] text-[#2E52A8] transition-colors duration-200 group-hover:bg-[#2E52A8] group-hover:text-white">
                                    {s.icon}
                                </span>
                                <span
                                    className="text-xs font-bold text-[#7C93AE]"
                                    style={{ fontFamily: `var(--font-display)` }}
                                >
                                    {s.num}
                                </span>
                            </div>

                            <h3
                                className="font-bold text-base mb-2 leading-snug text-[#1C2B3D]"
                                style={{ fontFamily: `var(--font-display)` }}
                            >
                                {s.title}
                            </h3>
                            <p className="text-[#516A85] text-sm leading-relaxed mb-6">{s.desc}</p>

                            <button
                                type="button"
                                onClick={() => setSelectedService(s)}
                                className="mt-auto self-start flex items-center gap-2 text-sm font-semibold text-[#2E52A8] cursor-pointer after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2E52A8] rounded"
                            >
                                Conocer servicio
                                <span className="transition-transform duration-200 group-hover:translate-x-1">
                                    <IconArrow />
                                </span>
                            </button>
                        </article>
                    ))}
                </div>
            </div>
            {selectedService && (
                <ServicioModal
                    service={selectedService}
                    isClosing={isClosing}
                    onClose={closeModal}
                />
            )}
        </section>
    );
}
