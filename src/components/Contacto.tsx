"use client"
import { useState } from "react";
import { IconClock, IconMail, IconPhone, IconPin } from "./Icons";

export default function Contacto() {
    const [form, setForm] = useState({
        nombre: "",
        empresa: "",
        correo: "",
        telefono: "",
        sector: "",
        servicio: "",
        mensaje: "",
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        if (name === "telefono") { 
            const numbers = value.replace(/\D/g, "").replace(/^51/, "").slice(0, 9);

            const format = numbers.replace(/^(\d{3})(\d)/, "$1 $2").replace(/^(\d{3}) (\d{3})(\d)/, "$1 $2 $3");
            
            setForm((prev) => ({
                ...prev,
                [name]: format  ? `+51 ${format}` : ``
            }))

            return
        }

        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const inputClass = "w-full px-4 py-3 rounded-lg text-sm border-[1.5px] border-[#DDE8F5] outline-none transition-all duration-200 focus:outline-none focus:ring-0 focus:border-blue-500"

    const inputStyle = {
        background: `EEF3FA`,
        color: `#1C2B3D"`,
        fontFamily: `var(--font-body)`,
    }

    const sectores = [ "Pesca y acuicultura", "Alimentos", "Industria y sector productivo", "Vivienda y construcción", "Proyectos de inversión", "Gestión ambiental", "Otro" ]

    const servicios = [ "Expedientes técnicos", "Arquitectura e ingeniería", "Gestión de la calidad", "Calidad e inocuidad alimentaria", "Gestión ambiental", "Capacitación profesional", "Consultoría de gestión", "Legislación" ]

    return (
        <section id="contacto" className="bg-white py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2
                            className="text-3xl lg:text-4xl font-bold mb-5 leading-tight"
                            style={{
                                fontFamily: "var(--font-display)",
                                color: "#1C2B3D",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Estamos listos para ayudarte.
                        </h2>
                        <p className="leading-relaxed mb-10" style={{ color: "#445569" }}>
                            Cuéntanos qué desafío enfrenta tu organización y nuestro equipo
                            evaluará cómo podemos ayudarte.
                        </p>
                        <div className="space-y-5">
                            {[
                                { icon: <IconPin />,    label: "Ubicación",   value: "Pasaje Maracaibo N° 170, Jesús María" },
                                { icon: <IconMail />,   label: "Correo",      value: "asistente@albatrosperu.com" },
                                { icon: <IconPhone />,  label: "Teléfono",    value: "+51 990 184 822" },
                                { icon: <IconClock />,  label: "Horario",     value: "Lun - Vie..." }
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-start gap-4"
                                >
                                    <div className="bg-[#EEF3FA] text-[#4A7AB5] w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <div className="text-[#9BAFC6] text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</div>
                                        <div className="text-[#1C2B3D] text-sm font-medium">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="rounded-2xl p-8 lg:p-10"
                        style={{
                            background: `#EEF3FA`,
                            border: `1px solid #DDE8F5`,
                            boxShadow: `0 8px 32px rgba(28,43,61,0.06)`,
                        }}
                    >
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Nombre</label>
                                <input
                                    name="nombre"
                                    value={form.nombre}
                                    onChange={handleChange}
                                    placeholder="Nombre completo"
                                    className={inputClass}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Empresa</label>
                                <input
                                    name="empresa"
                                    value={form.empresa}
                                    onChange={handleChange}
                                    placeholder="Empresa"
                                    className={inputClass}
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Correo corporativo</label>
                                <input
                                    name="correo"
                                    value={form.correo}
                                    onChange={handleChange}
                                    placeholder="correo@empresa.com"
                                    className={inputClass}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Teléfono</label>
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={form.telefono}
                                    onChange={handleChange}
                                    placeholder="+51"
                                    maxLength={15}
                                    className={inputClass}
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Sector</label>
                                <select
                                    name="sector"
                                    value={form.sector}
                                    onChange={handleChange}
                                    className={inputClass}
                                    style={inputStyle}
                                >
                                    <option value="">Seleccionar sector</option>
                                    {sectores.map((s) => (
                                        <option key={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Servicio de interés</label>
                                <select
                                    name="servicio"
                                    value={form.servicio}
                                    onChange={handleChange}
                                    className={inputClass}
                                    style={inputStyle}
                                >
                                    <option value="">Seleccionar servicio</option>
                                    {servicios.map((s) => (
                                        <option key={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Mensaje</label>
                            <textarea
                                name="mensaje"
                                value={form.mensaje}
                                onChange={handleChange}
                                placeholder="Describe el desafío o proyecto en el que necesitas apoyo..."
                                rows={4}
                                className={inputClass}
                                style={{ ...inputStyle, resize: `none` }}
                            />
                        </div>
                        <button
                            className="w-full py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90"
                            style={{
                                background: `#2E52A8`,
                                color: `#fff`,
                                fontFamily: `var(--font-display)`
                            }}
                        >
                            Enviar consulta
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}