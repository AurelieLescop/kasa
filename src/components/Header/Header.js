import React from "react";
import logo from "../../assets/LOGO_header.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <a href="http://localhost:3000/" title="Retour vers la page d'accueil">
        <img src={logo} className="logo_header" alt="logo du site Kasa" />
      </a>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
