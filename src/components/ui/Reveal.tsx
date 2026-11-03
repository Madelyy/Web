"use client"
import type { ReactNode } from "react"
import useInView from "@/hooks/useInView"

/** Entrada suave al hacer scroll. Úsalo con moderación (títulos y bloques clave, no en todo). */
export default function Reveal({
    children,
    delay = 0,
    className = "",
}: {
    children: ReactNode
    delay?: number
    className?: string
}) {
    const { ref, inView: visible } = useInView<HTMLDivElement>(0.15)

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}
