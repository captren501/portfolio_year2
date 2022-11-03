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

    <br></br>
 <h1>Home page</h1>

 <br></br><br></br><br></br>

    <div className={'textbox'}>
        <h2>BOX1</h2>
        <p>/////  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos blanditiis, eius dolores 
            quisquam voluptatum! Impedit rerum corrupti, repellat soluta quos ad quas 
            exercitationem atque, laborum magni suscipit rem itaque!</p>
    </div>

</div>
};

export default Home;