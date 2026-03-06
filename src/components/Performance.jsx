import React from 'react';

const Performance = () => {
    const stats = [
        { label: "Training Accuracy", value: "92%", color: "var(--accent-primary)" },
        { label: "Validation Accuracy", value: "88%", color: "var(--accent-secondary)" },
        { label: "Total Epochs", value: "50", color: "#22c55e" },
        { label: "Loss Reduction", value: "2.12 → 0.45", color: "#eab308" }
    ];

    const optimizations = [
        "Adam Optimizer", "Batch Normalization", "Gradient Clipping", "Early Stopping"
    ];

    return (
        <section id="results" className="section-padding">
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ display: 'inline-block', color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Results & Metrics</div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Deep Learning Performance</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
                        Our 1D CNN architecture achieves high multi-class classification accuracy across 11 distinct induction motor fault conditions.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid-4" style={{ marginBottom: '4rem' }}>
                    {stats.map((stat, idx) => (
                        <div key={idx} className="glass-panel" style={{ padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: stat.color }} />
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: stat.color, marginBottom: '0.5rem', fontFamily: 'Outfit' }}>
                                {stat.value}
                            </div>
                            <div style={{ color: 'var(--text-secondary)', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '1px' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Architecture Details split */}
                <div className="grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>

                    <div className="glass-panel" style={{ padding: '2.5rem', background: 'rgba(139, 92, 246, 0.05)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                            Model Architecture
                        </h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>01 //</span>
                                <span>Conv1D sequence: <strong>32 → 64 → 128</strong> filters</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>02 //</span>
                                <span><strong>Batch Normalization</strong> applied after every convolution</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>03 //</span>
                                <span><strong>Dropout (0.3 - 0.4)</strong> for robust regularization</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>04 //</span>
                                <span><strong>Global Average Pooling</strong> to reduce dimensionality</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>05 //</span>
                                <span><strong>Softmax</strong> classification layer targeting 11 fault classes</span>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-panel" style={{ padding: '2.5rem', background: 'rgba(6, 182, 212, 0.05)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg>
                            Optimization Techniques
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {optimizations.map((opt, i) => (
                                <div key={i} style={{
                                    padding: '0.75rem 1.25rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(6, 182, 212, 0.2)',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    color: 'var(--text-primary)'
                                }}>
                                    {opt}
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid var(--accent-primary)' }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                These optimizations ensure the CNN converges rapidly during training without overfitting to the specific motor noise profiles in the dataset.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Performance;
