import '../Styles/styles.css'
import { Link } from "react-router-dom";
const Contact = () => {



    return <div>  
<nav className={'navbar'}>
        <Link to="/About">About</Link>
        <Link to="/">Home</Link>
        <Link to="/Info">Info</Link>
    
</nav>
<br></br>
<h1>Contact page</h1>
<br></br>

</div>
};

export default Contact;