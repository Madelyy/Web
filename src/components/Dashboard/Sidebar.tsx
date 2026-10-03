import Image from "next/image";
import Link from "next/link";
import Icon from "../Icons/IconsDashboard";
import { usePathname } from "next/navigation";

export default function Sidebar({ open, onClose, active, setActive }: { open: boolean; onClose: () => void, active: string, setActive: (v: string) => void }) {
    const pathname = usePathname();

    const nav = [
        { label: "Vista general", href: "/dashboard", icon: "grid" },
        { label: "Visitas", href: "/dashboard/visitas", icon: "chart" },
        { label: "Clientes", href: "/dashboard/contactos", icon: "users" }
    ] as const;

    return (
        <>
            {open && <div className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden" onClick={onClose} />}
            <aside className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`} style={{ background: `#243F73` }}>
                <div className="flex h-24 items-center justify-between px-7" style={{ borderBottom: `1px solid rgba(255,255,255,0.15)` }}>
                    <Image src="/images/logoB.png" alt="Albatros Asociados SAC" width="300" height="300" priority />
                    <button className="text-white/60 lg:hidden" onClick={onClose} aria-label="Cerrar menú"><Icon name="close" /></button>
                </div>
                <div className="mx-6 h-px bg-white/10" />
                <nav className="flex-1 space-y-1.5 px-4 py-6" aria-label="Panel">
                    <div className="mb-3 px-3 text-[12px] font-semibold uppercase tracking-[.2em] text-white/55">Menú de Gestión</div>
                    {nav.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                onClick={() => { setActive(item.label); onClose() }}
                                href={item.href}
                                className={`group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-sm transition-colors font-semibold hover:bg-white/10  ${active ? `text-white/85 bg-white/10` : `text-[rgba(255,255,255,.58)]`}`}
                            >
                                <span className={`transition-colors ${active ? `text-[#BFD3F0]` : `text-[rgba(255,255,255,.42)]`} group-hover:text-white`}><Icon name={item.icon} size={19} /></span>
                                <span className="flex-1 font-xl">{item.label}</span>
                                {active && <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8FB5E4" }} />}
                            </Link>
                        );
                    })}
                </nav>
                <div className="p-5">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/06 p-4">
                        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-white/10" />
                        <div className="mb-2 text-xs font-semibold text-white">Centro de Soporte</div>
                        <button className="text-xs font-semibold" style={{ color: "#BFD3F0" }}>Contactar al equipo →</button>
                    </div>
                    <button className="mt-4 flex w-full items-center gap-3 px-3 py-2 text-sm text-white/50 cursor-pointer hover:text-white/85 transition-colors"><Icon name="settings" size={18} /> Configuración</button>
                </div>
            </aside >
        </>
    )
}