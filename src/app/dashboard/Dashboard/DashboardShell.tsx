"use client"
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import HeaderDashboard from "./HeaderDashboard";
import Notificaciones from "./Notificaciones";
import { useContactos } from "@/hooks/useDashboardData";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const active = pathname.split("/")[2] ?? `dashboard`

    const [menuOpen, setMenuOpen] = useState(false)
    const [notificacionesOpen, setNotificacionesOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    const { data: contactos } = useContactos()

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    const closeNotificaciones = () => {
        setIsClosing(true)

        setTimeout(() => {
            setNotificacionesOpen(false)
            setIsClosing(false)
        }, 175)
    }

    return (
        <div className=" engineering-grid text-[#17243A]">
            <Sidebar
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                active={active}
                setActive={() => { }}
            />
            <main className="min-h-screen lg:ml-72">
                <HeaderDashboard
                    setMenuOpen={() => setMenuOpen(true)}
                    setNotificacionesOpen={() => setNotificacionesOpen(true)}
                />
                {notificacionesOpen && (
                    <Notificaciones
                        contacto={contactos?.contactosRecientes ?? []}
                        isClosing={isClosing}
                        onClose={closeNotificaciones}
                    />
                )}
                <div className="mx-auto w-full max-w-[1400px] space-y-6 px-5 pb-10 sm:px-8 lg:px-10">
                    {children}
                </div>
            </main>
        </div>
    )
}
