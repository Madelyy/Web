"use client"
import Resumen from "@/components/Dashboard/Resumen";
import DispositivoG from "@/components/Dashboard/DispositivoG";
import VisitasG from "@/components/Dashboard/VisitasG";
import ConsultasTablas from "@/components/Dashboard/ConsultasTabla";
import { useVisitas, useContactos } from "@/hooks/useDashboardData";


export default function DashboardPage() {
    const { data: visitas } = useVisitas();
    const { data: contactos } = useContactos();

    const dispositivos = visitas?.dispositivos ?? [];
    const recientes = contactos?.contactosRecientes ?? [];

    return (
        <>
            <Resumen data={dispositivos} contactos={recientes} tipo="dashboard" />
            <DispositivoG data={dispositivos} />
            <VisitasG data={visitas?.visitasPorDia ?? []} titulo={""} subtitulo={""} />
            <ConsultasTablas contacto={recientes} />
        </>
    );
}
