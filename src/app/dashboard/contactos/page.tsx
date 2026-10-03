"use client"
import { useState, useEffect } from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import ConsultasTablas from "@/components/Dashboard/ConsultasTabla";
import { Card } from "@/components/Dashboard/Card";
import Resumen from "@/components/Dashboard/Resumen";
import type { Contacto } from "@/types/dashboard";
import HeaderDashboard from "@/components/Dashboard/Header";

export default function Contacto() {
    const [contactos, setContactos] = useState<Contacto[]>([])

    useEffect(() => {
        const cargarDatos = async () => {
            const contactosResponse = await fetch("/api/contacto")

            const contactosData = await contactosResponse.json()

            setContactos(contactosData.contactos)
        };

        cargarDatos();
    }, [])

    return (
        <div className="min-h-screen bg-[#F6F8FC]">
            <Sidebar open={false} onClose={function (): void { }} active={""} setActive={function (v: string): void { }} />
            <main className="min-h-screen lg:ml-72">
                <HeaderDashboard />
                <Resumen contactos={contactos} tipo="contactos" />
                <ConsultasTablas contacto={contactos} />
            </main>
        </div>
    )
}