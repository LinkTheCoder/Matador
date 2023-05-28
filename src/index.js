import React from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navbar from './components/Navbar.jsx'
import NavbarSmall from './components/NavbarSmall.jsx'
import {BrowserRouter,Route} from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Navbar/>
    <Route path="/" exact component={App}></Route>
    <NavbarSmall/>
    </BrowserRouter>,
  document.getElementById("root")
);