import { IconAnalysis, IconDesign, IconImplement, IconImprove, IconSearch } from "@/components/Icons";

export const etapasData = [
    {
        num: "01",
        title: "Diagnóstico",
        icon: <IconSearch />,
        desc: "Evaluación inicial del estado de la organización"

    },
    {
        num: "02",
        title: "Análisis",
        icon: <IconAnalysis />,
        desc: "Identificación de brechas y oportunidades de mejora"

    },
    {
        num: "03",
        title: "Solución",
        icon: <IconDesign />,
        desc: "Diseño de estrategia técnica personalizada"

    },
    {
        num: "04",
        title: "Implementación",
        icon: <IconImplement />,
        desc: "Ejecución guiada con acompañamiento experto"

    },
    {
        num: "05",
        title: "Mejora",
        icon: <IconImprove />,
        desc: "Monitoreo y optimización continua de resultados", isLast: true

    },
]