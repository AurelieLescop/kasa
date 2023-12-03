import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Accomodation from "./pages/Accomodation/Accomodation";
import About from "./pages/About/About";
import NotFound from "./pages/Notfound/NotFound";

function Router () {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Accomodation/:id" element={<Accomodation />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    );
  }
  
  export default Router;
  