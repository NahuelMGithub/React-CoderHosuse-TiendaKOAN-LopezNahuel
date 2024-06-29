import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBbF59CKhuvx4JLOJs2YNoEBnCZYxvVqeE",
  authDomain: "coderhouse-react-20cd0.firebaseapp.com",
  projectId: "coderhouse-react-20cd0",
  storageBucket: "coderhouse-react-20cd0.appspot.com",
  messagingSenderId: "928038949313",
  appId: "1:928038949313:web:98cdb5eddf332cf3bd9f40"
};


const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
