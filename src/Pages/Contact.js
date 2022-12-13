import { useState, useEffect } from 'react';
import '../Styles/bace.css'
import { Link } from "react-router-dom";

const Contact = () => {

    const [count, setCount] = useState(0);
    
    useEffect(() => {
    }, [count]);
    
// to reset the inputs
    function refresh() {
        window.location.reload();
    }

    console.log("onClick")
//start of HTML
    return <div>  
    {/* the nav bar */}
<nav className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/About">Gallery</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Resume</Link>
</nav>

<br></br><br></br><br></br><br></br><br></br>

<div className='container1'>
    <div className='gmail'>
        <p>First Name</p>
        <input type={'text'} id="myInput"></input>
        <p>Last Name</p>
        <input type={'text'} id="myInput"></input>
        <p>Email</p>
        <input type={'email'} placeholder={'username'} id="myInput"></input>
        <p>Message</p>
        <textarea placeholder='message' maxLength={'200'} id="myInput"></textarea>
        <button onClick={() => {setCount((c) => c + 1);refresh()}}>Submit</button>
        <p>Submit: {count}</p>
    </div>
        
    <h2 className='textboxP3'>This is for contacting me if there is any thing that is import.
        <h4>These could be</h4>
        <li>Job offers</li>
        <li>getting to know me</li>
        <li>work</li>
        <li>or a way to contact me</li>
        <br></br> {/* To have a space */}
        I don't check my email often so a response may take a while. If your sending spam emails; your email 
        will be blocked.
    </h2>
</div>  {/* end of container1 */}
  
</div>
// end of HTML

/* useState, useEffect */

};

export default Contact;