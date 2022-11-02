import '../Styles/styles.css'
import { Link } from "react-router-dom";

const Info = () => {


    return <div>
        <nav>
    <div className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
    </div>
</nav>
<h1>Info page</h1>
        </div>
};

export default Info;