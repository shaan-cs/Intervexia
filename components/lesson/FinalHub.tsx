"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { Trophy, Zap, Download, LayoutDashboard, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export const FinalHub = ({ generatePDF, userRole }: { generatePDF: () => void, userRole: string }) => {
  const router = useRouter();
  const electricCyan = "#00D2DF";

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (generatePDF) {
      generatePDF();
    } else {
      console.error("PDF Engine not initialized in parent.");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#020609] text-white p-6 relative overflow-hidden selection:bg-[#00D2DF]/30">
      
      {/* --- CINEMATIC AMBIENCE --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00D2DF]/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center space-y-8 relative z-10 max-w-2xl"
      >

        {/* --- MASTERY CONSOLE --- */}
        <div className="relative inline-block">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute inset-0 -m-8 border border-[#00D2DF]/10 rounded-full"
          />
          
          <div className="relative z-10 p-8 bg-white/[0.01] border border-white/5 rounded-[3rem] backdrop-blur-2xl shadow-2xl">
            {/* ↓ Reduced size */}
            <Trophy size={80} className="text-[#00D2DF] drop-shadow-[0_0_30px_rgba(0,210,223,0.4)]" strokeWidth={1} />
            
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }} 
              transition={{ repeat: Infinity, duration: 4 }} 
              className="absolute -top-2 -right-2 bg-[#020609] p-2 rounded-xl border border-[#00D2DF]/20"
            >
              <Zap size={24} className="text-[#00D2DF]" fill="currentColor" />
            </motion.div>
          </div>
        </div>

        {/* --- TEXT CONTENT --- */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2DF]/5 border border-[#00D2DF]/10 text-[#00D2DF] text-[9px] font-black uppercase tracking-[0.4em] mx-auto">
            <Sparkles size={10} /> Neural Ascension Complete
          </div>
          
          {/* ↓ Single line, no italic, no uppercase, reduced size */}
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-white">
            Mastery Unlocked.
          </h1>
          
          <p className="text-slate-500 text-sm md:text-base font-bold italic max-w-md mx-auto leading-relaxed opacity-80">
            Node Decryption Successful. Your performance metrics for <span className="text-white">{userRole}</span> are synchronized and verified.
          </p>
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="flex flex-col gap-4 max-w-xs mx-auto pt-4">
          <Button 
            onClick={handleDownload} 
            className="h-14 bg-[#00D2DF] hover:bg-[#00e6f5] text-[#020609] text-sm font-black rounded-2xl shadow-[0_10px_30px_rgba(0,210,223,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden"
          >
            <Download size={18} className="mr-2 group-hover:translate-y-0.5 transition-transform" /> 
            DOWNLOAD_REPORT.PDF
          </Button>

          <button 
            onClick={() => router.push('/dashboard')}
            className="flex items-center justify-center gap-2 text-slate-600 hover:text-white font-black uppercase text-[8px] tracking-[0.4em] transition-all duration-300 py-2 group"
          >
            <LayoutDashboard size={12} className="group-hover:rotate-12 transition-transform" /> 
            Return to Dashboard
          </button>
        </div>
      </motion.div>

      {/* --- FOOTER BADGE --- */}
      <div className="absolute bottom-8 left-8 flex items-center gap-3 opacity-30 select-none">
        <ShieldCheck className="text-[#00D2DF]" size={16} />
        <span className="text-[8px] font-mono font-bold uppercase tracking-[0.3em] text-white">
          Verified Tier-1 Proficiency
        </span>
      </div>
    </div>
  );
};