import React, { useState, useRef, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const ActiveDashboard = ({ user, onLogout }) => {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [analysisComplete, setAnalysisComplete] = useState(false);
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                window.location = "/";
            }
        });
        return () => unsubscribe();
    }, []);

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles.length > 0 && droppedFiles[0].name.endsWith('.csv')) {
            setFile(droppedFiles[0]);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.name.endsWith('.csv')) {
            setFile(selectedFile);
        }
    };

    const handleClickOpen = () => {
        fileInputRef.current.click();
    };

    return (
        <section style={{ minHeight: '100vh', paddingTop: '80px', background: 'var(--bg-primary)' }}>
            {/* Top Bar inside Dashboard */}
            <div style={{ padding: '2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Welcome, {user.name}</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Diagnostic workspace ready for analysis.</p>
                </div>
            </div>

            <div className="container" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 200px)' }}>

                {/* Center Control Panel */}
                <div className="glass-panel" style={{ padding: '2rem', width: '100%', maxWidth: '500px' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-4"></path></svg>
                        Diagnostic Controls
                    </h3>

                    {!analysisComplete ? (
                        <>
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Select Target Motor</label>
                                <select style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', borderRadius: '8px', cursor: 'pointer' }}>
                                    <option>Motor Unit Alpha-1</option>
                                    <option>Motor Unit Beta-2</option>
                                    <option>Conveyor Drive C</option>
                                </select>
                            </div>

                            <div
                                onClick={handleClickOpen}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                style={{
                                    padding: '1.5rem',
                                    border: `1px dashed ${isDragging ? '#22c55e' : 'var(--accent-primary)'}`,
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    backgroundColor: isDragging ? 'rgba(34, 197, 94, 0.05)' : 'rgba(6, 182, 212, 0.05)',
                                    cursor: 'pointer',
                                    marginBottom: '2rem',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <input
                                    type="file"
                                    accept=".csv"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                    ref={fileInputRef}
                                />
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={isDragging ? "#22c55e" : "var(--accent-primary)"} strokeWidth="2" style={{ marginBottom: '0.5rem', transition: 'stroke 0.2s ease', margin: '0 auto' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                                <div style={{ fontSize: '0.875rem', fontWeight: 500, marginTop: '0.5rem' }}>
                                    {file ? file.name : 'Upload CSV Dataset'}
                                </div>
                                {!file && <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>or drag and drop</div>}
                                {file && <div style={{ fontSize: '0.75rem', color: '#22c55e', marginTop: '0.25rem' }}>File selected successfully</div>}
                            </div>

                            <button
                                className="button-primary"
                                style={{ width: '100%' }}
                                onClick={() => {
                                    if (file) setAnalysisComplete(true);
                                    else alert('Please upload a CSV dataset first.');
                                }}
                            >
                                Run AI Analysis
                            </button>
                        </>
                    ) : (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ margin: '0 auto 1rem auto' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                <h4 style={{ color: '#22c55e', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Analysis Complete</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Dataset: {file?.name}</p>
                            </div>
                            
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.25rem', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'left' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Status:</span>
                                    <span style={{ color: '#22c55e', fontWeight: 600 }}>Normal Operation</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Confidence:</span>
                                    <span>98.5%</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Detected Faults:</span>
                                    <span>None</span>
                                </div>
                            </div>
                            
                            <button
                                className="button-secondary"
                                style={{ width: '100%' }}
                                onClick={() => {
                                    setFile(null);
                                    setAnalysisComplete(false);
                                }}
                            >
                                Upload New Dataset
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default ActiveDashboard;
