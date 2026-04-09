"use client"
import React from 'react'
import { motion } from "framer-motion"
import { Activity } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-4 border-t border-white/5 bg-[#04090d]/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-28 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[#00D2DF] text-[9px] font-black uppercase tracking-[0.4em] mb-2 shadow-inner">
              <Activity size={12} className="animate-pulse" /> Operational Framework
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">
              The Preparation <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D2DF] via-white to-[#00D2DF]">Pathway.</span>
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em] opacity-80 max-w-lg mx-auto leading-relaxed">
              A systematic sequence designed to build <span className="text-white">technical competence</span> and interviewing fluency.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#00D2DF]/40 to-transparent" />
              <div className="relative"><div className="w-2 h-2 rounded-full bg-[#00D2DF] shadow-[0_0_15px_#00D2DF]" /></div>
              <div className="h-[1px] w-24 bg-gradient-to-l from-transparent via-[#00D2DF]/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <StepCard num="01" title="Select Role" desc="Identify your target technical domain and stack." />
          <StepCard num="02" title="Practice Nodes" desc="Solve structured questions designed for your level." delay={0.1} />
          <StepCard num="03" title="Simulate Rounds" desc="Experience guided sessions to test your readiness." delay={0.2} />
          <StepCard num="04" title="Refine Profile" desc="Use feedback to improve your technical communication." delay={0.3} />
        </div>
      </div>
    </section>
  )
}

function StepCard({ num, title, desc, delay = 0 }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.8 }} viewport={{ once: true }}
      className="relative group p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-[#00D2DF]/30 transition-all duration-700 hover:bg-white/[0.03] overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity"><div className="w-1 h-1 rounded-full bg-[#00D2DF]" /></div>
      <div className="flex items-center gap-4 mb-10">
        <div className="flex flex-col">
          <span className="text-[8px] font-black text-slate-600 uppercase tracking-[0.4em] mb-1">Phase</span>
          <span className="text-2xl font-black text-[#00D2DF] tracking-tighter">{num}</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-[#00D2DF]/20 via-white/5 to-transparent" />
      </div>
      <div className="relative z-10 space-y-4">
        <h3 className="text-xl font-black text-[#f5f5f5] uppercase tracking-tight">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed font-medium">{desc}</p>
      </div>
    </motion.div>
  )
}