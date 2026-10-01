export const PATHS = {
    dashboard: "M3 3h7v9H3z M14 3h7v5h-7z M14 12h7v9h-7z M3 16h7v5H3z",
    visitas: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    contactos: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6",
    pendientes: "M12 6v6l4 2 M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
    atendidos: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3",
    logout: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9",
    menu: "M3 6h18 M3 12h18 M3 18h18",
    up: "M7 17L17 7 M7 7h10v10",
    down: "M7 7l10 10 M17 7v10H7",
    globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2c2.5 2.7 4 6.1 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.1-4-10s1.5-7.3 4-10z",
    desktop: "M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M8 22h8 M12 18v4",
} as const;

export default function Icon({ name, className = "h-5 w-5" }: { name: keyof typeof PATHS; className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
            <path d={PATHS[name]} />
        </svg>
    );
}