import React from 'react';

const Methodology = () => {
    const steps = [
        { title: "Raw Sensor Signal", desc: "High-frequency current & vibration data collection." },
        { title: "Signal Segmentation", desc: "Slicing continuous data into discrete processing windows." },
        { title: "Wavelet Denoising", desc: "Removing industrial noise while preserving fault features." },
        { title: "FFT Transformation", desc: "Converting time-series data to the frequency domain." },
        { title: "Feature Standardization", desc: "Normalizing spectral features for model input." },
        { title: "1D CNN Model", desc: "Extracting deep spatial hierarchies from 1D sequences." },
        { title: "Fault Prediction", desc: "Multi-class softmax output for 11 specific motor conditions." }
    ];

    return (
        <section id="methodology" className="section-padding" style={{ position: 'relative' }}>
            {/* Decorative gradient */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '20vh', background: 'var(--accent-primary)', filter: 'blur(200px)', opacity: 0.1, zIndex: -1 }} />

            <div className="container">
                <div className="section-title">
                    <div style={{ display: 'inline-block', color: 'var(--accent-secondary)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Data Pipeline</div>
                    <h2>Methodology Workflow</h2>
                    <p>A robust end-to-end pipeline designed to process noisy industrial signals into highly accurate diagnostic predictions.</p>
                </div>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Vertical connecting line */}
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '2px', background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))', transform: 'translateX(-50%)', opacity: 0.3 }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex-center" style={{ position: 'relative', width: '100%', justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end' }}>

                                {/* Connector Dot */}
                                <div style={{
                                    position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                                    width: '16px', height: '16px', borderRadius: '50%',
                                    background: 'var(--bg-primary)', border: '4px solid var(--accent-primary)',
                                    boxShadow: '0 0 15px var(--accent-primary)', zIndex: 2
                                }} />

                                <div className="glass-panel hover-scale" style={{
                                    width: 'calc(50% - 3rem)',
                                    padding: '1.5rem',
                                    position: 'relative',
                                    borderLeft: idx % 2 === 0 ? 'none' : '4px solid var(--accent-primary)',
                                    borderRight: idx % 2 === 0 ? '4px solid var(--accent-secondary)' : 'none',
                                    textAlign: idx % 2 === 0 ? 'right' : 'left',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{step.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{step.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
        .hover-scale:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.2);
        }
        @media(max-width: 768px) {
          #methodology .flex-center { justify-content: flex-end !important; }
          #methodology .glass-panel { width: calc(100% - 3rem) !important; text-align: left !important; border-left: 4px solid var(--accent-primary) !important; border-right: none !important; }
          #methodology > div > div:nth-child(2) > div:first-child { left: 1rem !important; }
          #methodology .flex-center > div:first-child { left: 1rem !important; }
        }
      `}</style>
        </section>
    );
};

export default Methodology;
