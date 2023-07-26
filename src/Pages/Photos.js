import Nav from '../components/Nav/Nav';
import './Main.css';
import './Photos.css';
import React from 'react';

const Photos = (props) => {

    return (
        <div className='Photos'>
            <Nav/>
            <h2>{props.section}</h2>
            <div className="pictureList" style={{width: "100%"}}>
                <img className="images" src={process.env.PUBLIC_URL + "/resources/IMG_0618.JPG"}></img>
                <img className="images" src={process.env.PUBLIC_URL + "/resources/IMG_1677.jpg"}></img>
                <img className="images" src={process.env.PUBLIC_URL + "/resources/IMG_1707.jpg"}></img>
                <img className="images" src={process.env.PUBLIC_URL + "/resources/IMG_5657.jpg"}></img>
                <img className="images" src={process.env.PUBLIC_URL + "/resources/IMG_7814.JPG"}></img>
                <img className="images" src={process.env.PUBLIC_URL + "/resources/IMG_9415.jpg"}></img>
                <img className="images" src={process.env.PUBLIC_URL + "/resources/Lake.jpg"}></img>
                <img className="images" src={process.env.PUBLIC_URL + "/resources/IMG_0618.JPG"}></img>
                <img className="images" src={process.env.PUBLIC_URL + "/resources/IMG_0618.JPG"}></img>
                <img className="images" src={process.env.PUBLIC_URL + "/resources/IMG_0618.JPG"}></img>
            </div>
        </div>
    )

}

export default Photos;