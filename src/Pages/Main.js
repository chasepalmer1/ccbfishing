import './Main.css';

import About from '../components/About/About';
import Nav from '../components/Nav/Nav';
import Profile from '../components/Profile/Profile';
import Section from '../components/Section/Section';
import {profiles} from '../components/Profile/Profiles';
import React from 'react';

const Main = () => {

    return (
        <div className='Main'>
            <Nav/>

            <About/>

            <Section h2={"Fishing"} goTo={"/fishing"} image={"~/public/resources/IMG_7811.jpg"}/>
            <Section h2={"Off-Roading"} goTo={"/off-roading"} image={"../../public/resources/IMG_0618.JPG"}/>
            <Section h2={"Camping"} goTo={"/camping"} image={"../../public/resources/IMG_1707.jpg"}/>
            <Section h2={"Projects"} goTo={"/projects"} image={"../../public/resources/IMG_1677.jpg"}/>

            <div id="profiles">
                <Profile alt={"Nothing to see here"} name={profiles[0].name} src={''}/>
                <Profile alt={"Nothing to see here"} name={profiles[1].name} src={''}/>
                <Profile alt={"Nothing to see here"} name={profiles[2].name} src={''}/>
            </div>

        </div>
    )

}

export default Main;