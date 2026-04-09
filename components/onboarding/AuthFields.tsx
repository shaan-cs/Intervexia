import { motion, AnimatePresence } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { User, Mail, Lock, Terminal, Cpu } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ROLES } from './constants';

export const AuthFields = ({ isLogin, states, setters }: any) => {
  // Common style: Zero Background, White Border (Idle), Cyan Border (Focus)
  const inputStyles = "pl-12 h-12 !bg-transparent border-white/20 rounded-xl text-sm text-white placeholder:text-slate-600 focus:border-[#00D2DF] focus:ring-0 transition-all duration-300 relative z-10 hover:border-white/40 outline-none shadow-none";

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {!isLogin && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            {/* Label with NO background */}
            <FieldLabel icon={<User size={10} />} label="Subject_Identity" />
            <div className="relative group bg-transparent">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#00D2DF] transition-colors duration-300" size={16} />
              <Input
                placeholder="Mohd Shaan"
                className={inputStyles}
                onChange={(e) => setters.setFullName(e.target.value)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Access_Email Field */}
      <div className="space-y-2">
        <FieldLabel icon={<Mail size={10} />} label="Access_Email" />
        <div className="relative group bg-transparent">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#00D2DF] transition-colors duration-300" size={16} />
          <Input
            type="email"
            placeholder="shaan@intervexia.com"
            className={inputStyles}
            onChange={(e) => setters.setEmail(e.target.value)}
          />
        </div>
      </div>

      {/* Security_Key Field */}
      <div className="space-y-2">
        <FieldLabel icon={<Lock size={10} />} label="Security_Key" />
        <div className="relative group bg-transparent">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#00D2DF] transition-colors duration-300" size={16} />
          <Input
            type="password"
            placeholder="••••••••"
            className={inputStyles}
            onChange={(e) => setters.setPassword(e.target.value)}
          />
        </div>
      </div>

      {/* Operational_Stack (Dropdown) */}
      {!isLogin && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <FieldLabel icon={<Terminal size={10} />} label="Operational_Stack" />

          <Select onValueChange={setters.setRole}>
            <SelectTrigger
              className="h-12 px-5 !bg-transparent border-white/20 rounded-xl text-white focus:ring-0 focus:border-[#00D2DF] transition-all duration-300 group overflow-hidden outline-none hover:border-white/40 shadow-none"
            >
              <div className="flex items-center gap-4 w-full">
                <Cpu size={16} className="text-[#00D2DF] opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors flex-1 text-left">
                  <SelectValue placeholder="SELECT_DOMAIN_STACK" />
                </div>
              </div>
            </SelectTrigger>

            <SelectContent className="bg-[#020609] border-white/10 shadow-[0_25px_60px_rgba(0,0,0,1)] backdrop-blur-3xl rounded-xl">
              {ROLES.map(r => (
                <SelectItem 
                  key={r} 
                  value={r} 
                  className="text-slate-400 focus:bg-[#00D2DF]/10 focus:text-[#00D2DF] cursor-pointer font-mono text-[10px] uppercase tracking-widest py-3 border-b border-white/[0.03] last:border-none"
                >
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>
      )}

      {/* Auth Meta Info */}
      <div className="pt-6 flex items-center gap-4 opacity-10 select-none">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white" />
        <span className="text-[7px] font-mono tracking-[0.6em] text-white uppercase italic">
          Verifying_Secure_Tunnel
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white" />
      </div>
    </div>
  );
};

// Fixed FieldLabel with ABSOLUTELY NO Background
function FieldLabel({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-2 ml-1 bg-transparent">
      {/* Small marker dot */}
      <div className="w-1 h-1 rounded-full bg-slate-800 group-focus-within:bg-[#00D2DF] group-focus-within:shadow-[0_0_8px_#00D2DF] transition-all" />
      
      {/* Label Text - Pure transparent background */}
      <label className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-slate-500 group-focus-within:text-slate-300 transition-colors flex items-center gap-2 bg-transparent">
        {icon} {label}
      </label>
    </div>
  );
}