// api/login.js
//I will add my admin SDK after learning about it
export default function handler(req, res) {
  const firebaseConfig = {
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
