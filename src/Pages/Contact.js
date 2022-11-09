import '../Styles/styles.css'
import { Link } from "react-router-dom";
const Contact = () => {



    return <div>  
<nav className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Info</Link>
    
</nav>
<br></br>
<h1>Contact page</h1>
<br></br>
    <div>
    <h3>Phone Number</h3>
    <p>602-597-1417</p>
    </div>


</div>
};

export default Contact;