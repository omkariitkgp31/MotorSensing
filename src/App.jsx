import React, { useState, useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./components/firebase";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Methodology from './components/Methodology'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import ActiveDashboard from './components/ActiveDashboard'

function App() {
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#home');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        if (currentUser.emailVerified === false && currentUser.providerData.some(p => p.providerId === 'password')) {
          // If they just signed up via email/password and aren't verified yet, ignore their session globally
          signOut(auth);
          setUser(null);
          return;
        }

        setUser({ name: currentUser.displayName || currentUser.email.split('@')[0], email: currentUser.email });
        setIsAuthModalOpen(false); // Close modal when login completes
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = (userData) => {
    // Fallback if needed
    setIsAuthModalOpen(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
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
            {currentHash === '#home' && <Hero />}
            {currentHash === '#problem' && <Problem />}
            {currentHash === '#methodology' && <Methodology />}
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
