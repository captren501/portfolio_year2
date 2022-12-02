import { useState, useEffect } from 'react';
import '../Styles/bace.css'
import { Link } from "react-router-dom";

const Contact = () => {

useEffect(() => {

    }, []);
    
    
    
    console.log("onClick")
//start of HTML
    return <div>  
<nav className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Resume</Link>
</nav>

<br></br>
<h1>Contact page</h1>
<br></br>

<div className='contact_box'>

    <div className='gmail'>
        <p>First Name</p>
        <input type={'text'} id="myInput"></input>
        <p>Last Name</p>
        <input type={'text'} id="myInput"></input>
        <p>Email</p>
        <input type={'email'} placeholder={'username'} id="myInput"></input>
        <p>Message</p>
        <textarea placeholder='message' maxLength={'200'} id="myInput"></textarea>
        <button onClick={()=>document.getElementById("myInput").value = ''()}>Submit</button>
        
    </div>
    
</div>

    {/* <div>
        <h4>gmail</h4>
        <p>elangf725@west-mec.org: school email</p>
        <p>  : professional email</p>
    </div>

    <div>
    <h3>Phone Number</h3>
    <p>602-597-1417</p>
    </div> */}

{/* useState
    useEffect
    useReducer
    useRef */}
</div>
};

export default Contact;