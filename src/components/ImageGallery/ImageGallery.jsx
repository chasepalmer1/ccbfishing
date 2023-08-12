import React from 'react';
import './ImageGallery.css';

const ImageGallery = (props) => {
    
    const type = props.type; 

    function loadImages(name) {
        if (name === 'fishing') {
            const images = require.context("../../../public/resources/fishing", true);
            const imageArray = images.keys().map(image => images(image));
            return imageArray;
        }
        if (name === 'offroading') {
            const images = require.context("../../../public/resources/offroading", true);
            const imageArray = images.keys().map(image => images(image));
            return imageArray;
        }
        if (name === 'camping') {
            const images = require.context("../../../public/resources/camping", true);
            const imageArray = images.keys().map(image => images(image));
            return imageArray;
        }
        if (name === 'projects') {
            const images = require.context("../../../public/resources/projects", true);
            const imageArray = images.keys().map(image => images(image));
            return imageArray;
        }
    }

    return (
        <div className={"pictureList"} style={{width: '100%'}}>
            {loadImages(type).map((image, index) => (
                <img className={"images"} key={index} src={image} alt={`images-${index}`}/>   
            ))}
        </div>
    )

}

export default ImageGallery;