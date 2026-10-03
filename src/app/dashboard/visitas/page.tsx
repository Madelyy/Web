"use client"

import DispositivoG from "@/components/Dashboard/DispositivoG";
import NavegadorG from "@/components/Dashboard/NavegadorG";
import Resumen from "@/components/Dashboard/Resumen";
import Sidebar from "@/components/Dashboard/Sidebar";
import VisitasG from "@/components/Dashboard/VisitasG";
import { useEffect, useState } from "react";
import type { Data, DataNavegador, DataDia } from "@/types/dashboard";

export default function Visitas() {
    const [visitas, setVisitas] = useState<Data[]>([])
    const [visitasNavegadores, setVisitasNavegadores] = useState<DataNavegador[]>([])
    const [visitasPorDia, setVisitasPorDia] = useState<DataDia[]>([])

    useEffect(() => {
        const cargarDatos = async () => {
            const visitasResponse = await fetch("/api/visita")
            const visitasData = await visitasResponse.json()

            setVisitas(visitasData.dispositivos)
            setVisitasNavegadores(visitasData.navegadores)
            setVisitasPorDia(visitasData.visitasPorDia)
        }

        cargarDatos()
    }, [])

    return (
        <div className="min-h-screen bg-[#F4F7FB]">
            <Sidebar open={false} onClose={() => { }} active={""} setActive={function (v: string): void { }} />
            <main className="min-h-screen lg:ml-72">
                <Resumen
                    data={visitas}
                    dataNavegador={visitasNavegadores}
                    tipo="visitas"
                />
                <VisitasG data={visitasPorDia} />
                <DispositivoG data={visitas} />
                <NavegadorG data={visitasNavegadores} />
            </main>
        </div>
    )
}
