"use client"
import GraficoBarras from "./GraficoBarras"
import type { Data } from "@/types/dashboard"

export default function DispositivoG({ data }: { data: Data[] }) {
    return (
        <GraficoBarras
            titulo="Visitas por dispositivo"
            subtitulo="Distribución del tráfico según el dispositivo"
            data={data.map((d) => (
                { nombre: d.dispositivo, total: d.total }
            ))}
        />
    )
}