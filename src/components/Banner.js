// import coverpicture from '../IMG_cover.png';

function Banner({src, size}) {
    return (
<div className='banner'>
<div className='h1title'><h1>Chez vous, <br className="break"/> partout et ailleurs</h1></div>
<img src={src} className="banner_img" alt="photographie de paysage"
height={size} /> 

</div>
    );
  };
  
  export default Banner;