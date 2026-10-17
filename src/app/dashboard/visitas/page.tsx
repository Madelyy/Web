"use client"
// → app/dashboard/visitas/page.tsx
import Resumen from "@/app/dashboard/Dashboard/Resumen";
import VisitasG from "@/app/dashboard/Dashboard/VisitasG";
import DispositivoG from "@/app/dashboard/Dashboard/DispositivoG";
import NavegadorG from "@/app/dashboard/Dashboard/NavegadorG";
import { useVisitas } from "@/hooks/useDashboardData";

export default function VisitasPage() {
    const { data } = useVisitas()

    const dispositivos = data?.dispositivos ?? []
    const navegadores = data?.navegadores ?? []

    return (
        <>
            <Resumen data={dispositivos} dataNavegador={navegadores} tipo="visitas" />
            <VisitasG data={data?.visitasPorDia ?? []} titulo={"Visitas por día"} subtitulo={"Evolución del tráfico en el período seleccionado"} />
            <div className="grid gap-6 xl:grid-cols-2">
                <DispositivoG data={dispositivos} />
                <NavegadorG data={navegadores} />
            </div>
        </>
    );
}