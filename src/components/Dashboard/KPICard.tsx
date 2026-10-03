import { IconName } from "../Icons/IconsDashboard";
import Icon from "../Icons/IconsDashboard";

type KPICard = {
    label: string
    value: number | string
    delta: string
    trend: "up" | "down"
    good: boolean
    icon: IconName
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
        <article className="relative overflow-hidden rounded-2xl border bg-white p-5 shadow-[0_10px_35px_rgba(36,63,115,.05)]" style={{ borderColor: `#DCE5F2` }}>
            <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ color: color, background: `${color}14` }}><Icon name={icon} size={20} /></div>
                <span
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold"
                    style={good ? { background: `#E3F6F2`, color: `#0F7F6E` } : { background: `#FDE8EC`, color: `#B23A55` }}
                >
                    <Icon name={trend} />
                    {delta}
                </span>
            </div>
            <div
                className="mt-5 text-3xl font-bold tabular-nums text-[#17243A]"
                style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.02em` }}
            >
                {typeof value === "number" ? fmt(value) : value}
            </div>
            <div className="mt-1 text-sm text-[#718198]">{label}</div>
        </article>
    )
}