import '../Styles/styles.css'
import { Link } from "react-router-dom";

const About = () => {


    return <div>
        <h1>About page</h1>
        <nav>
    <div  className={'navbar'}>
        <Link to="/Home">Home</Link>
        <Link to="/Contact">Contact</Link>
    </div>
</nav>
        </div>
};

export default About;