/**
 * Anillos que se expanden y se desvanecen, como una ecosonda.
 * Toma el color del texto: ponle text-white/40 (o similar) en className.
 * Ejemplo: <Sonar className="top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-white/40" />
 */
export default function Sonar({ className = "" }: { className?: string }) {
    return (
        <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
            {[0, 1, 2].map((i) => (
                <span
                    key={i}
                    className="anim-sonar absolute inset-0 rounded-full border border-current"
                    style={{ animationDelay: `${i * 1.7}s` }}
                />
            ))}
        </div>
    )
}
