import logofooter from '../assets/LOGO_footer.png';

function Footer() {
    return (
<div>
<footer>
<img src={logofooter} className="logo" alt="logo du site Kasa" /> 

<p>© 2020 Kasa. All rights reserved</p>
</footer>
</div>
    );
  }
  
  export default Footer;