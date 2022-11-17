import { useState, useEffect } from 'react';
import '../Styles/styles.css'
import { Link } from "react-router-dom";

const About = () => {


    const [background, setBackground] = useState('');
    const handleClick = () => {
        setBackground({ ...background,});
    };
    


//start of HTML
    return <div>     
        <nav className={'navbar2'}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Info</Link>
    </nav>

    <br></br>
<h1>About page</h1>
    <br></br>
    
    <img src='https://res.cloudinary.com/doyugobwh/image/upload/v1666736115/person3_vrixfd.jpg' alt='Apple Pie' className='image'></img>
 <br></br><br></br><br></br>
 
    <div className={'textboxS'}>
    <h2> About Me</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Obcaecati sed dolours libero qui maxime totam itaque omnis eius
            fuga assumenda id nesciunt, illum explicabo adipisci, consequatur animi voluptatem culpa molestias!
        </p>
    </div>
    <div className={'textboxSR'}>
    <h2> About Me</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Obcaecati sed dolours libero qui maxime totam itaque omnis eius
            fuga assumenda id nesciunt, illum explicabo adipisci, consequatur animi voluptatem culpa molestias!
        </p>
    </div>
    <div className={'textboxS'}>
    <h2> About Me</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Obcaecati sed dolours libero qui maxime totam itaque omnis eius
            fuga assumenda id nesciunt, illum explicabo adipisci, consequatur animi voluptatem culpa molestias!
        </p>
    </div>
    <div className={'textboxSR'}>
    <h2> About Me</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Obcaecati sed dolours libero qui maxime totam itaque omnis eius
            fuga assumenda id nesciunt, illum explicabo adipisci, consequatur animi voluptatem culpa molestias!
        </p>
    </div>

</div>
};

export default About;