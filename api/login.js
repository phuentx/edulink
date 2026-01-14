// api/login.js
export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const firebaseConfig = {
    // Reminder for me ---- In Vercel, replace these strings with process.env.YOUR_VARIABLE_NAME
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyAJH79UQl0rc96Qug0DKLevO4ZI_sn8Kno",
    authDomain: "edulinki.firebaseapp.com",
    projectId: "edulinki",
    storageBucket: "edulinki.firebasestorage.app",
    messagingSenderId: "248886466474",
    appId: "1:248886466474:web:160043201a6b28bafbbdd3",
    measurementId: "G-MQBH12VL7N",
  };

  res.status(200).json(firebaseConfig);
}
