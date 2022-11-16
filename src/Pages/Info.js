import '../Styles/styles.css'
import { Link } from "react-router-dom";

const Info = () => {



//start of HTML
    return <div>
    <nav className={'navbar2'}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Info</Link>
    </nav>

    <br></br>
    <h1>Info page</h1>
    <br></br>

    <div className={'textbox'}>
        <h2>BOX1</h2>
        <p>/////  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos blanditiis, eius dolores 
            quisquam voluptatum! Impedit rerum corrupti, repellat soluta quos ad quas 
            exercitationem atque, laborum magni suscipit rem itaque!</p>
        
    </div>
    
    
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
</div>
};

export default Info;