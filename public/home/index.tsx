import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // 1. Fetch the keys from your backend API
      const response = await fetch('/api/login', { method: 'POST' });
      const firebaseConfig = await response.json();

      // 2. Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);

      // 3. Sign In
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Store user info and redirect
      localStorage.setItem('userName', userCredential.user.email?.split('@')[0] || 'User');
      window.location.href = "/hi";
    } catch (err: any) {
      setError("Failed to login. Please check your credentials.");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required 
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' },
  card: { padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' as const, width: '300px' },
  input: { width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' as const },
  button: { width: '100%', padding: '10px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default LoginPage;
