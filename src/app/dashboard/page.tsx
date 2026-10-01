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
        <div className="min-h-screen bg-[#F4F7FB]">
            <Sidebar open={false} onClose={function (): void { }} />
            <main className="min-h-screen lg:ml-64">
                <Resumen
                    data={visitas}
                    contactos={contactosRecientes}
                    tipo="dashboard"
                />
                <DispositivoG data={visitas} />
                <VisitasG data={visitasPorDia} />
                <Card
                    className="m-10"
                    titulo="Últimas consultas"
                    subtitulo="Solicitudes recibidas desde el formulario de contacto"
                    right={
                        <Link
                            href="/dashboard/contactos"
                            className="text-sm font-semibold text-[#2E52A8] transition-colors hover:text-[#243F73]"
                        >
                            <div className="mt-auto self-start flex items-center gap-2 text-sm after:inset-0">
                                Ver todas
                                <span className="transition-transform duration-200 group-hover:translate-x-1">
                                    <IconArrow />
                                </span>
                            </div>
                        </Link>
                    }
                >
                    <ConsultasTablas contacto={contactosRecientes} />
                </Card>
            </main>
        </div>
    )
}
