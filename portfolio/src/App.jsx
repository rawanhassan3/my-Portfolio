import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import CustomCursor from "./components/CustomCursor";
import Grain from "./components/Grain";
import Preloader from "./components/Preloader";

function App() {
  return (
    <AuthProvider>
      <Preloader />
      <div className="bg-background text-text min-h-screen selection:bg-primary/30 selection:text-white">
        <CustomCursor />
        <Grain />
        
        {/* Subtle background accents for depth */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-8%] left-[-8%] w-[36%] h-[36%] bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[6%] right-[-4%] w-[30%] h-[30%] bg-accent/8 rounded-full blur-[100px]"></div>
          <div className="absolute top-[28%] right-[12%] w-[22%] h-[22%] bg-secondary/10 rounded-full blur-[100px]"></div>
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

