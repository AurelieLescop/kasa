function Banner({ src, height, children }) {
  return (
    <div className="banner">
      {children}
      <img
        src={src}
        className="banner__img"
        alt="photographie de paysage"
        height={height}
      />
    </div>
  );
}

export default Banner;
