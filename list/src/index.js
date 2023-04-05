import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { initializeApp } from "firebase/app";
import {store} from "./redux/store";



const firebaseConfig = {
    apiKey: "AIzaSyBUL91ShYNX5AE0O1xsVop1sob3irCPQJc",
    authDomain: "todoproject-89496.firebaseapp.com",
    databaseURL: "https://todoproject-89496-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todoproject-89496",
    storageBucket: "todoproject-89496.appspot.com",
    messagingSenderId: "1008508997866",
    appId: "1:1008508997866:web:3f60cd65e54891fc6bc793",
    measurementId: "G-VGXZ81ED8W"

}
const root = ReactDOM.createRoot(document.getElementById('root'));

initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>

  </React.StrictMode>
);



