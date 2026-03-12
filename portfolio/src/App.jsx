import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <div className="bg-background text-text min-h-screen selection:bg-primary/30 selection:text-white">
        {/* Background Decorative Blobs */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-accent/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[30%] right-[10%] w-[25%] h-[25%] bg-secondary/10 rounded-full blur-[120px]"></div>
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* The Login Route */}
            <Route path="/login" element={<Login />} />
            
            {/* The Protected Admin Route */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch all to redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;

