"use client"
// → app/dashboard/visitas/page.tsx
import Resumen from "@/components/Dashboard/Resumen";
import { useContactos } from "@/hooks/useDashboardData";
import ConsultasTablas from "@/components/Dashboard/ConsultasTabla";

export default function VisitasPage() {
    const { data } = useContactos()

    const contactos = data?.contactos ?? []

    return (
        <>
            <Resumen contactos={contactos} tipo="contactos" />
            <ConsultasTablas mostrarVerTodos={false} contacto={contactos} />
        </>
    );
}