"use client"
import React from 'react'
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Flame, Trophy, Zap, Activity } from 'lucide-react';

export const DashboardStats = ({ profile, completedCount, totalCount }: any) => {
  const completion = Math.round((completedCount / (totalCount || 1)) * 100);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <StatBox 
        label="Current Streak" 
        value={`${profile?.streak || 0} Days`} 
        icon={<Flame className="text-cyan-400" />} 
        progress={Math.min((profile?.streak || 0) * 10, 100)} 
        glowColor="rgba(6, 182, 212, 0.15)"
      />
      <StatBox 
        label="Total XP Earned" 
        value={`${profile?.xp || 0}`} 
        icon={<Trophy className="text-teal-400" />} 
        progress={Math.min((profile?.xp || 0) / 10, 100)} 
        glowColor="rgba(20, 184, 166, 0.15)"
      />
      <StatBox 
        label="Course Progress" 
        value={`${completion}%`} 
        icon={<Zap className="text-blue-400" />} 
        progress={completion} 
        glowColor="rgba(59, 130, 246, 0.15)"
      />
    </div>
  );
};

function StatBox({ label, value, icon, progress, glowColor }: any) {
  return (
    <Card className="relative border border-white/5 bg-[#0a1116]/40 backdrop-blur-3xl rounded-[2.5rem] p-8 overflow-hidden group transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      
      {/* --- LUXURY DECORATION --- */}
      {/* Background Glow Orb */}
      <div 
        className="absolute -right-4 -top-4 w-24 h-24 rounded-full blur-[50px] transition-all duration-500 group-hover:blur-[70px]" 
        style={{ backgroundColor: glowColor }}
      />
      
      {/* Subtle Grid Pattern inside card */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-500 shadow-inner">
            {React.cloneElement(icon, { size: 24, strokeWidth: 2.5 })}
          </div>
          <Activity size={16} className="text-slate-700 opacity-50 group-hover:text-cyan-500 transition-colors" />
        </div>

        <div className="space-y-1">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{label}</p>
          <h3 className="text-4xl font-black text-white tracking-tighter group-hover:text-cyan-400 transition-colors duration-500">
            {value}
          </h3>
        </div>

        {/* --- CUSTOM NEON PROGRESS BAR --- */}
        <div className="mt-8 space-y-3">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-600">
            <span>Status</span>
            <span className="text-cyan-500/60">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: `${progress}%` }} 
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full relative"
            >
              {/* Animated Glow Tip */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[4px] opacity-50" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hover Line Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-500 group-hover:w-full transition-all duration-700" />
    </Card>
  );
}