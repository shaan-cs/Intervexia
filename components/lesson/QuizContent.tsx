"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, Target, Cpu } from 'lucide-react';

export const QuizContent = ({ question, selected, onSelect, isCorrect }: any) => (
  <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12 md:py-20 overflow-visible">
    <AnimatePresence mode="wait">
      <motion.div 
        key={question.question} 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-12"
      >
        {/* --- QUESTION TAG --- */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#00D2DF]/10 rounded-lg border border-[#00D2DF]/20">
            <Cpu size={14} className="text-[#00D2DF]" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            Assessment Your Knowledge
          </span>
        </div>

        {/* --- THE QUESTION --- */}
        <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.05] tracking-tight">
          {question.question}
        </h2>

        {/* --- OPTIONS GRID --- */}
        <div className="grid gap-5">
          {question.options.map((opt: string, i: number) => {
            const isSelected = selected === i;
            const isThisCorrect = isCorrect !== null && i === question.correct;
            const isThisWrong = isCorrect === false && selected === i;

            return (
              <motion.button 
                key={i} 
                disabled={isCorrect !== null} 
                onClick={() => onSelect(i)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`
                  relative w-full p-6 text-left rounded-[2rem] border-2 transition-all duration-500 group overflow-hidden
                  ${isSelected && isCorrect === null 
                    ? 'border-[#00D2DF] bg-[#00D2DF]/5 shadow-[0_0_25px_rgba(0,210,223,0.15)]' 
                    : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'}
                  ${isThisCorrect ? '!border-teal-500 !bg-teal-500/10 !shadow-[0_0_30px_rgba(20,184,166,0.2)]' : ''}
                  ${isThisWrong ? '!border-red-500 !bg-red-500/10 !shadow-[0_0_30px_rgba(239,68,68,0.2)]' : ''}
                `}
              >
                <div className="flex items-center gap-6 relative z-10">
                  {/* --- OPTION LETTER BOX --- */}
                  <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-500
                    ${isSelected ? 'bg-[#00D2DF] text-[#020609]' : 'bg-[#0a1116] text-slate-500 border border-white/10 group-hover:border-[#00D2DF]/30'}
                    ${isThisCorrect ? '!bg-teal-500 !text-[#020609]' : ''}
                    ${isThisWrong ? '!bg-red-500 !text-white' : ''}
                  `}>
                    {String.fromCharCode(65+i)}
                  </div>

                  {/* --- OPTION TEXT --- */}
                  <span className={`flex-1 text-lg font-bold tracking-tight transition-colors duration-500 ${isSelected || isThisCorrect ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {opt}
                  </span>

                  {/* --- FEEDBACK ICON --- */}
                  {isSelected && isCorrect === null && (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
                      <Target size={20} className="text-[#00D2DF]/40" />
                    </motion.div>
                  )}
                </div>

                {/* Subtle internal glow on hover/select */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`} />
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  </main>
);