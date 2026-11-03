import HeaderSection from "@/components/Layout/Header"
import FooterSection from "@/components/Layout/Footer"
import ReglaCalado from "@/components/ui/ReglaCalado"
import BotonWhatsApp from "@/components/BotonWhatsApp"
import Hero from "@/components/Hero"
import Nosotros from "@/components/Nosotros"
import Equipo from "@/components/Equipo"
import Ruta from "@/components/Ruta"
import Servicios from "@/components/Servicios"
import SectorProductivo from "@/components/SectorProductivo"
import Proyectos from "@/components/Proyectos"
import CTA from "@/components/CTA"
import Contacto from "@/components/Contacto"

/**
 * 11 secciones → 8.
 *  Nosotros      = Nosotros + MisionVision + Valores
 *  Ruta          = Metodologia + Diferencial
 *  Servicios     = Servicios + Capacitacion
 *  SectorProductivo = SectorProductivo + Sectores
 * Ya no se usan (puedes borrarlos): MisionVision, Valores, Diferencial, Metodologia, Capacitacion, Sectores.
 */
export default function Home() {
  return (
    <div className="min-h-screen cursor-default">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#243F73] focus:shadow-lg"
      >
        Saltar al contenido
      </a>

      <HeaderSection />
      <ReglaCalado />

      <main id="contenido">
        <Hero />
        <Nosotros />
        <Equipo />
        <Ruta />
        <Servicios />
        <SectorProductivo />
        <Proyectos />
        <CTA />
        <Contacto />
      </main>

      <FooterSection />
      <BotonWhatsApp />
    </div>
  )
}
