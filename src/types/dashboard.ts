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
    fecha_registro: string
}

export type Notificacion = {
    id: number
    mensaje: string
    tipo: string
    fecha: string
    leida: boolean
}