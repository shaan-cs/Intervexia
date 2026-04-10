"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { roadmapRegistry } from '@/data/roadmaps'
import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"
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

  // --- SYSTEM STATES ---
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [currentNodeId, setCurrentNodeId] = useState<string | null>(null)
  const [questions, setQuestions] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userRole, setUserRole] = useState('')

  // CRITICAL FIX: Managed states for Profile and Progress Sync
  const [profile, setProfile] = useState<any>(null)
  const [completedModules, setCompletedModules] = useState<string[]>([]) // Missing State Added
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

    const { data: { user } } = await supabase.auth.getUser()

    // Fetching all columns to ensure full_name and stats are available
    const { data: profileData } = await supabase.from('profiles')
      .select('*')
      .eq('id', user?.id)
      .single()

    if (profileData) {
      setProfile(profileData)
      setUserRole(profileData.role)

      // Fetch completed modules for sync
      const { data: progress } = await supabase.from('user_progress').select('module_id').eq('user_id', user?.id)
      setCompletedModules(progress?.map(p => p.module_id) || [])

      const roadmap = roadmapRegistry[profileData.role] || []
      const modIndex = roadmap.findIndex((m: any) => m.id === nodeId)
      const currentMod = roadmap[modIndex]

      if (currentMod && !nodeId.includes('node-6')) {
        try {
          const res = await fetch('/api/generate-questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              role: profileData.role,
              topic: currentMod.title,
              difficulty: currentMod.difficulty
            })
          })
          const data = await res.json()
          setQuestions(Array.isArray(data) ? data : (currentMod.questions || []))
        } catch (err) {
          setQuestions(currentMod.questions || [])
        }
      }
      setNextModuleId(roadmap[modIndex + 1]?.id || null)
    }
    setLoading(false)
  }

  // Handle Progress for non-final nodes
  const handleFinalizeProgress = async () => {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    
    if (user && currentNodeId) {
      try {
        let xpAdd = 50;
        if(currentNodeId.includes('node-3')) xpAdd = 100;
        if(currentNodeId.includes('node-4') || currentNodeId.includes('node-5')) xpAdd = 200;

        await supabase.from('profiles').update({ xp: (profile?.xp || 0) + xpAdd }).eq('id', user.id)
        await supabase.from('user_progress').upsert([{ user_id: user.id, module_id: currentNodeId }], { onConflict: 'user_id,module_id' })

        if (nextModuleId) {
          localStorage.setItem('activeNodeId', nextModuleId)
          initLesson(nextModuleId)
        } else {
          router.push('/dashboard')
        }
      } catch (error) {
        router.push('/dashboard')
      }
    }
  }

  // --- 🔒 MASTER SYNC & CERTIFICATE GENERATION (FIXED & ANALYZED) ---
  const generatePDF = async () => {
    try {
      const doc = new jsPDF('p', 'mm', 'a4');
      const name = profile?.full_name || "Technical Explorer";
      const certId = `IVX-${Math.random().toString(36).substr(2, 4).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
      const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      const mid = 105;

      // --- [DESIGN BLOCK PRESERVED] ---
      doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.5); doc.rect(5, 5, 200, 287);
      doc.setDrawColor(0, 210, 223); doc.setLineWidth(1); doc.rect(10, 10, 190, 277);
      doc.setFillColor(0, 210, 223);
      doc.triangle(10, 10, 25, 10, 10, 25, 'F'); doc.triangle(200, 10, 185, 10, 200, 25, 'F');
      doc.triangle(10, 287, 25, 287, 10, 272, 'F'); doc.triangle(200, 287, 185, 287, 200, 272, 'F');
      doc.setTextColor(0, 210, 223); doc.setFont("helvetica", "bold"); doc.setFontSize(26);
      doc.text("INTERVEXIA", mid, 35, { align: "center" });
      doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(140, 140, 140);
      doc.text("SYSTEM_PROTOCOL: AI NEURAL INTERFACE GATEWAY", mid, 41, { align: "center" });
      doc.setDrawColor(220, 220, 220); doc.line(30, 50, 180, 50);
      doc.setDrawColor(0, 210, 223); doc.line(mid - 15, 50, mid + 15, 50);
      doc.setTextColor(40, 40, 40); doc.setFontSize(42); doc.setFont("times", "bolditalic");
      doc.text("CERTIFICATE", mid, 75, { align: "center" });
      doc.setTextColor(80, 80, 80); doc.setFontSize(16); doc.setFont("helvetica", "normal");
      doc.text("OF NEURAL MASTERY", mid, 85, { align: "center" });
      doc.setFontSize(14); doc.setTextColor(120, 120, 120);
      doc.text("This official credential is authenticated and awarded to:", mid, 115, { align: "center" });
      doc.setFontSize(36); doc.setTextColor(0, 210, 223); doc.setFont("helvetica", "bold");
      doc.text(name.toUpperCase(), mid, 135, { align: "center" });
      doc.setFontSize(14); doc.setTextColor(120, 120, 120); doc.setFont("helvetica", "normal");
      doc.text("for demonstrating superior technical proficiency in", mid, 160, { align: "center" });
      doc.setFontSize(24); doc.setTextColor(40, 40, 40); doc.setFont("helvetica", "bold");
      doc.text(`${userRole.toUpperCase()} MASTERY`, mid, 175, { align: "center" });
      doc.setFontSize(11); doc.setFont("helvetica", "italic"); doc.setTextColor(100, 100, 100);
      doc.text("Decrypted all 5 Difficulty Nodes with Verified Validation.", mid, 183, { align: "center" });
      doc.setDrawColor(0, 210, 223, 0.2); doc.setLineWidth(0.3); doc.circle(mid, 210, 15, 'D');
      doc.setTextColor(0, 210, 223); doc.setFont("courier", "bold"); doc.setFontSize(14);
      doc.text("PASSED", mid, 212, { align: "center" });
      doc.setDrawColor(220, 220, 220); doc.line(20, 240, 190, 240);
      doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(160, 160, 160);
      doc.text(`DEPLOYMENT_ID: ${certId}`, 20, 250); doc.text(`ISSUANCE_TIMESTAMP: ${date}`, 20, 255);
      doc.setFont("times", "bolditalic"); doc.setFontSize(14); doc.setTextColor(0, 210, 223);
      doc.text("InterVexia AI Protocol", 190, 252, { align: "right" }); doc.line(140, 253, 190, 253);
      doc.setFont("helvetica", "bold"); doc.setFontSize(8); doc.setTextColor(180, 180, 180);
      doc.text("Technical Validation System", 190, 257, { align: "right" });
      doc.setFont("helvetica", "normal"); doc.setFontSize(7); doc.setTextColor(200, 200, 200);
      doc.text("SECURE_TUNNEL: VERIFIED BY TIER-1 NEURAL PROTOCOL", mid, 275, { align: "center" });

      doc.save(`InterVexia_Cert_${certId}.pdf`);

      // Dashboard Sync Logic
      const { data: { user } } = await supabase.auth.getUser();
      if (user && currentNodeId) {
        await supabase.from('profiles').update({
          accuracy: 100,
          streak: (profile?.streak || 0) === 0 ? 1 : profile?.streak,
          xp: (profile?.xp || 0) + 500
        }).eq('id', user.id);

        await supabase.from('user_progress').upsert([{ user_id: user.id, module_id: currentNodeId }], { onConflict: 'user_id,module_id' });

        // FIX: Added ...prev to maintain other profile fields like full_name
        setProfile((prev: any) => ({
          ...prev,
          accuracy: 100,
          streak: (prev?.streak || 0) === 0 ? 1 : prev?.streak,
          xp: (prev?.xp || 0) + 500
        }));

        setCompletedModules((prev: string[]) => [...prev, currentNodeId]);
      }
    } catch (error) {
      console.error("Critical Sync Error:", error);
    }
  };

  // --- RENDER LOGIC ---
  if (!mounted) return null
  if (loading) return <QuizLoading />
  if (currentNodeId?.includes('node-6')) return <FinalHub generatePDF={generatePDF} userRole={userRole} />
  if (finished) return <LevelCleared nextId={nextModuleId} onContinue={handleFinalizeProgress} />

  const q = questions[currentIndex]
  if (!q) return null;

  return (
    <div className="min-h-screen bg-[#020609] flex flex-col text-white selection:bg-cyan-500/30 overflow-hidden relative font-sans">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-900/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
      </div>

      <div className="relative z-10 flex flex-col h-screen flex-1">
        <div className="flex flex-col items-center pt-8 space-y-4">
          <QuizHeader current={currentIndex} total={questions.length} onExit={() => router.push('/dashboard')} />
        </div>

        <main className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full px-8 py-10">
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="bg-[#0a1116]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-1 shadow-2xl">
                <QuizContent question={q} selected={selected} onSelect={setSelected} isCorrect={isCorrect} />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <div className="relative z-20 pb-10">
          <QuizFooter
            isCorrect={isCorrect}
            explanation={q.explanation}
            selected={selected}
            onCheck={() => {
              const status = selected === q.correct;
              setIsCorrect(status);
              setQuizHistory(h => [...h, { ...q, userAnswer: q.options[selected!], correctAnswer: q.options[q.correct], isCorrect: status }]);
            }}
            onNext={() => {
              if (currentIndex < questions.length - 1) {
                setCurrentIndex(c => c + 1); setSelected(null); setIsCorrect(null);
              } else { setFinished(true); }
            }}
          />
        </div>
      </div>
    </div>
  )
}