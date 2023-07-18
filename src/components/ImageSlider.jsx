import React, { useState } from 'react';
import './ImageSlider.css';
import prevArrowimg from '../images/backwardpickl-removebg-preview.png';
import nextArrowimg from '../images/forwardpickl-removebg-preview.png';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
<div className="image-slider">
      <img
        src={prevArrowimg}
        alt="Previous"
        className="arrow prev-arrow"
        onClick={goToPrevious}
      />
      <img src={images[currentIndex]} alt="Best Seller" className="slider-image" />
      <img
        src={nextArrowimg}
        alt="Next"
        className="arrow next-arrow"
        onClick={goToNext}
      />
    </div>
  );
};

export default ImageSlider;
