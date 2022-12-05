import { useState, useEffect } from 'react';
import '../Styles/bace.css'
import { Link } from "react-router-dom";

const Contact = () => {

    const [count, setCount] = useState(0);
    
    useEffect(() => {
    }, [count]);
    
    
    
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
<div className='container'>
    <div className='gmail'>
        <p>First Name</p>
        <input type={'text'} id="myInput"></input>
        <p>Last Name</p>
        <input type={'text'} id="myInput"></input>
        <p>Email</p>
        <input type={'email'} placeholder={'username'} id="myInput"></input>
        <p>Message</p>
        <textarea placeholder='message' maxLength={'200'} id="myInput"></textarea>
        <button onClick={() => setCount((c) => c + 1)}>Submit</button>
        <p>count: {count}</p>
        {/* ask how to delete text in text box */}
    {/* // document.getElementById("myInput").value = ''() */}
    </div>
        
    <h2 className='textboxP3'>Lorem</h2>
    {/* add text */}
</div>

    

 </div>
    {/* useState
    useEffect
    useReducer
    useRef */}


};

export default Contact;