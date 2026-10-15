import { labelClass, inputBase, inputOk, inputErr } from "@/lib/formularioStyles"
import Icon from "./Icons/IconsDashboard"

export default function SeleccionarCampo({
    label, name, placeholder, value, onChange, options, error, className = "",
}: {
    label: string
    name: string
    placeholder: string
    value: string
    onChange: React.ChangeEventHandler<HTMLSelectElement>
    options: string[]
    error?: string
    className?: string
}) {
    return (
        <div className={className}>
            <label htmlFor={name} className={labelClass}>{label}</label>
            <div className="relative">
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    aria-invalid={Boolean(error)}
                    className={`${inputBase} ${error ? inputErr : inputOk} appearance-none pr-10 ${value ? "" : "text-[#8FA3BB]"}`}
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((o) => (<option key={o} value={o} className="text-[#1C2B3D]">{o}</option>))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6E85A0]"><Icon name="chevron" size={18} /></span>
            </div>
            {error && <p className="mt-1.5 text-xs font-medium text-[#B23A55]">{error}</p>}
        </div>
    );
}