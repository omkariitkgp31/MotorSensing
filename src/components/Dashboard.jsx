import React from 'react';

const Dashboard = () => {
    const scopeItems = [
        "Multi-sensor fusion (temperature + acoustic)",
        "Edge deployment on Jetson Nano / Raspberry Pi",
        "Transfer learning for varying motor capacities",
        "Integration with enterprise ERP/CMMS systems"
    ];

    return (
        <section id="future" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">

                {/* Dashboard Showcase */}
                <div className="grid-2" style={{ alignItems: 'center', gap: '4rem', marginBottom: '8rem' }}>
                    <div className="order-2 order-md-1">
                        <div style={{ display: 'inline-block', color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Interactive UI</div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Real-Time Diagnostic Dashboard</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                            Our frontend system isn't just a static display—it's a fully interactive tool for engineers to monitor health and dissect anomalies on the fly.
                        </p>

                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                "Upload raw vibration CSV file for batch processing",
                                "Automatic signal detrending and preprocessing",
                                "Fault prediction with percentage confidence scores",
                                "Live visualization of denoised signals and FFT spectrums",
                                "Historical logging of predictions for trend analysis"
                            ].map((feature, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ color: 'var(--accent-primary)' }}>✓</div>
                                    <span style={{ color: 'var(--text-primary)' }}>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="button-primary" style={{ marginTop: '2.5rem' }}>
                            Launch Interface
                        </button>
                    </div>

                    <div className="order-1 order-md-2" style={{ position: 'relative' }}>
                        {/* Decorative background glow behind the dashboard image */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'var(--accent-primary)', filter: 'blur(100px)', opacity: 0.2, zIndex: -1 }} />

                        <div className="glass-panel glow-border" style={{ padding: '0.5rem', transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.6)' }}>
                            <img
                                src="/motor_diagnostic_dashboard.png"
                                alt="Motor Diagnostic Dashboard UI"
                                style={{ width: '100%', borderRadius: '12px', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <style>{`
        @media(max-width: 968px) {
          #future .grid-2 { display: flex; flexDirection: column; }
          .order-1 { order: 1; }
          .order-2 { order: 2; }
        }
      `}</style>
        </section>
    );
};

export default Dashboard;
