import Banner from '../assets/Homepage.png';
import Crater from '../assets/craterSnnowboards.svg';
import ToTop from '../assets/to-top.svg';
import React from 'react';
import '../styles/HomePage.css';
import Nav from '../components/Nav';

export default function HomePage() {
    return (
        <div id="homepage">
            <>
                <Nav />
            </>
            <img src={Banner} alt="HomePage" id="banner" />
            <img src={Crater} alt="Crater" id="crater" />
            <h1 id="tagline">Go Beyond The Boundries</h1>
            <a href=""><img src={ToTop} alt="ToTop" id="toTop"/></a>
        </div>
    );
}