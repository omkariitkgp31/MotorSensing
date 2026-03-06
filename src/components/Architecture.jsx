import React from 'react';

const Architecture = () => {
    const techStack = [
        { name: "React + Tailwind", icon: "⚛️", role: "Web Dashboard" },
        { name: "FastAPI", icon: "⚡", role: "Backend API" },
        { name: "Pandas/SciPy", icon: "📊", role: "Data Preprocessing" },
        { name: "TensorFlow", icon: "🧠", role: "1D CNN Model" },
        { name: "PostgreSQL", icon: "🐘", role: "Logging & Storage" }
    ];

    return (
        <section id="architecture" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="section-title">
                    <div style={{ display: 'inline-block', color: 'var(--accent-secondary)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>System Architecture</div>
                    <h2>Scalable Deployment Pipeline</h2>
                    <p>Built for production. A modular microservices architecture enabling real-time inference and seamless integration.</p>
                </div>

                <div className="grid-2" style={{ alignItems: 'center' }}>

                    {/* Left Diagram Block */}
                    <div className="glass-panel" style={{ padding: '3rem', position: 'relative' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {techStack.map((tech, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative' }}>

                                    <div className="glass-panel" style={{
                                        width: '100%', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem',
                                        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        <div style={{ fontSize: '1.5rem', width: '40px', height: '40px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            {tech.icon}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{tech.role}</div>
                                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{tech.name}</div>
                                        </div>
                                    </div>

                                    {/* Connecting Arrows (except last) */}
                                    {i < techStack.length - 1 && (
                                        <div style={{ position: 'absolute', bottom: '-1rem', left: '50%', transform: 'translateX(-50%)', color: 'var(--accent-primary)' }}>
                                            ↓
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Text Block */}
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Production-Ready Infrastructure</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                            The architecture is designed to handle continuous streams of motor sensor data. It ensures high throughput, low latency real-time predictions while maintaining a robust history database.
                        </p>

                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { title: 'Sub-second Real-Time Inference', desc: 'Optimized TensorFlow Serving and FastAPI routes guarantee instantaneous predictions.' },
                                { title: 'Scalable Docker Deployment', desc: 'Containerized microservices allow for easy deployment on edge devices or cloud servers.' },
                                { title: 'Interactive Plotly.js Charts', desc: 'Rich frontend visualizations for FFT spectrums and historical trend analysis.' }
                            ].map((item, idx) => (
                                <li key={idx} style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, marginTop: '2px' }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--bg-primary)" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Architecture;
