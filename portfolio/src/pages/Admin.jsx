import React, { useState, useEffect } from "react";
import { LogOut, Trash2, Mail, Calendar, User, AlignLeft, Loader2, ArrowLeft, MessageSquare, BarChart3, Inbox } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../supabase";

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching contacts:', error);
    } else {
      setContacts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();

    // Set up real-time subscription
    const subscription = supabase
      .channel('public:contacts')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contacts' }, () => {
        fetchContacts();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        const { error } = await supabase
          .from('contacts')
          .delete()
          .eq('id', id);
        
        if (error) throw error;
      } catch (err) {
        console.error("Error deleting record: ", err);
      }
    }
  };

  const formatDate = (date) => {
    if (!date) return "Just now";
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30">
      {/* Sidebar / Top Nav */}
      <nav className="border-b-2 border-slate-200 bg-white sticky top-0 z-50 px-6 py-4">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowLeft size={20} />
              </div>
              <span className="font-black uppercase tracking-widest text-[10px]">Back to Portfolio</span>
            </Link>
            <div className="h-8 w-[2px] bg-slate-100 hidden md:block" />
            <h1 className="text-xl font-black tracking-tighter uppercase hidden md:block">
              Command <span className="text-primary">Center.</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={handleLogout}
              className="px-6 py-2.5 bg-red-50 text-red-500 font-black uppercase tracking-widest text-[10px] rounded-xl border-2 border-transparent hover:border-red-200 transition-all flex items-center gap-2"
            >
              <LogOut size={14} />
              Secure Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-[1600px] mx-auto p-6 md:p-12">
        {/* Header Section */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <div>
              <span className="text-primary font-black uppercase tracking-[0.5em] text-xs mb-6 block">Admin Dashboard</span>
              <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8">
                INCOMING <br /> <span className="text-transparent border-text" style={{ WebkitTextStroke: '1px var(--color-text)' }}>VIBES.</span>
              </h2>
            </div>
            
            <div className="flex gap-4">
               <div className="bg-surface border-2 border-slate-200 p-8 rounded-[2.5rem] flex flex-col justify-between min-w-[200px]">
                  <BarChart3 className="text-primary mb-4" size={32} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-1">Total Reach</p>
                    <p className="text-5xl font-black tracking-tighter">{contacts.length}</p>
                  </div>
               </div>
               <div className="bg-primary text-white p-8 rounded-[2.5rem] flex flex-col justify-between min-w-[200px] shadow-xl shadow-primary/20">
                  <MessageSquare className="mb-4" size={32} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">Unread</p>
                    <p className="text-5xl font-black tracking-tighter">{contacts.length}</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-40">
            <Loader2 className="w-16 h-16 text-primary animate-spin mb-6" />
            <span className="font-black uppercase tracking-widest text-xs">Synchronizing Data...</span>
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-40 bg-surface border-2 border-dashed border-slate-200 rounded-[4rem]">
            <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
              <Inbox size={40} className="text-slate-300" />
            </div>
            <h3 className="text-3xl font-black tracking-tighter mb-4">Radio Silence.</h3>
            <p className="text-text-muted font-medium">Your inbox is currently empty. Go get some leads!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {contacts.map((contact, index) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  key={contact.id} 
                  className="bg-surface border-2 border-slate-200 p-8 rounded-[3rem] hover:border-primary transition-all duration-500 group relative"
                >
                  <button 
                    onClick={() => handleDelete(contact.id)}
                    className="absolute top-6 right-6 p-3 bg-red-50 text-red-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 size={18} />
                  </button>

                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm">
                         <User size={20} />
                       </div>
                       <div className="overflow-hidden">
                          <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-1">Sender</p>
                          <h4 className="text-xl font-black tracking-tighter truncate">{contact.FullName}</h4>
                       </div>
                    </div>

                    <div className="space-y-3">
                       <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm font-bold text-primary hover:underline group/link">
                          <div className="w-8 h-8 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                            <Mail size={14} />
                          </div>
                          <span className="truncate">{contact.email}</span>
                       </a>
                       <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-text-muted">
                          <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                            <Calendar size={14} />
                          </div>
                          {formatDate(contact.created_at)}
                       </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-100 p-6 rounded-[2rem] relative">
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-slate-800 text-white text-[8px] font-black uppercase tracking-[0.2em] rounded-full">
                       Message
                    </div>
                    <p className="text-sm font-bold mb-3 text-secondary">{contact.subject || 'No Subject Line'}</p>
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-4 font-medium italic">
                      "{contact.message}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Funky Footer for Admin */}
      <footer className="mt-40 border-t-2 border-slate-200 p-12 text-center">
         <p className="text-[10px] font-black uppercase tracking-[0.5em] text-text-muted">
           Admin Security Layer 4.0 // Unauthorized Access is Logged
         </p>
      </footer>
    </div>
  );
};

export default Admin;
