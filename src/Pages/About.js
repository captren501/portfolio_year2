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
    <div className='link'>
    <li><a href='https://github.com/captren501'>GitHub link</a></li>
    <li><a href='https://www.linkedin.com/in/ethan-langford-36a389236/'>linkedin</a></li>
    <li>elangf725@west-mec.org</li>
    </div>


</div>
};

export default About;