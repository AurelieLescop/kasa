import { Routes, Route } from "react-router-dom";

//import logo from './logo.svg'; => penser à supprimer ce logo dans dossier
import "./css/app.css";

import Home from "./pages/Home";
import Accomodation from "./pages/Accomodation";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Accomodation" element={<Accomodation />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
