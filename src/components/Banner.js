import coverpicture from '../IMG_cover.png';

function Banner() {
    return (
<div className='banner'>
<img src={coverpicture} className="banner_img" alt="photographie de paysage" /> 
</div>
    );
  }
  
  export default Banner;