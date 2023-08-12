import React from 'react';
import './ImageGallery.css';

const ImageGallery = (props) => {

    const name = '../../../public/resources/' + props.type;
    const images = require.context('../../../public/resources/fishing', true);
    const fishing = images.keys().map(image => images(image));

    return (
        <div className="pictureList" style={{width: '100%'}}>
            {fishing.map((image, index) => (
                <img className={"images"} key={index} src={image} alt={`image-${index}`} />
            ))}
            <h2>{name}</h2>
        </div>
    )

}

export default ImageGallery;