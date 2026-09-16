import Image from "next/image";
import HeaderSection from "@/components/Layout/Header";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import MisionVision from "@/components/MisionVision";
import Valores from "@/components/Valores";
import Servicios from "@/components/Servicios";
import Capacitacion from "@/components/Capacitacion";
import SectorProductivo from "@/components/SectorProductivo";
import Sectores from "@/components/Sectores";
import Diferencial from "@/components/Diferencial";
import Metodologia from "@/components/Metodologia";
import Proyectos from "@/components/Proyectos";
import CTA from "@/components/CTA";
import Contacto from "@/components/Contacto";
import FooterSection from "@/components/Layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen cursor-default">
      <HeaderSection />
      <Hero />
      <Nosotros />
      <MisionVision />
      <Valores />
      <Servicios />
      <Capacitacion />
      <SectorProductivo />
      <Sectores />
      <Diferencial />
      <Metodologia />
      <Proyectos />
      <CTA />
      <Contacto />
      <FooterSection />
    </div>
  );
}
