import '../Styles/bace.css'
import { Link } from "react-router-dom";

const Info = () => {

//this is Resume
//rename to Resume
//start of HTML
    return <div>
    <nav className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/About">Gallery</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Resume</Link>
    </nav>

    <br></br>
    <br></br>

    <div className={'textbox'}>
        <h2>BOX1</h2>
        <p>/////  Lorem ipsum dolor sit amen consectetur adipisicing eliz. Ipsum eos bandits, pius dolores 
            nunquam voluptuous! Impeder ream corrupt, repeal solita quos ad quad 
            exercitation antique, labours Magna subscript rem statue!</p>
        
    </div>
    {/* make resume */}
    
   
</div>
};

export default Info;