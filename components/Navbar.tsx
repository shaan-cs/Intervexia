"use client"
import React, { useState, useEffect } from "react";
import { Rocket, Menu, X, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-4 md:px-10 ${scrolled ? "py-4" : "py-8"
        }`}
    >
      {/* --- FLOATING CONSOLE BOX --- */}
      <div
        className={`container mx-auto flex items-center justify-between transition-all duration-700 px-6 ${scrolled
            ? "max-w-5xl bg-[#020609]/60 backdrop-blur-xl border border-white/5 rounded-2xl py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            : "max-w-7xl bg-transparent py-0"
          }`}
      >

        {/* --- BRAND IDENTITY --- */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#00D2DF]/20 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-2 bg-[#020609] border border-[#00D2DF]/30 rounded-lg group-hover:border-[#00D2DF] transition-all duration-500">
              <Rocket className="w-5 h-5 text-[#00D2DF]" fill="currentColor" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter text-white leading-none">
              INTERVEXIA<span className="text-[#00D2DF]">.</span>
            </span>
            <span className="text-[7px] font-mono text-slate-500 tracking-[0.4em] uppercase mt-1 hidden sm:block">
              Secure_Terminal
            </span>
          </div>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 border-r border-white/5 pr-8">
            <NavLink href="#features" label="Capabilities" />
            <NavLink href="#how-it-works" label="Workflow" />
          </div>

          <Link href="/onboarding">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00D2DF] text-[#020609] px-6 h-10 text-[10px] font-black tracking-[0.15em] rounded-lg transition-all shadow-[0_0_20px_rgba(0,210,223,0.2)] hover:shadow-[#00D2DF]/40 flex items-center gap-2 uppercase"
            >
              <ShieldCheck size={14} />
              Enter_Workspace
            </motion.button>
          </Link>
        </nav>

        {/* --- MOBILE TOGGLE --- */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-[#00D2DF] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- MOBILE OVERLAY (System Style) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-[90%] left-4 right-4 bg-[#020609]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-40"
          >
            <div className="flex flex-col p-8 gap-6">
              <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between group">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#00D2DF]">01. INTERFACE</span>
                <div className="h-px w-12 bg-white/10 group-hover:bg-[#00D2DF]/40" />
              </Link>
              <Link href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between group">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#00D2DF]">02. PROTOCOL</span>
                <div className="h-px w-12 bg-white/10 group-hover:bg-[#00D2DF]/40" />
              </Link>
              <Link href="/onboarding" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#00D2DF] text-[#020609] h-14 rounded-xl font-black text-sm tracking-widest uppercase">
                  Initialize Session
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// NavLink Component with Technical Indicator
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative flex flex-col group py-1"
    >
      <span className="text-[10px] font-mono text-[#00D2DF] opacity-0 group-hover:opacity-100 transition-all duration-300 leading-none mb-1">
        //
      </span>
      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors">
        {label}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#00D2DF] to-transparent transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}