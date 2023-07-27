import './About.css';
import React from 'react';

const About = (props) => {

    return (
        <div id='about-us'>
            <div id='about-us-text' style={{width: "50%"}}>
                <h2 style={{marginTop: 0, marginBottom: 0}}>About Us</h2>
                <p style={{marginTop: "2%", marginRight: "10px", fontSize: "max(1.25vw, 9px)"}} >Based out of Cobb County Georgia, we have been fishing and enjoying
                the outdoors our whole lives.  Through our affinity for ripping lips, we decided to start an instagram page during the 
                quarantine in 2020.  Since then, we have ammassed over 2000 followers on instagram and consistently post our favorite catches
                3 years later.  Whether fishing on the water, tearing up some trails, or camping in the woods, we love to get outdoors 
                every opportunity we get and document our experiences.  We hope you enjoy our website and are inspired to go enjoy nature!  
                </p>
            </div>
            <img id="about-us-image" src={process.env.PUBLIC_URL + "/resources/Lake.jpg"} style={{width: "50%", borderRadius: "5px", height: "max-content"}} alt="something"/>
        </div>
    )
}

export default About;