import '../Styles/bace.css'
import { Link } from "react-router-dom";

const Info = () => {

//Gallery
//rename to Gallery
//start of HTML
    return <div>
    <nav className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Gallery</Link>
    </nav>

    <br></br>
    <br></br>

    <div className={'textbox'}>
        <h2>BOX1</h2>
        <p>/////  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos blanditiis, eius dolores 
            quisquam voluptatum! Impedit rerum corrupti, repellat soluta quos ad quas 
            exercitationem atque, laborum magni suscipit rem itaque!</p>
        
    </div>
    
    
   
</div>
};

export default Info;