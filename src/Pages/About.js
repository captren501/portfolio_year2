import { useState, useEffect } from 'react';
import '../Styles/bace.css'
import { Link } from "react-router-dom";

const About = () => {


    var dots = document.getElementById("dots");
  var btnText = document.getElementById("myBtn");
    const [read, setRead] = useState("read more");
    const [read1, setRead1] = useState("read more");
    var moreText = document.getElementById("more");
    var moreText = document.getElementById("more1");
    const handleClick = () =>{
    if (read === "read more") {
      document.getElementById("more").style.display = "block";
        setRead("read less");
      } else {
        document.getElementById("more").style.display = "none";
        setRead("read more");
      }
      // the Js for the show more function
};

const handleClick1 = () =>{
    if (read1 === "read more") {
      document.getElementById("more1").style.display = "block";
        setRead1("read less");
      } else {
        document.getElementById("more1").style.display = "none";
        setRead1("read more");
      }
    };
//start of HTML
    return <div>     
        <nav className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Resume</Link>
    </nav>
{/* navbar */}
    <br></br>
<h1>About page</h1> {/* sample */}
    <br></br>
    
<div className='container'>
    <div className={'textboxS'}>
    <h2> About Me</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. <span className="readmore" id="dots" onClick={()=>handleClick()}>...{read}</span><span style={{display:"none"}} id="more">Obcaecati sed dolours libero qui maxime totam itaque omnis eius
            Fula assumenda id nescients, illum explicabo adipisci, consequatur animi voluptatem culpa molestias!</span>
        </p>
    </div>
    
    <div className={'textboxS'}>
    <h2> About Me</h2>
        <p>
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit,
            <span className="readmore" id="dots" onClick={()=>handleClick1()}>...{read1}</span><span style={{display:"none"}} id="more1">amet consectetur 
            adipisicing elit. Obcaecati sed dolours libero qui maxime totam itaque omnis eius
            fuga assume id rescuing, illum explicabo adipisci, consequatur animi voluptatem culpa molestias!</span> 
        </p>
    </div>
    
</div>

</div>//nav div
};

export default About;