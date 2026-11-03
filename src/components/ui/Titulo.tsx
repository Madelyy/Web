type TituloProps = {
    titulo: string
    intro?: string
    /** Texto blanco, para fondos azules */
    claro?: boolean
    centrado?: boolean
    className?: string
}

/** Reemplaza la barrita vertical + h2 que se repetía en cada sección. */
export default function Titulo({ titulo, intro, claro = false, centrado = false, className = "" }: TituloProps) {
    return (
        <div className={`max-w-2xl ${centrado ? "mx-auto text-center" : ""} ${className}`}>
            <h2
                className={`text-3xl font-bold leading-tight text-balance lg:text-4xl ${claro ? "text-white" : "text-[#1C2B3D]"}`}
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
                {titulo}
            </h2>
            <div aria-hidden="true" className={`regla-h mt-6 w-28 text-boya ${centrado ? "mx-auto" : ""}`} />
            {intro && (
                <p className={`mt-6 text-base leading-relaxed lg:text-lg ${claro ? "text-white/90" : "text-[#51677A]"}`}>
                    {intro}
                </p>
            )}
        </div>
    )
}