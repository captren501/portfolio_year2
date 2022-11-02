import '../Styles/styles.css'
import { Link } from "react-router-dom";
const Contact = () => {



    return <div>  
<nav>
    <div  className={'navbar'}>
        <Link to="/About">About</Link>
        <Link to="/">Home</Link>
        <Link to="/Info">Info</Link>
    </div>

</nav>
<h1>Contact page</h1>
     </div>
};

export default Contact;