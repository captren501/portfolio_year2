import { useState, useEffect} from 'react';
import '../Styles/bace.css'
import { Link } from "react-router-dom";

const Home = () => {

  // js for the read more function
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
      {/* navbar */}
    <nav className={'navbar'}>
        <Link to="/">Home</Link> 
        <Link to="/About">Gallery</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Resume</Link>
    </nav> 
{/* spacing */}
<br></br><br></br><br></br>

{/* my image and more spacing */}
    <img src='https://res.cloudinary.com/doyugobwh/image/upload/v1670963139/EthanLP_ljgrun.png' alt='page owner' className='image'></img>
 <br></br><br></br>

{/* all three boxes with text */}
    <div className={'textbox'}>
         <p>
          <h2>Who am I?</h2>
          Hello my name is Ethan Langford and I'm 17 years old. I grue up in chelas washington in a family of 
          <span className="readmore" id="dots" onClick={()=>handleClick()}>...{read}</span><span style={{display:"none"}} id="more">
          eight. moved to phenix AZ eight years ago; now taking coding classes at west-mec and enrolled at 
          Sandra day O'conner HS.</span></p>
    </div> 

    <div className={'textbox'}>
      <p>
        <h2>Achements</h2>
        I have a MTA certificate 
        <span className="readmore" id="dots" onClick={()=>handleClick1()}>...{read1}</span><span style={{display:"none"}} id="more1">
        text
        </span></p>
    </div>

    <div className={'textbox'}>
    <h2>Work and volunteer time</h2>
        <p>
          I worked at hurcan harbor Six Flags for a summer job during 2022 but, now unemployed because I have 
          put the time I would be abel too work
          <span className="readmore" id="dots" onClick={()=>handleClick2()}>...{read2}</span><span style={{display:"none"}} id="more2">
          is put into school. I have volunteer for many eagle scout projects, St. Mary's food bank, blood 
          drive at west-mec, and Market On The Move. I've also volunteer at my church and assisted others in 
          my neighborhood.
          </span></p>
    </div>
    <br></br>
{/* end of HTML */}
</div>
};

export default Home;