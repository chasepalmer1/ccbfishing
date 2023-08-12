import './Section.css';
import { Link } from 'react-router-dom'
import React from 'react';

const Section = (props) => {
    
    return (
        <Link className="intro-links" to={props.goTo}>
        <div className="intro page-section">
            <img className="intro-image" src={process.env.PUBLIC_URL + "/resources/" + props.image} alt="something"/>
            <div className="intro-text">
                <h2>{props.h2}</h2>
            </div>
        </div>
        </Link>
    )
}

export default Section;