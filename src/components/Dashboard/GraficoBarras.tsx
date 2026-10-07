import { BarChart, Bar, Cell, LabelList, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { PALETTE } from "@/data/palette"

type Item = { nombre: string; total: number }

const fmt = (n: number) => Number(n).toLocaleString("es-PE")

export default function GraficoBarras({
    titulo,
    subtitulo,
    data
}: {
    titulo: string
    subtitulo: string
    data: Item[]
}) {
    const total = data.reduce((sum, d) => sum + d.total, 0)
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
        <section
            className="relative w-full min-w-0 overflow-hidden rounded-xl bg-white p-6 lg:p-7"
            style={{ border: `1px solid #DDE8F5`, boxShadow: `0 1px 2px rgba(28,43,61,0.04), 0 8px 24px -8px rgba(28,43,61,0.10)` }}
        >
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: "linear-gradient(90deg, #2E52A8, #4A7AB5)" }}
            />
            <div className="mb-5">
                <h2 className="text-lg font-bold text-[#1C2B3D]" style={{ fontFamily: "var(--font-display)" }}>{titulo}</h2>
                {subtitulo && <p className="mt-0.5 text-sm text-[#6E85A0]">{subtitulo}</p>}
            </div>
            {data.length === 0 ? (
                <p className="py-16 text-center text-sm text-[#6E85A0]">Aún no hay datos para mostrar</p>
            ) : (
                <>
                    <div className="h-64 w-full min-w-0 sm:h-72">
                        <ResponsiveContainer>
                            <BarChart data={data} margin={{ top: 22, right: 4, left: 0, bottom: 0 }}>
                                <CartesianGrid stroke="#E8EFF8" vertical={false} />
                                <XAxis
                                    dataKey="nombre"
                                    axisLine={false}
                                    tickLine={false}
                                    interval={0}
                                    tickMargin={10}
                                    tick={{ fill: `#516A85`, fontSize: 12 }}
                                />
                                <YAxis
                                    width={40}
                                    axisLine={false}
                                    tickLine={false}
                                    allowDecimals={false}
                                    tick={{ fill: `#516A85`, fontSize: 12 }}
                                    tickFormatter={fmt}
                                />
                                <Tooltip
                                    cursor={{ fill: `rgba(74,122,181,0.08)` }}
                                    formatter={(value) => [fmt(Number(value)), "Visitas"]}
                                    contentStyle={{
                                        background: `#1C2B3D`,
                                        border: `none`,
                                        borderRadius: 8,
                                        color: `#fff`,
                                        fontSize: 12,
                                    }}
                                    labelStyle={{ color: `rgba(255,255,255,0.7)` }}
                                    itemStyle={{ color: `#fff`, fontWeight: 600 }}
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
                                key={d.nombre}
                                className="flex min-w-0 items-center gap-2.5 text-sm"
                            >
                                <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: PALETTE[i % PALETTE.length] }} />
                                <span className="truncate text-[#334A63]">{d.nombre}</span>
                                <span className="ml-auto shrink-0 font-semibold tabular-nums text-[#1C2B3D]">{total ? Math.round((d.total / total) * 100) : 0} %</span>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}