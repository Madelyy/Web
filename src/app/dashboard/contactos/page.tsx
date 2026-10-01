"use client"
import { useState, useEffect } from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import ConsultasTablas from "@/components/Dashboard/ConsultasTabla";
import { Card } from "@/components/Dashboard/Card";
import Resumen from "@/components/Dashboard/Resumen";
import type { Contacto } from "@/types/dashboard";

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
        <div className="min-h-screen bg-[#F4F7FB]">
            <Sidebar open={false} onClose={function (): void { }} />
            <main className="min-h-screen lg:ml-64">
                <Resumen contactos={contactos} tipo="contactos"/>
                <Card
                    className="m-10"
                    titulo="Consultas recibidas"
                    subtitulo="Solicitudes recibidas desde el formulario de contacto"
                >
                    <ConsultasTablas contacto={contactos} />
                </Card>
            </main>
        </div>
    )
}