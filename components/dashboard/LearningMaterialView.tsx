"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { learningRegistry } from '@/data/learning/index'
import { BookOpen, Code, Lightbulb, Terminal, Layers, Sparkles } from 'lucide-react'

export const LearningMaterialView = ({ role }: { role: string }) => {
  const content = learningRegistry[role] || [];

  return (
    <div className="max-w-6xl mx-auto pb-24 space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      
      {/* --- HEADER AREA --- */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-[0.2em]">
          <Sparkles size={14} /> Knowledge Protocol
        </div>
        <h2 className="text-5xl md:text-6xl tracking-tighter text-white leading-none">
          {role} <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">Playbook.</span>
        </h2>
        <p className="text-xl text-slate-400 font-medium max-w-3xl leading-relaxed opacity-80">
          The ultimate strategic guide to mastering <span className="text-white">{role}</span> architectures, theory, and real-world execution.
        </p>
      </div>

      {/* --- CHAPTERS LOGIC --- */}
      <div className="space-y-40">
        {content.map((module: any, idx: number) => (
          <div key={module.id} className="relative group">
            
            {/* Massive Ghost Index Badge */}
            <div className="absolute -left-20 -top-12 text-[12rem] font-black text-cyan-500 opacity-[0.03] select-none hidden xl:block group-hover:opacity-[0.05] transition-opacity duration-700">
              0{idx + 1}
            </div>

            <div className="space-y-16 relative z-10">
              {/* Module Title Section */}
              <div className="space-y-4 border-l-4 border-cyan-500/30 pl-8">
                <h3 className="text-4xl font-black text-white tracking-tight flex items-center gap-4">
                  <span className="text-cyan-500 text-2xl font-mono opacity-50">0{idx + 1}.</span>
                  {module.title}
                </h3>
                <p className="text-lg text-slate-500 font-bold uppercase tracking-widest">{module.content}</p>
              </div>

              {module.chapters.map((chapter: any, cIdx: number) => (
                <div key={cIdx} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                  
                  {/* LEFT SIDE: THEORY & PRACTICAL (Glassmorphism) */}
                  <div className="flex flex-col gap-8">
                    {/* Theory Card */}
                    <div className="flex-1 bg-[#0a1116]/40 backdrop-blur-3xl border border-white/5 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group/card">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-transparent pointer-events-none" />
                      <div className="flex items-center gap-3 text-cyan-400 font-black uppercase text-[10px] tracking-[0.3em] mb-6">
                        <Layers size={18} className="text-cyan-500" /> Executive Theory
                      </div>
                      <p className="text-slate-300 leading-relaxed font-medium text-lg italic">
                        "{chapter.theory}"
                      </p>
                    </div>

                    {/* Practical Card */}
                    <div className="bg-cyan-500/5 border border-cyan-500/10 p-10 rounded-[2.5rem] shadow-inner">
                      <div className="flex items-center gap-3 text-teal-400 font-black uppercase text-[10px] tracking-[0.3em] mb-6">
                        <Lightbulb size={18} className="text-teal-500" /> Field Deployment
                      </div>
                      <p className="text-slate-400 leading-relaxed font-medium text-md opacity-90">
                        {chapter.practical}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT SIDE: PREMIUM CODE TERMINAL */}
                  <div className="bg-[#020609] border border-white/10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden group/terminal">
                    {/* Terminal Header */}
                    <div className="bg-white/[0.03] px-8 py-5 flex items-center justify-between border-b border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/40" />
                          <div className="w-3 h-3 rounded-full bg-amber-500/40" />
                          <div className="w-3 h-3 rounded-full bg-green-500/40" />
                        </div>
                        <div className="h-4 w-px bg-white/10 mx-2" />
                        <div className="flex items-center gap-2">
                          <Terminal size={14} className="text-slate-500" />
                          <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest">Source_Console.exe</span>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-md bg-white/5 text-slate-500 text-[9px] font-black uppercase tracking-tighter">
                        UTF-8
                      </div>
                    </div>
                    
                    {/* Code Content */}
                    <div className="p-10 flex-1 relative bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent)]">
                       <Code className="absolute top-8 right-8 text-white/5 w-32 h-32 -rotate-12 pointer-events-none" />
                       <pre className="text-cyan-400/90 font-mono text-sm leading-7 selection:bg-cyan-500/30 selection:text-white">
                        <code>{chapter.code}</code>
                      </pre>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Decoration */}
      <div className="pt-20 text-center">
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mx-auto mb-8" />
        <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em]">End of Transmission</p>
      </div>
    </div>
  )
}