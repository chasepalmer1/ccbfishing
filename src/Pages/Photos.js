import Nav from '../components/Nav/Nav';
import './Main.css';
import React from 'react';
import ImageGallery from '../components/ImageGallery/ImageGallery';

const Photos = (props) => {

    const name = props.section.replaceAll(' ', '').toLowerCase()

    return (
        <div className='Photos'>
            <Nav/>
            <h2>{props.section}</h2>
            <ImageGallery type={name} />
        </div>
    )

}

export default Photos;