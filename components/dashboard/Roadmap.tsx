"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, CheckCircle2, Play, Lock, Sparkles, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export const DashboardHero = ({ completedCount, handleHeroClick }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative rounded-[2.5rem] p-[1px] overflow-hidden mb-16 bg-gradient-to-r from-cyan-500/30 via-transparent to-white/5 shadow-2xl"
  >
    <div className="relative rounded-[2.4rem] bg-[#0a1116] p-8 lg:px-12 lg:py-10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
      
      {/* --- BACKGROUND ASSETS (Moved to BG UI Position) --- */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 pointer-events-none opacity-20 z-0">
        <div className="relative">
          {/* Animated Tech Rings */}
          <div className="absolute inset-0 scale-150 border border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <BookOpen size={280} className="text-cyan-500/20 rotate-12" strokeWidth={0.5} />
          <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-400/40 blur-[2px]" size={80} />
        </div>
      </div>

      {/* Luxury Ambience Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.05),transparent)] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />

      {/* --- LEFT CONTENT (Text & Action) --- */}
      <div className="relative z-10 flex-1 space-y-6">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
          <Sparkles size={12} className="mr-2" />
          <span className="text-[10px] font-black uppercase tracking-[0.25em] whitespace-nowrap">
            {completedCount === 5 ? "Status: Industry Ready" : `Interview Readiness: Level ${completedCount + 1}`}
          </span>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-4xl md:text-4xl  tracking-tighter text-white leading-none">
            Continue your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300">AI Ascension.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-bold uppercase tracking-widest opacity-80 max-w-xl">
            Synchronize with the protocol and upgrade your technical parameters.
          </p>
        </div>

        <Button 
          onClick={handleHeroClick}
          className="h-14 px-8 text-base font-black bg-cyan-500 hover:bg-cyan-400 text-[#020609] rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/60 transition-all duration-500 group"
        >
          Resume Console <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* --- RIGHT CONTENT (Visible Stats/Badge) --- */}
      <div className="relative z-10 hidden md:block">
        <div className="bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-3xl text-center min-w-[160px]">
          <p className="text-cyan-500 text-3xl font-black tracking-tighter">{completedCount}/5</p>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Modules Sync</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export const RoadmapNode = ({ id, title, status, index, isBoss }: any) => {
  const router = useRouter();
  const side = index % 2 === 0 ? 'left' : 'right';
  const isLocked = status === 'locked';

  const handleNodeClick = () => {
    if (!isLocked) {
      localStorage.setItem('activeNodeId', id);
      router.push('/dashboard/lesson');
    }
  };

  return (
    <div 
      onClick={handleNodeClick} 
      className={`block w-full pointer-events-auto ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <motion.div 
        initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }} 
        className={`flex items-center gap-12 w-full ${side === 'left' ? 'flex-row ml-[50%]' : 'flex-row-reverse mr-[50%]'}`}
      >
        {/* --- NODE DESIGN --- */}
        <motion.div 
          whileHover={!isLocked ? { scale: 1.1, rotate: isBoss ? 50 : 0 } : {}} 
          className={`
            relative w-20 h-20 flex items-center justify-center z-10 transition-all duration-700
            ${isBoss ? 'rotate-45 rounded-2xl border-4 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.3)] bg-[#020609]' : 'rounded-[2rem]'}
            ${status === 'completed' ? 'bg-teal-500/90 text-[#020609] shadow-[0_0_30px_rgba(20,184,166,0.4)]' : 
              status === 'current' ? 'bg-cyan-500 text-[#020609] shadow-[0_0_50px_rgba(6,182,212,0.6)]' : 
              'bg-white/5 border border-white/10 text-slate-700'}
          `}
        >
          {status === 'current' && (
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute inset-0 bg-cyan-400 rounded-full blur-3xl -z-10" 
            />
          )}

          <div className={isBoss ? "-rotate-45" : ""}>
            {status === 'completed' ? <CheckCircle2 size={36} strokeWidth={2.5} /> : 
             status === 'current' ? <Play size={36} fill="currentColor" strokeWidth={2.5} /> : 
             <Lock size={30} strokeWidth={2.5} />}
          </div>
        </motion.div>

        {/* --- NODE TEXT --- */}
        <div className={`max-w-[200px] ${side === 'left' ? 'text-left' : 'text-right'}`}>
          <h4 className={`text-xl font-black leading-[1.1] uppercase tracking-tighter transition-all duration-500 ${isLocked ? 'text-slate-800' : 'text-white group-hover:text-cyan-400'}`}>
            {title}
          </h4>
          <p className={`text-[9px] font-black mt-2 uppercase tracking-[0.25em] ${status === 'completed' ? 'text-teal-400' : status === 'current' ? 'text-cyan-400' : 'text-slate-700'}`}>
            {status === 'completed' ? 'Success' : isLocked ? 'Locked' : 'Access'}
          </p>
        </div>
      </motion.div>
    </div>
  );
};