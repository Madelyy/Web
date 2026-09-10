import Image from "next/image";
import Button from "../Comps/Button";

export default function HeaderSection() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F8FAFA]">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20 hidden lg:flex items-center gap-25">
                <Image
                    src={"/images/logo.png"}
                    alt="Albatros Asociados SAC"
                    width={200}
                    height={50}
                    className="shrink-0"
                    priority
                />
                <div className="hidden lg:flex items-center gap-8">
                    <a href="#inicio" className="flex text-[#263238]/70 hover:text-[#60757D] text-sm font-medium transition-colors duration-200">Inicio</a>
                    <a href="#nosotros" className="flex text-[#263238] hover:text-[#60757D] text-sm font-medium transition-colors duration-200">Nosotros</a>
                    <a href="#servicios" className="flex text-[#263238] hover:text-[#60757D] text-sm font-medium transition-colors duration-200">Servicios</a>
                    <a href="#sectores" className="flex text-[#263238] hover:text-[#60757D] text-sm font-medium transition-colors duration-200">Sectores</a>
                    <a href="#experiencia" className="flex text-[#263238] hover:text-[#60757D] text-sm font-medium transition-colors duration-200">Experiencia</a>
                    <a href="#contacto" className="flex text-[#263238] hover:text-[#60757D] text-sm font-medium transition-colors duration-200">Contacto</a>
                </div>
                <Button variant="primary">
                    Solicitar asesoría
                </Button>
            </div>
        </header>
    )
}