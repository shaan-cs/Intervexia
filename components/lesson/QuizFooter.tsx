"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface QuizFooterProps {
  isCorrect: boolean | null;
  explanation?: string;
  onCheck: () => void;
  onNext: () => void;
  selected: number | null;
}

export const QuizFooter = ({ isCorrect, explanation, onCheck, onNext, selected }: QuizFooterProps) => {
  // Theme Color Constant
  const electricCyan = "#00D2DF";

  return (
    <footer className={`relative p-8 lg:p-12 border-t transition-all duration-700 overflow-hidden ${
      isCorrect === true ? 'bg-[#00D2DF]/10 border-[#00D2DF]/30' : 
      isCorrect === false ? 'bg-red-950/20 border-red-500/30' : 
      'bg-[#0a1116]/90 border-white/5 backdrop-blur-3xl'
    }`}>
      
      {/* --- DYNAMIC BACKGROUND GLOW (Matching Exact Theme) --- */}
      <AnimatePresence>
        {isCorrect !== null && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-40 blur-[120px] -z-10 ${
              isCorrect ? 'bg-[#00D2DF]/20' : 'bg-red-500/20'
            }`}
          />
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {isCorrect === null ? (
          // --- DEFAULT STATE ---
          <>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#00D2DF]/70 font-black uppercase text-[10px] tracking-[0.3em]">
                <Sparkles size={12} /> Optimization Required
              </div>
              <p className="text-slate-400 font-bold italic text-sm tracking-tight">
                Analyze carefully. Accuracy is the key to <span className="text-white font-black">Elite Rankings.</span>
              </p>
            </div>

            <Button 
              onClick={onCheck} 
              disabled={selected === null} 
              style={{ 
                backgroundColor: selected !== null ? electricCyan : 'rgba(255,255,255,0.05)',
                boxShadow: selected !== null ? `0 0 30px rgba(0, 210, 223, 0.4)` : 'none'
              }}
              className={`
                w-full md:w-72 h-16 text-lg font-black rounded-[1.5rem] transition-all duration-500
                ${selected !== null 
                  ? 'text-[#020609] hover:brightness-110 hover:scale-105 active:scale-95' 
                  : 'text-slate-600 border border-white/5 cursor-not-allowed'}
              `}
            >
              Verify Protocol
            </Button>
          </>
        ) : (
          // --- RESULT STATE ---
          <>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-6 flex-1"
            >
              <div 
                style={{ backgroundColor: isCorrect ? electricCyan : '#ef4444' }}
                className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center relative shadow-[0_0_25px_rgba(0,210,223,0.3)]`}
              >
                {isCorrect ? <ShieldCheck className="text-[#020609]" size={32} /> : <AlertCircle className="text-white" size={32} />}
                {isCorrect && <span className="absolute inset-0 rounded-[1.25rem] bg-white animate-ping opacity-20" />}
              </div>

              <div className="space-y-1">
                <h4 
                  style={{ color: isCorrect ? electricCyan : '#f87171' }}
                  className={`text-2xl font-black uppercase tracking-tighter`}
                >
                  {isCorrect ? 'Node Synchronized' : 'Access Denied'}
                </h4>
                <p className="text-slate-400 text-sm font-medium leading-tight max-w-md italic line-clamp-2">
                  {explanation}
                </p>
              </div>
            </motion.div>

            <Button 
              onClick={onNext} 
              disabled={!isCorrect} 
              style={{ 
                backgroundColor: isCorrect ? electricCyan : 'rgba(255,255,255,0.05)',
                boxShadow: isCorrect ? `0 0 35px rgba(0, 210, 223, 0.4)` : 'none'
              }}
              className={`
                h-16 px-14 rounded-2xl text-xl font-black transition-all duration-500 flex items-center gap-3
                ${isCorrect 
                  ? 'text-[#020609] hover:brightness-110 hover:scale-105 active:scale-95' 
                  : 'text-slate-700 border border-white/5 cursor-not-allowed opacity-50'}
              `}
            >
              Next Phase <ArrowRight size={24} />
            </Button>
          </>
        )}
      </div>

      {/* Top Edge Glow Line (Exact Theme Match) */}
      <div 
        style={{ 
          backgroundColor: isCorrect === true ? electricCyan : isCorrect === false ? '#ef4444' : 'rgba(255,255,255,0.1)',
          boxShadow: isCorrect === true ? `0 0 15px ${electricCyan}` : 'none'
        }}
        className={`absolute top-0 left-0 w-full h-[1px] transition-all duration-1000`} 
      />
    </footer>
  );
};