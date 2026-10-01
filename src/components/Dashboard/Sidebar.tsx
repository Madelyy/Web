import Image from "next/image";
import Link from "next/link";
import Icon from "../Icons/IconsDashboard";
import { usePathname } from "next/navigation";

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
    const pathname = usePathname();

    const NAV = [
        { label: "Dashboard", href: "/dashboard", icon: "dashboard" },
        { label: "Visitas", href: "/dashboard/visitas", icon: "visitas" },
        { label: "Contactos", href: "/dashboard/contactos", icon: "contactos" },
    ] as const;

    return (
        <>
            {open && (
                <div className="fixed inset-0 z-40 bg-[#1C2B3D]/60 backdrop-blur-sm lg:hidden" onClick={onClose} aria-hidden="true" />
            )}
            <aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col text-white transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`} style={{ background: `linear-gradient(180deg, #3B62AE 0%, #2E52A8 55%, #243F73 100%)` }} >
                <div className="flex h-20 shrink-0 items-center px-6" style={{ borderBottom: `1px solid rgba(255,255,255,0.15)` }}>
                    <Image src="/images/logoB.png" alt="Albatros Asociados SAC" width="300" height="300" priority />
                </div>
                <nav className="flex-1 space-y-1.5 px-4 py-6" aria-label="Panel">
                    <p className="px-3 pb-2 text-xs font-medium text-white/65">Menú</p>
                    {NAV.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors duration-200 ${active ? "bg-white font-semibold text-[#243F73] shadow-md" : "font-medium text-white/85 hover:bg-white/10 hover:text-white"}`}
                            >
                                <Icon name={item.icon} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    )
}