import { labelClass, inputBase, inputOk, inputErr } from "@/lib/formularioStyles"

type CampoProps = { label: string; name: string; error?: string; optional?: boolean } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name">;

const Opcional = () => ( <span className="rounded-full bg-[#EBF0FA] px-2 py-0.5 text-[11px] font-medium text-[#6E85A0]">Opcional</span> )

export default function Campo({ label, name, error, optional, ...rest }: CampoProps) {
    return (
        <div>
            <label htmlFor={name} className={labelClass}>{label}{optional && <Opcional />}</label>
            <input
                id={name}
                name={name}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${name}-error` : undefined}
                className={`${inputBase} ${error ? inputErr : inputOk}`}
                style={{ fontFamily: "var(--font-body)" }}
                {...rest}
            />
            {error && <p id={`${name}-error`} className="mt-1.5 text-xs font-medium text-[#B23A55]">{error}</p>}
        </div>
    );
}