"use client"
import { etapasData } from "@/data/etapasData"
import { blocksData } from "@/data/blocksData"
import useInView from "@/hooks/useInView"
import Titulo from "@/components/ui/Titulo"

/**
 * Reemplaza Metodologia + Diferencial.
 * Las 5 etapas son una ruta que se traza al entrar en pantalla:
 *  - escritorio: línea horizontal que va uniendo los nodos
 *  - móvil: línea vertical, tramo por tramo
 * Los retrasos están sincronizados: la línea llega a cada nodo justo cuando este aparece.
 */
const PASO_MS = 400

export default function Ruta() {
    const { ref, inView: visible } = useInView<HTMLOListElement>(0.25)
    const n = etapasData.length

    return (
        <section id="metodologia" className="relative overflow-hidden bg-[#426DA3] py-24 lg:py-32">
            <div aria-hidden="true" className="absolute inset-0 engineering-grid-light" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                <Titulo claro titulo="De la necesidad a la solución." />

                <ol ref={ref} className="relative mt-16 grid gap-10 lg:mt-20 lg:grid-cols-5 lg:gap-6">
                    {/* Ruta horizontal (escritorio): base punteada + trazo que avanza */}
                    <div aria-hidden="true" className="absolute top-10 right-[10%] left-[10%] hidden border-t border-dashed border-white/50 lg:block" />
                    <div
                        aria-hidden="true"
                        className="absolute top-10 right-[10%] left-[10%] hidden h-0.5 -translate-y-px origin-left bg-boya ease-linear lg:block"
                        style={{
                            transform: `scaleX(${visible ? 1 : 0})`,
                            transition: `transform ${(n - 1) * PASO_MS}ms linear`,
                        }}
                    />

                    {etapasData.map((s, i) => (
                        <li key={s.num} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
                            {/* Tramo vertical hacia el siguiente nodo (móvil) */}
                            {i < n - 1 && (
                                <>
                                    <div aria-hidden="true" className="absolute top-16 -bottom-10 left-8 w-px border-l border-dashed border-white/50 lg:hidden" />
                                    <div
                                        aria-hidden="true"
                                        className="absolute top-16 -bottom-10 left-8 w-0.5 -translate-x-px origin-top bg-boya lg:hidden"
                                        style={{
                                            transform: `scaleY(${visible ? 1 : 0})`,
                                            transition: `transform ${PASO_MS}ms linear ${i * PASO_MS}ms`,
                                        }}
                                    />
                                </>
                            )}

                            <div className="relative shrink-0">
                                <div
                                    className={`flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#4569B5] shadow-lg transition-all duration-500 motion-reduce:transition-none lg:h-20 lg:w-20 ${visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                                        }`}
                                    style={{ transitionDelay: `${i * PASO_MS}ms` }}
                                >
                                    {s.icon}
                                </div>
                                <span
                                    className="absolute -top-1 -right-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-boya px-1.5 text-[11px] font-bold text-[#243F73]"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    {s.num}
                                </span>
                            </div>

                            <div className="pt-1 lg:pt-0">
                                <h3 className="mb-2 text-base font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                                    {s.title}
                                </h3>
                                <p className="max-w-[240px] text-sm leading-relaxed text-white/90">{s.desc}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                {/* ---- Lo que antes era la sección "Diferencial" ---- */}
                <div className="mt-20 lg:mt-28">
                    <div aria-hidden="true" className="regla-h w-full text-white/40" />
                    <h3
                        className="mt-10 max-w-xl text-2xl font-bold text-white lg:text-3xl"
                        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                    >
                        Más que consultoría: acompañamiento técnico.
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90">
                        Nos involucramos en los desafíos de nuestros clientes para transformar necesidades técnicas en soluciones
                        concretas.
                    </p>
                    <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                        {blocksData.map((b) => (
                            <li key={b.num} className="border-l-2 border-boya pl-5">
                                <h4 className="mb-2 text-base font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                                    {b.title}
                                </h4>
                                <p className="text-sm leading-relaxed text-white/90">{b.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
