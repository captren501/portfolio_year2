import { useState } from 'react';
import '../Styles/bace.css'
import { Link } from "react-router-dom";

const Contact = () => {

    
//start of HTML
    return <div>  
<nav className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Gallery</Link>
</nav>

<br></br>
<h1>Contact page</h1>
<br></br>
<div className='link'>
    <li><a href='https://github.com/captren501'>GitHub link</a></li>
    <li><a href='https://www.linkedin.com/in/ethan-langford-36a389236/'>linkedin</a></li>
    </div>

<div className='gmail'>
   <input type={'email'} placeholder={'email username'}></input>
   <input type={'email'} placeholder={'password'}></input>
   <button>submit</button>
</div>

    <div>
        <h4>gmail</h4>
        <p>elangf725@west-mec.org: school email</p>
        <p>  : professional email</p>
    </div>

    <div>
    <h3>Phone Number</h3>
    <p>602-597-1417</p>
    </div>

{/* useState
    useEffect
    useReducer
    useRef */}
</div>
};

export default Contact;