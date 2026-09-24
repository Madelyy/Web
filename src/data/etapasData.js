import { IconAnalysis, IconDesign, IconImplement, IconImprove, IconSearch } from "@/components/Icons";

export const etapasData = [
    {
        num: "01",
        title: "Diagnóstico",
        icon: <IconSearch />,
        desc: "Evaluación técnica de la embarcación y operación"
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
        desc: "Diseño de soluciones técnicas según las necesidades"
    },
    {
        num: "04",
        title: "Implementación",
        icon: <IconImplement />,
        desc: "Ejecución y acompañamiento técnico especializado"
    },
    {
        num: "05",
        title: "Mejora",
        icon: <IconImprove />,
        desc: "Seguimiento y optimización continua de resultados",
        isLast: true
    },
]