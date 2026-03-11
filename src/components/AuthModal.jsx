import React, { useState } from 'react';
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";
const provider = new GoogleAuthProvider();

const AuthModal = ({ isOpen, onClose, onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

    if (!isOpen) return null;
    const handleLogin = async (e) => {
        if (e) e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            if (!userCredential.user.emailVerified) {
                alert("Please verify your email before logging in.");
                return;
            }

            console.log("Login successful:", userCredential.user);
            window.location.href = "/#dashboard";
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSignup = async (e) => {
        if (e) e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCredential.user);
            alert("Verification email sent. Please check your inbox.");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Account already exists. Please sign in.");
            } else {
                alert(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e) => {
        if (e) e.preventDefault();
        setError(null);
        if (!email) {
            setError("Please enter your email to reset password.");
            return;
        }
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Password reset email sent");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError(null);
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(3, 7, 18, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            zIndex: 9999
        }}>
            <div className="glass-panel animate-fade-in" style={{
                position: 'relative', width: '100%', maxWidth: '420px', padding: '2.5rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                border: '1px solid var(--accent-primary)'
            }}>
                {/* Close Button */}
                <button onClick={onClose} style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'transparent', border: 'none', color: 'var(--text-secondary)',
                    cursor: 'pointer', padding: '0.5rem'
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ display: 'inline-flex', justifyContent: 'center', color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                    </div>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {isLogin ? 'Sign in to access the Motor Diagnostics Dashboard' : 'Join to start monitoring your industrial motors'}
                    </p>
                    {error && <div style={{ marginTop: '1rem', color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.875rem' }}>{error}</div>}
                </div>

                <form onSubmit={isLogin ? handleLogin : handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white',
                                outline: 'none', transition: 'border-color 0.2s', fontFamily: 'Inter'
                            }}
                            placeholder="engineer@company.com"
                        />
                    </div>

                    <div>
                        <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Password</label>
                            {isLogin && <button type="button" onClick={handleResetPassword} style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', background: 'none', border: 'none', cursor: 'pointer' }}>Forgot password?</button>}
                        </div>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white',
                                outline: 'none', transition: 'border-color 0.2s', fontFamily: 'Inter'
                            }}
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="submit" className="button-primary" disabled={loading} style={{ width: '100%', padding: '0.875rem', marginTop: '0.5rem' }}>
                        {isLogin ? (loading ? 'Signing In...' : 'Sign In') : (loading ? 'Signing Up...' : 'Sign Up')}
                    </button>
                </form>

                <div style={{ position: 'relative', textAlign: 'center', margin: '1.5rem 0' }}>
                    <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--border-color)' }} />
                    <span style={{ position: 'relative', background: 'var(--bg-primary)', padding: '0 0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        OR CONTINUE WITH
                    </span>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="button-secondary"
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', padding: '0.75rem' }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" /></svg>
                    Google
                </button>

                <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
                    >
                        {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
