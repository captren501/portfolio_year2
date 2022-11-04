import '../Styles/styles.css'
import { Link } from "react-router-dom";

const Info = () => {


    return <div>
    <nav className={'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
    </nav>

    <br></br>
    <h1>Info page</h1>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
</div>
};

export default Info;