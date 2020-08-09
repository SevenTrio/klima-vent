import React from 'react';
import useAxiosRequest from "../../helpers/useAxiosRequest";
import 'react-slideshow-image/dist/styles.css'
import "./slideshow-fix.css";

import { Fade } from 'react-slideshow-image';

const Slideshow = () => {
    const [state] = useAxiosRequest(`/api/banners.json`);

    if (state.isFetching) {
        return null;
    }

    if (state.error) {
        return null;
    }

    const slideshowProperties = {
        duration: 7000,
        transitionDuration: 900,
        indicators: true,
    }

    const images = state.responseData
    return (
        <div className="slide-container">
            <Fade {...slideshowProperties}>
                {images.map((image, index) =>
                    <div key={index} className="each-fade">
                        <div className="image-container">
                            <img src={image.url} alt={image.alt}/>
                        </div>
                    </div>
                )}
            </Fade>
        </div>
    )
}

export default Slideshow;