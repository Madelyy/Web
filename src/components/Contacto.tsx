"use client"
import { use, useState } from "react";
import { empresaData } from "../data/empresaData";
import { serviciosData } from "../data/serviciosData";
import { sectoresData } from "../data/sectoresData";

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

    const [sending, setSending] = useState(false);
    const [result, setResult] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        if (name === "telefono") {
            const numbers = value.replace(/\D/g, "").replace(/^51/, "").slice(0, 9);
            const format = numbers.replace(/^(\d{3})(\d)/, "$1 $2").replace(/^(\d{3}) (\d{3})(\d)/, "$1 $2 $3");

            setForm((prev) => ({
                ...prev,
                [name]: format ? `+51 ${format}` : ``
            }))

            return
        }

        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSending(true);
        setResult("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(form)
            })

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Ocurrió un error")
            }

            setResult("Enviada correctamente")

            setForm({
                nombre: "",
                empresa: "",
                correo: "",
                telefono: "",
                sector: "",
                servicio: "",
                mensaje: "",
            });
        } catch (error) {
            console.error(error)
            setResult("No se pudo enviar")
        } finally {
            setSending(false);
        }
    }

    const inputClass = "w-full px-4 py-3 rounded-lg text-sm border-[1.5px] border-[#DDE8F5] outline-none transition-all duration-200 focus:outline-none focus:ring-0 focus:border-blue-500"

    const inputStyle = { background: `#EEF3FA`, color: `#1C2B3D`, fontFamily: `var(--font-body)` }

    return (
        <section id="contacto" className="bg-white py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2
                            className="text-3xl lg:text-4xl font-bold mb-5 leading-tight"
                            style={{ fontFamily: "var(--font-display)", color: "#1C2B3D", letterSpacing: "-0.02em" }}
                        >
                            Estamos listos para ayudarte.
                        </h2>
                        <p className="leading-relaxed mb-10" style={{ color: "#445569" }}>
                            Cuéntanos qué desafío enfrenta tu organización y nuestro equipo
                            evaluará cómo podemos ayudarte.
                        </p>
                        <div className="space-y-5">
                            {empresaData.map((item) => (
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
                        style={{ background: `#EEF3FA`, border: `1px solid #DDE8F5`, boxShadow: `0 8px 32px rgba(28,43,61,0.06)` }}
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Nombre</label>
                                    <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre completo" className={inputClass} style={inputStyle} />
                                </div>
                                <div>
                                    <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Empresa</label>
                                    <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Empresa" className={inputClass} style={inputStyle} />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Correo corporativo</label>
                                    <input name="correo" value={form.correo} onChange={handleChange} placeholder="correo@empresa.com" className={inputClass} style={inputStyle} />
                                </div>
                                <div>
                                    <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Teléfono</label>
                                    <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="+51" maxLength={15} className={inputClass} style={inputStyle} />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Sector</label>
                                    <select name="sector" value={form.sector} onChange={handleChange} className={inputClass} style={inputStyle} >
                                        <option value="">Seleccionar sector</option>
                                        {sectoresData.map((s) => (
                                            <option key={s.title}>{s.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Servicio de interés</label>
                                    <select name="servicio" value={form.servicio} onChange={handleChange} className={inputClass} style={inputStyle}>
                                        <option value="">Seleccionar servicio</option>
                                        {serviciosData.map((s) => (
                                            <option key={s.title}>{s.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="text-[#6E85A0] block text-xs font-semibold mb-2 uppercase tracking-wider">Mensaje</label>
                                <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Describe el desafío o proyecto en el que necesitas apoyo..." rows={4} className={inputClass} style={{ ...inputStyle, resize: `none` }} />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 cursor-pointer   "
                                style={{ background: `#2E52A8`, color: `#fff`, fontFamily: `var(--font-display)` }}
                            >
                                Enviar consulta
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}