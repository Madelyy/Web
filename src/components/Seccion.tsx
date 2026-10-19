
export default function Seccion({ num, titulo, descripcion, first = false, children }: { num: string; titulo: string; descripcion: string; first?: boolean; children: React.ReactNode }) {
    return (
        <section className={first ? "" : "mt-8 border-t border-[#E3EBF5] pt-8"}>
            <div className="mb-5 flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4569B5] text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{num}</span>
                <div>
                    <h3 className="text-base font-bold text-[#1C2B3D]" style={{ fontFamily: "var(--font-display)" }}>{titulo}</h3>
                    <p className="text-sm text-[#6E85A0]">{descripcion}</p>
                </div>
            </div>
            {children}
        </section>
    );
}