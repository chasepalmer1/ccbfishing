import './Section.css';
import { Link } from 'react-router-dom'
import React from 'react';

const Section = (props) => {
    
    return (
        <div className="intro page-section">
            <img className="intro-image" src={process.env.PUBLIC_URL + "/resources/" + props.image} alt="something"/>
            <div className="intro-text">
                <Link className="intro-links" to={props.goTo}>
                    <h2>{props.h2}</h2>
                </Link>
            </div>
        </div>
    )
}

export default Section;