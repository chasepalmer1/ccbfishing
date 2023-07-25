import Nav from '../components/Nav/Nav';
import './Main.css';
import React from 'react';

const Photos = (props) => {

    return (
        <div className='Photos'>
            <Nav/>
            <h2>{props.section}</h2>
        </div>
    )

}

export default Photos;