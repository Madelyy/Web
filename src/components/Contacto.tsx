"use client"
import { useRef, useState } from "react"
import { empresaData } from "../data/empresaData"
import { serviciosData } from "../data/serviciosData"
import { sectoresData } from "../data/sectoresData"
import Campo from "./Campo"
import SeleccionarCampo from "./SeleccionarCampo"
import Icon from "./Icons/IconsDashboard"
import { labelClass, inputBase, inputOk } from "@/lib/formularioStyles"
import Seccion from "./Seccion"
import Contador from "./Contador"
import { formularioInicial } from "@/data/formularioInicial"
import { PLAZOS } from "@/data/plazos"

const Opcional = () => (<span className="rounded-full bg-[#EBF0FA] px-2 py-0.5 text-[11px] font-medium text-[#6E85A0]">Opcional</span>)

export default function Contacto() {
    const [form, setForm] = useState(formularioInicial)
    const [tieneEmbarcaciones, setTieneEmbarcaciones] = useState(false)
    const [rsw, setRsw] = useState(0)
    const [convencional, setConvencional] = useState(0)
    const [aceptaDatos, setAceptaDatos] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const [sending, setSending] = useState(false)
    const [errorEnvio, setErrorEnvio] = useState("")
    const [exito, setExito] = useState(false)
    const [referencia, setReferencia] = useState<string | null>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    const limpiarError = (name: string) =>
        setErrors((prev) => (prev[name] ? { ...prev, [name]: "" } : prev))

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        limpiarError(name)

        if (name === "telefono") {
            const numbers = value.replace(/\D/g, "").replace(/^51/, "").slice(0, 9)
            const format = numbers
                .replace(/^(\d{3})(\d)/, "$1 $2")
                .replace(/^(\d{3}) (\d{3})(\d)/, "$1 $2 $3");
            setForm((prev) => ({ ...prev, telefono: format ? `+51 ${format}` : `` }))
            return
        }

        if (name === "ruc") {
            setForm((prev) => ({ ...prev, ruc: value.replace(/\D/g, "").slice(0, 11) }))
            return
        }

        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const validar = () => {
        const e: Record<string, string> = {};
        if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre completo."
        if (!form.empresa.trim()) e.empresa = "Ingresa el nombre de la empresa."
        if (!/^\S+@\S+\.\S+$/.test(form.correo)) e.correo = "Ingresa un correo válido."
        if (form.telefono.replace(/\D/g, "").length < 11) e.telefono = "Ingresa un teléfono de 9 dígitos."
        if (!form.servicio) e.servicio = "Selecciona un servicio."
        if (!aceptaDatos) e.consent = "Necesitamos tu autorización para responderte."
        return e
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrorEnvio("")

        const nuevos = validar()
        setErrors(nuevos)
        const primero = Object.keys(nuevos)[0];
        if (primero) {
            document.getElementById(primero === "consent" ? "consent" : primero)?.focus();
            return
        }

        setSending(true)
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    embarcaciones: tieneEmbarcaciones ? { rsw, convencional } : null,
                    aceptaDatos,
                }),
            })

            const data = await response.json().catch(() => ({}));
            if (!response.ok) throw new Error(data.error || `Error ${response.status}`)

            setReferencia(data.id ? `ALB-${new Date().getFullYear()}-${String(data.id).padStart(4, "0")}` : null)
            setExito(true)
            setForm(formularioInicial);
            setTieneEmbarcaciones(false)
            setRsw(0)
            setConvencional(0)
            setAceptaDatos(false)
            requestAnimationFrame(() => cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }))
        } catch (error) {
            console.error(error)
            setErrorEnvio("No se pudo enviar la consulta. Inténtalo nuevamente.")
        } finally {
            setSending(false)
        }
    }

    return (
        <section id="contacto" className="reveal bg-[#EEF3FA] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-5 gap-14 lg:gap-16 items-start">
                    <div className="lg:col-span-2 lg:sticky lg:top-28">
                        <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-[#2E52A8]">
                            <span aria-hidden="true" className="h-px w-8 bg-[#2E52A8]" />
                            Hablemos de tu proyecto
                        </div>
                        <h2 className="mb-5 text-3xl font-bold leading-tight lg:text-4xl" style={{ fontFamily: "var(--font-display)", color: "#1C2B3D", letterSpacing: "-0.02em" }}>Cuéntanos qué necesitas.</h2>
                        <p className="mb-10 leading-relaxed text-[#445569]">Déjanos los detalles de tu consulta. Nuestro equipo técnico te ayudará a encontrar una solución clara, segura y alineada con la normativa.</p>
                        <ul className="space-y-3">
                            {empresaData.map((item) => (
                                <li key={item.label} className="flex items-center gap-4 rounded-xl bg-white p-4" style={{ border: "1px solid #DDE8F5" }}>
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EBF0FA] text-[#2E52A8]">{item.icon}</div>
                                    <div className="min-w-0">
                                        <div className="mb-0.5 text-xs font-medium text-[#6E85A0]">{item.label}</div>
                                        <div className="break-words text-sm text-[#1C2B3D]">{item.value}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        ref={cardRef}
                        className="relative scroll-mt-28 overflow-hidden rounded-2xl bg-white p-6 sm:p-8 lg:col-span-3 lg:p-10"
                        style={{ border: "1px solid #DDE8F5", boxShadow: "0 1px 2px rgba(28,43,61,0.04), 0 16px 40px -12px rgba(28,43,61,0.14)" }}
                    >
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1" style={{ background: "linear-gradient(90deg, #2E52A8, #4A7AB5)" }} />
                        {exito ? (
                            <div className="py-8 text-center" role="status">
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#E3F6F2] text-[#0F7F6E]">
                                    <Icon name="check" size={30} />
                                </div>
                                <span className="text-sm font-semibold text-[#2E52A8]">Consulta enviada</span>
                                <h3 className="mt-2 text-2xl font-bold text-[#1C2B3D]" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>Gracias por contactarnos.</h3>
                                <p className="mx-auto mt-3 max-w-md leading-relaxed text-[#516A85]">Hemos recibido tu información. Un especialista de Albatros Asociados revisará tu caso y se pondrá en contacto contigo.</p>
                                {referencia && (
                                    <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-lg bg-[#F5F8FC] px-5 py-3" style={{ border: "1px solid #DDE8F5" }}>
                                        <span className="text-xs text-[#6E85A0]">Referencia</span>
                                        <strong className="text-sm tabular-nums text-[#1C2B3D]">{referencia}</strong>
                                    </div>
                                )}
                                <div className="mt-8">
                                    <button
                                        type="button"
                                        onClick={() => setExito(false)}
                                        className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-[#2E52A8] transition-colors hover:bg-[#EEF3FA]"
                                        style={{ border: "1.5px solid #CAD8EC", fontFamily: "var(--font-display)" }}
                                    >
                                        Enviar otra consulta <Icon name="arrow" size={18} />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <input name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
                                <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                                    <div>
                                        <span className="text-sm font-semibold text-[#2E52A8]">Formulario de contacto</span>
                                        <h3 className="text-2xl font-bold text-[#1C2B3D]" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>Solicita una evaluación</h3>
                                    </div>
                                    <p className="text-xs text-[#6E85A0]">Los campos sin la etiqueta «Opcional» son obligatorios.</p>
                                </div>
                                <Seccion first num="01" titulo="Tus datos" descripcion="Información para poder comunicarnos contigo.">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <Campo label="Nombre completo" name="nombre" autoComplete="name" value={form.nombre} onChange={handleChange} placeholder="Ej. Adriana Salazar" error={errors.nombre} />
                                        <Campo label="Cargo" name="cargo" autoComplete="organization-title" value={form.cargo} onChange={handleChange} placeholder="Ej. Jefa de calidad" optional />
                                        <Campo label="Empresa" name="empresa" autoComplete="organization" value={form.empresa} onChange={handleChange} placeholder="Nombre de la empresa" error={errors.empresa} />
                                        <Campo label="RUC" name="ruc" inputMode="numeric" maxLength={11} value={form.ruc} onChange={handleChange} placeholder="11 dígitos" optional />
                                        <Campo label="Correo corporativo" name="correo" type="email" autoComplete="email" value={form.correo} onChange={handleChange} placeholder="nombre@empresa.com" error={errors.correo} />
                                        <Campo label="Teléfono" name="telefono" type="tel" autoComplete="tel" maxLength={15} value={form.telefono} onChange={handleChange} placeholder="+51" error={errors.telefono} />
                                    </div>
                                </Seccion>
                                <Seccion num="02" titulo="Tu consulta" descripcion="Ayúdanos a dirigir tu solicitud al especialista indicado.">
                                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                        <SeleccionarCampo label="Servicio de interés" name="servicio" placeholder="Selecciona un servicio" value={form.servicio} onChange={handleChange} options={serviciosData.map((s) => s.title)} error={errors.servicio} />
                                        <SeleccionarCampo label="Sector" name="sector" placeholder="Selecciona un sector" value={form.sector} onChange={handleChange} options={sectoresData.map((s) => s.title)} />
                                        <SeleccionarCampo className="sm:col-span-2 xl:col-span-1" label="Plazo estimado" name="plazo" placeholder="Selecciona un plazo" value={form.plazo} onChange={handleChange} options={PLAZOS} />
                                    </div>
                                </Seccion>
                                <Seccion num="03" titulo="Embarcaciones" descripcion="Completa esta sección solo si aplica a tu consulta.">
                                    <div
                                        className="rounded-xl bg-white p-4 transition-colors sm:p-5"
                                        style={{ border: `1.5px solid ${tieneEmbarcaciones ? "#9DB6D8" : "#CAD8EC"}` }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EBF0FA] text-[#2E52A8]"><Icon name="ship" size={22} /></span>
                                            <div className="min-w-0 flex-1">
                                                <div className="text-sm font-semibold text-[#1C2B3D]">Mi consulta involucra embarcaciones pesqueras</div>
                                                <div className="text-xs text-[#6E85A0]">Indica el tipo y la cantidad de embarcaciones.</div>
                                            </div>
                                            <button
                                                type="button"
                                                role="switch"
                                                aria-checked={tieneEmbarcaciones}
                                                aria-label="Mi consulta involucra embarcaciones pesqueras"
                                                onClick={() => setTieneEmbarcaciones(!tieneEmbarcaciones)}
                                                className={`relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors ${tieneEmbarcaciones ? "bg-[#2E52A8]" : "bg-[#CAD8EC]"}`}
                                            >
                                                <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${tieneEmbarcaciones ? "left-[22px]" : "left-0.5"}`} />
                                            </button>
                                        </div>
                                        {tieneEmbarcaciones && (
                                            <div className="mt-5 space-y-3 pt-5" style={{ borderTop: "1px solid #E3EBF5" }}>
                                                <div className="grid gap-3 md:grid-cols-2">
                                                    <Contador label="Con sistema RSW" value={rsw} onChange={setRsw} />
                                                    <Contador label="Convencionales" value={convencional} onChange={setConvencional} />
                                                </div>
                                                <div className="flex items-center justify-between rounded-lg bg-[#EBF0FA] px-4 py-3">
                                                    <span className="text-sm font-medium text-[#334A63]">Total de embarcaciones</span>
                                                    <strong className="text-xl tabular-nums text-[#243F73]" style={{ fontFamily: "var(--font-display)" }}>{rsw + convencional}</strong>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Seccion>
                                <Seccion num="04" titulo="Mensaje" descripcion="Cuéntanos el contexto y el alcance que tienes en mente.">
                                    <label htmlFor="mensaje" className={labelClass}>¿Cómo podemos ayudarte?<Opcional /></label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        rows={5}
                                        value={form.mensaje}
                                        onChange={handleChange}
                                        placeholder="Describe brevemente tu necesidad, ubicación del proyecto y cualquier requisito técnico relevante..."
                                        className={`${inputBase} ${inputOk} resize-none`}
                                        style={{ fontFamily: "var(--font-body)" }}
                                    />
                                    <p className="mt-1.5 text-xs text-[#6E85A0]">No incluyas información confidencial en esta etapa.</p>
                                </Seccion>
                                <div className="mt-8 border-t border-[#E3EBF5] pt-8">
                                    <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[#445569]">
                                        <input
                                            id="consent"
                                            type="checkbox"
                                            checked={aceptaDatos}
                                            onChange={(e) => { setAceptaDatos(e.target.checked); limpiarError("consent"); }}
                                            className="peer sr-only"
                                        />
                                        <span
                                            aria-hidden="true"
                                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-[1.5px] bg-white text-white transition-colors peer-checked:border-[#2E52A8] peer-checked:bg-[#2E52A8] peer-focus-visible:ring-4 peer-focus-visible:ring-[#2E52A8]/20 ${errors.consent ? "border-[#D9777F]" : "border-[#9DB6D8]"} [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100`}
                                        >
                                            <Icon name="check" size={13} />
                                        </span>
                                        <span>Acepto el tratamiento de mis datos personales para recibir respuesta a esta consulta.</span>
                                    </label>
                                    {errors.consent && <p className="mt-2 text-xs font-medium text-[#B23A55]">{errors.consent}</p>}
                                    <button
                                        type="submit"
                                        disabled={sending}
                                        className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-[#2E52A8] py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#243F73] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E52A8]"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        <span>{sending ? "Enviando..." : "Enviar consulta"}</span>
                                        {!sending && <Icon name="send" size={19} />}
                                    </button>
                                    <div aria-live="polite" className="mt-4 min-h-5">
                                        {errorEnvio && (
                                            <p className="rounded-lg px-4 py-3 text-sm font-medium" style={{ background: "#FCECEC", color: "#9B2C2C", border: "1px solid #F1C6C6" }}>
                                                {errorEnvio}
                                            </p>
                                        )}
                                    </div>
                                    <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#6E85A0]">
                                        <Icon name="check" size={14} /> Tus datos se usarán únicamente para atender tu consulta.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}