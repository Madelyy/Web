export type Data = {
    dispositivo: string
    total: number
}

export type DataNavegador = {
    navegador: string
    total: number
}

export type DataDia = {
    fecha: string
    total: number
}

export type Contacto = {
    id: number
    nombre: string
    empresa: string
    correo: string
    telefono: string
    sector: string
    servicio: string
    mensaje: string
    estado: string
    plazo: string
    fecha_registro: string
    cargo: string | null
    ruc: string | null
    rsw_cantidad: number
    convencional_cantidad: number
    prioridad: "Alta" | "Media" | "Baja"
}

export type Notificacion = {
    id: number
    mensaje: string
    tipo: string
    fecha: string
    leida: boolean
}

export type Nota = {
    id: number
    contacto_id: number
    autor: string
    texto: string
    fecha: string
}

export type Historial = {
    id: number
    contacto_id: number
    estado_anterior: string | null
    estado_nuevo: string
    autor: string | null
    fecha: string
}