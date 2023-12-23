import React from 'react';

const Carousel = ({ images }) => {
  return (
    <div className="carousel">
      <div className="slides">
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
