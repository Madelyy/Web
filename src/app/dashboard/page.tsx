"use client"
import Resumen from "@/app/dashboard/Dashboard/Resumen";
import DispositivoG from "@/app/dashboard/Dashboard/DispositivoG";
import VisitasG from "@/app/dashboard/Dashboard/VisitasG";
import ConsultasTablas from "@/app/dashboard/Dashboard/ConsultasTabla";
import { useVisitas, useContactos } from "@/hooks/useDashboardData";


export default function DashboardPage() {
    const { data: visitas } = useVisitas()
    const { data: contactos } = useContactos()

    const dispositivos = visitas?.dispositivos ?? []
    const recientes = contactos?.contactos ?? []

    return (
        <>
            <Resumen data={dispositivos} contactos={recientes} tipo="dashboard" />
            <DispositivoG data={dispositivos} />
            <VisitasG data={visitas?.visitasPorDia ?? []} titulo={""} subtitulo={""} />
            <ConsultasTablas contacto={recientes} />
        </>
    );
}
