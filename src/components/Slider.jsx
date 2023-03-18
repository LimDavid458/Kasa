import React, { useState } from 'react';
import chevronLeft from '../assets/arrow_left.svg'
import chevronRight from '../assets/arrow_right.svg'

export default function Slider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    // preloader image 
    (() => {
        slides.forEach(slide => {
            const image = new Image(slide);
            image.src = slide;
        })
    })();

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1); // if current === 0 send to last slide
    }

    return (
        <div className='carousel'>
            {(length > 1) &&
                <>
                    <button onClick={prevSlide} className="chevron-right"><img src={chevronRight} alt="Chevron de droite" /></button>
                    <button onClick={nextSlide} className="chevron-left"><img src={chevronLeft} alt="Chevron de gauche" /></button>
                </>
            }
            
            {slides.map((slide, index) => {
                return (
                    <div key={index} className="slide">
                        {index === current && (
                            <img src={slide} alt="Carousel"/>
                        )}
                    </div>
                )}
            )}
        </div>
    )
}