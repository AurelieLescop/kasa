import React from "react";
import { useState } from "react";

const Imageslider = ({ slides }) => {
  /** Définition de l'état "index actuel"*/
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pictures] = useState(slides);

  /**Définition de l'affichage à obtenir lorsqu'on clique sur "image précédente" */
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  /**Définition de l'affichage à obtenir lorsqu'on clique sur "image suivante" */
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  /**L'affichage des chevrons et du numéro de photographie ne sera réalisé que
   *  s'il y a au moins 2 photographies dans la galerie */
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
