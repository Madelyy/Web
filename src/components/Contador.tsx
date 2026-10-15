export default function Contador({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) {
    const set = (n: number) => onChange(Math.min(99, Math.max(0, n)));
    const btn = "flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-[#EEF3FA] text-xl font-semibold text-[#2E52A8] transition-colors hover:bg-[#DDE8F5] disabled:cursor-not-allowed disabled:opacity-40";

    return (
        <div className="flex items-center justify-between gap-3 rounded-xl bg-[#F5F8FC] p-4" style={{ border: "1px solid #DDE8F5" }}>
            <div className="min-w-0">
                <div className="text-sm font-semibold text-[#1C2B3D]">{label}</div>
                <div className="text-xs text-[#6E85A0]">Número de embarcaciones</div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
                <button type="button" className={btn} aria-label={`Restar ${label}`} disabled={value === 0} onClick={() => set(value - 1)}>−</button>
                <output className="w-8 text-center text-lg font-bold tabular-nums text-[#1C2B3D]" aria-live="polite">{value}</output>
                <button type="button" className={btn} aria-label={`Agregar ${label}`} disabled={value >= 99} onClick={() => set(value + 1)}>+</button>
            </div>
        </div>
    );
}