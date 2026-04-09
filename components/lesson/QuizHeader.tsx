"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { X, Zap, Activity } from 'lucide-react';

export const QuizHeader = ({ current, total, onExit }: any) => {
  const progressPercent = ((current + 1) / total) * 100;

  return (
    <div className="max-w-5xl w-full mx-auto px-6 pt-10 flex items-center gap-8 relative z-50">
      
      {/* --- PREMIUM EXIT BUTTON --- */}
      <button 
        onClick={onExit} 
        className="group relative p-3 bg-white/5 border border-white/5 rounded-2xl hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-500 shadow-inner"
      >
        <X size={24} className="text-slate-500 group-hover:text-red-500 group-hover:rotate-90 transition-all duration-500" />
        {/* Subtle hover glow */}
        <div className="absolute inset-0 bg-red-500 blur-xl opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl" />
      </button>

      {/* --- NEON PROGRESS TRACKER --- */}
      <div className="flex-1 relative">
        {/* Track Label */}
        <div className="absolute -top-6 left-0 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">
          <Activity size={10} className="text-cyan-500/50" />
          Neural Progress Sync
        </div>

        <div className="h-3 bg-[#0a1116] rounded-full overflow-hidden border border-white/5 p-[1.5px] shadow-inner">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-teal-400 rounded-full relative shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          >
            {/* Animated Light Tip (The Glow) */}
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-white blur-[6px] opacity-40" />
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-30" />
          </motion.div>
        </div>
      </div>

      {/* --- TASK READOUT --- */}
      <div className="hidden sm:flex items-center gap-4 px-6 py-3 bg-[#0a1116]/60 border border-white/5 rounded-2xl backdrop-blur-xl">
        <div className="relative">
          <Zap size={20} className="text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]" fill="currentColor" />
          <div className="absolute inset-0 bg-cyan-400 blur-md opacity-20" />
        </div>
        
        <div className="flex flex-col">
          <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Instance</span>
          <span className="font-black text-white text-sm tracking-tighter">
            {current + 1} <span className="text-slate-700 mx-1">/</span> {total}
          </span>
        </div>
      </div>

    </div>
  );
};