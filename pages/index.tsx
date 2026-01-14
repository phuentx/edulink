import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', { method: 'POST' });
      const config = await res.json();
      const app = initializeApp(config);
      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('userName', userCredential.user.email?.split('@')[0] || 'User');
      window.location.href = "/hi"; 
    } catch (err) {
      alert("Login failed! Please check your credentials.");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <form onSubmit={handleLogin} style={{ border: '1px solid #ddd', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
        <h2>Edulinki Login</h2>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={inputStyle} required />
        <button type="submit" style={btnStyle}>Sign In</button>
      </form>
    </div>
  );
}

const inputStyle = { display: 'block', width: '100%', padding: '12px', margin: '10px 0', borderRadius: '6px', border: '1px solid #ccc' };
const btnStyle = { width: '100%', padding: '12px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' };
