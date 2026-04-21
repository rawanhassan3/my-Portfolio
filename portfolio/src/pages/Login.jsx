import React, { useState } from 'react';
import { useNavigate, useLocation, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, ShieldAlert, ArrowLeft, KeyRound, Fingerprint } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError("AUTHENTICATION FAILED: INVALID SECURITY CLEARANCE.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row relative overflow-hidden">
      {/* Visual Side */}
      <div className="hidden md:flex md:w-1/2 bg-slate-900 relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-primary rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary rounded-full blur-[150px]" />
        </div>
        
        <div className="relative z-10 text-white">
           <motion.span 
             initial={{ x: -20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             className="text-primary font-black uppercase tracking-[0.5em] text-xs mb-8 block"
           >
             Security Gateway
           </motion.span>
           <h1 className="text-[10rem] font-black tracking-tighter leading-[0.8] mb-12">
             ADMIN <br /> <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>ONLY.</span>
           </h1>
           <p className="text-xl text-white/50 max-w-sm font-medium leading-tight">
             This area is restricted to authorized personnel. Please provide your high-level security clearance.
           </p>
        </div>

        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-20 w-24 h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl flex items-center justify-center text-white/20"
        >
          <Fingerprint size={48} />
        </motion.div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-white relative">
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="font-black uppercase tracking-widest text-[10px]">Return Home</span>
        </Link>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="mb-12">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 text-primary">
              <KeyRound size={32} />
            </div>
            <h2 className="text-4xl font-black tracking-tighter mb-2 italic">WELCOME BACK.</h2>
            <p className="text-text-muted font-medium">Please enter your master password below.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Secret Key</label>
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-primary focus:bg-white outline-none transition-all font-black tracking-widest placeholder:text-slate-300"
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-5 bg-red-50 border-2 border-red-100 rounded-2xl flex items-center gap-4 text-red-600"
                >
                  <ShieldAlert size={20} className="shrink-0" /> 
                  <span className="text-[10px] font-black uppercase tracking-widest leading-tight">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white font-black uppercase tracking-[0.2em] text-xs py-6 rounded-2xl transition-all shadow-xl shadow-primary/20 active:scale-[0.98] mt-4"
            >
              Verify Identity
            </button>
          </form>

          <p className="mt-12 text-center text-[8px] font-black uppercase tracking-[0.3em] text-slate-300">
            Encrypted Connection // Protocol 7-X
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
