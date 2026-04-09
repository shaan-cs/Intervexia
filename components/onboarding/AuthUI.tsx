import { motion } from 'framer-motion';
import { Shield, Lock, Terminal } from 'lucide-react';
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const AuthBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
    {/* --- TECHNICAL GRID --- */}
    <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    
    {/* --- DYNAMIC CYAN GLOWS --- */}
    <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#00D2DF]/5 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#00D2DF]/5 rounded-full blur-[120px]" />
  </div>
);

export const AuthHeader = ({ isLogin }: { isLogin: boolean }) => (
  <CardHeader className="text-center pt-12 pb-6 space-y-6">
    {/* --- TACTICAL LOGO ICON --- */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto w-14 h-14 bg-[#00D2DF]/10 border border-[#00D2DF]/20 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(0,210,223,0.1)] group relative"
    >
      <div className="absolute inset-0 bg-[#00D2DF]/5 rounded-xl blur-md group-hover:blur-lg transition-all" />
      {isLogin ? (
        <Lock className="text-[#00D2DF] w-6 h-6 relative z-10" />
      ) : (
        <Terminal className="text-[#00D2DF] w-6 h-6 relative z-10" />
      )}
    </motion.div>

    <div className="space-y-2">
      <CardTitle className="text-2xl md:text-3xl  text-[#f5f5f5] tracking-tighter leading-none">
         {isLogin ? "Access Your Dashboard" : "Excel in Interviews with AI"}
      </CardTitle>
      
      {/* --- MONOSPACED SUBTEXT --- */}
      <div className="flex items-center justify-center gap-3">
        <div className="h-px w-6 bg-white/5" />
        <CardDescription className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.3em]">
          {isLogin ? "Verify Secure Credentials" : "Initialize Technical Profile"}
        </CardDescription>
        <div className="h-px w-6 bg-white/5" />
      </div>
    </div>

    {/* --- STATUS INDICATOR (Luxury Detail) --- */}
    <div className="flex justify-center gap-6 opacity-40">
       <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-[#00D2DF] shadow-[0_0_5px_#00D2DF]" />
          <span className="text-[8px] font-mono text-slate-400">SSL_ENCRYPTED</span>
       </div>
       <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-[#00D2DF] shadow-[0_0_5px_#00D2DF]" />
          <span className="text-[8px] font-mono text-slate-400">AUTH_CORE_V2</span>
       </div>
    </div>
  </CardHeader>
);