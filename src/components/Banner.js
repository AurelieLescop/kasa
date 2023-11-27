import coverpicture from '../IMG_cover.png';

function Banner() {
    return (
<div className='banner'>
<div className='h1title'><h1>Chez vous, <br className="break"/> partout et ailleurs</h1></div>
<img src={coverpicture} className="banner_img" alt="photographie de paysage" /> 

</div>
    );
  };
  
  export default Banner;