import Image from "next/image";
import { IconFacebook, IconGlobe, IconLinkedin } from "../Icons";
import { sectoresData } from "@/data/sectoresData";
import { serviciosData } from "@/data/serviciosData";

const navLinks = [ "Inicio", "Nosotros", "Servicios", "Sectores", "Experiencia", "Contacto" ];

const socialLinks = [
    { label: "LinkedIn", href: "#", icon: <IconLinkedin /> },
    { label: "Facebook", href: "#", icon: <IconFacebook /> },
    { label: "Sitio web", href: "#", icon: <IconGlobe /> },
];

const linkClass =
    "text-sm text-white/70 transition-colors duration-200 hover:text-white focus-visible:text-white";

function ColumnTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-5">
            <div className="text-white font-semibold text-sm" style={{ fontFamily: `var(--font-display)` }}
            >
                {children}
            </div>
            <div aria-hidden="true" className="mt-2 h-0.5 w-6 rounded-full bg-[#4A7AB5]" />
        </div>
    );
}

export default function FooterSection() {
    return (
        <footer className="relative text-white" style={{ background: `#172033` }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-14">
                    <div className="sm:col-span-2 lg:col-span-4">
                        <Image
                            src={"/images/logoB.png"}
                            alt="Albatros Asociados SAC"
                            width={190}
                            height={190}
                            className="h-auto w-[170px] lg:w-[190px] mb-6"
                            priority
                        />
                        <p className="text-sm leading-relaxed text-white/70 max-w-sm mb-7">
                            Consultoría técnica, capacitación e ingeniería para el sector pesquero, acuícola,
                            industrial y productivo.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white/80 transition-all duration-200 hover:bg-[#4A7AB5] hover:text-white hover:-translate-y-0.5"
                                    style={{
                                        background: `rgba(255,255,255,0.08)`,
                                        border: `1px solid rgba(255,255,255,0.14)`,
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <nav aria-label="Empresa" className="lg:col-span-2">
                        <ColumnTitle>Empresa</ColumnTitle>
                        <ul className="space-y-3">
                            {navLinks.map((l) => (
                                <li key={l}>
                                    <a href={`#${l.toLowerCase()}`} className={linkClass}>
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="lg:col-span-3">
                        <ColumnTitle>Servicios</ColumnTitle>
                        <ul className="space-y-3">
                            {serviciosData.map((s) => (
                                <li key={s.title}>
                                    <a href="#servicios" className={linkClass}>
                                        {s.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-3">
                        <ColumnTitle>Sectores</ColumnTitle>
                        <ul className="space-y-3">
                            {sectoresData.map((s) => (
                                <li key={s.title}>
                                    <a href="#sectores" className={linkClass}>
                                        {s.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div
                    className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 text-xs text-white/55"
                    style={{ borderTop: `1px solid rgba(255,255,255,0.12)` }}
                >
                    <span>© {new Date().getFullYear()} Albatros Asociados SAC.</span>
                    <span>Consultoría técnica · Capacitación · Ingeniería</span>
                </div>
            </div>
        </footer>
    );
}
