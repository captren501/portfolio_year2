import { useState, useEffect } from 'react';
import '../Styles/bace.css'
import { Link } from "react-router-dom";

const About = () => {


    const [background, setBackground] = useState('');
    const handleClick = () => {
        setBackground({ ...background,});
    };
    


//start of HTML
    return <div>     
        <nav className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Gallery</Link>
    </nav>

    <br></br>
<h1>About page</h1>
    <br></br>
    
    <img src='https://res.cloudinary.com/doyugobwh/image/upload/v1668803030/Ethan_rpugqs.jpg' alt='page owner' className='image'></img>
 <br></br><br></br>

    <div className={'textboxS'}>
    <h2> About Me</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Obcaecati sed dolours libero qui maxime totam itaque omnis eius
            Fula assumenda id nescients, illum explicabo adipisci, consequatur animi voluptatem culpa molestias!
        </p>
    </div>
    <div className={'textboxSR'}>
    <h2> About Me</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Obcaecati sed dolours libero qui maxime total itaque omnis eius
            fuga assumenda id nesciunt, illum explicabo adipisci, consequatur animi voluptatem culpa moleskins!
        </p>
    </div>
    <div className={'textboxS'}>
    <h2> About Me</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Obcaecati sed dolours libero qui maxime totam itaque omnis eius
            fuga assume id rescuing, illum explicabo adipisci, consequatur animi voluptatem culpa molestias!
        </p>
    </div>
    <div className={'textboxSR'}>
    <h2> About Me</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Obcaecati sed dolours libero qui maxime totam itaque omnis eius
            fuga assumenda id nesciunt, illum explicator adipisci, consecrator anim voluptatem culpa molestias!
        </p>
    </div>

</div>
};

export default About;