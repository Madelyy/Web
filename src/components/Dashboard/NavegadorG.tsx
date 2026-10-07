"use client"
import GraficoBarras from "./GraficoBarras"
import type { DataNavegador } from "@/types/dashboard"

export default function NavegadorG({ data }: { data: DataNavegador[] }) {
    return (
        <GraficoBarras
            titulo="Visitas por navegador"
            subtitulo="Distribución del tráfico según el navegador"
            data={data.map((d) => (
                { nombre: d.navegador, total: d.total }
            ))}
        />
    )
}