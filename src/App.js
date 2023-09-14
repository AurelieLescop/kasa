import { Routes, Route } from "react-router-dom";

//import logo from './logo.svg';
import "./App.css";

import Home from "./pages/Home";
import Accomodation from "./pages/Accomodation";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    /*<div className="App">
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
    </div> */

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Accomodation" element={<Accomodation />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
