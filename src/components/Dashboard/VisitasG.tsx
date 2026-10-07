"use client"
import { AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { DataDia } from "@/types/dashboard"


export default function VisitasG({
    titulo,
    subtitulo,
    data
}: {
    titulo: string
    subtitulo: string
    data: DataDia[]
}) {
    const fmt = (n: number) => Number(n).toLocaleString("es-PE")

    const total = data.reduce((sum, d) => sum + d.total, 0);
    const promedio = data.length ? Math.round(total / data.length) : 0;

    return (
        <section
            className="relative w-full min-w-0 overflow-hidden rounded-xl bg-white p-6 lg:p-7"
            style={{ border: `1px solid #DDE8F5`, boxShadow: `0 1px 2px rgba(28,43,61,0.04), 0 8px 24px -8px rgba(28,43,61,0.10)` }}
        >
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: "linear-gradient(90deg, #2E52A8, #4A7AB5)" }}
            />
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h2 className="text-lg font-bold text-[#1C2B3D]" style={{ fontFamily: "var(--font-display)" }}>{titulo}</h2>
                    {subtitulo && <p className="mt-0.5 text-sm text-[#6E85A0]">{subtitulo}</p>}
                </div>
                {data.length > 0 && (
                    <div className="flex gap-3">
                        <div className="rounded-lg bg-[#EEF3FA] px-4 py-2">
                            <div className="text-xs text-[#6E85A0]">Total</div>
                            <div className="text-base font-bold tabular-nums text-[#1C2B3D]">{fmt(total)}</div>
                        </div>
                    </div>
                )}
            </div>
            {data.length === 0 ? (
                <p className="py-16 text-center text-sm text-[#6E85A0]">Aún no hay datos para mostrar.</p>
            ) : (
                <div className="w-full min-w-0 overflow-hidden p-10">
                    <div className="h-64 w-full min-w-0 sm:h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid
                                    stroke="#E8EFF8"
                                    vertical={false}
                                />
                                <XAxis
                                    dataKey="fecha"
                                    axisLine={false}
                                    tickLine={false}
                                    interval="preserveStartEnd" tickMargin={10}
                                    tick={{ fill: "#516A85", fontSize: 12 }}
                                />
                                <YAxis
                                    width={35}
                                    axisLine={false}
                                    tickLine={false}
                                    allowDecimals={false}
                                    tick={{ fill: "#6E85A0", fontSize: 11 }}
                                    tickFormatter={fmt}
                                />
                                <Tooltip
                                    cursor={{ fill: "rgba(74,122,181,0.08)" }}
                                    formatter={(value) => [fmt(Number(value)), "Visitas"]}
                                    contentStyle={{ background: "#1C2B3D", border: "none", borderRadius: 8, color: "#fff", fontSize: 12 }}
                                    labelStyle={{ color: "rgba(255,255,255,0.7)" }}
                                    itemStyle={{ color: "#fff", fontWeight: 600 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="total"
                                    stroke="#3B66C4"
                                    strokeWidth={2.5}
                                    dot={{ r: 4 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
        </section>
    )
}