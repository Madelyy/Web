"use client"
import Resumen from "@/app/dashboard/Dashboard/Resumen";
import { useContactos } from "@/hooks/useDashboardData";
import ConsultasTablas from "@/app/dashboard/Dashboard/ConsultasTabla";
import { Contacto } from "@/types/dashboard";
import { useEffect, useState } from "react";

export default function ContactosPage() {
    const { data } = useContactos()

    const [contactos, setContactos] = useState<Contacto[]>([])

    useEffect(() => {
        setContactos(data?.contactos ?? [])
    }, [data])

    const handleCambio = (
        id: number,
        cambios: Partial<Contacto>
    ) => {
        setContactos((prev) =>
            prev.map((c) =>
                c.id === id ? { ...c, ...cambios } : c
            )
        )
    }

    return (
        <>
            <Resumen contactos={contactos} tipo="contactos" />
            <ConsultasTablas mostrarVerTodos={false} contacto={contactos} onCambio={handleCambio} />
        </>
    )
}