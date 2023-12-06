import React from "react";
import { useState } from "react";

const Ratingbar = ({ rating }) => {
  /**Définition de la note maximale possible */
  const [maximumRating] = useState(5);
  /**Récupération de la note attribuée passée en tant que props */
  const [currentRating] = useState(rating);

  /**Création d'un tableau d'étoiles */
  let star = [];
  for (let i = 0; i < maximumRating; i++) {
    if (i < currentRating) {
      star.push(<i key={Math.random()} className="fa-solid fa-star"></i>);
    } else {
      star.push(
        <i key={Math.random()} className="fa-solid fa-star greystar"></i>
      );
    }
  }

  return <div>{star}</div>;
};

export default Ratingbar;
