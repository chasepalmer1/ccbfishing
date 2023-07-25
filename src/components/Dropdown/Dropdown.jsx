import './Dropdown.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Content = [
    {
        to: "/",
        content: "Home"
    },
    {
        to: "/about-us",
        content: "About Us"
    },
    {
        to: "/fishing",
        content: "Fishing"
    },
    {
        to: "/off-roading",
        content: "Off-Roading"
    },
    {
        to: "/camping",
        content: "Camping"
    },
    {
        to: "/projects",
        content: "Projects"
    },
    {
        to: "/profiles",
        content: "Profiles"
    }
]

const Dropdown = () => {
    
    return (
        <div className="dropdown" style={{display: "inline-block"}}>
            <img className="logo" src={process.env.PUBLIC_URL + "/resources/CCB.png"} alt="this is an mage"/>
            <div className="dropdown-content">
                {Content.map((item, content) => {return <Link to={item.to} key={content}>{item.content}</Link>})}
            </div>
        </div>
    )
}

export default Dropdown;