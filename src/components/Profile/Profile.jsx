import './Profile.css';
import React from 'react';

const Profile = (props) => {
    
    return (
        <div className="profile">
            <img className="image" style={{height: "70%",objectFit: "contain", border: "solid black 1px", borderRadius: "5px"}} src={process.env.PUBLIC_URL + "/resources/" + props.src} alt={props.alt}/>
            <h3 style={{marginTop: "5%"}}><em>{props.name}</em></h3>
            <svg id="ccb-insta" href={"https://instagram.com/ccb.fishing?igshid=NTc4MTIwNjQ2YQ=="} target="_blank" xmlns="http://www.w3.org/2000/svg" width="max(10%, 20px)" height="max(10%, 20px)" viewBox="0 0 48 48">
                <g fill="none"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="4" style={{marginLeft: "0"}}
                d="M34 6H14a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8Z"/><path stroke="currentColor" strokeLinejoin="round" 
                strokeWidth="4" d="M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"/><path fill="currentColor" d="M35 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"/></g>
            </svg>                
        </div>
    )
}

export default Profile;