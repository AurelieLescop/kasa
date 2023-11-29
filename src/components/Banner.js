function Banner({ src, size, children }) {
  return (
    <div className="banner">
      {children}
      <img
        src={src}
        className="banner__img"
        alt="photographie de paysage"
        height={size}
      />
    </div>
  );
}

export default Banner;
