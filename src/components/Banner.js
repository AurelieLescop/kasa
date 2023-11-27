// import coverpicture from '../IMG_cover.png';
//<div className='h1title'><h1>{props.children}</h1></div> 

function Banner({src, size, children}) {
    return (
<div className='banner'>
<div className='h1title'><h1>{children}</h1></div>
<img src={src} className="banner_img" alt="photographie de paysage"
height={size} /> 

</div>
    );
  };
  
  export default Banner;