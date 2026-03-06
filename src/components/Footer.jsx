import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '4rem',
            background: '#020408',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative glow at the very bottom */}
            <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '5px', background: 'linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), transparent)', filter: 'blur(5px)' }} />

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    <div>
                        <div className="flex-center" style={{ gap: '0.75rem', justifyContent: 'flex-start', marginBottom: '1.5rem' }}>
                            <div className="glow-border" style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px',
                                background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-primary))',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'var(--accent-primary)'
                            }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                </svg>
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'Outfit', letterSpacing: '-0.5px' }}>
                                Motor<span className="gradient-text">Sense AI</span>
                            </span>
                        </div>

                        <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>ML-Based Fault Diagnosis of Induction Motor Using Current Signature Analysis</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            An academic engineering project aimed at revolutionizing industrial predictive maintenance through artificial intelligence.
                        </p>

                        <div style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600 }}>
                            Course: Information System Project<br />
                            Course Code: IM39204
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Project Team Members</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { name: 'Omkar Singh', role: 'Machine Learning Lead' },
                                { name: 'Sahil Arman', role: 'Signal Processing' },
                                { name: 'Md Ahsan Eqbal', role: 'Backend Architecture' },
                                { name: 'Ayan Ansari', role: 'Frontend & UI Demo' }
                            ].map((member, idx) => (
                                <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{member.name}</span>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{member.role}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="#home" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Project Overview</a></li>
                            <li><a href="#problem" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Industrial Problem Space</a></li>
                            <li><a href="#methodology" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Signal Processing Pipeline</a></li>
                            <li><a href="#architecture" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>System Architecture</a></li>
                            <li><a href="#results" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Model Performance</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--border-color)',
                    padding: '2rem 0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        “AI-Driven Predictive Maintenance for Industrial Motors”
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
