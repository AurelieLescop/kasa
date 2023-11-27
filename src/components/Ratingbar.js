import React from "react";
import { useState } from "react";

const Ratingbar = ({ rating }) => {
  const [maximumRating] = useState(5);
  const [currentRating] = useState(rating);
  console.log(rating);

  let star = [];
  for (let i = 0; i < maximumRating; i++) {
    if (i < currentRating) {
      star.push(
        
          <i key={Math.random()} className="fa-solid fa-star"></i>
  
      );
    } else {
      star.push(
        
          <i key={Math.random()} className="fa-solid fa-star greystar"></i>
       
      );
    }
  }

  return <div>{star}</div>;
};

export default Ratingbar;
