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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginBottom: '4rem'
                }}>
                    <div>
                        <div className="flex-center" style={{ gap: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
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

                        <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 1.5rem 0', display: 'flex', gap: '1.5rem' }}>
                            <li><a href="#home" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Project Overview</a></li>
                            <li><a href="#problem" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Industrial Problem Space</a></li>
                            <li><a href="#methodology" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Signal Processing Pipeline</a></li>
                        </ul>
                        <div style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600 }}>
                            Course: Information System Project<br />
                            Course Code: IM39204
                        </div>
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
