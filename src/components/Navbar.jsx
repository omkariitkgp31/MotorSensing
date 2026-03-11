import React, { useState, useEffect } from 'react';

const Navbar = ({ user, onLoginClick, onLogout }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = user ? [
        { name: 'Dashboard', href: '#dashboard' },
        { name: 'History', href: '#history' },
        { name: 'Settings', href: '#settings' }
    ] : [
        { name: 'Home', href: '#home' },
        { name: 'Problem', href: '#problem' },
        { name: 'Methodology', href: '#methodology' }
    ];

    return (
        <nav
            className={`flex-between ${scrolled ? 'glass-panel' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                transition: 'all 0.3s ease',
                zIndex: 1000,
                borderRadius: scrolled ? '0 0 16px 16px' : '0',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                background: scrolled ? 'var(--bg-glass)' : 'transparent',
                borderBottom: scrolled ? '1px solid var(--border-color)' : 'none'
            }}
        >
            <div className="flex-center" style={{ gap: '0.75rem' }}>
                <div className="glow-border" style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-primary))',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'var(--accent-primary)'
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                </div>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'Outfit', letterSpacing: '-0.5px' }}>
                    Motor<span className="gradient-text">Sense AI</span>
                </span>
            </div>

            <div className="desktop-nav flex-center" style={{ gap: '2rem' }}>
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                        {link.name}
                    </a>
                ))}
            </div>

            <div className="flex-center" style={{ gap: '1rem' }}>
                {user ? (
                    <div className="flex-center" style={{ gap: '1rem' }}>
                        <span style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{user.name}</span>
                        <button onClick={onLogout} className="button-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <button onClick={onLoginClick} className="button-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                        Log In / Sign Up
                    </button>
                )}
            </div>

            <style>{`
        @media(max-width: 968px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
