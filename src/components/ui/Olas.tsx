/**
 * Borde de olas que se desplazan muy despacio (decorativo).
 * - `color`: color de la sección SIGUIENTE (la que "sube" desde abajo), ej. "text-white".
 * - Dos capas con distinta velocidad y opacidad para dar profundidad.
 * Las olas son 4 periodos repetidos; al mover -50% el bucle es perfecto.
 * Respeta prefers-reduced-motion (se queda quieta).
 */
const ONDA = "c90-30 270-30 360 0s270 30 360 0"
const RUTA = `M0 40${ONDA.repeat(4)}V80H0z`

export default function Olas({ className = "", color = "text-white", cuadricula }: { className?: string; color?: string; cuadricula?: boolean }) {
    return (
        <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 overflow-hidden leading-[0] ${className}`}>
            <svg
                viewBox="0 0 2880 80"
                preserveAspectRatio="none"
                className={`anim-deriva-lenta absolute bottom-0 left-0 h-10 w-[200%] opacity-40 lg:h-16 ${color}`}
            >
                <path fill="currentColor" d={RUTA} />
            </svg>
            <svg
                viewBox="0 0 2880 80"
                preserveAspectRatio="none"
                className={`anim-deriva relative block h-8 w-[200%] lg:h-14 ${color}`}
            >
                <path fill="currentColor" d={RUTA} />
            </svg>
            {cuadricula && (
                <div
                    className="absolute inset-0 engineering-grid-light"
                    style={{ backgroundPosition: "0 100%" }}
                />
            )}
        </div>
    )
}
