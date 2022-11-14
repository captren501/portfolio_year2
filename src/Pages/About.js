import '../Styles/styles.css'
import { Link } from "react-router-dom";

const About = () => {


    return <div>     
        <nav className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Info</Link>
    
    </nav>
    <br></br>
<h1>About page</h1>
    <br></br>
    


</div>
};

export default About;