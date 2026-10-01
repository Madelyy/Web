export default function EstadoBadge({ estado }: { estado: string }) {
    const pendiente = estado === "Pendiente"
    
    return (
        <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
            style={pendiente ? { background: `#FEF1DC`, color: `#9A6212` } : { background: `#E3F6F2`, color: `#0F7F6E` }}
        >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: pendiente ? `#F2A63B` : `#1FB5A0` }} />
            {estado}
        </span>
    );
}