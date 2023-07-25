import './Nav.css';
import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

const Nav = () => {
    
    return (
        <header>
            <Dropdown/>
            <h1 style={{fontSize: "max(1.5vw, 12px)", fontWeight: 30, fontStyle: "italic"}}>CCB Fishing</h1>
            <svg id="ccb-insta" href={"https://instagram.com/ccb.fishing?igshid=NTc4MTIwNjQ2YQ=="} target="_blank" xmlns="http://www.w3.org/2000/svg" width="max(3.5%, 20px)" height="max(3.5%, 20px)" viewBox="0 0 48 48">
                <g fill="none"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="4" 
                d="M34 6H14a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8Z"/><path stroke="currentColor" strokeLinejoin="round" 
                strokeWidth="4" d="M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"/><path fill="currentColor" d="M35 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"/></g>
            </svg>
        </header>
    )
}

export default Nav;