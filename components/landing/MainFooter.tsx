"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Globe, Monitor, ShieldAlert, FileCode, X, Cpu } from "lucide-react"

export default function MainFooter() {
  const currentYear = new Date().getFullYear();

  // Single state to track which item is being hovered
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [systemInfo, setSystemInfo] = useState({ os: 'Detecting...', browser: 'Detecting...' });

  // System Detection Logic
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = window.navigator.userAgent;
      const platform = window.navigator.platform;

      let os = "Linux_Kernel"; // Default for modern web
      if (platform.indexOf("Win") !== -1) os = "Windows_NT";
      if (platform.indexOf("Mac") !== -1) os = "macOS_Darwin";

      let browser = "Web_Engine";
      if (ua.includes("Chrome")) browser = "Chrome_Blink";
      else if (ua.includes("Firefox")) browser = "Firefox_Gecko";
      else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari_WebKit";

      setSystemInfo({ os, browser });
    }
  }, []);

  return (
    <footer className="relative bg-[#020609] pt-28 pb-14 overflow-hidden border-t border-white/[0.04]">

      {/* Glow Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D2DF]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* --- TOP SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 mb-20">

          {/* LEFT: BRAND */}
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-[#00D2DF]/5 border border-[#00D2DF]/20 flex items-center justify-center transition-all duration-500 group-hover:border-[#00D2DF]/50 group-hover:shadow-[0_0_25px_rgba(0,210,223,0.15)]">
                <Shield size={16} className="text-[#00D2DF]" />
              </div>
              <span className="font-black tracking-[0.35em] text-white text-sm uppercase">
                INTERVEXIA
              </span>
            </div>

            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.25em] leading-relaxed max-w-xs">
              Hardened Development
              <span className="text-slate-800 mx-2">•</span>
              Secure Systems Architecture
            </p>
          </div>

          {/* RIGHT: SYSTEM INFO */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 sm:gap-16 w-full md:w-auto">
            <div className="space-y-2 text-left sm:text-right">
              <p className="text-[9px] font-mono text-slate-600 uppercase tracking-wider">Build Version</p>
              <p className="text-[11px] font-semibold text-slate-400 font-mono tracking-wide">v2.4.0-STABLE</p>
            </div>

            <div className="space-y-2 text-left sm:text-right">
              <p className="text-[9px] font-mono text-slate-600 uppercase tracking-wider">Region</p>
              <div className="flex items-center sm:justify-end gap-2">
                <Globe size={12} className="text-emerald-400/80" />
                <p className="text-[11px] font-semibold text-slate-400 font-mono tracking-wide">
                  ASIA_INDIA_01
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- DIVIDER & INTERACTIVE NAV --- */}
        <div className="border-t border-white/[0.04] pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* COPYRIGHT */}
          <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.35em] text-center md:text-left">
            © {currentYear}
            <span className="text-slate-400 mx-2">InterVexia</span>
            <span className="hidden sm:inline">• Internal Preparation Suite</span>
          </p>

          {/* INTERACTIVE NAV (All Hover Enabled) */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-10 relative">

            {["System_Logs", "Security_Policy", "Documentation"].map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* --- UNIVERSAL HOVER DIALOG --- */}
                <AnimatePresence>
                  {hoveredItem === item && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-full mb-6 right-0 w-64 md:w-80 bg-[#0a1116] border border-[#00D2DF]/30 p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-50 pointer-events-none backdrop-blur-3xl overflow-hidden"
                    >
                      {/* Sub-Header within Console */}
                      <div className="bg-white/[0.03] -m-4 px-4 py-2 border-b border-white/5 flex items-center gap-2 mb-4">
                        {item === 'System_Logs' && <Monitor size={12} className="text-[#00D2DF]" />}
                        {item === 'Security_Policy' && <ShieldAlert size={12} className="text-[#00D2DF]" />}
                        {item === 'Documentation' && <FileCode size={12} className="text-[#00D2DF]" />}
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white">
                          {item.replace('_', ' ')}
                        </span>
                      </div>

                      {/* Content switching based on hovered item */}
                      <div className="font-mono text-[9px] leading-relaxed text-slate-400 mt-2">
                        {item === 'System_Logs' && (
                          <div className="space-y-1.5">
                            <div className="flex justify-between border-b border-white/5 pb-1">
                              <span className="text-slate-500">Node:</span>
                              <span className="text-[#00D2DF]">Welcome</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-1">
                              <span className="text-slate-500">OS:</span>
                              <span className="text-white">{systemInfo.os}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Engine:</span>
                              <span className="text-white">{systemInfo.browser}</span>
                            </div>
                          </div>
                        )}

                        {item === 'Security_Policy' && (
                          <ul className="space-y-2">
                            <li className="flex gap-2"><span className="text-[#00D2DF]">»</span> End-to-End Encryption (AES-256).</li>
                            <li className="flex gap-2"><span className="text-[#00D2DF]">»</span> Zero-Knowledge Architecture.</li>
                            <li className="flex gap-2"><span className="text-[#00D2DF]">»</span> Automated Identity Verification.</li>
                            <li className="flex gap-2"><span className="text-[#00D2DF]">»</span> Secure AI-Powered Interview Sessions.</li>
                            <li className="flex gap-2"><span className="text-[#00D2DF]">»</span> Real-Time Data Protection & Monitoring.</li>
                            <li className="flex gap-2"><span className="text-[#00D2DF]">»</span> Encrypted Session Recordings & Reports.</li>
                            <li className="flex gap-2"><span className="text-[#00D2DF]">»</span> Anti-Cheating & Proctoring Mechanisms.</li>
                            <li className="flex gap-2"><span className="text-[#00D2DF]">»</span> Secure Authentication (OAuth & JWT).</li>
                            <li className="flex gap-2"><span className="text-[#00D2DF]">»</span> Privacy-First Data Handling Policies.</li>
                          </ul>
                        )}

                        {item === 'Documentation' && (
                          <div className="space-y-3">
                            <p>Hardened Technical Environment optimized for architectural excellence.</p>
                            <p>Engineered to deliver secure, AI-driven interview experiences with real-time intelligence and precision.</p>
                            <p>Designed for scalability, performance, and seamless user experience across every interaction.</p>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="p-1.5 bg-white/[0.02] border border-white/5 rounded flex items-center gap-1.5 text-[8px]"><Cpu size={10} className="text-[#00D2DF]/50" />No Excuses</div>
                              <div className="p-1.5 bg-white/[0.02] border border-white/5 rounded flex items-center gap-1.5 text-[8px]"><Monitor size={10} className="text-[#00D2DF]/50" />App ki security hamari priority</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* THE LINK BUTTON */}
                <button
                  className="relative text-[10px] font-mono font-semibold text-slate-500 hover:text-[#00D2DF] uppercase tracking-widest transition-all duration-300 group outline-none cursor-default"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#00D2DF] transition-all duration-300 group-hover:w-full" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Corner Meta (Unchanged) */}
      <div className="absolute bottom-6 right-8 xl:block opacity-[0.2] pointer-events-none select-none">
        <span className="font-mono text-[7px] text-white tracking-[1.2em] uppercase">
          SECURE_SESSION_ACTIVE // 01001001
        </span>
      </div>
    </footer>
  )
}