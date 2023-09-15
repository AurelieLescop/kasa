import logofooter from '../LOGO_footer.png';

function Header() {
    return (
<div>
<footer>
<img src={logofooter} className="logo" alt="logo du site Kasa" /> 

<p>© 2020 Kasa. All rights reserved</p>
</footer>
</div>
    );
  }
  
  export default Header;