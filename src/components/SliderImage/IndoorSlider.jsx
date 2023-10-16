import React, { useState } from 'react';
import { IndoorData } from './SlideData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const IndoorSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='indoor-slider'>
      <FaArrowAltCircleLeft className='left-arrow-2' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow-2' onClick={nextSlide} />
      {IndoorData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'indoor-slide open' : 'indoor-slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='indoor design' className='indoor-image'/>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default IndoorSlider;