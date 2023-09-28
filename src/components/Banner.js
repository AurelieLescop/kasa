import coverpicture from '../IMG_cover.png';

function Banner() {
    return (
<div className='banner'>
<h1>Chez vous, <br /> partout et ailleurs</h1>
<img src={coverpicture} className="banner_img" alt="photographie de paysage" /> 

</div>
    );
  };
  
  export default Banner;