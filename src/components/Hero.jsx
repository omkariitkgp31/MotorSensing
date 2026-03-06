import React from 'react';

const Hero = () => {
    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '80px',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative background elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: '40vw',
                height: '40vw',
                background: 'var(--accent-primary)',
                filter: 'blur(150px)',
                opacity: 0.15,
                borderRadius: '50%',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '0%',
                right: '5%',
                width: '40vw',
                height: '40vw',
                background: 'var(--accent-secondary)',
                filter: 'blur(150px)',
                opacity: 0.15,
                borderRadius: '50%',
                zIndex: -1
            }} />

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                {/* Left Content */}
                <div className="animate-fade-in" style={{ zIndex: 1 }}>
                    <div className="glass-panel" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.25rem 1rem',
                        borderRadius: '2rem',
                        marginBottom: '1.5rem',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        border: '1px solid rgba(6, 182, 212, 0.3)'
                    }}>
                        <span style={{
                            width: '8px', height: '8px',
                            borderRadius: '50%',
                            background: 'var(--accent-primary)',
                            marginRight: '0.5rem',
                            boxShadow: '0 0 10px var(--accent-primary)'
                        }} />
                        Academic Engineering Project
                    </div>

                    <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                        <span style={{ display: 'block' }}>AI Powered</span>
                        <span className="gradient-text">Motor Fault Detection</span>
                    </h1>

                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '540px', lineHeight: 1.7 }}>
                        An automated machine learning system that detects faults in induction motors using current signature analysis.
                    </p>

                    <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2.5rem', background: 'rgba(15, 23, 42, 0.6)' }}>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                            Industrial motors are critical components in manufacturing systems. Unexpected failures cause downtime and financial losses. This project introduces an intelligent AI-based monitoring system capable of identifying motor faults automatically.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <button className="button-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                            View System Architecture
                        </button>
                        <button className="button-secondary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                            Explore Model
                        </button>
                    </div>
                </div>

                {/* Right Visual (Using the generated AI Motor Image) */}
                <div className="animate-fade-in" style={{ animationDelay: '0.2s', position: 'relative' }}>
                    <div className="glow-border glass-panel" style={{
                        width: '100%',
                        aspectRatio: '1/1',
                        position: 'relative',
                        padding: '1rem',
                        transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}>
                        <img
                            src="/hero_motor.png"
                            alt="Lightning Motor"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '12px'
                            }}
                        />
                    </div>

                    {/* Floating Element: Live Diagnosis */}
                    <div className="glass-panel" style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '-30px',
                        padding: '1rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        animation: 'fadeIn 1s ease forwards, float 6s ease-in-out infinite',
                        border: '1px solid rgba(6, 182, 212, 0.4)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Live Status</div>
                            <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f8fafc' }}>Healthy Operation</div>
                        </div>
                    </div>

                    {/* Floating Element: Confidence Score */}
                    <div className="glass-panel" style={{
                        position: 'absolute',
                        top: '40px',
                        right: '-20px',
                        padding: '1rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        animation: 'fadeIn 1s ease forwards, float 7s ease-in-out infinite reverse',
                        border: '1px solid rgba(139, 92, 246, 0.4)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}>
                        <div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>AI Confidence</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-secondary)' }}>99.8%</div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @media (max-width: 968px) {
          #home .container {
            grid-template-columns: 1fr;
          }
           #home h1 {
            font-size: 3rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
