import React from "react";
import logofooter from "../../assets/LOGO_footer.png";

function Footer() {
  return (
    <footer>
      <a href="http://localhost:3000/" title="Retour vers la page d'accueil">
        <img src={logofooter} className="logo" alt="logo du site Kasa" />
      </a>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
