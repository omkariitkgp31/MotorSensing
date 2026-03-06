import React from 'react';

const ActiveDashboard = ({ user, onLogout }) => {
    return (
        <section style={{ minHeight: '100vh', paddingTop: '80px', background: 'var(--bg-primary)' }}>
            {/* Top Bar inside Dashboard */}
            <div style={{ padding: '2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Welcome, {user.name}</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Diagnostic workspace ready for analysis.</p>
                </div>
                <button onClick={onLogout} className="button-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                    Sign Out
                </button>
            </div>

            <div className="container" style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>

                {/* Left Control Panel */}
                <div className="glass-panel" style={{ padding: '2rem', height: 'fit-content' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-4"></path></svg>
                        Diagnostic Controls
                    </h3>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Select Target Motor</label>
                        <select style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', borderRadius: '8px', cursor: 'pointer' }}>
                            <option>Motor Unit Alpha-1</option>
                            <option>Motor Unit Beta-2</option>
                            <option>Conveyor Drive C</option>
                        </select>
                    </div>

                    <div style={{ padding: '1.5rem', border: '1px dashed var(--accent-primary)', borderRadius: '8px', textAlign: 'center', backgroundColor: 'rgba(6, 182, 212, 0.05)', cursor: 'pointer', marginBottom: '2rem' }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" style={{ marginBottom: '0.5rem' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                        <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>Upload CSV Dataset</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>or drag and drop</div>
                    </div>

                    <button className="button-primary" style={{ width: '100%' }}>Run AI Analysis</button>
                </div>

                {/* Right Visualization Area */}
                <div className="glass-panel" style={{ padding: '2rem', position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem' }}>Live Telemetry Window</h3>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>System Online</span>
                        </div>
                    </div>

                    {/* Mock Chart Area */}
                    <div style={{ width: '100%', height: '350px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
                        <img src="/motor_diagnostic_dashboard.png" alt="Diagnostic Chart" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, var(--bg-primary), transparent 50%)' }} />
                    </div>

                    {/* Rapid Results Cards */}
                    <div className="grid-3" style={{ marginTop: '2rem', gap: '1rem' }}>
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Current Prediction</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f8fafc', marginTop: '0.25rem' }}>Healthy</div>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Confidence Score</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-primary)', marginTop: '0.25rem' }}>99.2%</div>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Processing Time</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-secondary)', marginTop: '0.25rem' }}>45 ms</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ActiveDashboard;
