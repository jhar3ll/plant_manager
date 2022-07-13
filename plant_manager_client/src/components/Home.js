import React from 'react';
import { Link } from "react-router-dom"
import PlantsForm from './PlantsForm'
import Plants from './Plants'


const Home = () => {
    return (
        <div>
            <h2> Welcome to Plant Manager!</h2>
    
            <h2><Link to="/signup">Sign up</Link>  or <Link to="/login">Log in</Link> to see your plants or add a new plant below to get started!  </h2>
            <h4> Be sure to water your plant(s) before the timer expires! Your plant can be good💐 struggling🌱 or dead🥀 </h4>
            {/* <PlantsForm /> */}
            {/* <Plants /> */}
        </div>
    );
};

export default Home;