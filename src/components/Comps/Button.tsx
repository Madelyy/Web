type ButtonProps = {
    children: React.ReactNode
    variant?: "primary" | "secondary" | "transparent"
}

const variants = {
    primary: "bg-[#1D5093] text-white px-5 py-2.5",
    secondary: "bg-[#1E6A8A] border border-[#1E6A8A] text-white px-7 py-3.5",
    transparent: "bg-transparent border-white/20 text-white px-7 py-3.5 hover:bg-white/10",
}

export default function Button({
    children,
    variant = "primary",
}: ButtonProps) {
    return (
        <a
            href="#"
            className={`rounded-lg border font-semibold transition-all duration-200 hover:cursor-pointer hover:opacity-80 ${variants[variant]}`}
        >
            {children}
        </a>
    )
}
