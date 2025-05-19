// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_qL01gmxzzfCiNO3eF4XifcsEhQMqCvs",
    authDomain: "agape-prime-hotel.firebaseapp.com",
    projectId: "agape-prime-hotel",
    storageBucket: "agape-prime-hotel.firebasestorage.app",
    messagingSenderId: "319941503191",
    appId: "1:319941503191:web:8033187fc48318af492892",
    measurementId: "G-VN5Z4REXZ7"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);