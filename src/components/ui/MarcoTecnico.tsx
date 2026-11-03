import type { ReactNode } from "react"

/** Esquinas tipo "marcas de recorte" de un plano. Rodea cualquier imagen. */
export default function MarcoTecnico({ children, className = "" }: { children: ReactNode; className?: string }) {
    const esquina = "pointer-events-none absolute h-6 w-6 border-boya"

    return (
        <div className={`relative ${className}`}>
            {children}
            <span aria-hidden="true" className={`${esquina} -top-2.5 -left-2.5 border-t-2 border-l-2`} />
            <span aria-hidden="true" className={`${esquina} -top-2.5 -right-2.5 border-t-2 border-r-2`} />
            <span aria-hidden="true" className={`${esquina} -bottom-2.5 -left-2.5 border-b-2 border-l-2`} />
            <span aria-hidden="true" className={`${esquina} -right-2.5 -bottom-2.5 border-r-2 border-b-2`} />
        </div>
    )
}
