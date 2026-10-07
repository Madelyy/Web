import useSWR from "swr"
import type { Data, DataNavegador, DataDia, Contacto } from "@/types/dashboard"

export type VisitasResponse = {
    dispositivos: Data[]
    navegadores: DataNavegador[]
    visitasPorDia: DataDia[]
}

export type ContactosResponse = {
    contactos: Contacto[]
    contactosRecientes: Contacto[]
}

const fetcher = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) throw new Error("No se pudieron cargar los datos")
    return res.json()
}

export const useVisitas = () => useSWR<VisitasResponse>("/api/visita", fetcher)
export const useContactos = () => useSWR<ContactosResponse>("/api/contacto", fetcher)