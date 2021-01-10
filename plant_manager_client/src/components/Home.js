import React from 'react';
import PlantsForm from './PlantsForm'
import Plants from './Plants'


const Home = () => {
    return (
        <div>
            <h2> Welcome to Plant Manager! Add a new plant below to get started! </h2>
            <br />
            <PlantsForm />
            <Plants />
        </div>
    );
};

export default Home;