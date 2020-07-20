import React from 'react';
// import classNames from 'classnames/bind';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import "../sass/slideshow-fix.css";

const Slideshow = () => {
    // TODO: Заменить изображения и alt в банерах
    const images = [
        {
            src: require('../images/banners/banner-1.jpg'),
            alt: 'some alt text 1',
        },
        {
            src: require('../images/banners/banner-2.jpg'),
            alt: 'some alt text 2',
        },
        {
            src: require('../images/banners/banner-3.jpg'),
            alt: 'some alt text 3'
        },
    ];

    const slideshowProperties = {
        duration: 7000,
        transitionDuration: 900,
        indicators: true,
    }

    return (
        <div className="slide-container">
            <Fade {...slideshowProperties}>
                {images.map((image, index) =>
                    <div key={index} className="each-fade">
                        <div className="image-container">
                            <img src={image.src} alt={image.alt}/>
                        </div>
                    </div>
                )}
            </Fade>
        </div>
    )
}

export default Slideshow;