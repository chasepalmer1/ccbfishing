import './Profile.css';
import React from 'react';

const Profile = (props) => {
    
    return (
        <div className="profile">
            <img src={props.src} alt={props.alt}/>
            <p>{props.name}</p>
        </div>
    )
}

export default Profile;