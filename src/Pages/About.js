import { useState, useEffect } from 'react';
import '../Styles/bace.css'
import { Link } from "react-router-dom";

const About = () => {


//start of HTML
    return <div>     
        <nav className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/About">Gallery</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Resume</Link>
    </nav>
{/* navbar */}
    <br></br><br></br><br></br><br></br>
{/* <h1>gallery page</h1>  */}
    
<div className='container'>
    <div className={'textboxS'}>
    <h2>Binge Bakery </h2>

        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. 
            <a href='https://github.com/RogerRandomDev/BingeBakery.git'>github/BingeBakery</a>
        </p>
    </div>
    
    <div className={'textboxS'}>
    <h2>sci-floors</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit,
            amet consectetur adipisicing elit.
            <a href='https://github.com/Victor-Malhotra/sci-floors.git'>github/sci-floors</a>
        </p>
    </div>

</div>

<div className='container'>
<div className={'textboxS'}>
    <h2>Tours</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. 
            <a href='https://github.com/captren501/Tours.git'>github/Tours</a>
        </p>
    </div>
    
    <div className={'textboxS'}>
    <h2>poke</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. 
            <a href='https://github.com/RogerRandomDev/poke.git'>github/poke</a>
        </p>
    </div>
</div>

</div>//nav div
};

export default About;