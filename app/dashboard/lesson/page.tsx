"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { roadmapRegistry } from '@/data/roadmaps'
import { jsPDF } from "jspdf"
import "jspdf-autotable"
import { Sparkles, AlertCircle, Terminal, Activity, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Component Imports
import { QuizHeader } from '@/components/lesson/QuizHeader'
import { QuizContent } from '@/components/lesson/QuizContent'
import { QuizFooter } from '@/components/lesson/QuizFooter'
import { QuizLoading } from '@/components/lesson/QuizLoading'
import { FinalHub } from '@/components/lesson/FinalHub'
import { LevelCleared } from '@/components/lesson/LevelCleared'

export default function LessonPage() {
  const router = useRouter()
  
  // --- SYSTEM STATES (Logic Preserved) ---
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [currentNodeId, setCurrentNodeId] = useState<string | null>(null)
  const [questions, setQuestions] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userRole, setUserRole] = useState('')
  
  // --- QUIZ LOGIC STATES (Logic Preserved) ---
  const [selected, setSelected] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [finished, setFinished] = useState(false)
  const [nextModuleId, setNextModuleId] = useState<string | null>(null)
  const [quizHistory, setQuizHistory] = useState<any[]>([])

  useEffect(() => {
    setMounted(true)
    const savedId = localStorage.getItem('activeNodeId')
    if (savedId) initLesson(savedId)
    else router.push('/dashboard')
  }, [])

  const initLesson = async (nodeId: string) => {
    setLoading(true)
    setCurrentNodeId(nodeId)
    setCurrentIndex(0)
    setSelected(null)
    setIsCorrect(null)
    setFinished(false)

    const { data: { user } } = await supabase.auth.getUser()
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', user?.id).single()
    
    if (profile) {
      setUserRole(profile.role)
      const roadmap = roadmapRegistry[profile.role] || []
      const modIndex = roadmap.findIndex((m: any) => m.id === nodeId)
      const currentMod = roadmap[modIndex]

      if (currentMod && !nodeId.includes('node-6')) {
        try {
          const res = await fetch('/api/generate-questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              role: profile.role, 
              topic: currentMod.title, 
              difficulty: currentMod.difficulty 
            })
          })
          const data = await res.json()
          
          if (Array.isArray(data)) {
            setQuestions(data)
          } else {
            throw new Error("Invalid Data")
          }
        } catch (err) {
          console.error("AI Generation Failed, using fallback questions.")
          setQuestions(currentMod.questions || [])
        }
      }
      setNextModuleId(roadmap[modIndex + 1]?.id || null)
    }
    setLoading(false)
  }

  const handleFinalizeProgress = async () => {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    
    if (user && currentNodeId) {
      try {
        const { data: prof } = await supabase.from('profiles').select('xp').eq('id', user.id).single()
        let xpAdd = 50;
        if(currentNodeId.includes('node-3')) xpAdd = 100;
        if(currentNodeId.includes('node-4') || currentNodeId.includes('node-5')) xpAdd = 200;

        await supabase.from('profiles').update({ xp: (prof?.xp || 0) + xpAdd }).eq('id', user.id)

        await supabase.from('user_progress').upsert([
          { user_id: user.id, module_id: currentNodeId }
        ], { onConflict: 'user_id,module_id' })

        if (nextModuleId) {
          localStorage.setItem('activeNodeId', nextModuleId)
          initLesson(nextModuleId)
        } else {
          router.push('/dashboard')
        }
      } catch (error) {
        console.error("Error saving progress:", error)
        router.push('/dashboard')
      }
    }
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.setFont("helvetica", "bold")
    doc.text(`InterVexia Mastery Report: ${userRole}`, 20, 20)
    
    const table = quizHistory.map((q, i) => [
      i + 1, 
      q.question, 
      q.userAnswer, 
      q.correctAnswer, 
      q.isCorrect ? "✅" : "❌"
    ])

    ;(doc as any).autoTable({ 
      startY: 30, 
      head: [['#', 'Question', 'User Choice', 'Correct Answer', 'Result']], 
      body: table,
      headStyles: { fillColor: [6, 182, 212] } 
    })
    doc.save(`${userRole}_Performance_Report.pdf`)
  }

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1)
      setSelected(null)
      setIsCorrect(null)
    } else {
      setFinished(true)
    }
  }

  if (!mounted) return null
  if (loading) return <QuizLoading />
  
  if (currentNodeId?.includes('node-6')) {
    return <FinalHub generatePDF={generatePDF} userRole={userRole} />
  }

  if (finished) {
    return <LevelCleared nextId={nextModuleId} onContinue={handleFinalizeProgress} />
  }

  const q = questions[currentIndex]
  if (!q) return (
    <div className="h-screen bg-[#020609] flex flex-col items-center justify-center gap-6">
      <div className="relative">
         <AlertCircle className="text-red-500 w-16 h-16 animate-pulse" />
         <div className="absolute inset-0 bg-red-500 blur-2xl opacity-20" />
      </div>
      <p className="text-white font-black tracking-[0.3em] uppercase text-xs opacity-80 text-center">
        Fatal Error: Question Buffer Nullified.
      </p>
      <button 
        onClick={() => window.location.reload()} 
        className="px-6 py-2 border border-cyan-500/30 text-cyan-400 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500/10 transition-all"
      >
        Re-Initialize System
      </button>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#020609] flex flex-col text-white selection:bg-cyan-500/30 overflow-hidden relative font-sans">
      
      {/* --- ADVANCED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-900/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
        
        {/* Subtle Horizontal Scan-line Animation */}
        <motion.div 
           animate={{ y: ['-100%', '100%'] }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent h-40 w-full"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
      </div>

      <div className="relative z-10 flex flex-col h-screen flex-1">
        
        {/* --- CONSOLE HEADER --- */}
        <div className="flex flex-col items-center pt-8 space-y-4">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/5 border border-white/5 text-cyan-400/80 backdrop-blur-md">
            <Activity size={14} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Live Assessment Protocol</span>
            <div className="h-3 w-px bg-white/10 mx-1" />
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Active</span>
          </div>
          <QuizHeader 
            current={currentIndex} 
            total={questions.length} 
            onExit={() => router.push('/dashboard')} 
          />
        </div>

        {/* --- MAIN QUIZ ARENA --- */}
        <main className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full px-8 lg:px-12 py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Ghost UI Decorative Icon */}
              <Terminal className="absolute -top-12 -left-12 text-white/5 w-32 h-32 -z-10 rotate-[-15deg]" />
              
              <div className="bg-[#0a1116]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-1 shadow-2xl">
                 <QuizContent 
                  question={q} 
                  selected={selected} 
                  onSelect={setSelected} 
                  isCorrect={isCorrect} 
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* --- CONSOLE FOOTER --- */}
        <div className="relative z-20 pb-10">
          <div className="absolute bottom-0 left-0 w-full h-[120%] bg-gradient-to-t from-[#020609] via-[#020609]/80 to-transparent -z-10" />
          <QuizFooter 
            isCorrect={isCorrect} 
            explanation={q.explanation} 
            selected={selected}
            onCheck={() => {
                const status = selected === q.correct
                setIsCorrect(status)
                setQuizHistory(h => [...h, { 
                  ...q, 
                  userAnswer: q.options[selected!], 
                  correctAnswer: q.options[q.correct],
                  isCorrect: status 
                }])
            }}
            onNext={handleNextQuestion}
          />
          
          {/* Subtle Branded Footer */}
          <div className="text-center mt-6">
             <p className="text-[8px] font-black text-slate-700 uppercase tracking-[0.6em] opacity-40">
               InterVexia Neural Interface v4.0.2
             </p>
          </div>
        </div>
      </div>
    </div>
  )
}