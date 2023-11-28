import { Routes, Route } from "react-router-dom";

//import logo from './logo.svg'; => penser à supprimer ce logo dans dossier
// import "./css/app.css";
import "./css/app.scss";

import Home from "./pages/Home";
import Accomodation from "./pages/Accomodation";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
// import Header from "./components/Header";

function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accomodation/:id" element={<Accomodation />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    /*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default Router;
