"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LoginPage() {
    const router = useRouter()
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [verPassword, setVerPassword] = useState(false)
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setCargando(true)
        setError("")

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ usuario, password })
            })

            const data = await response.json()

            if (!response.ok) throw new Error(data.error || "No se pudo iniciar sesión")

            router.replace("/dashboard")
            router.refresh()
        } catch (err) {
            setError(err instanceof Error ? err.message : "No se pudo iniciar sesión")
            setCargando(false)
        }
    }

    const inputClass = "w-full px-4 py-3 rounded-lg text-sm bg-white text-[#1C2B3D] placeholder:text-[#8FA3BB] border-[1.5px] border-[#CAD8EC] outline-none transition-all duration-200 hover:border-[#9DB6D8] focus:border-[#2E52A8] focus:ring-0 focus:ring[#2E52A8]/15"

    return (
        <div className="grid min-h-screen bg-[#EEF3FA] lg:grid-cols-2">
            <div
                className="relative hidden flex-col justify-between overflow-hidden p-12 text-white lg:flex"
                style={{ background: `linear-gradient(160deg, #3B62AE 0%, #2E52A8, 50%, #243F73 100%)` }}
            >
                <div aria-hidden="true" className="absolute inset-0 engineering-grid-light" />
                <Image
                    src="/images/logoB.png"
                    alt="Albatros Asociados SAC"
                    width={200}
                    height={80}
                    className="relative h-auto w-[190px]"
                    priority
                />
                <div className="relative max-w-md">
                    <div aria-hidden="true" className="mb-6 h-1 w-12 rounded-full bg-[#96BDD8]" />
                    <h2
                        className="text-3xl font-bold leading-tight"
                        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                    >
                        Panel de administración
                    </h2>
                    <p className="mt-4 leading-relaxed text-white/85">Consulta la actividad del sitio y gestiona las solicitudes de contacto en un solo lugar.</p>
                </div>
                <p className="relative text-sm text-white/70">© {new Date().getFullYear()} Albatros Asociados SAC</p>
            </div>
            <div className="flex items-center justify-center px-5 py-12">
                <div className="w-full max-w-[420px]">
                    <Image
                        src="/images/logoA_4B6FAE.png"
                        alt="Albatros Asociados SAC"
                        width={200}
                        height={80}
                        className="mx-auto mb-8 h-auto w-[170px] lg:hidden"
                        priority
                    />
                    <div
                        className="relative overflow-hidden rounded-2xl bg-white p-8 sm:p-10"
                        style={{ border: `1px solid #DDE8F5`, boxShadow: `0 1px 2px rgba(28,43,61,0.04), 0 16px 40px -12px rgba(28,43,61,0.14)` }}
                    >
                        <div
                            className="absolute inset-x-0 top-0 h-1"
                            style={{ background: `linear-gradient(90deg, #2E52A8, #4A7AB5)` }}
                        />
                        <h1
                            className="text-2xl font-bold text-[#1C2B3D]"
                            style={{ fontFamily: `var(--font-display)`, letterSpacing: `-0.02em` }}
                        >
                            Iniciar sesión
                        </h1>
                        <p className="mb-8 mt-1.5 text-sm text-[#6E85A0]">Ingresa tus credenciales para continuar</p>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="usuario" className="mb-2 block text-[13px] font-semibold text-[#334A63]">Usuario</label>
                                <input
                                    id="usuario"
                                    autoComplete="username"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                    placeholder="Tu usuario"
                                    className={inputClass}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="mb-2 block text-[13px] font-semibold text-[#334A63]">Contraseña</label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={verPassword ? `text` : `password`}
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Ingresa tu contraseña"
                                        className={`${inputClass} pr-24`}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setVerPassword(!verPassword)}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold text-[#2E52A8] transition-colors hover:bg-[#EEF3FA]"
                                    >
                                        {verPassword ? `Ocultar` : `Mostrar`}
                                    </button>
                                </div>
                            </div>
                            <div aria-live="polite">
                                {error && (
                                    <p
                                        className="rounded-lg px-4 py-3 text-sm font-medium"
                                        style={{ background: `#FCECEC`, color: `#9B2C2C`, border: `1px solid #F1C6C6` }}
                                    >
                                        {error}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={cargando}
                                className="w-full cursor-pointer rounded-lg bg-[#2E52A8] py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#243F73] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity/60"
                                style={{ fontFamily: `var(--font-display)` }}
                            >
                                {cargando ? `Ingresando...` : `Ingresar`}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
} 