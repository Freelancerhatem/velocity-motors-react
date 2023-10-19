// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN84ONAQnNWSpnuCLTZNZLdq1xdMty-1c",
  authDomain: "velocity-motors-devhatem.firebaseapp.com",
  projectId: "velocity-motors-devhatem",
  storageBucket: "velocity-motors-devhatem.appspot.com",
  messagingSenderId: "887635794253",
  appId: "1:887635794253:web:6f0a17f8aa35919966ff04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;






/**
 *  apiKey:import.meta.env.VITE_APIKEY ,
  authDomain:import.meta.env.VITE_AUTHDOMAIN ,
  projectId:import.meta.env.VITE_PROJECTID ,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET ,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID ,
  appId:import.meta.env.VITE_APPID
 */