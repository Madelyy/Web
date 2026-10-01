import { KPICard } from "./KPICard";
import { PALETTE } from "@/data/palette";
import type {
    DataNavegador,
    Contacto,
    Data
} from "@/types/dashboard";

type ResumenTipo = "dashboard" | "visitas" | "contactos"

const fmt = (n: number) => n.toLocaleString("es-PE");

export default function Resumen({
    data = [],
    dataNavegador = [],
    contactos = [],
    tipo = "dashboard"
}: {
    data?: Data[]
    dataNavegador?: DataNavegador[]
    contactos?: Contacto[]
    tipo?: ResumenTipo
}) {
    const totalVisitas = data.reduce(
        (total, visita) => total + (Number(visita.total) || 0),
        0
    )

    const totalContacto = contactos.length
    
    const navegadorPrincipal = dataNavegador[0]?.navegador ?? "N/A"
    const dispositivoPrincipal = data[0]?.dispositivo ?? "N/A"

    const pendientes = contactos.filter(
        (contacto) => contacto.estado === "Pendiente"
    ).length

    const atendidos = contactos.filter(
        (contacto) => contacto.estado === "Atendido"
    ).length

    return (
        <>
            {(tipo === "dashboard") && (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 p-10 pb-2">
                    <KPICard label="Visitas Totales" value={fmt(totalVisitas)} delta="12.4%" trend="up" good icon="visitas" color={PALETTE[0]} />
                    <KPICard label="Contactos" value={totalContacto} delta="8.1%" trend="up" good icon="contactos" color={PALETTE[4]} />
                    <KPICard label="Pendientes" value={pendientes} delta="4.2%" trend="down" good icon="pendientes" color={PALETTE[3]} />
                    <KPICard label="Atendidos" value={atendidos} delta="15.3%" trend="up" good icon="atendidos" color={PALETTE[2]} />
                </div>
            )}

            {(tipo === "contactos") && (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 p-10 pb-2">
                    <KPICard label="Contactos" value={totalContacto} delta="8.1%" trend="up" good icon="contactos" color={PALETTE[4]} />
                    <KPICard label="Pendientes" value={pendientes} delta="4.2%" trend="down" good icon="pendientes" color={PALETTE[3]} />
                    <KPICard label="Atendidos" value={atendidos} delta="15.3%" trend="up" good icon="atendidos" color={PALETTE[2]} />
                </div>
            )}

            {(tipo === "visitas") && (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 p-10 pb-2">
                    <KPICard label="Visitas Totales" value={fmt(totalVisitas)} delta="12.4%" trend="up" good icon="visitas" color={PALETTE[0]} />
                    <KPICard label="Navegador principal" value={navegadorPrincipal} delta="12.4%" trend="up" good icon="globe" color={PALETTE[0]} />
                    <KPICard label="Dispositivo principal" value={dispositivoPrincipal} delta="12.4%" trend="up" good icon="desktop" color={PALETTE[0]} />
                </div>
            )}
        </>
    )
}
