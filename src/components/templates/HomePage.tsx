import React from "react";
import Header from "../organisms/Header";
import HeroSection from "../organisms/HeroSection";
import ServicesSection from "../organisms/ServicesSection";
import PortfolioSection from "../organisms/PortfolioSection";
import ContactSection from "../organisms/ContactSection";
import Footer from "../organisms/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header currentPath="/" />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
