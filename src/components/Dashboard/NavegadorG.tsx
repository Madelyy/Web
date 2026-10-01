"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { PALETTE } from "@/data/palette";

type DataNavegador = {
    navegador: string
    total: number
}

const fmt = (n: number) => Number(n).toLocaleString("es-PE")

export default function NavegadorG({ data }: { data: DataNavegador[] }) {
    const total = data.reduce((sum, d) => sum + d.total, 0);

    const CustomBar = (props: any) => {
        const { x, y, width, height, index } = props;

        return (
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                rx={6}
                fill={PALETTE[index % PALETTE.length]}
            />
        );
    };

    return (
        <div className="w-full min-w-0 overflow-hidden p-10">
            <div className="h-64 w-full min-w-0 sm:h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 12, right: 4, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid
                            stroke="#E8EFF8"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="navegador"
                            axisLine={false}
                            tickLine={false}
                            tickMargin={10}
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
                            formatter={(value) => [
                                fmt(Number(value)),
                                "Visitas"
                            ]}
                        />
                        <Bar
                            dataKey="total"
                            radius={[6, 6, 0, 0]}
                            maxBarSize={56}
                            shape={<CustomBar />}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 pt-5 sm:grid-cols-3" style={{ borderTop: "1px solid #E8EFF8" }} >
                {data.map((d, i) => (
                    <li
                        key={d.navegador}
                        className="flex min-w-0 items-center gap-2.5 text-sm"
                    >
                        <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: PALETTE[i % PALETTE.length] }} />
                        <span className="truncate text-[#334A63]">{d.navegador}</span>
                        <span className="ml-auto shrink-0 font-semibold tabular-nums text-[#1C2B3D]">{total ? Math.round((d.total / total) * 100) : 0} %</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
