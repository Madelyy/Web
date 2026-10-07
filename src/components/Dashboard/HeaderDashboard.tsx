import { useState } from "react";
import Icon from "../Icons/IconsDashboard";

export default function HeaderDashboard({
    setMenuOpen,
    setNotificacionesOpen
}: {
    setMenuOpen: () => void
    setNotificacionesOpen: () => void
}) {
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <header
            className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-white/90 px-4 backdrop-blur-xl sm:px-7 lg:px-10"
            style={{ borderColor: `#DCE5F2` }}
        >
            <div className="flex items-center gap-3">
                <button
                    className="rounded-lg p-2 lg:hidden"
                    style={{ color: `#243F73`, background: `#EEF3FA` }}
                    onClick={() => setMenuOpen()}
                    aria-label="Abrir menú"
                >
                    <Icon name="menu" />
                </button>
                <div className={`hidden items-center rounded-xl border px-3 py-2 sm:flex ${searchOpen ? "w-72" : "w-52"} transition-all`} style={{ borderColor: `#DCE5F2`, color: `#718198` }}><Icon name="search" size={17} /><input onFocus={() => setSearchOpen(true)} onBlur={() => setSearchOpen(false)} className="ml-2 w-full bg-transparent text-xs outline-none placeholder:text-slate-400" placeholder="Buscar proyectos..." /></div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
                <button
                    onClick={() => setNotificacionesOpen()}
                    className="relative rounded-xl p-2.5 cursor-pointer"
                    style={{ background: `#EEF3FA`, color: `#243F73` }}
                    aria-label="Notificaciones"
                >
                    <Icon name="bell" size={19} />
                    <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-400 ring-2 ring-white" />
                </button>
                <div className="hidden h-8 w-px sm:block" style={{ background: `#DCE5F2` }} />
                <button className="flex items-center gap-3 text-left">
                    <span
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold text-white"
                        style={{ background: `linear-gradient(145deg, ${`3B62AE`}, ${`#243F73`})` }}>ADM
                    </span>
                    <span className="hidden sm:block">
                        <span className="block text-xs font-semibold">Administrador</span>
                        <span className="mt-0.5 block text-[10px]" style={{ color: `#718198` }}>Director de proyectos</span>
                    </span>
                    <span className="hidden rotate-90 text-slate-400 sm:block">
                        <Icon name="chevron" size={14} />
                    </span>
                </button>
            </div>
        </header>
    )
}