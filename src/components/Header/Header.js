import logo from "../../assets/LOGO_header.png";

import { NavLink } from "react-router-dom";

function Header() {
  return (
      <header>
        <img src={logo} className="logo_header" alt="logo du site Kasa" />

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
