import '../Styles/styles.css'
import { Link } from "react-router-dom";
const Home = () => {



    return <div>
    <nav>
        <div className={'navbar'}>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Info</Link>
        </div>
    </nav> 
 <h1>Home page</h1>

 <br></br><br></br><br></br>

    <div className={'textbox'}>
        <h2>BOX1</h2>
        <p>/////</p>
    </div>

</div>
};

export default Home;