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
    <br></br><br></br><br></br><br></br><br></br>
{/* <h1>gallery page</h1>  */}
    
<div className='container'>
    <div className={'textboxS'}>
    <h2>Binge Bakery </h2>

        <p>
           I was a contributor for this project. Roger and I created this and it's a online Bakery that 
           has many different sweets from different cultures. It also has it's own delivery survse.
            <a href='https://github.com/RogerRandomDev/BingeBakery.git'>github/BingeBakery</a>
        </p>
    </div>
    
    <div className={'textboxS'}>
    <h2>sci-floors</h2>
        <p>
        I was a contributor for this project. This was my first group project and it was with Victor. It's 
        an online store that sell's floor tiles.
            <a href='https://github.com/Victor-Malhotra/sci-floors.git'>github/sci-floors</a>
        </p>
    </div>

</div>

<div className='container'>
<div className={'textboxS'}>
    <h2>Tours</h2>
        <p>
            A work in progress website that has locations around the world and you could remove locations.
            <a href='https://github.com/captren501/Tours.git'>github/Tours</a>
        </p>
    </div>
    
    <div className={'textboxS'}>
    <h2>poke</h2>
        <p>
            This is a project I had with Roger and is a prelude to the Binge Bakery project. For this 
            project we where asked to create a pokedex with one pokemon and it's 3 evolution forms.
            the majority of this project used JSON and showing all it's stats.
            <a href='https://github.com/RogerRandomDev/poke.git'>github/poke</a>
        </p>
    </div>
</div>

</div>//nav div
};

export default About;