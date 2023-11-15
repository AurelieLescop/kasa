import React from "react";
import { useState } from "react";

const Ratingbar = ({ rating }) => {
  const [maximumRating] = useState(5);
  const [currentRating] = useState(rating);
  console.log(rating);

  let star = [];
  for (let i = 0; (i = maximumRating); i++) {
    if (i <= currentRating) {
      star.push(
        <div>
          <i className="fa-solid fa-star"></i>
        </div>
      );
    } else {
      star.push(
        <div>
          <i class="fa-regular fa-star"></i>
        </div>
      );
    }
  }

  return star;
};

export default Ratingbar;
