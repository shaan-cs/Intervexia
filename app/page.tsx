
"use client"
import React from 'react'
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import FooterCTA from "@/components/landing/FooterCTA";
import MainFooter from "@/components/landing/MainFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020609] text-white selection:bg-[#00D2DF]/20 selection:text-[#00D2DF] overflow-hidden font-sans">
      <Navbar />

      {/* --- SHARED BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[50%] bg-[#00D2DF]/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] [mask-image:radial-gradient(white,transparent_75%)]" />
      </div>

      <HeroSection />
      <HowItWorks />
      <Features />
      <FooterCTA />
      <MainFooter />
    </main>
  );
}