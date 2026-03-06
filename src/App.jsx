import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Objectives from './components/Objectives'
import Methodology from './components/Methodology'
import Architecture from './components/Architecture'
import Performance from './components/Performance'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import ActiveDashboard from './components/ActiveDashboard'

function App() {
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Navbar
        user={user}
        onLoginClick={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />

      <main>
        {user ? (
          <ActiveDashboard user={user} onLogout={handleLogout} />
        ) : (
          <>
            {/* The main unwrapped landing page content for non-logged-in users */}
            <Hero />
            <Problem />
            <Objectives />
            <Methodology />
            <Architecture />
            <Performance />
            <Dashboard />
          </>
        )}
      </main>

      <Footer />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  )
}

export default App
