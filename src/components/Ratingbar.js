import React from "react";
import { useState } from "react";

const Ratingbar = ({ rating }) => {
  const [maximumRating] = useState(5);
  const [currentRating] = useState(rating);
  console.log(rating);

  for (let i = 0; (i = maximumRating); i++) {
    if (i <= currentRating)
      return (
        <div>
          <i className="fa-solid fa-star"></i>
        </div>
      );
    else
      <div>
        <i class="fa-regular fa-star"></i>
      </div>;
  }
};

export default Ratingbar;
