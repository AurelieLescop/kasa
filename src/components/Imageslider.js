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

  if (slides.length!==1) {
    return (
      <div className="sliderpicture">
        {slides.length!==1 && <div className="goToPrevious" onClick={goToPrevious}>❰</div>}
        <div className="goToNext" onClick={goToNext}>❱</div>
        
        <div className="picturenumber">{currentIndex + 1}/{slides.length}</div>
        <img src={pictures[currentIndex]} alt="appartement"  />
      </div>
    ); 
  }
  else {
    return (
    <div className="sliderpicture">
      <img src={pictures[currentIndex]} alt="appartement"  />
      <div className="picturenumber">{currentIndex + 1}/{slides.length}</div>
    </div>
  )};
};

export default Imageslider;
