"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { GraduationCap, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const cyanTheme = "#00D2DF";
  return (
    <section className="relative pt-32 pb-24 px-4">
      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5 text-[#00D2DF]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Structured Interview Preparation</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            Confidence comes from <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D2DF] to-teal-400">
              consistent practice.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            We provide a focused environment to help you bridge the gap between technical knowledge and
            real-world interview performance through <span className="text-white">interactive exercises.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/onboarding">
              <Button
                style={{ backgroundColor: cyanTheme, boxShadow: `0 4px 20px rgba(0, 210, 223, 0.2)` }}
                className="h-14 px-10 text-lg font-bold text-[#020609] rounded-2xl hover:brightness-105 transition-all group"
              >
                Start Practice
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>

            <div className="flex items-center gap-6 group cursor-pointer">
              {/* --- PREMIUM AVATAR STACK (SYNCED) --- */}
              <div className="flex items-center -space-x-4">
                {/* Slot 1: Shaan's Profile (Sync with public/images/shaan.png) */}
                <div className="relative w-12 h-12  rounded-xl border-1 border-[#06d5e0] backdrop-blur-md overflow-hidden transition-transform group-hover:translate-y-[-5px]">
                  <Image
                    src="/images/rudr.png" // <--- Ye path 'public' folder se serve ho raha hai
                    alt="Candidate Profile"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Slot 2: Additional Candidate (Placeholder for plural logic) */}
                <div className="relative w-12 h-12  rounded-xl border-1 border-[#06d5e0] backdrop-blur-md overflow-hidden transition-transform group-hover:translate-y-[-5px]">
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-slate-700 bg-slate-800">C</div>
                  <Image
                    src="/images/ayush.jpeg" // <--- Ye path 'public' folder se serve ho raha hai
                    alt="Candidate Profile"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Slot 3: Additional Candidate */}
                <div className="relative w-12 h-12 rounded-xl border-1 border-[#06d5e0] overflow-hidden transition-transform group-hover:translate-y-[-5px]">
                  <div className="absolute inset-0 flex items-center justify-center  bg-slate-800">A</div>
                  <Image
                    src="/images/shaan.png" // <--- Ye path 'public' folder se serve ho raha hai
                    alt="Candidate Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* --- REFINED TEXT CONSOLE --- */}
              <div className="flex flex-col items-start space-y-1">
                <div className="text-lg font-black text-white tracking-tighter leading-none flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-white/20 fill-cyan-700" />
                  +50 Pioneers
                </div>
                <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-none">Active Learners</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}