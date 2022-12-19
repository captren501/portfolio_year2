import { useState } from 'react';
import '../Styles/bace.css'
import { Link } from "react-router-dom";

const Home = () => {

  // js for the read more function
  // var dots = document.getElementById("dots");
  // var btnText = document.getElementById("myBtn");
    const [read, setRead] = useState("read more");
    const [read1, setRead1] = useState("read more");
    const [read2, setRead2] = useState("read more");
    // var moreText2 = document.getElementById("more");
    // var moreText1 = document.getElementById("more1");
    // var moreText = document.getElementById("more2");
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
          Hello my name is Ethan Langford and I'm 17 years old. I grew up in Chehalis, Washington in a family of 
          <span className="readmore" id="dots" onClick={()=>handleClick()}>...{read}</span><span style={{display:"none"}} id="more">
          eight. I moved to Phoenix, AZ eight years ago. I'm now taking coding classes at West-MEC and enrolled at 
          Sandra Day O'Conner high school.</span></p>
    </div> 

    <div className={'textbox'}>
      <p>
        <h2>Achievements</h2>
        November 15, 2021 - I was awarded the Sandra Day O'Connor Soaring Eagle Certificate for excellent growth.
        February 12, 2022 - I placed 2nd in Business Ethics at the 2022 FBLA Arizona Regional Conference.
        <span className="readmore" id="dots" onClick={()=>handleClick1()}>...{read1}</span><span style={{display:"none"}} id="more1">
        May 18, 2022 - I successfully completed the requirements to be recognized as a Microsoft Technology Associate for
        HTML5 Application Development Fundamentals.
        </span></p>
    </div>

    <div className={'textbox'}>
    <h2>Work and Volunteer Time</h2>
        <p>
          I worked at Hurricane Harbor Six Flags for a summer job during 2022, but now my job is studying 
          <span className="readmore" id="dots" onClick={()=>handleClick2()}>...{read2}</span><span style={{display:"none"}} id="more2">
          at school. I have volunteered for many Eagle Scout projects, St. Mary's food bank, a blood 
          drive at West-MEC, and Market On The Move. I've also volunteered at my church and assisted others in 
          my neighborhood.
          </span></p>
    </div>
    <br></br>
{/* end of HTML */}
</div>
};

export default Home;