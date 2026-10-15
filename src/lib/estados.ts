export const ESTADOS = ["Pendiente", "En proceso", "Atendido", "Descartado"] as const
export const PRIORIDADES = ["Alta", "Media", "Baja"] as const

type Estilo = { bg: string, color: string, dot: string }

export const ESTADO_ESTILOS: Record<string, Estilo> = {
    Pendiente: { bg: "#FEF1DC", color: "#9A6212", dot: "#F2A63B" },
    "En proceso": { bg: "#EBF0FA", color: "#2E52A8", dot: "#3B66C4" },
    Atendido: { bg: "#E3F6F2", color: "#0F7F6E", dot: "#1FB5A0" },
    Descartado: { bg: "#EEF1F5", color: "#516A85", dot: "#8FA3BB" },
}

export const PRIORIDAD_ESTILOS: Record<string, { bg: string, color: string }> = {
    Alta: { bg: "#FDE8EC", color: "#B23A55" },
    Media: { bg: "#FEF1DC", color: "#9A6212" },
    Baja: { bg: "#E3F6F2", color: "#0F7F6E" }
}

export const estiloEstado = (estado: string): Estilo =>
    ESTADO_ESTILOS[estado] ?? { bg: "#EEF3FA", color: "#516A85", dot: "#8FA3BB" };