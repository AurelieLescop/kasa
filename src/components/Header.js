import logo from '../LOGO.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
//   <div>
//     <h1>partie Header</h1>
//   </div>
<div>
<header>
<img src={logo} className="logo" alt="logo du site Kasa" /> 
{/* attention à la className */}

<nav>
    <ul>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>ACCUEIL</NavLink></li>
        <li><NavLink to="/About" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>A PROPOS</NavLink></li>
    </ul>
</nav>
</header>
</div>
    );
  }
  
  export default Header;