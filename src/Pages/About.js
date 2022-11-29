import { useState, useEffect } from 'react';
import '../Styles/bace.css'
import { Link } from "react-router-dom";

const About = () => {


    var dots = document.getElementById("dots");
  var btnText = document.getElementById("myBtn");
    const [read, setRead] = useState("read more");
    var moreText = document.getElementById("more");
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
//start of HTML
    return <div>     
        <nav className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Gallery</Link>
    </nav>
{/* navbar */}
    <br></br>
<h1>About page</h1> {/* sample */}
    <br></br>
    
    <img src='https://res.cloudinary.com/doyugobwh/image/upload/v1668803030/Ethan_rpugqs.jpg' alt='page owner' className='image'></img>
 <br></br><br></br>

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
            I lived in chelas washington and lived there 9 years.//\\Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Obcaecati sed dolours libero qui maxime totam itaque omnis eius
            fuga assume id rescuing, illum explicabo adipisci, consequatur animi voluptatem culpa molestias!
        </p>
    </div>
    

</div>
};

export default About;