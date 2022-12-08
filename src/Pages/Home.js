import { useState, useEffect} from 'react';
import '../Styles/bace.css'
import { Link } from "react-router-dom";

const Home = () => {

  var dots = document.getElementById("dots");
  var btnText = document.getElementById("myBtn");
    const [read, setRead] = useState("read more");
    const [read1, setRead1] = useState("read more");
    const [read2, setRead2] = useState("read more");
    var moreText = document.getElementById("more");
    var moreText = document.getElementById("more1");
    var moreText = document.getElementById("more2");
    const handleClick = () =>{
    if (read === "read more") {
      document.getElementById("more").style.display = "block";
        setRead("read less");
      } else {
        document.getElementById("more").style.display = "none";
        setRead("read more");
      }
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
const handleClick2 = () =>{
  if (read2 === "read more") {
    document.getElementById("more2").style.display = "block";
      setRead2("read less");
    } else {
      document.getElementById("more2").style.display = "none";
      setRead2("read more");
    }

};

    
//start of HTML
    return <div>
    <nav className={'navbar'}>
        <Link to="/">Home</Link> 
        <Link to="/About">Gallery</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Resume</Link>
    </nav> 
{/* navbar */}
    <br></br>
 <h1>Home page</h1> {/* sample */}
    <br></br>

    <img src='https://res.cloudinary.com/doyugobwh/image/upload/v1668803030/Ethan_rpugqs.jpg' alt='page owner' className='image'></img>
 <br></br><br></br>

    <div className={'textbox'}>
         <p>
          <h2>Who am I</h2>
          Hello my name is Ethan Langford and I'm 17 years old. I grue up in chelas washington in a family of 
          <span className="readmore" id="dots" onClick={()=>handleClick()}>...{read}</span><span style={{display:"none"}} id="more">
          eight. moved to phenix AZ eight years ago; now taking coding classes at west-mec and enrolled at 
          Sandra day O'conner HS.</span></p>
    </div> 

    <div className={'textbox'}>
      <p>
        <h2>Achements</h2>
        
        <span className="readmore" id="dots" onClick={()=>handleClick1()}>...{read1}</span><span style={{display:"none"}} id="more1">
        Impedit rerum corrupti, repellat soluta quos ad quas exercitationem atque, laborum magni suscipit
        rem itaque!</span></p>
    </div>

    <div className={'textbox'}>
    <h2>BOX3</h2>
        <p> The Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos blanditiis, eius dolores 
            quisquam voluptatum! <span className="readmore" id="dots" onClick={()=>handleClick2()}>...{read2}</span><span style={{display:"none"}} id="more2">
            Impedit rerum corrupti, repellat soluta quos ad quas exercitationem atque, laborum magni suscipit rem itaque!</span></p>
    </div>
    <br></br>

    
</div>
};

export default Home;