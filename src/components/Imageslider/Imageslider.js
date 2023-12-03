import React from "react";
import { useState } from "react";

const Imageslider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pictures] = useState(slides);

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
          <i className="fa-solid fa-chevron-up fa-rotate-270 sliderpicture__chevron"></i>
        </div>
      )}
      {slides.length !== 1 && (
        <div className="goToNext" onClick={goToNext}>
          <i className="fa-solid fa-chevron-up fa-rotate-90 sliderpicture__chevron"></i>
        </div>
      )}
      {slides.length !== 1 && (
        <div className="picturenumber">
          {currentIndex + 1}/{slides.length}
        </div>
      )}
      <img src={pictures[currentIndex]} alt="appartement" />
    </div>
  );
};

export default Imageslider;