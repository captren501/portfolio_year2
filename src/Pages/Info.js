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

    <div className='info4'>
        <h1>Resume</h1>
    <iframe className={'IF'} src="Ethan Langord Coding Resume2.pdf">
        </iframe>
        
    </div>
    {/* make resume */}
     
   
</div>
};

export default Info;