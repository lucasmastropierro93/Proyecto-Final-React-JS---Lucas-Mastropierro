import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYH7VfMzGAcgEG5DMHCFB6Of-2So_xpMo",
  authDomain: "mwine-6300d.firebaseapp.com",
  projectId: "mwine-6300d",
  storageBucket: "mwine-6300d.appspot.com",
  messagingSenderId: "693493326088",
  appId: "1:693493326088:web:8b8ec8106502b0d23dccbd"
};

 initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
