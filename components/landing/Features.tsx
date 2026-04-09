"use client"
import React from 'react'
import { Target, Briefcase, Activity, FileCheck, CheckCircle2 } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-white">
              Preparation that respects <br /><span className="text-[#00D2DF]">your time.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We've organized the curriculum into manageable modules, allowing you to systematically cover all critical technical topics.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Realistic Content", "Detailed Feedback", "Progress Tracking", "Role-Specific"].map(label => (
                <FeatureCheck key={label} label={label} />
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <AdvancedFeatureCard icon={<Target />} title="Focused Quizzes" desc="Brief, topic-specific assessments to validate your knowledge." />
            <AdvancedFeatureCard icon={<Briefcase />} title="Role Scenarios" desc="Practical exercises based on actual industry requirements." />
            <AdvancedFeatureCard icon={<Activity />} title="Insightful Metrics" desc="Understand your strengths and areas for further review." />
            <AdvancedFeatureCard icon={<FileCheck />} title="Curated Roadmap" desc="A logical sequence of topics to ensure full coverage." />
          </div>
        </div>
      </div>
    </section>
  )
}

function AdvancedFeatureCard({ icon, title, desc }: any) {
  return (
    <div className="group relative p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-[#00D2DF]/30 transition-all duration-700 hover:bg-white/[0.03] overflow-hidden">
      <div className="flex items-center gap-5 mb-10">
        <div className="w-14 h-14 rounded-2xl bg-[#00D2DF]/5 border border-[#00D2DF]/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
          {React.cloneElement(icon, { size: 24, className: "text-[#00D2DF]" })}
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-[#00D2DF]/20 via-white/5 to-transparent" />
      </div>
      <h3 className="text-xl font-black text-[#f5f5f5] uppercase tracking-tight mb-4">{title}</h3>
      <p className="text-slate-500 text-[11px] leading-relaxed font-bold uppercase tracking-[0.1em]">{desc}</p>
    </div>
  )
}

function FeatureCheck({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 group/check py-2 cursor-default">
      <CheckCircle2 size={18} className="text-[#00D2DF] drop-shadow-[0_0_10px_rgba(0,210,223,0.5)]" strokeWidth={3} />
      <span className="text-sm font-bold text-slate-500 group-hover/check:text-[#f5f5f5] transition-colors">{label}</span>
    </div>
  )
}