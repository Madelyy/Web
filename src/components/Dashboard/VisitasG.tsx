"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { DataDia } from "@/types/dashboard";

const fmt = (n: number) => Number(n).toLocaleString("es-PE");

export default function VisitasG({ data }: { data: DataDia[] }) {
    return (
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
    )
}