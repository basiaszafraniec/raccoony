import React, { useState } from 'react';
import '../styles/carousel.css';  // Make sure to link the CSS

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <button className="prev-btn" onClick={prevImage}>❮</button>
      <div className="carousel">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].caption}
          className="carousel-image"
          loading="lazy" // Enable lazy loading
        />
        <div className="caption">{images[currentIndex].caption}</div>
      </div>
      <button className="next-btn" onClick={nextImage}>❯</button>
    </div>
  );
};

export default Carousel;
