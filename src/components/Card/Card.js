import React from "react";

const Card = ({ data }) => {
  return (
    <article className="card">
      <a
        href={"http://localhost:3000/Accomodation/" + data.id}
        title={"Plus de détails sur " + data.title}
      >
        <div className="card__gradient"></div>
        <img
          className="card__picture"
          src={data.cover}
          alt={"Photographie de " + data.title}
        />
        <h2>{data.title}</h2>
      </a>
    </article>
  );
};

export default Card;