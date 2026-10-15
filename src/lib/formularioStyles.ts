export const labelClass = "mb-2 flex items-center gap-2 text-[13px] font-semibold text-[#334A63]"
export const inputBase = "w-full rounded-lg border-[1.5px] bg-[#F5F8FC] px-4 py-3 text-sm text-[#1C2B3D] outline-none transition-all duration-200 placeholder:text-[#8FA3BB] focus:bg-white focus:ring-4"
export const inputOk = "border-[#CAD8EC] hover:border-[#9DB6D8] focus:border-[#2E52A8] focus:ring-[#2E52A8]/15"
export const inputErr = "border-[#D9777F] focus:border-[#D9777F] focus:ring-[#D9777F]/20"

export const inputClass = (error?: string) =>
    `${inputBase} ${error ? inputErr : inputOk}`;

