type Card = {
    titulo: string
    subtitulo: string
    right?: React.ReactNode
    children: React.ReactNode
    className: string
}

export function Card({
    titulo,
    subtitulo,
    right,
    children,
    className = ""
}: Card) {
    return (
        <section
            className={`relative overflow-hidden rounded-xl bg-white p-6 lg:p-7 ${className}`}
            style={{ border: `1px solid #DDE8F5`, boxShadow: `0 1px 2px rgba(28,43,61,0.04), 0 8px 24px -8px rgba(28,43,61,0.10)` }}
        >
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: `linear-gradient(90deg, #2E52A8, #4A7AB5)` }}
            />
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between" >
                <div>
                    <h2
                        className="text-lg font-bold text-[#1C2B3D]"
                        style={{ fontFamily: `var(--font-display)` }}
                    >
                        {titulo}
                    </h2>
                    {subtitulo && <p className="mt-0.5 text-sm text-[#6E85A0]">{subtitulo}</p>}
                </div>
                {right}
            </div>
            {children}
        </section>
    )
}