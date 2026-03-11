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
