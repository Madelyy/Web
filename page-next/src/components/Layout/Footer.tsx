import Image from "next/image"
import { IconFacebook, IconGlobe, IconLinkedin } from "../Icons"

export default function FooterSection() {
    const navLinks = [
        "Inicio",
        "Nosotros",
        "Servicios",
        "Sectores",
        "Experiencia",
        "Contacto",
    ]

    const servicios = [
        "Ingeniería",
        "Calidad",
        "Inocuidad",
        "Gestión ambiental",
        "Capacitación",
        "Consultoría",
        "Expedientes técnicos",
        "Legislación",
    ]
    const sectores = [
        "Pesca y acuicultura",
        "Alimentos",
        "Industria",
        "Vivienda y construcción",
        "Proyectos de inversión",
        "Gestión ambiental",
    ]

    return (
        <footer style={{ background: `#111827`, color: `#fff` }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src={"/images/logoB.png"}
                                alt="Albatros Asociados SAC"
                                width={150}
                                height={150}
                                className="shrink-0"
                                priority
                            />
                        </div>
                        <p className="text-xs leading-relaxed mb-6" style={{ color: `rgba(255,255,255,0.4)` }}>
                            Consultoría técnica, capacitación e ingeniería para el sector
                            pesquero, acuícola, industrial y productivo.
                        </p>
                        <div className="flex gap-3">
                            {[<IconLinkedin />, <IconFacebook />, <IconGlobe />].map(
                                (icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:opacity-80"
                                        style={{
                                            background: `rgba(255,255,255,0.07)`,
                                            color: `rgba(255,255,255,0.5)`,
                                        }}
                                    >
                                        {icon}
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="text-[#96BDD8] text-xs font-semibold tracking-widest uppercase mb-5">Empresa</div>
                        <ul className="space-y-2.5">
                            {navLinks.map((l) => (
                                <li key={l}>
                                    <a
                                        href={`#${l.toLowerCase()}`}
                                        className="text-xs transition-colors duration-200 hover:text-white"
                                        style={{ color: `rgba(255,255,255,0.45)` }}
                                    >
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="text-[#96BDD8] text-xs font-semibold tracking-widest uppercase mb-5">Servicios</div>
                        <ul className="space-y-2.5">
                            {servicios.map((s) => (
                                <li key={s}>
                                    <a
                                        href="#servicios"
                                        className="text-xs transition-colors duration-200 hover:text-white"
                                        style={{ color: `rgba(255,255,255,0.38)` }}
                                    >
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="text-[#96BDD8] text-xs font-semibold tracking-widest uppercase mb-5">Sectores</div>
                        <ul className="space-y-2.5">
                            {sectores.map((s) => (
                                <li key={s}>
                                    <a
                                        href="#sectores"
                                        className="text-xs transition-colors duration-200 hover:text-white"
                                        style={{ color: `rgba(255,255,255,0.38)` }}
                                    >
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs"
                    style={{
                        borderTop: `1px solid rgba(255,255,255,0.08)`,
                        color: `rgba(255,255,255,0.3)`
                    }}
                >
                    <span>
                        © {new Date().getFullYear()} ALBATROS ASOCIADOS SAC
                    </span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white/60 transition-colors">Política de privacidad</a>
                        <a href="#" className="hover:text-white/60 transition-colors">Términos de uso</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}