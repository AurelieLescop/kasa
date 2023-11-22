import React from "react";
import { useState } from "react";

const Imageslider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pictures] = useState(slides);
  console.log(slides);
  console.log(pictures);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

    return (
      <div className="sliderpicture">
        {slides.length !== 1 && (
          <div className="goToPrevious" onClick={goToPrevious}>
            <i class="fa-solid fa-chevron-up fa-rotate-270"></i>
          </div>
        )}
        {slides.length !== 1 && (
        <div className="goToNext" onClick={goToNext}>
          <i class="fa-solid fa-chevron-up fa-rotate-90"></i>
        </div>
        )}

        <div className="picturenumber">
          {currentIndex + 1}/{slides.length}
        </div>
        <img src={pictures[currentIndex]} alt="appartement" />
      </div>
    );
};

export default Imageslider;
