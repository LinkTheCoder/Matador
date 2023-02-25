import React from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardMindful from './components/CardMindful.jsx'
import CardTeaTime from './components/CardTeaTime.jsx'
import CardFitness from './components/CardFitness.jsx'
import CardPositivity from './components/CardPositivity.jsx'
import Nav from "./components/Nav";
import Header from "./components/Header";
import {HashRouter,Route} from "react-router-dom"


ReactDOM.render(
  <HashRouter>
    <Header/>
    <Route path="/" exact component={App}></Route>
    <Route path="/Mindful"><CardMindful/></Route>
    <Route path="/TeaTime"><CardTeaTime/></Route>
    <Route path="/Fitness"><CardFitness/></Route>
    <Route path="/Positivity"><CardPositivity/></Route>
    <Nav/>
    </HashRouter>,
  document.getElementById("root")
);
