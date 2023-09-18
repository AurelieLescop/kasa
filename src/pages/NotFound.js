import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';


function NotFound() {
    return (
      <div className="Notfound">
    <Header />
    <h1 className="Notfound__title">404</h1>
    <p className="Notfound__info" >Oups! La page que vous demandez n'existe pas.</p>
    <NavLink to="/" className="Link" >Retourner sur la page d’accueil</NavLink>
    <Footer />
  </div>
    );
  }
  
  export default NotFound;