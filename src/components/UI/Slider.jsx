import React, { useEffect } from 'react';
import ImageCard from './ImageCard';

const Slider = ({ logos, classNames }) => {
  useEffect(() => {
    const slider = document.querySelector('.slider');
    const sliderClone = slider.innerHTML;
    slider.innerHTML += sliderClone;
  }, []);

  return (
    <div className={`slider-container ${classNames}`}>
      <ul className="slider">
        {logos.map((logo, index) => (
          <li key={index}>
            <ImageCard logo={logo} imgClasses={"max-h-[90px]"}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
