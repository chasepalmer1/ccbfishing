import React from 'react';
import './ImageGallery.css';

const ImageGallery = (props) => {

    function loadImages(name) {
        if (name === 'fishing') {
            const images = require.context("../../images/fishing", true);
            const imageArray = images.keys().map(image => images(image));
            return imageArray;
        }
        if (name === 'offroading') {
            const images = require.context("../../images/offroading", true);
            const imageArray = images.keys().map(image => images(image));
            return imageArray;
        }
        if (name === 'camping') {
            const images = require.context("../../images/camping", true);
            const imageArray = images.keys().map(image => images(image));
            return imageArray;
        }
        if (name === 'projects') {
            const images = require.context("../../images/projects", true);
            const imageArray = images.keys().map(image => images(image));
            return imageArray;
        }
    }

    return (
        <div className={"pictureList"} style={{width: '100%'}}>
            {loadImages(props.type).map((image, index) => (
                <img className={"images"} key={index} src={image} alt={`images-${index}`}/>   
            ))}
        </div>
    )

}

export default ImageGallery;