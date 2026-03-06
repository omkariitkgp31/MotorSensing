import React from 'react';

const Problem = () => {
    return (
        <section id="problem" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="section-title">
                    <div style={{ display: 'inline-block', color: 'var(--accent-secondary)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>The Challenge</div>
                    <h2>Industrial Unplanned Downtime</h2>
                    <p>Traditional fault detection methods are manual, inefficient, and fail to prevent catastrophic failures before they occur.</p>
                </div>

                <div className="grid-3">
                    <div className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid var(--accent-primary)' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Widespread Usage</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Induction motors are widely used in critical industrial environments. Their reliable operation is the backbone of modern manufacturing.</p>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid #ef4444' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem', color: '#ef4444' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Unexpected Failures</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Unexpected motor failures cause operational downtime, leading to millions in financial losses and safety risks to personnel.</p>
                    </div>

                    <div className="glass-panel glow-border" style={{ padding: '2rem' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>The Solution Needed</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>There is an urgent need for an <strong style={{ color: 'var(--text-primary)' }}>automated, scalable, and accurate</strong> motor health monitoring system driven by AI.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
