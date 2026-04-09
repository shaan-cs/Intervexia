"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Terminal, ArrowRight } from "lucide-react"

export default function FooterCTA() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#020609]">
      {/* --- BACKGROUND ARCHITECTURE (UNCHANGED) --- */}
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#00D2DF]/10 blur-[120px] rounded-full -z-10" />

      {/* --- CONTENT CONTAINER --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }} 
        className="container mx-auto px-4 max-w-4xl relative z-10 flex flex-col items-center text-center"
      >
        {/* Status Badge - Fixed Centering */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute h-full w-full rounded-full bg-[#00D2DF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D2DF]"></span>
          </span>
          <span className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase">
            System.Ready(v2.0.4)
          </span>
        </div>

        {/* Heading - Refined Spacing */}
        <h2 className="text-4xl md:text-6xl font-black text-[#f5f5f5] mb-8 tracking-tighter leading-[1.05] max-w-2xl">
          Refine your workflow <br />
          <span className="text-slate-500 font-light italic">with precision.</span>
        </h2>

        {/* Subtext - Improved Readability */}
        <p className="text-base md:text-lg text-slate-400 mb-12 max-w-lg leading-relaxed font-light">
          Experience a structured environment designed for technical clarity. <br className="hidden md:block" />
          Optimized for <span className="text-[#00D2DF]/90 font-medium">secure deployment</span>.
        </p>

        {/* Button Wrapper - Forces Perfect Center */}
        <div className="flex justify-center items-center w-full">
          <Link href="/onboarding" className="block">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 210, 223, 0.2)" }} 
              whileTap={{ scale: 0.95 }} 
              className="group relative flex items-center justify-center gap-3 bg-[#00D2DF] text-[#020609] px-10 h-12 text-xs font-black tracking-[0.1em] rounded-xl transition-all duration-500 uppercase"
            >
              <Terminal size={16} className="transition-transform group-hover:rotate-12" />
              OPEN CONSOLE 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {/* Footnote - Subtly aligned */}
        <div className="mt-12 flex items-center gap-4 opacity-20">
          <div className="h-px w-8 bg-white/20" />
          <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-white">
            Access Granted
          </p>
          <div className="h-px w-8 bg-white/20" />
        </div>

      </motion.div>
    </section>
  )
}