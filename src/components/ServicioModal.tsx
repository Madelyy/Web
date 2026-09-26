import { IconChevronRight, IconClipboard, IconTarget, IconX } from "./Icons";
import { serviciosData } from "../data/serviciosData";

type Servicio = (typeof serviciosData)[number];

interface ServicioModalProps {
    service: Servicio
    isClosing: boolean
    onClose: () => void
}

export default function ServicioModal({
    service,
    isClosing,
    onClose
}: ServicioModalProps) {
    return (
        <div
            className="bg-[#1C2B3D]/60 fixed inset-0 z-50 flex items-center justify-center p-8"
            onClick={onClose}
        >
            <div
                className={`pop relative w-150 rounded-2xl bg-white p-8 lg:p-10 shadow-2xl ${isClosing ? `close` : `pop`}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="text-[#6E85A0] absolute right-10 hover:text-[#1C2B3D] transition-colors cursor-pointer"
                >
                    <IconX />
                </button>
                <span
                    className="text-xs font-bold tracking-widest"
                    style={{
                        color: "#9BAFC6",
                        fontFamily: "var(--font-display)",
                    }}
                >
                    {service.num}
                </span>
                <h2
                    className="text-2xl lg:text-3xl font-bold mt-3 mb-4"
                    style={{
                        color: "#1C2B3D",
                        fontFamily: "var(--font-display)",
                    }}
                >
                    {service.title}
                </h2>
                <div className="my-5 h-px bg-[#DDE8F5]" />
                <div className="flex gap-6">
                    <IconClipboard />
                    <div>
                        <h3
                            className="font-bold text-lg mb-4"
                            style={{
                                color: "#1C2B3D",
                                fontFamily: "var(--font-display)",
                            }}
                        >
                            ¿Qué comprende?
                        </h3>
                        <ul>
                            {service.details.includes.map((item: string) => (
                                <li
                                    key={item}
                                    className="text-[#6E85A0] text-sm flex gap-3"
                                >
                                    <span className="text-[#4A7AB5]">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="pt-10 flex justify-end">
                    <a
                        href="#contacto"
                        onClick={onClose}
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:gap-8 hover:opacity-90"
                        style={{ background: `#2E52A8`, color: `#fff`, fontFamily: `var(--font-display)` }}
                    >
                        Solicitar asesoría
                        <IconChevronRight />
                    </a>
                </div>
            </div>
        </div>
    );
}