import '../Styles/styles.css'
import { Link } from "react-router-dom";
const Home = () => {



    return <div>
    <nav className={'navbar'}>
        <Link to="/">Home</Link> 
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Info</Link>
    </nav> 

    <br></br>
 <h1>Home page</h1>
<br></br>

    <img src='https://res.cloudinary.com/doyugobwh/image/upload/v1666736115/person3_vrixfd.jpg' alt='Apple Pie' className='image'></img>
 <br></br><br></br><br></br>

    <div className={'textbox'}>
        <h2>BOX1</h2>
        <p>/////  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos blanditiis, eius dolores 
            quisquam voluptatum! Impedit rerum corrupti, repellat soluta quos ad quas 
            exercitationem atque, laborum magni suscipit rem itaque!</p>
    </div>

    <div className={'textbox'}>
    <h2>BOX2</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos blanditiis, eius dolores 
            quisquam voluptatum! Impedit rerum corrupti, repellat soluta quos ad quas 
            exercitationem atque, laborum magni suscipit rem itaque!</p>
    </div>

    <div className={'textbox'}>
    <h2>BOX3</h2>
        <p> The Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos blanditiis, eius dolores 
            quisquam voluptatum! Impedit rerum corrupti, repellat soluta quos ad quas 
            exercitationem atque, laborum magni suscipit rem itaque!</p>
    </div>
    <br></br>
</div>
};

export default Home;