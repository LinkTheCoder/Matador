import React from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navbar from './components/Navbar.jsx'
import {BrowserRouter,Route} from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Navbar/>
    <Route path="/" exact component={App}></Route>
    </BrowserRouter>,
  document.getElementById("root")
);