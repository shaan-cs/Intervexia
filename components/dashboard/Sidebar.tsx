"use client"
import React from 'react'
import { LayoutDashboard, BookOpen, LogOut, Trash2, Zap, BarChart3, Activity } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

export const DashboardSidebar = ({ activeSection, scrollToSection, handleLogout, handleDeleteAccount }: any) => {
  return (
    <aside className="hidden lg:flex w-80 bg-gradient-to-b from-[#0a1116] to-[000] border-r border-white/[0.05] flex-col p-8 sticky top-0 h-screen z-50">
      
      {/* --- PREMIUM BRANDING --- */}
      <div className="flex items-center gap-4 mb-16 relative group cursor-pointer">
        <div className="relative">
          <div className="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-transform duration-500 group-hover:rotate-[360deg]">
            <Zap className="text-[#020609] w-6 h-6" fill="currentColor" />
          </div>
          {/* Subtle logo pulse */}
          <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tighter text-white leading-none">
            InterVexia<span className="text-cyan-500">.</span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mt-1">Core Console</span>
        </div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="flex-1 space-y-4">
        <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-6 px-4">Main Protocol</div>
        
        <SidebarLink 
          icon={<LayoutDashboard size={20} />} 
          label="Overview" 
          active={activeSection === 'overview'} 
          onClick={() => scrollToSection('overview')} 
        />

        <SidebarLink 
          icon={<BookOpen size={20} />} 
          label="Learning Material" 
          active={activeSection === 'learning-material'} 
          onClick={() => scrollToSection('learning-material')} 
        />

        <SidebarLink 
          icon={<BarChart3 size={20} />} 
          label="Quant Aptitude" 
          active={activeSection === 'quant-aptitude'} 
          onClick={() => scrollToSection('quant-aptitude')} 
        />
      </nav>

      {/* --- FOOTER UTILITIES --- */}
      <div className="pt-8 border-t border-white/[0.05] space-y-3">
        <div className="px-4 flex items-center gap-2 mb-4 text-slate-600">
           <Activity size={14} className="animate-pulse text-cyan-500/50" />
           <span className="text-[9px] font-black uppercase tracking-widest">System Online</span>
        </div>

        <Button 
          variant="ghost" 
          className="w-full justify-start gap-4 text-slate-500 hover:text-white hover:bg-white/[0.03] rounded-2xl h-14 transition-all duration-300 font-black uppercase text-[11px] tracking-widest group" 
          onClick={handleLogout}
        >
          <LogOut size={18} className="group-hover:text-cyan-400 transition-colors" /> Logout
        </Button>

        <Button 
          variant="ghost" 
          className="w-full justify-start gap-4 text-red-500/40 hover:text-red-500 hover:bg-red-500/5 rounded-2xl h-14 transition-all duration-300 font-black uppercase text-[11px] tracking-widest group" 
          onClick={handleDeleteAccount}
        >
          <Trash2 size={18} className="group-hover:scale-110 transition-transform" /> Terminate Account
        </Button>
      </div>

      {/* Vertical Ambient Glow */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
    </aside>
  );
};

function SidebarLink({ icon, label, active, onClick }: any) {
  return (
    <div 
      onClick={onClick} 
      className={`group relative flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden ${
        active ? 'text-[#020609]' : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]'
      }`}
    >
      <AnimatePresence>
        {active && (
          <>
            {/* Main Background Pill */}
            <motion.div 
              layoutId="sidebar-pill" 
              className="absolute inset-0 bg-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)]" 
              initial={{ borderRadius: 16 }} 
              transition={{ type: 'spring', stiffness: 400, damping: 35 }} 
            />
            {/* White/Cyan Highlight Line on left */}
            <motion.div 
              layoutId="sidebar-line"
              className="absolute left-0 top-2 bottom-2 w-1 bg-white rounded-r-full z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          </>
        )}
      </AnimatePresence>

      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        {React.cloneElement(icon, { strokeWidth: active ? 2.5 : 2 })}
      </span>
      <span className={`relative z-10 font-black tracking-[0.1em] text-[11px] uppercase transition-all ${active ? 'opacity-100' : 'opacity-80'}`}>
        {label}
      </span>
      
      {/* Subtle hover glow for inactive links */}
      {!active && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-cyan-500 group-hover:h-1/2 transition-all duration-300 rounded-r-full" />
      )}
    </div>
  );
}