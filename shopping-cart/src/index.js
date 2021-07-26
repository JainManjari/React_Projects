import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZuNLCcHNVmbU_g77LZseuSwLBlrR-lNI",
  authDomain: "cart-990b7.firebaseapp.com",
  projectId: "cart-990b7",
  storageBucket: "cart-990b7.appspot.com",
  messagingSenderId: "845602071620",
  appId: "1:845602071620:web:9cef069033505ee4a20811"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


