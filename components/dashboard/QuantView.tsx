"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { quantQuestions } from '@/data/quantAptitude'
import { CheckCircle2, Lightbulb, ChevronDown, ChevronUp, Hash, Sparkles, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const QuantView = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto space-y-20 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      
      {/* --- PREMIUM HEADER --- */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-[0.2em]">
          <Target size={14} /> Cognitive Assessment
        </div>
        <h2 className="text-5xl md:text-6xl tracking-tighter text-white">
          Quant<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">{" "}&{" "}</span>Aptitude
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">Aptitude.</span> */}
        </h2>
        <p className="text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed opacity-80">
          Handpicked logical challenges and mathematical protocols designed for <span className="text-white">Tier-1 engineering roles.</span>
        </p>
      </div>

      {/* --- CATEGORIES LOOP --- */}
      {quantQuestions.map((category, catIdx) => (
        <div key={catIdx} className="space-y-10">
          <div className="flex items-center gap-6">
            <h3 className="text-sm font-black text-cyan-500 uppercase tracking-[0.3em] whitespace-nowrap">
              {category.category}
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </div>

          <div className="grid gap-6">
            {category.questions.map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-[#0a1116]/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 shadow-2xl hover:border-cyan-500/20 transition-all duration-500"
              >
                {/* Ghost Background ID */}
                <div className="absolute right-10 top-6 text-7xl font-black text-cyan-500 opacity-[0.03] select-none group-hover:opacity-[0.06] transition-opacity">
                  {item.id < 10 ? `0${item.id}` : item.id}
                </div>

                <div className="flex justify-between items-start gap-8 relative z-10">
                  <div className="space-y-8 flex-1">
                    <div className="flex items-center gap-2 text-cyan-500/50 font-black text-[10px] uppercase tracking-[0.2em]">
                      <Hash size={14} /> Challenge Instance {item.id}
                    </div>
                    
                    <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                      {item.q}
                    </h4>
                    
                    {/* Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.options.map((opt, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] text-slate-300 font-bold hover:bg-white/[0.05] transition-colors group/opt"
                        >
                          <span className="w-10 h-10 rounded-xl bg-[#020609] border border-white/10 flex items-center justify-center text-xs font-black text-cyan-400 group-hover/opt:border-cyan-500/50 transition-all shadow-inner">
                            {String.fromCharCode(65+i)}
                          </span>
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Solution Trigger Button */}
                  <Button 
                    variant="ghost" 
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className={`rounded-2xl h-16 w-16 transition-all duration-500 ${
                      expandedId === item.id 
                      ? 'bg-cyan-500 text-[#020609] shadow-[0_0_30px_rgba(6,182,212,0.5)]' 
                      : 'bg-white/5 text-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400'
                    }`}
                  >
                    {expandedId === item.id ? <ChevronUp size={28} /> : <Lightbulb size={28} />}
                  </Button>
                </div>

                {/* --- SOLUTION PANEL (Luxury Reveal) --- */}
                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-10 pt-10 border-t border-white/5">
                        <div className="bg-cyan-500/[0.03] border border-cyan-500/10 p-10 rounded-[2.5rem] space-y-6 relative overflow-hidden">
                          {/* Decorative inner glow */}
                          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[80px] rounded-full" />
                          
                          <div className="flex items-center gap-3 text-cyan-400 font-black italic text-xl">
                            <CheckCircle2 className="text-cyan-500" size={24} /> 
                            Correct Answer: <span className="text-white ml-2">{item.correct}</span>
                          </div>
                          
                          <div className="space-y-4">
                            <p className="font-black text-cyan-500/60 uppercase text-[10px] tracking-[0.3em]">
                              Logical Decomposition
                            </p>
                            <p className="text-slate-400 font-medium leading-relaxed text-lg italic">
                              {item.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}