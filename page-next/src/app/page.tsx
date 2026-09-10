import Image from "next/image";
import HeaderSection from "@/components/Layout/Header";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
