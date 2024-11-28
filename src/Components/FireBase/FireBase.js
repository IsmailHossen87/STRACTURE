// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAK9dtl8dZvEWVrv_wCffpnUGEzvIoRnJk",
  authDomain: "a-10-6a586.firebaseapp.com",
  projectId: "a-10-6a586",
  storageBucket: "a-10-6a586.firebasestorage.app",
  messagingSenderId: "965132711768",
  appId: "1:965132711768:web:43214a26df83ccdfb6572d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;