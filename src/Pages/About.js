import '../Styles/styles.css'
import { Link } from "react-router-dom";

const About = () => {


    return <div>     
        <nav>
    <div  className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Info</Link>
    </div>
    </nav>
<h1>About page</h1>


</div>
};

export default About;