"use client"
import React, { useEffect, useState, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import { roadmapRegistry } from '@/data/roadmaps'
import { useRouter } from 'next/navigation'
import { User, Sparkles, Trophy } from 'lucide-react'
import { QuantView } from '@/components/dashboard/QuantView'
import { LearningMaterialView } from '@/components/dashboard/LearningMaterialView'
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

// Modular Components
import { DashboardSidebar } from '@/components/dashboard/Sidebar'
import { DashboardStats } from '@/components/dashboard/Stats'
import { DashboardHero, RoadmapNode } from '@/components/dashboard/Roadmap'

export default function Dashboard() {
  const router = useRouter()

  // System States
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('overview')

  // Data States
  const [profile, setProfile] = useState<any>(null)
  const [modules, setModules] = useState<any[]>([])
  const [completedModules, setCompletedModules] = useState<string[]>([])

  // Refs for Scroll Tracking
  const overviewRef = useRef<HTMLDivElement>(null)
  const learningPathRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    initDashboard()

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.3 })

    if (overviewRef.current) observer.observe(overviewRef.current)
    if (learningPathRef.current) observer.observe(learningPathRef.current)

    return () => observer.disconnect()
  }, [activeSection])

  const initDashboard = async () => {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data: profData } = await supabase.from('profiles').select('*').eq('id', user.id).single()

      if (profData) {
        setProfile(profData)
        const { data: progress } = await supabase.from('user_progress').select('module_id').eq('user_id', user.id)
        const finishedIds = progress?.map(p => p.module_id) || []
        setCompletedModules(finishedIds)
        const localModules = roadmapRegistry[profData.role] || []
        setModules(localModules)
      }
    } else {
      router.push('/login')
    }
    setLoading(false)
  }

  const handleDeleteAccount = async () => {
    const confirmDelete = confirm("🚨 AKHRI WARNING: Kya tum sach mein account delete karna chahte ho? Progress hamesha ke liye chali jayegi!")
    if (confirmDelete) {
      setLoading(true)
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          await supabase.from('profiles').delete().eq('id', user.id)
          await supabase.auth.signOut()
          router.push('/')
        }
      } catch (err: any) {
        alert("Error: " + err.message)
      } finally {
        setLoading(false)
      }
    }
  }

  const handleHeroClick = () => {
    const next = modules.find(m => !completedModules.includes(m.id)) || modules[0]
    if (next) {
      localStorage.setItem('activeNodeId', next.id);
      router.push('/dashboard/lesson');
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  // Hydration Guard
  if (!mounted) return null

  // Skeleton Loader (Updated to Dark Theme)
  if (loading) return (
    <div className="h-screen w-full bg-[#020609] flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      <p className="font-black text-cyan-500 tracking-widest text-xs uppercase animate-pulse">Syncing Console...</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#020609] flex text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200 scroll-smooth relative overflow-hidden">

      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <DashboardSidebar
        activeSection={activeSection}
        scrollToSection={(s: string) => {
          setActiveSection(s);
          setTimeout(() => {
            const element = document.getElementById(s);
            element?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        handleLogout={handleLogout}
        handleDeleteAccount={handleDeleteAccount}
      />

      <main className="flex-1 p-6 lg:p-12 overflow-x-hidden relative z-10">

        {/* --- DYNAMIC VIEW SWITCHER --- */}
        {activeSection === 'quant-aptitude' ? (
          <div id="quant-aptitude" className="animate-in fade-in slide-in-from-bottom-4 duration-700 pt-10">
            <QuantView />
          </div>
        ) : activeSection === 'learning-material' ? (
          <div id="learning-material" className="animate-in fade-in slide-in-from-bottom-4 duration-700 pt-10">
            <LearningMaterialView role={profile?.role} />
          </div>
        ) : (
          <>
            {/* --- DEFAULT VIEW (Overview & Learning Path) --- */}
            <div id="overview" ref={overviewRef} className="scroll-mt-12">
              <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    <Sparkles size={12} /> Console Active
                  </div>
                  <h1 className="text-5xl font-black tracking-tight text-white leading-none">
                    Welcome, <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">{profile?.full_name?.split(' ')[0]}</span>!
                  </h1>
                  <p className="text-slate-500 font-bold tracking-tight mt-2 uppercase text-xs opacity-70">
                    Protocol: <span className="text-cyan-500/80">{profile?.role}</span> Mastery
                  </p>
                </div>

                {/* <div className="bg-[#0a1116]/60 backdrop-blur-xl p-2 pr-6 rounded-2xl border border-white/5 flex items-center gap-4 font-black text-cyan-400 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                    <User size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mb-1">Global Rank</span>
                    #1,284
                  </div>
                </div> */}
              </header>

              {/* These components should internally use dark mode styles */}
              <DashboardStats
                profile={profile}
                completedCount={completedModules.length}
                totalCount={modules.length}
              />

              <DashboardHero
                completedCount={completedModules.length}
                handleHeroClick={handleHeroClick}
              />
            </div>

            <section id="learning-path" ref={learningPathRef} className="max-w-6xl mx-auto py-40 relative scroll-mt-20 overflow-visible">

              {/* --- AMBIENT LUXURY GLOWS --- */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/[0.03] blur-[160px] rounded-full" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/[0.03] blur-[160px] rounded-full" />
              </div>

              {/* --- ADVANCED MINIMALIST HEADER --- */}
              <div className="text-center mb-40 relative px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 text-[9px] font-black uppercase tracking-[0.4em] mb-4 shadow-inner">
                    <Zap size={12} className="fill-cyan-500/50" />
                    AI-Driven Interview Architecture
                  </div>

                  {/* Single Line Professional Heading - Font size reduced to 5xl max */}
                  {/* <h3 className="text-xl md:text-3xl font-semibold text-white tracking-tight">
                    Master Interviews with
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                      {" "}AI
                    </span>
                  </h3> */}
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter   leading-none">
                    Master Interview with
                    <span className="relative ml-3 pr-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                      {" "}AI
                    </span>
                  </h3>

                  <p className="text-slate-500 text-lg md:text-xl font-bold  tracking-[0.15em] opacity-80 max-w-2xl mx-auto">
                    Real-time Generation. <span className="text-white">Tier-1 Validation.</span> Global Certification.
                  </p>
                </motion.div>
              </div>

              {/* --- THE VINE TREE STRUCTURE --- */}
              <div className="relative flex flex-col items-center gap-48 pb-32">

                {/* --- THE CENTRAL STEM (The Main Tana) --- */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] -z-10">
                  {/* Glow aura for the vine */}
                  <div className="absolute inset-0 bg-cyan-400/20 blur-[8px]" />
                  <div className="h-full bg-gradient-to-b from-cyan-500 via-cyan-400/10 to-transparent rounded-full" />

                  {/* Animated Data-Pulses */}
                  <motion.div
                    animate={{ y: ['0%', '100%'], opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[8px] h-40 bg-gradient-to-b from-transparent via-cyan-300 to-transparent rounded-full blur-[4px]"
                  />
                </div>

                {/* --- MODULE NODES (Responsive Vine Layout) --- */}
                {modules.map((mod, index) => {
                  const isFinished = completedModules.includes(mod.id);
                  const isPreviousFinished = index === 0 || completedModules.includes(modules[index - 1]?.id);
                  const nodeStatus = isFinished ? 'completed' : (isPreviousFinished ? 'current' : 'locked');
                  const isLeft = index % 2 === 0;

                  return (
                    <div key={mod.id} className={`relative w-full flex items-center justify-center min-h-[120px] 
          ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-12 md:gap-0`}>

                      {/* --- NODE SIDE --- */}
                      <div className={`flex-1 flex ${isLeft ? 'justify-end md:pr-24' : 'justify-start md:pl-24'} z-10 w-full`}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, x: isLeft ? -50 : 50 }}
                          whileInView={{ opacity: 1, scale: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: index * 0.1 }}
                        >
                          <RoadmapNode
                            id={mod.id}
                            title="" // Title hum opposite side display kar rahe hain
                            index={index}
                            isBoss={index === 4}
                            status={nodeStatus}
                          />
                        </motion.div>
                      </div>

                      {/* --- CURVED TENDRILL (Connector) --- */}
                      <div className={`absolute top-1/2 -translate-y-1/2 h-[2px] w-24 hidden md:block -z-10
            ${isLeft ? 'right-1/2' : 'left-1/2'} 
            bg-gradient-to-r ${isLeft ? 'from-transparent to-cyan-500/40' : 'from-cyan-500/40 to-transparent'}`}
                      />

                      {/* --- TEXT SIDE (Opposite to Node) --- */}
                      <div className={`flex-1 flex ${isLeft ? 'justify-start md:pl-24' : 'justify-end md:pr-24'} w-full text-center md:text-left`}>
                        <motion.div
                          initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className={`space-y-2 ${isLeft ? 'md:text-left' : 'md:text-right'}`}
                        >
                          <div className={`text-[10px] font-black uppercase tracking-[0.4em] ${nodeStatus === 'completed' ? 'text-teal-400' : nodeStatus === 'current' ? 'text-cyan-400 animate-pulse' : 'text-slate-800'}`}>
                            {nodeStatus === 'completed' ? 'Data Mastered' : nodeStatus === 'locked' ? 'Node Encrypted' : 'Active Protocol'}
                          </div>
                          <h4 className={`text-2xl md:text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${nodeStatus === 'locked' ? 'text-slate-900' : 'text-white'}`}>
                            {mod.title}
                          </h4>
                          <div className={`h-1 w-12 bg-cyan-500/20 rounded-full ${isLeft ? 'mr-auto' : 'ml-auto md:ml-0 md:mr-0'} hidden md:block`} />
                        </motion.div>
                      </div>

                    </div>
                  )
                })}
              </div>

              {/* --- SUMMIT DECORATION --- */}
              <div className="mt-20 relative flex flex-col items-center group">
                <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  className="w-20 h-20 rounded-full border-2 border-dashed border-cyan-500/30 flex items-center justify-center cursor-pointer relative z-10"
                >
                  <Trophy size={28} className="text-cyan-500/50 group-hover:text-cyan-400 transition-colors" />
                </motion.div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-700 mt-6 group-hover:text-cyan-500 transition-colors">Endpoint Reached</span>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
}