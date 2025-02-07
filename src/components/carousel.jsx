import React, { useState } from 'react';
import '../styles/carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!images || images.length === 0) {
    return <div className="carousel-container">no items in collection</div>;
  }

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
        <h3>{images[currentIndex].name}</h3>
        <img
          src={images[currentIndex].picture}
          alt={images[currentIndex].name}
          className="carousel-image"
          loading="lazy"
        />
        <div className="caption">{images[currentIndex].caption}</div>
      </div>
      <button className="next-btn" onClick={nextImage}>❯</button>
    </div>
  );
};

export default Carousel;

// import React, { useState, useEffect } from 'react';
// import '../styles/carousel.css';

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     setCurrentIndex(0); // Reset to the first image when the collection changes
//   }, [images]);

//   if (!images || images.length === 0) {
//     return <div className="carousel-container">no items in collection</div>;
//   }

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div className="carousel-container">
//       <button className="prev-btn" onClick={prevImage}>❮</button>
//       <div className="carousel">
//         <h3>{images[currentIndex].title}</h3>
//         <img
//           src={images[currentIndex].img}
//           alt={images[currentIndex].title}  
//           className="carousel-image"
//           loading="lazy"
//         />
//         <div className="caption">{images[currentIndex].caption}</div>
//       </div>
//       <button className="next-btn" onClick={nextImage}>❯</button>
//     </div>
//   );
// };

// export default Carousel;
