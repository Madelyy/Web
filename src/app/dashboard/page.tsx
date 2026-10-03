"use client"

import { Card } from "@/components/Dashboard/Card";
import ConsultasTablas from "@/components/Dashboard/ConsultasTabla";
import DispositivoG from "@/components/Dashboard/DispositivoG";
import Resumen from "@/components/Dashboard/Resumen";
import Sidebar from "@/components/Dashboard/Sidebar";
import VisitasG from "@/components/Dashboard/VisitasG";
import { IconArrow } from "@/components/Icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import type {
    DataDia,
    Contacto,
    Data
} from "@/types/dashboard";
import HeaderDashboard from "@/components/Dashboard/Header";

export default function Dashboard() {
    const [visitas, setVisitas] = useState<Data[]>([])
    const [visitasPorDia, setVisitasPorDia] = useState<DataDia[]>([])
    const [contactosRecientes, setContactosRecientes] = useState<Contacto[]>([])

    useEffect(() => {
        const cargarDatos = async () => {
            const [visitasResponse, contactosResponse] = await Promise.all([
                fetch("/api/visita"),
                fetch("/api/contacto")
            ])

            const visitasData = await visitasResponse.json()
            const contactosData = await contactosResponse.json()

            setVisitas(visitasData.dispositivos)
            setVisitasPorDia(visitasData.visitasPorDia)
            setContactosRecientes(contactosData.contactosRecientes)
        }

        cargarDatos()
    }, [])

    return (
        <div className="min-h-screen bg-[#F6F8FC]">
            <Sidebar open={false} onClose={function (): void { }} active={""} setActive={function (v: string): void { }} />
            <main className="min-h-screen lg:ml-72">
                <HeaderDashboard />
                <Resumen
                    data={visitas}
                    contactos={contactosRecientes}
                    tipo="dashboard"
                />
                <DispositivoG data={visitas} />
                <VisitasG data={visitasPorDia} />
                <ConsultasTablas contacto={contactosRecientes} />
            </main>
        </div>
    )
}
