"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, LayoutDashboard, Sparkles, Trophy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export const LevelCleared = ({ nextId, onContinue }: any) => {
  const router = useRouter();
  const electricCyan = "#00D2DF";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020609] px-6 py-12 relative overflow-hidden">
      
      {/* --- CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D2DF]/10 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }} 
        animate={{ scale: 1, opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center relative z-10 max-w-3xl w-full flex flex-col items-center justify-center"
      >
        {/* --- SUCCESS ICON CONSOLE --- */}
        <div className="relative w-fit mx-auto mb-10">
          <motion.div 
            initial={{ rotate: -10, scale: 0.5 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative z-10 w-32 h-32 bg-[#00D2DF] rounded-[2.5rem] flex items-center justify-center shadow-[0_0_50px_rgba(0,210,223,0.5)]"
          >
            <ShieldCheck size={64} className="text-[#020609]" strokeWidth={2.5} />
          </motion.div>
          
          {/* Decorative Rings */}
          <div className="absolute inset-0 -m-6 border border-[#00D2DF]/20 rounded-[3rem] animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-0 -m-12 border border-white/5 rounded-[4rem] animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Floating Accents */}
          <Sparkles className="absolute -top-4 -right-8 text-[#00D2DF] animate-bounce" size={32} />
          <Trophy className="absolute -bottom-4 -left-8 text-yellow-500/50" size={32} />
        </div>

        {/* --- TEXT CONTENT --- */}
        <div className="space-y-6 mb-14 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D2DF]/5 border border-[#00D2DF]/20 text-[#00D2DF] text-[10px] font-black uppercase tracking-[0.4em]">
            Memory Sync Complete
          </div>
          
          {/* ✅ FIXED HEADING */}
          <h2 className="text-4xl md:text-7xl font-black tracking-tight text-white italic leading-tight text-center whitespace-nowrap">
            PROTOCOL{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D2DF] via-white to-[#00D2DF]">
              MASTERED.
            </span>
          </h2>
          
          {/* ✅ BETTER SPACING + CENTER */}
          <p className="text-slate-500 text-sm md:text-lg font-bold uppercase tracking-[0.2em] max-w-xl text-center leading-relaxed">
            Progress successfully pushed to{" "}
            <span className="text-white">Cloud Infrastructure.</span>{" "}
            XP parameters updated.
          </p>
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="flex flex-col items-center gap-6 w-full">
          <Button 
            onClick={onContinue} 
            style={{ 
              backgroundColor: electricCyan,
              boxShadow: `0 0 40px rgba(0, 210, 223, 0.4)`
            }}
            className="w-full max-w-md h-20 text-xl md:text-2xl font-black text-[#020609] rounded-3xl hover:scale-105 active:scale-95 transition-all duration-500 group"
          >
            <span className="flex items-center gap-3">
              {nextId?.includes('node-6') ? "UNLOCK FINAL REWARD" : "INITIALIZE NEXT PHASE"} 
              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </span>
          </Button>

          <button 
            onClick={() => router.push('/dashboard')}
            className="flex items-center gap-2 text-slate-500 hover:text-white font-black uppercase text-[10px] tracking-[0.4em] transition-colors duration-300 py-4"
          >
            <LayoutDashboard size={14} /> Return to Neural Console
          </button>
        </div>
      </motion.div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D2DF]/20 to-transparent" />
    </div>
  );
};