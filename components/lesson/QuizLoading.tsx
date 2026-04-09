"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { BrainCircuit, Sparkles, Activity, Loader2 } from 'lucide-react';

export const QuizLoading = () => (
  <div className="h-screen flex flex-col items-center justify-center bg-[#020609] gap-10 overflow-hidden relative">
    
    {/* --- LUXURY BACKGROUND AMBIENCE --- */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/[0.05] blur-[140px] rounded-full" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] [mask-image:radial-gradient(white,transparent_70%)]" />
    </div>

    {/* --- CENTRAL ANIMATED CORE --- */}
    <div className="relative z-10">
      {/* Outer Rotating Rings */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute inset-0 -m-8 border-2 border-dashed border-cyan-500/20 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute inset-0 -m-12 border border-white/5 rounded-full"
      />

      {/* Main Icon with Intense Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          filter: ["drop-shadow(0 0 20px rgba(6,182,212,0.3))", "drop-shadow(0 0 40px rgba(6,182,212,0.6))", "drop-shadow(0 0 20px rgba(6,182,212,0.3))"]
        }} 
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="relative bg-[#0a1116] p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
      >
        <BrainCircuit className="text-cyan-400" size={80} strokeWidth={1.5} />
        
        {/* Internal Pulse */}
        <motion.div 
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute inset-0 bg-cyan-400 rounded-[2.5rem] blur-2xl -z-10"
        />
      </motion.div>

      {/* Floating Sparkles around core */}
      <motion.div 
        animate={{ y: [-10, 10, -10], opacity: [0.2, 0.8, 0.2] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute -top-6 -right-6 text-cyan-300"
      >
        <Sparkles size={24} />
      </motion.div>
    </div>

    {/* --- TEXT CONTENT --- */}
    <div className="text-center space-y-4 z-10">
      <div className="flex items-center justify-center gap-3 text-cyan-500/60 font-black uppercase text-[10px] tracking-[0.4em] mb-2">
         <Activity size={14} className="animate-pulse" />
         Neural Link Initializing
      </div>
      
      <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
        Crafting Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">Unique Challenge.</span>
      </h3>
      
      <p className="text-slate-500 font-bold uppercase tracking-widest text-xs opacity-70 flex items-center justify-center gap-2">
        <Loader2 size={12} className="animate-spin text-cyan-500" />
        Synchronizing Real-Time AI Nodes...
      </p>
    </div>

    {/* --- SYSTEM LOG DECORATION --- */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-800 uppercase tracking-[0.6em] whitespace-nowrap">
       InterVexia Core Processing Unit // Protocol 4.0
    </div>
  </div>
);