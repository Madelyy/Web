"use client"
import { useState } from "react";
import { empresaData } from "../data/empresaData";
import { serviciosData } from "../data/serviciosData";
import { sectoresData } from "../data/sectoresData";

const initialForm = {
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    sector: "",
    servicio: "",
    mensaje: "",
};

export default function Contacto() {
    const [form, setForm] = useState(initialForm);
    const [sending, setSending] = useState(false);
    const [result, setResult] = useState<{ ok: boolean; text: string } | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        if (name === "telefono") {
            const numbers = value.replace(/\D/g, "").replace(/^51/, "").slice(0, 9);
            const format = numbers
                .replace(/^(\d{3})(\d)/, "$1 $2")
                .replace(/^(\d{3}) (\d{3})(\d)/, "$1 $2 $3");

            setForm((prev) => ({ ...prev, [name]: format ? `+51 ${format}` : `` }));
            return;
        }

        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSending(true);
        setResult(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Ocurrió un error");
            }

            setResult({ ok: true, text: "Consulta enviada correctamente. Te responderemos a la brevedad." });
            setForm(initialForm);
        } catch (error) {
            console.error(error);
            setResult({ ok: false, text: "No se pudo enviar la consulta. Inténtalo nuevamente." });
        } finally {
            setSending(false);
        }
    };

    const inputClass =
        "w-full px-4 py-3 rounded-lg text-sm bg-white text-[#1C2B3D] placeholder:text-[#8FA3BB] border-[1.5px] border-[#CAD8EC] outline-none transition-all duration-200 hover:border-[#9DB6D8] focus:border-[#2E52A8] focus:ring-4 focus:ring-[#2E52A8]/15";
    const inputStyle = { fontFamily: `var(--font-body)` };
    const labelClass = "block text-[13px] font-semibold text-[#334A63] mb-2";
    return (
        <section id="contacto" className="reveal bg-white py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-5 gap-14 lg:gap-16 items-start">
                    <div className="lg:col-span-2">
                        <div className="flex gap-5 mb-6">
                            <span aria-hidden="true" className="hidden sm:block w-1 rounded-full shrink-0" style={{ background: `linear-gradient(to bottom, #2E52A8, #4A7AB5)` }} />
                            <h2
                                className="text-3xl lg:text-4xl font-bold leading-tight"
                                style={{ fontFamily: "var(--font-display)", color: "#1C2B3D", letterSpacing: "-0.02em" }}
                            >
                                Estamos listos para ayudarte.
                            </h2>
                        </div>
                        <p className="leading-relaxed mb-10 text-[#445569]">
                            Cuéntanos qué desafío enfrenta tu organización y nuestro equipo evaluará cómo podemos
                            ayudarte.
                        </p>
                        <ul className="space-y-3">
                            {empresaData.map((item) => (
                                <li
                                    key={item.label}
                                    className="flex items-center gap-4 rounded-xl bg-white p-4"
                                    style={{ border: `1px solid #DDE8F5` }}
                                >
                                    <div className="bg-[#EBF0FA] text-[#2E52A8] w-11 h-11 rounded-lg flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[#6E85A0] text-xs font-medium mb-0.5">{item.label}</div>
                                        <div className="text-[#1C2B3D] text-sm  break-words">{item.value}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="lg:col-span-3 relative rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10"
                        style={{ background: `#EEF3FA`, border: `1px solid #DDE8F5`, boxShadow: `0 1px 2px rgba(28,43,61,0.04), 0 16px 40px -12px rgba(28,43,61,0.12)`, }}
                    >
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-1"
                            style={{ background: `linear-gradient(90deg, #2E52A8, #4A7AB5)` }}
                        />
                        <form onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="nombre" className={labelClass}>Nombre</label>
                                    <input id="nombre" name="nombre" autoComplete="name" value={form.nombre} onChange={handleChange} placeholder="Nombre completo" className={inputClass} style={inputStyle} required />
                                </div>
                                <div>
                                    <label htmlFor="empresa" className={labelClass}>Empresa</label>
                                    <input id="empresa" name="empresa" autoComplete="organization" value={form.empresa} onChange={handleChange} placeholder="Nombre de la empresa" className={inputClass} style={inputStyle} required />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="correo" className={labelClass}>Correo corporativo</label>
                                    <input id="correo" type="email" name="correo" autoComplete="email" value={form.correo} onChange={handleChange} placeholder="correo@empresa.com" className={inputClass} style={inputStyle} required />
                                </div>
                                <div>
                                    <label htmlFor="telefono" className={labelClass}>Teléfono</label>
                                    <input id="telefono" type="tel" name="telefono" autoComplete="tel" value={form.telefono} onChange={handleChange} placeholder="+51" maxLength={15} className={inputClass} style={inputStyle} required />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="sector" className={labelClass}>Sector</label>
                                    <select id="sector" name="sector" value={form.sector} onChange={handleChange} className={inputClass} style={inputStyle}>
                                        <option value="">Seleccionar sector</option>
                                        {sectoresData.map((s) => (
                                            <option key={s.title}>{s.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="servicio" className={labelClass}>Servicio de interés</label>
                                    <select id="servicio" name="servicio" value={form.servicio} onChange={handleChange} className={inputClass} style={inputStyle}>
                                        <option value="">Seleccionar servicio</option>
                                        {serviciosData.map((s) => (
                                            <option key={s.title}>{s.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="mensaje" className={labelClass}>Mensaje</label>
                                <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Describe el desafío o proyecto en el que necesitas apoyo..." rows={4} className={inputClass} style={{ ...inputStyle, resize: `none` }} required />
                            </div>
                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full py-3.5 rounded-lg font-semibold text-sm text-white bg-[#2E52A8] transition-all duration-200 hover:bg-[#243F73] hover:shadow-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E52A8]"
                                style={{ fontFamily: `var(--font-display)` }}
                            >
                                {sending ? "Enviando..." : "Enviar consulta"}
                            </button>
                            <div aria-live="polite" className="mt-4 min-h-6">
                                {result && (
                                    <p
                                        className="text-sm font-medium rounded-lg px-4 py-3"
                                        style={
                                            result.ok
                                                ? { background: `#E7F4EC`, color: `#1F6B3F`, border: `1px solid #BFE0CC` }
                                                : { background: `#FCECEC`, color: `#9B2C2C`, border: `1px solid #F1C6C6` }
                                        }
                                    >
                                        {result.text}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
