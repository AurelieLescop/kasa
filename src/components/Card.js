import React from "react";

const Card = ({ data }) => {
  return (
    <article className="accomodation_card">
      <a
        href={"http://localhost:3000/Accomodation/" + data.id}
        title={"Plus de détails sur " + data.title}
      >
        <div className="accomodation_card_gradient"></div>
        <img
          className="accomodation_picture"
          src={data.cover}
          alt={"Photo " + data.title}
        />
        <h2>{data.title}</h2>
      </a>
    </article>
  );
};

export default Card;