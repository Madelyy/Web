import Icon, { PATHS } from "../Icons/IconsDashboard";

type KPICard = {
    label: string
    value: number | string
    delta: string
    trend: "up" | "down"
    good: boolean
    icon: keyof typeof PATHS
    color: string
}

export function KPICard({
    label,
    value,
    delta,
    trend,
    good,
    icon,
    color
}: KPICard) {
    const fmt = (n: number) => n.toLocaleString("es-PE");

    return (
        <article
            className="rounded-xl bg-white p-6"
            style={{ border: `1px solid #DDE8F5`, boxShadow: `0 1px 2px rgba(28,43,61,0.04), 0 8px 24px -8px rgba(28,43,61,0.10)` }}
        >
            <div className="flex items-start justify-between">
                <span
                    className="flex h-12 items-center justify-center rounded-xl"
                    style={{ background: `${color}1A`, color }}
                >
                    <Icon name={icon} className="h-6 w-6" />
                </span>
                <span
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold"
                    style={good ? { background: `#E3F6F2`, color: `#0F7F6E` } : { background: `#FDE8EC`, color: `#B23A55` }}
                >
                    <Icon name={trend} className="h-3.5 w-3.5" />
                    {delta}
                </span>
            </div>
            <div
                className="mt-5 text-3xl font-bold tabular-nums text-[#1C2B3D]"
                style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.02em` }}
            >
                {typeof value === "number" ? fmt(value) : value}
            </div>
            <div className="mt-1 text-sm text-[#516A85]">{label}</div>
        </article>
    )
}