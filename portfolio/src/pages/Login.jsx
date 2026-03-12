import React, { useState } from 'react';
import { useNavigate, useLocation, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If already logged in, redirect to admin
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
      setError("Secure access denied. Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <Link to="/" className="absolute top-8 left-8 text-primary hover:text-white transition-colors z-10 flex items-center gap-2">
        &larr; Back to Portfolio
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-8 rounded-3xl w-full max-w-md z-10 border border-white/10 shadow-2xl bg-surface/80 backdrop-blur-xl"
      >
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary border border-primary/20 shadow-inner">
            <Lock size={36} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">System Login</h2>
          <p className="text-text-muted text-sm mt-3 font-medium">Authentication required to access this area.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-muted ml-1 uppercase tracking-wider text-xs">Admin Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white font-mono placeholder:text-white/20"
            />
          </div>
          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }}
              className="text-red-400 text-sm flex items-center gap-3 bg-red-500/10 p-4 rounded-xl border border-red-500/20"
            >
              <ShieldAlert size={18} className="shrink-0" /> 
              <span className="font-medium">{error}</span>
            </motion.div>
          )}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 active:scale-[0.98] mt-4"
          >
            Authenticate
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
