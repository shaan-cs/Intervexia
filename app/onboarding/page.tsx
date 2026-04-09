"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, ArrowRight, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react'

import { AuthBackground, AuthHeader } from '@/components/onboarding/AuthUI'
import { AuthFields } from '@/components/onboarding/AuthFields'

export default function UnifiedOnboarding() {
  const [isLogin, setIsLogin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false) // Success state to handle UI messages

  // States
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [role, setRole] = useState('')

  const handleAction = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(''); 
    setSuccess(false);

    // --- VALIDATION LOGIC ---
    // Check if basic fields are empty
    if (!email || !password) {
      setError('Please provide your identity credentials.');
      return;
    }

    // Check additional fields for Signup (including the Role/Domain)
    if (!isLogin && (!fullName || !role)) {
      setError('Complete your profile by providing your name and domain.');
      return;
    }

    setLoading(true)
    try {
      if (isLogin) {
        const { error: authErr } = await supabase.auth.signInWithPassword({ email, password })
        if (authErr) throw authErr
        window.location.href = '/dashboard'
      } else {
        const { data, error: authError } = await supabase.auth.signUp({ email, password })
        if (authError) throw authError
        if (data.user) {
          await supabase.from('profiles').insert([{ id: data.user.id, full_name: fullName, role }])
          // Removed Window Alert, using UI state instead
          setError('Protocol Initialized. Check your email to verify account.');
          setSuccess(true);
        }
      }
    } catch (err: any) { 
      setError(err.message) 
    } finally { 
      setLoading(false) 
    }
  }

  return (
    <div className="min-h-screen bg-[#020609] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* --- HOME THEME GLOWS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] [mask-image:radial-gradient(white,transparent_80%)]" />
      </div>

      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[480px] z-10"
      >
        <Card className="relative border border-white/5 bg-[#0a1116]/60 backdrop-blur-3xl rounded-[3rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

          <div className="pt-12 pb-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
               <Sparkles size={12} /> Secure Entry Protocol
            </div>
            <AuthHeader isLogin={isLogin} />
          </div>

          <CardContent className="px-10 pb-12">
            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`border p-4 rounded-2xl mb-6 flex items-center gap-3 text-sm font-medium ${
                    success 
                    ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" 
                    : "bg-red-500/10 border-red-500/20 text-red-400"
                  }`}
                >
                  {success ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />} 
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleAction} className="space-y-5">
              <AuthFields
                isLogin={isLogin}
                setters={{ setEmail, setPassword, setFullName, setRole }}
              />

              <Button
                type="submit"
                className="w-full h-16 bg-cyan-500 hover:bg-cyan-400 text-[#020609] text-lg font-black rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/50 transition-all duration-500 mt-6 group"
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin" /> : (
                  <span className="flex items-center">
                    {isLogin ? "Initialize Session" : "Start My Journey"}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>

            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => { 
                  setIsLogin(!isLogin); 
                  setError(''); 
                  setSuccess(false);
                }}
                className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors"
              >
                {isLogin ? "New Explorer? " : "Existing Member? "}
                <span className="text-cyan-400 underline underline-offset-8 decoration-cyan-500/30">
                  {isLogin ? "Create Account" : "Access Console"}
                </span>
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}