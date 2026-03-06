import React from 'react';

const Objectives = () => {
    const features = [
        {
            title: "Automated Diagnosis",
            desc: "Detect 11 different motor faults automatically without human intervention.",
            icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        },
        {
            title: "Advanced Extraction",
            desc: "Uses FFT and Wavelet Denoising to convert vibration signals into meaningful features.",
            icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        },
        {
            title: "Deep Learning Model",
            desc: "1D Convolutional Neural Network for high-accuracy multi-class classification.",
            icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        },
        {
            title: "Real-Time Inference",
            desc: "FastAPI backend enabling sub-second real-time predictions through a web dashboard.",
            icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>
        }
    ];

    return (
        <section id="objectives" className="section-padding">
            <div className="container">
                <div className="flex-between" style={{ flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem' }}>
                    <div style={{ maxWidth: '500px' }}>
                        <div style={{ display: 'inline-block', color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Core Objectives</div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Intelligent Monitoring Features</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                            We've engineered a comprehensive pipeline from signal processing to real-time neural network inference.
                        </p>
                    </div>

                    <div className="grid-2" style={{ flex: 1, gap: '1.5rem' }}>
                        {features.map((feat, idx) => (
                            <div key={idx} className="glass-panel" style={{ padding: '1.5rem', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{
                                    width: '40px', height: '40px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    marginBottom: '1rem', color: 'white'
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {feat.icon}
                                    </svg>
                                </div>
                                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{feat.title}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Objectives;
