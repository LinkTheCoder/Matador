import React from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navbar from './components/Navbar.jsx'
import CardPWA from './components/CardPWA.jsx'
import {HashRouter,Route} from "react-router-dom"

ReactDOM.render(
  <HashRouter>
    <Navbar/>
    <Route path="/" exact component={App}></Route>
    <Route path="/PWA"><CardPWA/></Route>
    </HashRouter>,
  document.getElementById("root")
);

// Install PWA
let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        deferredPrompt = e;
    });

    const installApp = document.getElementById('installApp');
    installApp.addEventListener('click', async () => {
        if (deferredPrompt !== null) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                deferredPrompt = null;
            }
        }
    });