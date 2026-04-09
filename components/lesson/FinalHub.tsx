"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { Trophy, Zap, Download, LayoutDashboard, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export const FinalHub = ({ generatePDF, userRole }: any) => {
  const router = useRouter();
  const electricCyan = "#00D2DF";

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#020609] text-white p-10 relative overflow-hidden">
      
      {/* --- CINEMATIC AMBIENCE --- */}
      <div className="absolute inset-0 z-0">
        {/* Central Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00D2DF]/10 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] [mask-image:radial-gradient(white,transparent_80%)]" />
        
        {/* Floating Particles */}
        <motion.div 
          animate={{ y: [0, -100], opacity: [0, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/4 w-1 h-20 bg-gradient-to-t from-transparent via-[#00D2DF]/20 to-transparent"
        />
        <motion.div 
          animate={{ y: [0, -150], opacity: [0, 0.3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-0 right-1/4 w-1 h-32 bg-gradient-to-t from-transparent via-blue-500/20 to-transparent"
        />
      </div>

      <motion.div 
        initial={{ y: 40, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center space-y-10 relative z-10 max-w-3xl"
      >
        {/* --- THE MASTERY TROPHY CONSOLE --- */}
        <div className="relative inline-block">
          {/* Rotating Luxury Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute inset-0 -m-12 border border-[#00D2DF]/10 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute inset-0 -m-8 border-2 border-dashed border-[#00D2DF]/20 rounded-full"
          />
          
          <div className="relative z-10 p-10 bg-white/[0.02] border border-white/5 rounded-[4rem] backdrop-blur-3xl shadow-2xl">
            <Trophy size={140} className="text-[#00D2DF] drop-shadow-[0_0_40px_rgba(0,210,223,0.6)]" strokeWidth={1.5} />
            
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} 
              transition={{ repeat: Infinity, duration: 3 }} 
              className="absolute -top-4 -right-4 bg-[#020609] p-3 rounded-2xl border border-[#00D2DF]/30 shadow-lg"
            >
              <Zap size={32} className="text-[#00D2DF]" fill="currentColor" />
            </motion.div>
          </div>
        </div>

        {/* --- TEXT CONTENT --- */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D2DF]/5 border border-[#00D2DF]/20 text-[#00D2DF] text-[10px] font-black uppercase tracking-[0.5em] mx-auto">
            <Sparkles size={12} /> Neural Ascension Complete
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none text-white">
            MASTERY <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D2DF] via-white to-teal-500">UNLOCKED.</span>
          </h1>
          
          <p className="text-slate-500 text-lg md:text-xl font-bold italic max-w-xl mx-auto leading-relaxed">
            Congratulations. You have successfully decrypted all <span className="text-white">5 levels of difficulty</span>. 
            Your performance metrics are now ready for final synchronization.
          </p>
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="flex flex-col gap-6 max-w-sm mx-auto">
          <Button 
            onClick={generatePDF} 
            style={{ 
              backgroundColor: electricCyan,
              boxShadow: `0 0 40px rgba(0, 210, 223, 0.4)`
            }}
            className="h-20 text-[#020609] text-2xl font-black rounded-[2rem] hover:scale-105 active:scale-95 transition-all duration-500 group relative overflow-hidden"
          >
            <Download className="mr-3 group-hover:translate-y-1 transition-transform" /> 
            GET MY REPORT
          </Button>

          <button 
            onClick={() => router.push('/dashboard')}
            className="flex items-center justify-center gap-2 text-slate-600 hover:text-white font-black uppercase text-[10px] tracking-[0.5em] transition-all duration-300 py-4 group"
          >
            <LayoutDashboard size={14} className="group-hover:rotate-12 transition-transform" /> 
            Return to Dashboard
          </button>
        </div>
      </motion.div>

      {/* --- FOOTER BADGE --- */}
      <div className="absolute bottom-10 left-10 flex items-center gap-3 opacity-20">
        <ShieldCheck className="text-[#00D2DF]" size={20} />
        <span className="text-[10px] font-black uppercase tracking-widest text-white">Verified Tier-1 Proficiency</span>
      </div>
    </div>
  );
};