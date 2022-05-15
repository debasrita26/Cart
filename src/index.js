import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByVl3qQZjxC-9yrL84TYc9n8yCpWV3xy0",
  authDomain: "cart-95df9.firebaseapp.com",
  projectId: "cart-95df9",
  storageBucket: "cart-95df9.appspot.com",
  messagingSenderId: "1073558434220",
  appId: "1:1073558434220:web:e7ffcaa53713806d384a09"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
