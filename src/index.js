import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import News from "./news";
import Nav from "./nav";
import {HashRouter,Route} from "react-router-dom"

// Ändrar webbläsarens URL och håller komponenter synkade med URL:en 
// Sparar data som "NameNews", skickar till komponenten "News" 
ReactDOM.render(
  <HashRouter>
  <Nav />
  <Route path="/" exact component={App}></Route>
    <Route path="/Nintendo"><News NameNews="nintendo+games" /></Route>
    <Route path="/Playstation"><News NameNews="playstation+games"/></Route>
    <Route path="/Xbox"><News NameNews="xbox+games" /></Route>
    <Route path="/PC"><News NameNews="pc+games" /></Route>
    <Route path="/Retro"><News NameNews="retro+games" /></Route>
    <Route path="/Indie"><News NameNews="indie+games" /></Route>
  </HashRouter>,
  document.getElementById("root")
);
