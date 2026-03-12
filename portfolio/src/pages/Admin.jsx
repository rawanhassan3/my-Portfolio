import React, { useState, useEffect } from "react";
import { LogOut, Trash2, Mail, Calendar, User, AlignLeft, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const formatDate = (date) => {
    if (!date) return "Sending...";
    // If it's a Firebase Timestamp object
    if (date.seconds) {
      return new Date(date.seconds * 1000).toLocaleString();
    }
    // Fallback for strings
    return new Date(date).toLocaleString();
  };

  useEffect(() => {
    const q = query(collection(db, "contacts"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const contactList = [];
      querySnapshot.forEach((doc) => {
        contactList.push({ id: doc.id, ...doc.data() });
      });
      setContacts(contactList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (err) {
      console.error("Error deleting document: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6 lg:p-12 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4 bg-surface/30 p-6 rounded-3xl border border-white/5 glass shadow-xl"
        >
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
              Inbox Dashboard
            </h1>
            <p className="text-text-muted mt-2">Manage messages securely from your portfolio.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/" className="px-6 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-medium">
              View Portfolio
            </Link>
            <button 
              onClick={handleLogout}
              className="px-6 py-2.5 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-xl transition-all font-medium flex items-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </motion.header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-text-muted">Loading your messages...</p>
          </div>
        ) : contacts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-surface/30 rounded-3xl border border-white/5 glass"
          >
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-text-muted border border-white/10">
              <Mail size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Inbox is clean</h3>
            <p className="text-text-muted max-w-sm mx-auto">
              You're all caught up! New messages will appear here.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={contact.id} 
                className="glass p-6 rounded-3xl border border-white/5 bg-surface/30 hover:-translate-y-1 transition-transform relative group shadow-lg"
              >
                <button 
                  onClick={() => handleDelete(contact.id)}
                  className="absolute top-4 right-4 p-2 text-text-muted hover:text-red-500 bg-white/5 hover:bg-red-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Delete message"
                >
                  <Trash2 size={18} />
                </button>
                
                <div className="mb-4 space-y-2 pr-10">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <User size={16}/>
                    </div>
                    <span className="truncate">{contact.fullName}</span>
                  </h3>
                  <a href={`mailto:${contact.email}`} className="text-sm text-primary hover:underline flex items-center gap-2">
                    <Mail size={14} className="shrink-0" />
                    <span className="truncate">{contact.email}</span>
                  </a>
                  <p className="text-xs text-text-muted flex items-center gap-2">
                    <Calendar size={14} className="shrink-0" />
                    {formatDate(contact.date)}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="font-semibold text-sm mb-2 opacity-90">{contact.subject || 'No Subject'}</p>
                  <p className="text-text-muted text-sm whitespace-pre-wrap flex items-start gap-2">
                    <AlignLeft size={16} className="mt-1 shrink-0 opacity-50"/>
                    <span>{contact.message}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
