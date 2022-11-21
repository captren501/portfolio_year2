import { useState, useEffect} from 'react';
import '../Styles/bace.css'
import { Link } from "react-router-dom";

const Home = () => {

function State({initialState}) {
    const [State, setState] = useState(initialState);
    };
// sample code
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      };
    //   the js for read more function

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
 <h1>Home page</h1> {/* sample */}
    <br></br>

    
    <div className={'textbox'}>
        <h2>BOX1</h2>
        <p>/////  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos blanditiis, eius dolores 
            quisquam voluptatum! Impedit rerum corrup<span id="dots">...</span><span id="more">it repellat 
            soluta quos ad quas 
            exercitationem atque, laborum magni suscipit rem itaque!</span></p>
            <button onclick="myFunction()" id="myBtn">Read more</button>
    </div>

    <div className={'textbox'}>
    <h2>BOX2</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos blanditiis, eius dolores 
            quisquam voluptatum! Impedit rerum corrupti, repellat soluta quos ad quas 
            exercitationem atque, laborum magni suscipit rem itaque!</p>
    </div>

    <div className={'textbox'}>
    <h2>BOX3</h2>
        <p> The Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos blanditiis, eius dolores 
            quisquam voluptatum! Impedit rerum corrupti, repellat soluta quos ad quas 
            exercitationem atque, laborum magni suscipit rem itaque!</p>
    </div>
    <br></br>

    
</div>
};

export default Home;