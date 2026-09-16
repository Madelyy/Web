import Image from "next/image";
import HeaderSection from "@/components/Layout/Header";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CommitmentSection from "@/components/CommitmentSection";
import ValueSection from "@/components/ValueSection";
import ServiceSection from "@/components/ServicesSection";
import TrainingSection from "@/components/TrainingSection";
import ProductiveSection from "@/components/ProductiveSectorSection";
import SectorsSection from "@/components/SectorsSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import MethodologySection from "@/components/MethodologySection";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/Layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen cursor-default">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <CommitmentSection />
      <ValueSection />
      <ServiceSection />
      <TrainingSection />
      <ProductiveSection />
      <SectorsSection />
      <DifferentiatorSection />
      <MethodologySection />
      <ProjectsSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
