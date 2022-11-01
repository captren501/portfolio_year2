import '../Styles/styles.css'
import { Link } from "react-router-dom";
const Home = () => {



    return <div>
    <h1>Home page</h1>
<nav>
    <div className={'navbar'}>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
    </div>
</nav>
    </div>
};

export default Home;