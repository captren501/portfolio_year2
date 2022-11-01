import '../Styles/styles.css'
import { Link } from "react-router-dom";
const Contact = () => {



    return <div>
     <h1>Contact page</h1>
<nav>
    <div  className={'navbar'}>
        <Link to="/About">About</Link>
        <Link to="/Home">Home</Link>
    </div>

</nav>
     </div>
};

export default Contact;